"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { MeshDistortMaterial, Float, Environment, Sparkles } from "@react-three/drei"

function DistortOrb() {
  const meshRef = useRef()

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.08
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.12
  })

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} castShadow>
        <sphereGeometry args={[1.6, 128, 128]} />
        <MeshDistortMaterial
          color="#4f46e5"
          distort={0.45}
          speed={1.8}
          roughness={0.05}
          metalness={0.9}
          transparent
          opacity={0.9}
          envMapIntensity={2}
        />
      </mesh>
    </Float>
  )
}

function RingOrbit() {
  const groupRef = useRef()

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.x = Math.PI / 4 + state.clock.elapsedTime * 0.05
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.08
  })

  return (
    <group ref={groupRef}>
      <mesh>
        <torusGeometry args={[2.5, 0.015, 16, 120]} />
        <meshStandardMaterial
          color="#818cf8"
          emissive="#818cf8"
          emissiveIntensity={0.8}
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[8, 8, 8]} color="#818cf8" intensity={4} />
      <pointLight position={[-8, -4, -4]} color="#38bdf8" intensity={2} />
      <pointLight position={[0, -6, 4]} color="#f472b6" intensity={1} />

      <DistortOrb />
      <RingOrbit />

      <Sparkles
        count={60}
        scale={8}
        size={1.2}
        speed={0.3}
        opacity={0.4}
        color="#818cf8"
      />

      <Environment preset="city" />
    </Canvas>
  )
}

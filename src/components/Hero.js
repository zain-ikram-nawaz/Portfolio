"use client"

import { useRef } from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false })

const stats = [
  { value: "2+", label: "Years experience" },
  { value: "10+", label: "Projects shipped" },
  { value: "60fps", label: "Always" },
  { value: "10+", label: "Happy clients" },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const scrollRef = useRef()

  const scrollDown = () => {
    const next = document.querySelector("#about")
    if (next) next.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={scrollRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#04040b" }}
    >
      {/* Layered ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute"
          style={{
            top: "-10%",
            right: "-5%",
            width: "65%",
            height: "80%",
            background: "radial-gradient(ellipse at center, rgba(99,102,241,0.14) 0%, transparent 65%)",
            animation: "ambient-drift 22s ease-in-out infinite",
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: "0%",
            left: "-10%",
            width: "55%",
            height: "60%",
            background: "radial-gradient(ellipse at center, rgba(56,189,248,0.07) 0%, transparent 65%)",
            animation: "ambient-drift 28s ease-in-out infinite reverse",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(129,140,248,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(129,140,248,1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span
                className="text-xs tracking-widest font-mono uppercase"
                style={{
                  color: "#818cf8",
                  fontFamily: "var(--font-jetbrains-mono)",
                  letterSpacing: "0.2em",
                }}
              >
                THREE.JS · NEXT.JS · WEBGL
              </span>
              <span
                className="w-8 h-px"
                style={{ background: "linear-gradient(90deg, #818cf8, transparent)" }}
              />
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: "#34d399",
                  boxShadow: "0 0 8px #34d399",
                  animation: "pulse-glow 2.5s ease-in-out infinite",
                }}
              />
              <span
                className="text-xs"
                style={{ color: "#34d399", fontFamily: "var(--font-dm-sans)" }}
              >
                Available for work
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="leading-none tracking-tighter"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                color: "#e4e4f0",
              }}
            >
              I build products
              <br />
              <span className="gradient-text">that live in 3D.</span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed max-w-md"
              style={{ color: "#52526e", fontFamily: "var(--font-dm-sans)" }}
            >
              From complex product configurators to immersive web experiences —
              I turn your vision into interactive 3D reality that runs at 60fps in any browser.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #818cf8, #38bdf8)",
                  color: "#04040b",
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  boxShadow: "0 0 30px rgba(129,140,248,0.3)",
                }}
              >
                See My Work <ArrowRight size={16} />
              </button>
              <a
                href="mailto:zainikram704@gmail.com"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#e4e4f0",
                  fontFamily: "var(--font-syne)",
                  fontWeight: 600,
                }}
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-4 gap-4 pt-8 border-t"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              {stats.map((s) => (
                <div key={s.value} className="flex flex-col gap-1">
                  <span
                    className="text-2xl font-display font-800 gradient-text"
                    style={{ fontFamily: "var(--font-syne)", fontWeight: 800 }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="text-xs leading-tight"
                    style={{ color: "#52526e", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: 3D canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full aspect-square max-w-lg mx-auto lg:max-w-none"
            style={{ height: "520px" }}
          >
            {/* Glow behind canvas */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, rgba(99,102,241,0.2) 0%, transparent 70%)",
                animation: "pulse-glow 4s ease-in-out infinite",
              }}
            />
            <HeroScene />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-text transition-colors cursor-pointer"
        style={{ color: "#52526e" }}
        aria-label="Scroll down"
      >
        <span
          className="text-xs tracking-widest"
          style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.15em" }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  )
}

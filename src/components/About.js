"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code2, Cpu, Globe } from "lucide-react"

const pillars = [
  {
    icon: Code2,
    title: "3D-First Thinking",
    body: "I approach every project by asking: what does this product look like in three dimensions? That question unlocks experiences your competitors can't replicate.",
    color: "#818cf8",
  },
  {
    icon: Cpu,
    title: "Performance Obsessed",
    body: "60fps is not a stretch goal — it's the floor. Custom LOD systems, compressed textures, and shader-level optimization are built into every project from day one.",
    color: "#38bdf8",
  },
  {
    icon: Globe,
    title: "Browser-Native",
    body: "No apps, no plugins, no barriers. Everything I build runs directly in the browser — accessible to every customer on any device with zero friction.",
    color: "#34d399",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function About() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="section-padding relative overflow-hidden">
      {/* Ambient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(129,140,248,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <p
              className="text-xs tracking-widest mb-4 font-mono"
              style={{ color: "#818cf8", fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.2em" }}
            >
              ABOUT
            </p>
            <h2
              className="text-4xl md:text-5xl font-display font-800 leading-tight tracking-tighter"
              style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#e4e4f0" }}
            >
              I turn products
              <br />
              <span className="gradient-text">into experiences.</span>
            </h2>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="flex flex-col justify-center gap-4"
          >
            <p className="text-base leading-relaxed" style={{ color: "#7272a0", fontFamily: "var(--font-dm-sans)" }}>
              I'm Zain Ikram Nawaz — a Three.js and Next.js developer based in Europe, specializing in
              3D product configurators and interactive web experiences.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#7272a0", fontFamily: "var(--font-dm-sans)" }}>
              For five years I've been at the intersection of 3D graphics and the open web — building
              tools that let people touch products before they buy them, understand architecture before
              it's built, and experience brands in ways flat design never could.
            </p>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="glass rounded-2xl p-8 flex flex-col gap-5 group hover:border-opacity-20 transition-all duration-300"
                style={{
                  borderColor: `${p.color}18`,
                  border: `1px solid ${p.color}18`,
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${p.color}18` }}
                >
                  <Icon size={18} style={{ color: p.color }} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3
                    className="text-base font-display font-700"
                    style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: "#e4e4f0" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#52526e", fontFamily: "var(--font-dm-sans)" }}>
                    {p.body}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

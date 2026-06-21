"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Boxes, Sparkles, Zap, BarChart3 } from "lucide-react"
import services from "@/data/services.json"

const iconMap = { Boxes, Sparkles, Zap, BarChart3 }

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Services() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="services" ref={ref} className="section-padding relative" style={{ background: "#07071040" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 80% 50%, rgba(56,189,248,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mb-16 max-w-xl"
        >
          <p
            className="text-xs tracking-widest mb-4 font-mono"
            style={{ color: "#38bdf8", fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.2em" }}
          >
            SERVICES
          </p>
          <h2
            className="text-4xl md:text-5xl font-display font-800 leading-tight tracking-tighter"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#e4e4f0" }}
          >
            What I build
            <br />
            <span style={{
              background: "linear-gradient(135deg, #38bdf8, #818cf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              for clients.
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Boxes
            return (
              <motion.div
                key={service.id}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden group cursor-default"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid rgba(255,255,255,0.07)`,
                  transition: "border-color 0.3s, background 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${service.accentColor}30`
                  e.currentTarget.style.background = `${service.accentColor}06`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)"
                }}
              >
                {/* Corner glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${service.accentColor}20 0%, transparent 70%)`,
                    transform: "translate(30%, -30%)",
                  }}
                />

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${service.accentColor}15` }}
                  >
                    <Icon size={20} style={{ color: service.accentColor }} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3
                      className="text-lg font-display font-700"
                      style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: "#e4e4f0" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#52526e", fontFamily: "var(--font-dm-sans)" }}>
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        background: `${service.accentColor}10`,
                        color: service.accentColor,
                        border: `1px solid ${service.accentColor}25`,
                        fontFamily: "var(--font-jetbrains-mono)",
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

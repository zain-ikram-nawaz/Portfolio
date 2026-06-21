"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Quote } from "lucide-react"
import testimonials from "@/data/testimonials.json"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#f472b6", fontSize: "0.75rem" }}>★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="testimonials"
      ref={ref}
      className="section-padding relative"
      style={{ background: "rgba(7,7,16,0.6)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(244,114,182,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mb-16 text-center"
        >
          <p
            className="text-xs tracking-widest mb-4 font-mono"
            style={{ color: "#f472b6", fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.2em" }}
          >
            TESTIMONIALS
          </p>
          <h2
            className="text-4xl md:text-5xl font-display font-800 leading-tight tracking-tighter"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#e4e4f0" }}
          >
            What clients
            <br />
            <span className="gradient-text-warm">actually say.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="rounded-2xl p-7 flex flex-col gap-5 relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Quote icon */}
              <div
                className="absolute top-4 right-6 opacity-10"
                style={{ color: "#f472b6" }}
              >
                <Quote size={40} />
              </div>

              <Stars count={t.rating} />

              <p
                className="text-sm leading-relaxed flex-1 italic"
                style={{ color: "#8888aa", fontFamily: "var(--font-dm-sans)" }}
              >
                "{t.text}"
              </p>

              <div
                className="flex items-center gap-3 pt-4 border-t"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}
              >
                {/* Avatar placeholder */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #818cf8, #f472b6)",
                    color: "#04040b",
                    fontFamily: "var(--font-syne)",
                    fontWeight: 800,
                  }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "#e4e4f0", fontFamily: "var(--font-syne)", fontWeight: 600 }}
                  >
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "#52526e", fontFamily: "var(--font-dm-sans)" }}>
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

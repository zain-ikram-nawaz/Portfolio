"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import experience from "@/data/experience.json"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Experience() {
  const ref = useRef(null) // Safe Initialization
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="experience" ref={ref} className="section-padding relative overflow-hidden">
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(56,189,248,0.04) 0%, transparent 70%)",
          transform: "translate(30%, -50%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mb-16"
        >
          <p
            className="text-xs tracking-widest mb-4 font-mono"
            style={{ color: "#f472b6", fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.2em" }}
          >
            EXPERIENCE
          </p>
          <h2
            className="text-4xl md:text-5xl font-display font-800 leading-tight tracking-tighter"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#e4e4f0" }}
          >
            Two years of
            <br />
            <span className="gradient-text-warm">full-stack engineering.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "linear-gradient(to bottom, rgba(129,140,248,0.4), transparent)", transform: "translateX(-50%)" }}
          />

          <div className="flex flex-col gap-12">
            {experience.map((item, i) => {
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={item.id}
                  custom={i + 1}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${isEven ? "" : "md:[&>div:first-child]:order-2"}`}
                >
                  {/* Dot on timeline */}
                  <div
                    className="absolute left-6 md:left-1/2 top-8 w-3 h-3 rounded-full hidden sm:block"
                    style={{
                      background: i === 0 ? "#818cf8" : "#52526e",
                      border: i === 0 ? "2px solid #818cf8" : "2px solid #52526e",
                      boxShadow: i === 0 ? "0 0 12px rgba(129,140,248,0.6)" : "none",
                      transform: "translate(-50%, 0)",
                      zIndex: 10,
                    }}
                  />

                  {/* Content card */}
                  <div className={`${isEven ? "md:pr-12" : "md:pl-12 md:col-start-2"}`}>
                    <div
                      className="rounded-2xl p-7 flex flex-col gap-4"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: i === 0 ? "1px solid rgba(129,140,248,0.2)" : "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3
                            className="text-base font-display font-700 mb-1"
                            style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: "#e4e4f0" }}
                          >
                            {item.role}
                          </h3>
                          <p className="text-sm font-medium" style={{ color: "#818cf8", fontFamily: "var(--font-dm-sans)" }}>
                            {item.company}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-1 flex-shrink-0">
                          <span
                            className="text-xs px-3 py-1 rounded-full whitespace-nowrap"
                            style={{
                              background: "rgba(129,140,248,0.1)",
                              color: "#818cf8",
                              border: "1px solid rgba(129,140,248,0.2)",
                              fontFamily: "var(--font-jetbrains-mono)",
                              fontSize: "0.65rem",
                            }}
                          >
                            {item.period}
                          </span>
                          <span
                            className="text-xs opacity-80"
                            style={{ color: "#a4a4c0", fontFamily: "var(--font-dm-sans)" }}
                          >
                            {item.type}
                          </span>
                        </div>
                      </div>

                      {/* Description - Fixed Color from #52526e to #a4a4c0 for better readability */}
                      <p className="text-sm leading-relaxed" style={{ color: "#a4a4c0", fontFamily: "var(--font-dm-sans)" }}>
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <ul className="flex flex-col gap-2">
                        {item.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 text-sm"
                            style={{ color: "#7272a0", fontFamily: "var(--font-dm-sans)" }}
                          >
                            <span
                              className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: "#818cf8" }}
                            />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Empty column for alternating layout */}
                  <div className={isEven ? "" : "md:col-start-1 md:row-start-1"} />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
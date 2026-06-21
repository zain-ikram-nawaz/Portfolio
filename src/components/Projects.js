"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import projects from "@/data/projects.json"

const filters = ["all", "featured", "company", "personal"]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Projects() {
  const [active, setActive] = useState("all")
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" ref={ref} className="section-padding relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(129,140,248,0.05) 0%, transparent 70%)",
          transform: "translate(-30%, -30%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mb-12"
        >
          <p
            className="text-xs tracking-widest mb-4 font-mono"
            style={{ color: "#818cf8", fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.2em" }}
          >
            SELECTED WORK
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className="text-4xl md:text-5xl font-display font-800 leading-tight tracking-tighter"
              style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#e4e4f0" }}
            >
              Projects that
              <br />
              <span className="gradient-text">push the web forward.</span>
            </h2>

            {/* Filter tabs */}
            <div
              className="flex gap-1 p-1 rounded-xl self-start md:self-auto"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className="px-4 py-2 rounded-lg text-xs font-medium capitalize transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 600,
                    background: active === f ? "rgba(129,140,248,0.2)" : "transparent",
                    color: active === f ? "#818cf8" : "#52526e",
                    border: active === f ? "1px solid rgba(129,140,248,0.3)" : "1px solid transparent",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl overflow-hidden group cursor-pointer relative"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  transition: "border-color 0.3s, transform 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${project.color}35`
                  e.currentTarget.style.transform = "translateY(-4px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                {/* Color bar + thumbnail area */}
                <div
                  className="relative h-48 overflow-hidden flex items-center justify-center"
                  style={{ background: `${project.color}0d` }}
                >
                  {/* Decorative geometry */}
                  <div
                    className="absolute w-40 h-40 rounded-full opacity-30"
                    style={{
                      background: `radial-gradient(circle, ${project.color}60 0%, transparent 70%)`,
                      animation: "ambient-drift 15s ease-in-out infinite",
                    }}
                  />
                  <div
                    className="absolute w-24 h-24 rounded-full border opacity-20"
                    style={{ borderColor: project.color, animation: "spin-slow 12s linear infinite" }}
                  />

                  {/* Type badge */}
                  <div
                    className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full"
                    style={{
                      background: `${project.color}18`,
                      color: project.color,
                      border: `1px solid ${project.color}30`,
                      fontFamily: "var(--font-jetbrains-mono)",
                    }}
                  >
                    {project.type}
                  </div>

                  {/* Year */}
                  <span
                    className="absolute top-4 right-4 text-xs"
                    style={{ color: "#52526e", fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    {project.year}
                  </span>

                  {/* Arrow on hover */}
                  <div
                    className="absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: project.color, color: "#04040b" }}
                  >
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-4">
                  <div>
                    <p className="text-xs mb-1" style={{ color: "#52526e", fontFamily: "var(--font-dm-sans)" }}>
                      {project.client}
                    </p>
                    <h3
                      className="text-lg font-display font-700"
                      style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: "#e4e4f0" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mt-2"
                      style={{ color: "#52526e", fontFamily: "var(--font-dm-sans)" }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div
                    className="grid grid-cols-3 gap-2 py-4 border-t border-b"
                    style={{ borderColor: "rgba(255,255,255,0.06)" }}
                  >
                    {Object.entries(project.stats).map(([k, v]) => (
                      <div key={k} className="flex flex-col items-center gap-1">
                        <span
                          className="text-sm font-display font-700"
                          style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: project.color }}
                        >
                          {v}
                        </span>
                        <span
                          className="text-xs text-center"
                          style={{ color: "#52526e", fontFamily: "var(--font-dm-sans)" }}
                        >
                          {k}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-md"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          color: "#52526e",
                          border: "1px solid rgba(255,255,255,0.07)",
                          fontFamily: "var(--font-jetbrains-mono)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

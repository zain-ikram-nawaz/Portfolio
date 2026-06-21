"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import skillsData from "@/data/skills.json"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

function SkillBar({ name, level, color, index, inView }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span
          className="text-sm"
          style={{ color: "#c4c4e0", fontFamily: "var(--font-dm-sans)" }}
        >
          {name}
        </span>
        <span
          className="text-xs tabular-nums"
          style={{ color: color, fontFamily: "var(--font-jetbrains-mono)" }}
        >
          {level}%
        </span>
      </div>
      <div
        className="h-[3px] w-full rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.3 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            boxShadow: `0 0 8px ${color}60`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="skills"
      ref={ref}
      className="section-padding relative"
      style={{ background: "rgba(7,7,16,0.5)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(129,140,248,0.04) 0%, transparent 60%)",
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
            style={{ color: "#34d399", fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.2em" }}
          >
            CAPABILITIES
          </p>
          <h2
            className="text-4xl md:text-5xl font-display font-800 leading-tight tracking-tighter"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#e4e4f0" }}
          >
            The tools I reach
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #34d399, #38bdf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              for every day.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillsData.categories.map((cat, catIndex) => (
            <motion.div
              key={cat.name}
              custom={catIndex + 1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-2 h-6 rounded-full"
                  style={{ background: cat.color, boxShadow: `0 0 10px ${cat.color}80` }}
                />
                <h3
                  className="text-base font-display font-700"
                  style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: "#e4e4f0" }}
                >
                  {cat.name}
                </h3>
              </div>
              <div className="flex flex-col gap-5">
                {cat.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    index={i}
                    inView={inView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

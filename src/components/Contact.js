"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { GitBranch, Briefcase, X, Mail, Send } from "lucide-react"
import socials from "@/data/socials.json"

const iconMap = { Github: GitBranch, Linkedin: Briefcase, Twitter: X, Mail }

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

const projectTypes = [
  "3D Product Configurator",
  "Interactive Web Experience",
  "Next.js Application",
  "3D Data Visualization",
  "Other",
]

export default function Contact() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Inquiry: ${form.type || "Project"}`)
    const body = encodeURIComponent(
      `Hi Zain,\n\nName: ${form.name}\nEmail: ${form.email}\nProject type: ${form.type}\n\n${form.message}`
    )
    window.location.href = `mailto:zainikram704@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" ref={ref} className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(129,140,248,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <p
            className="text-xs tracking-widest mb-4 font-mono"
            style={{ color: "#818cf8", fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.2em" }}
          >
            GET IN TOUCH
          </p>
          <h2
            className="text-4xl md:text-6xl font-display font-800 leading-tight tracking-tighter mb-4"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#e4e4f0" }}
          >
            Let's build something
            <br />
            <span className="gradient-text">extraordinary.</span>
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: "#52526e", fontFamily: "var(--font-dm-sans)" }}>
            Have a 3D project in mind? I'm currently available for freelance and contract work.
            Let's talk about what you're building.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Form */}
          <motion.form
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            onSubmit={handleSubmit}
            className="lg:col-span-3 flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label
                  className="text-xs"
                  style={{ color: "#52526e", fontFamily: "var(--font-dm-sans)" }}
                >
                  Your name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Marcus Weber"
                  className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#e4e4f0",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "rgba(129,140,248,0.5)"}
                  onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-xs"
                  style={{ color: "#52526e", fontFamily: "var(--font-dm-sans)" }}
                >
                  Email address
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="hello@company.com"
                  className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#e4e4f0",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "rgba(129,140,248,0.5)"}
                  onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-xs"
                style={{ color: "#52526e", fontFamily: "var(--font-dm-sans)" }}
              >
                Project type
              </label>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setForm({ ...form, type })}
                    className="text-xs px-3 py-2 rounded-lg transition-all duration-200"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      background: form.type === type ? "rgba(129,140,248,0.2)" : "rgba(255,255,255,0.04)",
                      color: form.type === type ? "#818cf8" : "#52526e",
                      border: form.type === type ? "1px solid rgba(129,140,248,0.4)" : "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-xs"
                style={{ color: "#52526e", fontFamily: "var(--font-dm-sans)" }}
              >
                Tell me about your project
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="I need a 3D product configurator for..."
                className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#e4e4f0",
                  fontFamily: "var(--font-dm-sans)",
                }}
                onFocus={(e) => e.target.style.borderColor = "rgba(129,140,248,0.5)"}
                onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-95"
              style={{
                background: "linear-gradient(135deg, #818cf8, #38bdf8)",
                color: "#04040b",
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                boxShadow: "0 0 30px rgba(129,140,248,0.25)",
              }}
            >
              {sent ? "Message sent ✓" : <><Send size={16} /> Send Message</>}
            </button>
          </motion.form>

          {/* Info panel */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Availability badge */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{
                background: "rgba(52,211,153,0.06)",
                border: "1px solid rgba(52,211,153,0.2)",
              }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#34d399", boxShadow: "0 0 8px #34d399", animation: "pulse-glow 2.5s ease-in-out infinite" }}
                />
                <span className="text-sm font-semibold" style={{ color: "#34d399", fontFamily: "var(--font-syne)", fontWeight: 700 }}>
                  Available for projects
                </span>
              </div>
              <p className="text-sm" style={{ color: "#52526e", fontFamily: "var(--font-dm-sans)" }}>
                Currently accepting new clients for Q3 2026. Typical project kickoff within 2 weeks of enquiry.
              </p>
            </div>

            {/* Direct email */}
            <a
              href="mailto:zainikram704@gmail.com"
              className="rounded-2xl p-6 flex flex-col gap-2 group transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(129,140,248,0.3)"}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"}
            >
              <p className="text-xs" style={{ color: "#52526e", fontFamily: "var(--font-dm-sans)" }}>Direct email</p>
              <p
                className="text-sm font-mono font-medium group-hover:text-accent transition-colors"
                style={{ color: "#818cf8", fontFamily: "var(--font-jetbrains-mono)" }}
              >
                zainikram704@gmail.com
              </p>
            </a>

            {/* Socials */}
            <div className="flex flex-col gap-3">
              <p className="text-xs" style={{ color: "#52526e", fontFamily: "var(--font-dm-sans)" }}>Find me online</p>
              <div className="flex gap-3">
                {socials.map((s) => {
                  const Icon = iconMap[s.icon] || Mail
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#52526e",
                      }}
                      aria-label={s.name}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(129,140,248,0.4)"; e.currentTarget.style.color = "#818cf8" }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#52526e" }}
                    >
                      <Icon size={16} />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

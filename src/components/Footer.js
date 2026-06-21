"use client"

import { GitBranch, Briefcase, X, Mail } from "lucide-react"
import socials from "@/data/socials.json"

const iconMap = { Github: GitBranch, Linkedin: Briefcase, Twitter: X, Mail }

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export default function Footer() {
  return (
    <footer
      className="relative border-t py-16 px-6"
      style={{ borderColor: "rgba(255,255,255,0.07)", background: "#04040b" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div
              className="text-2xl font-display font-800 tracking-tighter"
              style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#e4e4f0" }}
            >
              ZIN<span className="gradient-text">.</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#52526e", fontFamily: "var(--font-dm-sans)" }}>
              Three.js & Next.js Developer.<br />
              Building the 3D web, one configurator at a time.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            <p
              className="text-xs tracking-widest mb-2"
              style={{ color: "#52526e", fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.15em" }}
            >
              NAVIGATE
            </p>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-200 hover:text-accent w-fit"
                style={{ color: "#52526e", fontFamily: "var(--font-dm-sans)" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#818cf8"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#52526e"}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-3">
            <p
              className="text-xs tracking-widest mb-2"
              style={{ color: "#52526e", fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.15em" }}
            >
              CONNECT
            </p>
            {socials.map((s) => {
              const Icon = iconMap[s.icon] || Mail
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors duration-200 w-fit"
                  style={{ color: "#52526e", fontFamily: "var(--font-dm-sans)" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#818cf8"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#52526e"}
                >
                  <Icon size={14} />
                  {s.name}
                </a>
              )
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs" style={{ color: "#52526e", fontFamily: "var(--font-dm-sans)" }}>
            © {new Date().getFullYear()} Zain Ikram Nawaz. All rights reserved.
          </p>
          <p
            className="text-xs font-mono"
            style={{ color: "#52526e", fontFamily: "var(--font-jetbrains-mono)" }}
          >
            Built with Next.js · Three.js · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}

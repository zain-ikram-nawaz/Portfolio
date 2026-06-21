"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleLink = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      >
        <div
          className="max-w-6xl mx-auto flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500"
          style={{
            background: scrolled ? "rgba(11,11,20,0.85)" : "transparent",
            border: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
            backdropFilter: scrolled ? "blur(20px)" : "none",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }) }}
            className="font-display font-800 text-lg tracking-tight text-text"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 800 }}
          >
            ZIN<span className="gradient-text">.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLink(link.href)}
                className="text-sm text-muted hover:text-text transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:zainikram704@gmail.com"
              className="text-sm px-5 py-2 rounded-full transition-all duration-200 font-medium"
              style={{
                background: "linear-gradient(135deg, #818cf8, #38bdf8)",
                color: "#04040b",
                fontFamily: "var(--font-syne)",
                fontWeight: 600,
              }}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-text p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 pt-24 px-6"
            style={{ background: "rgba(4,4,11,0.97)", backdropFilter: "blur(20px)" }}
          >
            <div className="flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleLink(link.href)}
                  className="text-left text-3xl font-display font-700 text-text border-b border-border pb-4"
                  style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href="mailto:zainikram704@gmail.com"
                className="mt-4 text-center text-lg px-6 py-3 rounded-full font-semibold"
                style={{
                  background: "linear-gradient(135deg, #818cf8, #38bdf8)",
                  color: "#04040b",
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                }}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

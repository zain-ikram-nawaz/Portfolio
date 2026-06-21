"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen() {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const duration = 1800
    const start = performance.now()

    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * 100))

      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        setTimeout(() => setDone(true), 300)
      }
    }

    requestAnimationFrame(tick)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ background: "#04040b" }}
        >
          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(129,140,248,0.08) 0%, transparent 70%)",
            }}
          />

          <div className="relative flex flex-col items-center gap-8">
            {/* Monogram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl font-display font-800 tracking-tighter"
              style={{ fontFamily: "var(--font-syne)", fontWeight: 800 }}
            >
              Z<span className="gradient-text">I</span>N
            </motion.div>

            {/* Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-sm text-muted tabular-nums"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              {String(count).padStart(3, "0")}
            </motion.div>

            {/* Progress track */}
            <div className="w-48 h-px bg-border overflow-hidden rounded-full">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #818cf8, #38bdf8)",
                  width: `${count}%`,
                }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

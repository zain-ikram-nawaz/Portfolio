"use client"

import { useScroll, motion } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: "linear-gradient(90deg, #818cf8, #38bdf8)",
      }}
    />
  )
}

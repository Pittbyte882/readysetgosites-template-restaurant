"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { siteConfig } from "@/config/site"

export function PhotoBreak() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <div ref={ref} className="relative overflow-hidden" style={{ height: "70vh" }}>
      <div className="divider-gold" />
      <motion.div className="absolute inset-0" style={{ y, top: "-10%", height: "120%" }}>
        <img
          src={siteConfig.images.photoBreak}
          alt="The kitchen at The Grand Table"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(10,8,4,0.45)" }}
        />
      </motion.div>

      {/* Center text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-xs tracking-[0.5em] uppercase mb-6"
            style={{ color: "var(--gold)" }}
          >
            The Kitchen
          </p>
          <p
            className="font-light leading-tight max-w-2xl"
            style={{
              fontFamily: "var(--font-display, Georgia, serif)",
              color: "var(--fg)",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontStyle: "italic",
            }}
          >
            &ldquo;Every dish is a conversation between the season and the chef.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-10" style={{ background: "var(--gold)" }} />
            <p className="text-xs tracking-[0.2em]" style={{ color: "var(--fg-muted)" }}>
              Chef Laurent Bernard
            </p>
            <div className="h-px w-10" style={{ background: "var(--gold)" }} />
          </div>
        </motion.div>
      </div>
      <div className="divider-gold absolute bottom-0 left-0 right-0" />
    </div>
  )
}

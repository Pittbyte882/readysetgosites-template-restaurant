"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm font-medium uppercase tracking-[0.3em] mb-4"
          style={{ color: "var(--accent)", fontFamily: "var(--font-sans)" }}
        >
          Est. 2018 · Fine Dining
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          The Grand
          <br />
          <span style={{ color: "var(--accent)" }}>Table</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          An unforgettable dining experience where every dish tells a story.
          Seasonal ingredients, timeless recipes, exceptional hospitality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#reservation"
            className="px-8 py-4 rounded-full text-base font-semibold transition-all hover:opacity-90 active:scale-95"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
              fontFamily: "var(--font-sans)",
            }}
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            className="px-8 py-4 rounded-full text-base font-semibold border-2 border-white/60 text-white transition-all hover:bg-white/10"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            View Our Menu
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-12 mt-16"
        >
          {[
            { value: "15+", label: "Years of Excellence" },
            { value: "4.9★", label: "Guest Rating" },
            { value: "200+", label: "Dishes Crafted" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-3xl font-bold text-white"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {stat.value}
              </p>
              <p
                className="text-xs text-white/60 mt-1 uppercase tracking-wider"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  )
}
"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { siteConfig } from "@/config/site"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"

const times = ["5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"]
const partySizes = ["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5 Guests", "6 Guests", "7+ Guests"]

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [party, setParty] = useState("")

  const scrollDown = () => {
    const next = document.getElementById("experience")
    if (next) next.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToRes = () => {
    const el = document.getElementById("reservations")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Full bleed background photo with parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={siteConfig.images.hero}
          alt="The Grand Table interior"
          className="w-full h-full object-cover"
          style={{ minHeight: "120%" }}
        />
        {/* Multi-layer overlay */}
        {/* Base dark overlay */}
<div
  className="absolute inset-0"
  style={{ background: "rgba(10,8,4,0.55)" }}
/>
{/* Bottom gradient for reservation bar */}
<div
  className="absolute inset-0"
  style={{
    background: "linear-gradient(to bottom, rgba(10,8,4,0.1) 0%, rgba(10,8,4,0.3) 40%, rgba(10,8,4,0.95) 100%)",
  }}
/>
{/* Strong center vignette behind headline */}
<div
  className="absolute inset-0"
  style={{
    background: "radial-gradient(ellipse 90% 70% at 50% 42%, rgba(10,8,4,0.65) 0%, transparent 65%)",
  }}
/>
{/* Side darkening */}
<div
  className="absolute inset-0"
  style={{
    background: "linear-gradient(to right, rgba(10,8,4,0.5) 0%, transparent 30%, transparent 70%, rgba(10,8,4,0.5) 100%)",
  }}
/>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: "100vh", paddingTop: "120px", paddingBottom: "160px" }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-px w-12" style={{ background: "var(--gold)" }} />
          <span
            className="text-xs tracking-[0.4em] uppercase"
            style={{ color: "var(--gold)" }}
          >
            Est. {siteConfig.established} · San Francisco
          </span>
          <div className="h-px w-12" style={{ background: "var(--gold)" }} />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="font-light mb-6 leading-none"
          style={{
            fontFamily: "var(--font-display, Georgia, serif)",
            color: "var(--fg)",
            fontSize: "clamp(3.5rem, 9vw, 8rem)",
            letterSpacing: "-0.02em",
          }}
        >
          {siteConfig.name}
        </motion.h1>

        {/* Ornamental line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-px w-20" style={{ background: "var(--gold)" }} />
          <div className="w-1.5 h-1.5 rotate-45" style={{ background: "var(--gold)" }} />
          <div className="h-px w-20" style={{ background: "var(--gold)" }} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-lg md:text-xl font-light tracking-wider mb-14"
          style={{
            color: "rgba(245,234,208,0.7)",
            fontFamily: "var(--font-display, Georgia, serif)",
            fontStyle: "italic",
          }}
        >
          {siteConfig.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={scrollToRes}
            className="text-xs tracking-[0.25em] uppercase px-10 py-4 transition-all hover:opacity-90"
            style={{
              background: "var(--gold)",
              color: "var(--bg)",
              fontWeight: "600",
            }}
          >
            Reserve Your Table
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("menu")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
            className="text-xs tracking-[0.25em] uppercase px-10 py-4 transition-all hover:opacity-80"
            style={{
              border: "1px solid rgba(201,169,110,0.5)",
              color: "var(--fg)",
            }}
          >
            View Menu
          </button>
        </motion.div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex items-center gap-6 mt-16"
        >
          {["Michelin ★★★", "Relais & Châteaux", "James Beard Award"].map((award, i) => (
            <span key={i} className="text-xs tracking-[0.15em]" style={{ color: "var(--fg-muted)" }}>
              {i > 0 && <span className="mr-6" style={{ color: "var(--gold-dark)" }}>·</span>}
              {award}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={scrollDown}
        className="absolute bottom-52 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ color: "var(--fg-muted)" }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <ChevronDown className="w-5 h-5" style={{ color: "var(--gold)" }} />
        </motion.div>
      </motion.button>

      {/* ── FLOATING RESERVATION BAR ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-0 left-0 right-0 z-20"
      >
        {/* Gold line top */}
        <div className="divider-gold" />

        <div
          className="px-6 lg:px-10 py-5"
          style={{ background: "rgba(10,8,4,0.97)", backdropFilter: "blur(20px)" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 items-center">

              {/* Date */}
              <div
                className="px-6 py-1"
                style={{ borderRight: "1px solid var(--border)" }}
              >
                <label className="block text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "var(--gold)" }}>
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="input-gold text-sm"
                  style={{ background: "transparent", border: "none", borderBottom: "1px solid var(--border)", padding: "4px 0" }}
                />
              </div>

              {/* Time */}
              <div
                className="px-6 py-1"
                style={{ borderRight: "1px solid var(--border)" }}
              >
                <label className="block text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "var(--gold)" }}>
                  Time
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="input-gold text-sm w-full"
                  style={{ background: "transparent", border: "none", borderBottom: "1px solid var(--border)", padding: "4px 0" }}
                >
                  <option value="">Select time</option>
                  {times.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              {/* Party size */}
              <div
                className="px-6 py-1"
                style={{ borderRight: "1px solid var(--border)" }}
              >
                <label className="block text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "var(--gold)" }}>
                  Guests
                </label>
                <select
                  value={party}
                  onChange={(e) => setParty(e.target.value)}
                  className="input-gold text-sm w-full"
                  style={{ background: "transparent", border: "none", borderBottom: "1px solid var(--border)", padding: "4px 0" }}
                >
                  <option value="">Select guests</option>
                  {partySizes.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>

              {/* CTA */}
              <div className="px-6">
                <button
                  onClick={scrollToRes}
                  className="w-full py-4 text-xs tracking-[0.2em] uppercase font-semibold transition-all hover:opacity-90"
                  style={{ background: "var(--gold)", color: "var(--bg)" }}
                >
                  Find a Table
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

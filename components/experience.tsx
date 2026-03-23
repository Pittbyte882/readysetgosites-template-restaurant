"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { siteConfig } from "@/config/site"

export function Experience() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])

  return (
    <>
      <div className="divider-gold" />
      <section
        id="experience"
        ref={ref}
        className="relative"
        style={{ minHeight: "100vh", background: "var(--bg)" }}
      >
        <div className="grid lg:grid-cols-2 min-h-screen">

          {/* Left — Content */}
          <div
            className="flex flex-col justify-center px-10 lg:px-20 py-28 lg:py-36"
            style={{ background: "var(--bg)" }}
          >
            {/* Section number */}
            <div className="flex items-center gap-4 mb-12">
              <span
                className="text-[120px] font-bold leading-none select-none"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(201,169,110,0.15)",
                  fontFamily: "var(--font-display, Georgia, serif)",
                }}
              >
                01
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "var(--gold)" }}>
                Our Story
              </p>

              <h2
                className="font-light leading-tight mb-8"
                style={{
                  fontFamily: "var(--font-display, Georgia, serif)",
                  color: "var(--fg)",
                  fontSize: "clamp(2.5rem, 4vw, 3.8rem)",
                }}
              >
                Thirty years of
                <br />
                <span style={{ color: "var(--gold)", fontStyle: "italic" }}>culinary excellence.</span>
              </h2>

              <p
                className="text-base leading-loose mb-6"
                style={{ color: "var(--fg-muted)", maxWidth: "480px" }}
              >
                Founded in 1994 by Chef Laurent Bernard, The Grand Table has become San Francisco's most celebrated fine dining destination. Three Michelin stars. A James Beard Award. And thirty years of unforgettable evenings.
              </p>

              <p
                className="text-base leading-loose mb-12"
                style={{ color: "var(--fg-muted)", maxWidth: "480px" }}
              >
                Our kitchen sources exclusively from Northern California's finest farms, ranches, and fishing boats — translating the season's best into a dining experience that is wholly and unmistakably of this place.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 mb-12">
                {siteConfig.stats.map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="text-4xl font-light mb-1"
                      style={{
                        color: "var(--gold)",
                        fontFamily: "var(--font-display, Georgia, serif)",
                      }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs tracking-[0.15em] uppercase" style={{ color: "var(--fg-muted)" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  const el = document.getElementById("reservations")
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                }}
                className="text-xs tracking-[0.25em] uppercase px-8 py-4 transition-all hover:opacity-80 inline-block"
                style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
              >
                Reserve Your Evening
              </button>
            </motion.div>
          </div>

          {/* Right — Full height image */}
          <div className="relative overflow-hidden" style={{ minHeight: "60vh" }}>
            <motion.img
              style={{ y: imageY }}
              src={siteConfig.images.about}
              alt="The Grand Table dining room"
              className="absolute inset-0 w-full object-cover"
              style={{ height: "110%", top: "-5%" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to right, rgba(10,8,4,0.3) 0%, transparent 50%)",
              }}
            />

            {/* Corner ornaments */}
            <div className="corner-ornament corner-tl" style={{ margin: "32px" }} />
            <div className="corner-ornament corner-br" style={{ margin: "32px" }} />

            {/* Floating press badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-12 left-12 right-12"
              style={{
                background: "rgba(10,8,4,0.92)",
                border: "1px solid var(--border)",
                borderLeft: "2px solid var(--gold)",
                padding: "20px 24px",
              }}
            >
              <p
                className="text-sm font-light italic mb-2"
                style={{
                  color: "var(--fg)",
                  fontFamily: "var(--font-display, Georgia, serif)",
                }}
              >
                &ldquo;The finest dining room in San Francisco — perhaps in all of California.&rdquo;
              </p>
              <p className="text-xs tracking-[0.15em]" style={{ color: "var(--gold)" }}>
                — The New York Times, Dining Guide
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

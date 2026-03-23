"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"

export function Location() {
  return (
    <>
      <div className="divider-gold" />
      <section
        id="location"
        style={{ minHeight: "100vh", background: "var(--bg-2)" }}
        className="relative"
      >
        <div className="grid lg:grid-cols-2" style={{ minHeight: "100vh" }}>

          {/* Left — Full height map */}
          <div className="relative" style={{ minHeight: "55vh" }}>
            <iframe
              src={siteConfig.map.embedUrl}
              title="The Grand Table Location"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: 0,
                filter: "grayscale(100%) invert(92%) contrast(85%) brightness(0.88) sepia(10%)",
              }}
            />
            {/* Dark tint */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "rgba(10,8,4,0.5)" }}
            />
            {/* Gold frame */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: "28px",
                border: "1px solid rgba(201,169,110,0.25)",
              }}
            />
            {/* Corner ornaments */}
            {[
              { top: "20px", left: "20px", borderWidth: "1px 0 0 1px" },
              { top: "20px", right: "20px", borderWidth: "1px 1px 0 0" },
              { bottom: "20px", left: "20px", borderWidth: "0 0 1px 1px" },
              { bottom: "20px", right: "20px", borderWidth: "0 1px 1px 0" },
            ].map((style, i) => (
              <div
                key={i}
                className="absolute pointer-events-none"
                style={{
                  ...style,
                  width: "28px",
                  height: "28px",
                  borderStyle: "solid",
                  borderColor: "var(--gold)",
                  opacity: 0.5,
                }}
              />
            ))}
            {/* Address pill at bottom */}
            <div
              className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center px-6 py-3"
              style={{
                background: "rgba(10,8,4,0.9)",
                border: "1px solid rgba(201,169,110,0.3)",
                whiteSpace: "nowrap",
              }}
            >
              <p
                className="text-xs tracking-[0.25em] uppercase"
                style={{ color: "var(--gold)" }}
              >
                {siteConfig.address} · {siteConfig.city}
              </p>
            </div>
          </div>

          {/* Right — Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
            style={{
              padding: "5rem 4.5rem",
              background: "var(--bg-2)",
            }}
          >
            {/* Section number */}
            <div
              className="leading-none font-bold select-none mb-6"
              style={{
                fontSize: "7rem",
                color: "transparent",
                WebkitTextStroke: "1px rgba(201,169,110,0.12)",
                fontFamily: "var(--font-display, Georgia, serif)",
              }}
            >
              07
            </div>

            <p
              className="text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: "var(--gold)" }}
            >
              Find Us
            </p>

            <h2
              className="font-light leading-tight mb-12"
              style={{
                fontFamily: "var(--font-display, Georgia, serif)",
                color: "var(--fg)",
                fontSize: "clamp(2rem, 3vw, 3.2rem)",
              }}
            >
              Visit us in
              <br />
              <em style={{ color: "var(--gold)" }}>San Francisco.</em>
            </h2>

            {/* Address */}
            <div className="mb-8 pb-8" style={{ borderBottom: "1px solid var(--border)" }}>
              <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "var(--fg-muted)" }}>
                Address
              </p>
              <p
                className="text-lg font-light leading-relaxed"
                style={{ color: "var(--fg)", fontFamily: "var(--font-display, Georgia, serif)" }}
              >
                {siteConfig.address}<br />{siteConfig.city}
              </p>
            </div>

            {/* Hours */}
            <div className="mb-8 pb-8" style={{ borderBottom: "1px solid var(--border)" }}>
              <p className="text-xs tracking-[0.2em] uppercase mb-6" style={{ color: "var(--fg-muted)" }}>
                Hours
              </p>
              <div className="space-y-4">
                {siteConfig.hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-baseline">
                    <span className="text-sm" style={{ color: "var(--fg-muted)" }}>{h.day}</span>
                    <span
                      className="text-sm"
                      style={{
                        color: h.hours === "Closed" ? "var(--fg-dim)" : "var(--fg)",
                        fontFamily: "var(--font-display, Georgia, serif)",
                      }}
                    >
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="mb-8 pb-8 grid grid-cols-2 gap-6" style={{ borderBottom: "1px solid var(--border)" }}>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "var(--fg-muted)" }}>
                  Reservations
                </p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="transition-opacity hover:opacity-70"
                  style={{
                    color: "var(--gold)",
                    fontFamily: "var(--font-display, Georgia, serif)",
                    fontStyle: "italic",
                    fontSize: "1.05rem",
                    display: "block",
                  }}
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "var(--fg-muted)" }}>
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm transition-opacity hover:opacity-70 block"
                  style={{ color: "var(--fg)" }}
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-3">
              {[
                { accent: "Valet parking", rest: "available from 5:00 PM nightly · $18" },
                { accent: "Smart casual", rest: "attire required · Jackets recommended" },
                { accent: "Dietary needs", rest: "accommodated with advance notice" },
              ].map((note) => (
                <p key={note.accent} className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  <span style={{ color: "var(--gold)" }}>{note.accent}</span>{" "}{note.rest}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

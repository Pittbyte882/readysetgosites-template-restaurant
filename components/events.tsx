"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"

export function Events() {
  return (
    <>
      <div className="divider-gold" />
      <section
        id="events"
        style={{ minHeight: "100vh", background: "var(--bg)" }}
        className="relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-20 pt-28 lg:pt-36 pb-28 lg:pb-36">
          <div className="grid lg:grid-cols-5 gap-20 items-start">

            {/* Left — Header */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 lg:sticky lg:top-32"
            >
              <span
                className="block text-[100px] leading-none font-bold mb-6 select-none"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(201,169,110,0.12)",
                  fontFamily: "var(--font-display, Georgia, serif)",
                }}
              >
                06
              </span>

              <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "var(--gold)" }}>
                Private Dining & Events
              </p>

              <h2
                className="font-light leading-tight mb-8"
                style={{
                  fontFamily: "var(--font-display, Georgia, serif)",
                  color: "var(--fg)",
                  fontSize: "clamp(2rem, 3vw, 3rem)",
                }}
              >
                Extraordinary
                <br />
                <span style={{ fontStyle: "italic", color: "var(--gold)" }}>evenings.</span>
              </h2>

              <p className="text-sm leading-loose mb-10" style={{ color: "var(--fg-muted)" }}>
                From intimate chef's table dinners to full restaurant buyouts, we craft bespoke experiences for life's most memorable occasions.
              </p>

              <button
                onClick={() => {
                  const el = document.getElementById("reservations")
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                }}
                className="text-xs tracking-[0.25em] uppercase px-8 py-4 transition-all hover:opacity-80"
                style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
              >
                Inquire About Private Dining
              </button>
            </motion.div>

            {/* Right — Event cards */}
            <div className="lg:col-span-3 space-y-0">
              {siteConfig.events.map((event, i) => (
                <motion.div
                  key={event.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <div className="py-10 grid md:grid-cols-5 gap-8 items-start">

                    {/* Date badge */}
                    <div className="md:col-span-1">
                      <div
                        className="inline-flex flex-col items-center px-4 py-3"
                        style={{ border: "1px solid var(--border)", background: "rgba(201,169,110,0.04)" }}
                      >
                        <span
                          className="text-lg font-light"
                          style={{
                            color: "var(--gold)",
                            fontFamily: "var(--font-display, Georgia, serif)",
                          }}
                        >
                          {event.date.split(" ")[1]}
                        </span>
                        <span className="text-xs tracking-[0.15em]" style={{ color: "var(--fg-muted)" }}>
                          {event.date.split(" ")[0]}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-3">
                      <h3
                        className="text-xl font-light mb-3 transition-colors group-hover:opacity-80"
                        style={{
                          color: "var(--fg)",
                          fontFamily: "var(--font-display, Georgia, serif)",
                        }}
                      >
                        {event.name}
                      </h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--fg-muted)" }}>
                        {event.description}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="text-sm" style={{ color: "var(--gold)", fontFamily: "var(--font-display, Georgia, serif)", fontStyle: "italic" }}>
                          {event.price}
                        </span>
                        <span className="text-xs" style={{ color: "var(--fg-dim)" }}>·</span>
                        <span className="text-xs tracking-[0.1em]" style={{ color: "var(--fg-dim)" }}>
                          {event.seats}
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="md:col-span-1 flex md:justify-end items-start">
                      <button
                        onClick={() => {
                          const el = document.getElementById("reservations")
                          if (el) el.scrollIntoView({ behavior: "smooth" })
                        }}
                        className="text-xs tracking-[0.15em] uppercase px-5 py-3 transition-all hover:opacity-80 whitespace-nowrap"
                        style={{ border: "1px solid var(--border)", color: "var(--fg-muted)" }}
                      >
                        Book
                      </button>
                    </div>
                  </div>

                  {/* Hover line */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: "var(--gold)" }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

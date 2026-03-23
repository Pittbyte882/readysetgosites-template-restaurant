"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { siteConfig } from "@/config/site"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Food Critic",
    publication: "The Daily Review",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5,
    occasion: "Critical Review",
    text: "An extraordinary dining experience that transcends the ordinary. Chef Marco's attention to detail and commitment to seasonal ingredients creates dishes that are truly unforgettable. The wagyu tenderloin is a masterpiece.",
  },
  {
    name: "James & Emily Chen",
    role: "Anniversary Dinner Guests",
    publication: "10th Anniversary",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&q=80",
    rating: 5,
    occasion: "Anniversary Dinner",
    text: "We celebrated our 10th anniversary here and it was absolutely perfect. The staff went above and beyond to make it special. From the amuse-bouche to the dessert, every course was a revelation.",
  },
  {
    name: "Robert Fontaine",
    role: "Regular Guest",
    publication: "Frequent Diner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    rating: 5,
    occasion: "Regular Visit",
    text: "I've dined at Michelin-starred restaurants around the world, and The Grand Table holds its own with the best of them. The sommelier's wine pairing recommendations are always spot-on.",
  },
  {
    name: "Lisa Park",
    role: "Private Event Host",
    publication: "Corporate Dinner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
    occasion: "Private Event",
    text: "Hosted our company's annual dinner here and it was flawless. The private dining room is stunning, the service is impeccable, and the menu was customized perfectly for our group's dietary needs.",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  return (
    <>
      <div className="divider-gold" />
      <section
        style={{ minHeight: "100vh", background: "var(--bg-3)" }}
        className="relative overflow-hidden flex items-center"
      >
        {/* Oversized background quote mark */}
        <div
          className="absolute top-0 left-0 select-none pointer-events-none leading-none"
          style={{
            fontSize: "40vw",
            fontFamily: "var(--font-display, Georgia, serif)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(201,169,110,0.04)",
            lineHeight: "0.8",
          }}
        >
          &ldquo;
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 pt-28 lg:pt-36 pb-28 lg:pb-36 w-full">
          <div className="grid lg:grid-cols-5 gap-16 items-start">

            {/* Left — Large editorial quote */}
            <div className="lg:col-span-3">
              <span
                className="block text-[100px] leading-none font-bold mb-8 select-none"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(201,169,110,0.12)",
                  fontFamily: "var(--font-display, Georgia, serif)",
                }}
              >
                05
              </span>

              <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: "var(--gold)" }}>
                Guest Experiences
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Stars */}
                  <div className="flex items-center gap-1.5 mb-8">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-current"
                        style={{ color: "var(--gold)" }}
                      />
                    ))}
                  </div>

                  {/* Ornamental opening quote */}
                  <div
                    className="text-7xl leading-none mb-6"
                    style={{
                      color: "var(--gold)",
                      fontFamily: "var(--font-display, Georgia, serif)",
                      opacity: 0.5,
                    }}
                  >
                    &ldquo;
                  </div>

                  {/* Large quote text */}
                  <blockquote
                    className="font-light leading-relaxed mb-10"
                    style={{
                      fontFamily: "var(--font-display, Georgia, serif)",
                      color: "var(--fg)",
                      fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
                      fontStyle: "italic",
                    }}
                  >
                    {testimonials[current].text}
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-5">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                      style={{ border: "1px solid var(--gold)" }}
                    />
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <div className="h-px w-6" style={{ background: "var(--gold)" }} />
                        <p
                          className="text-sm font-medium"
                          style={{ color: "var(--fg)" }}
                        >
                          {testimonials[current].name}
                        </p>
                      </div>
                      <p className="text-xs tracking-[0.12em] ml-9" style={{ color: "var(--gold)" }}>
                        {testimonials[current].role}
                      </p>
                      <p className="text-xs ml-9" style={{ color: "var(--fg-muted)" }}>
                        {testimonials[current].occasion}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation dots */}
              <div className="flex items-center gap-4 mt-12">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="transition-all"
                    style={{
                      width: i === current ? "40px" : "8px",
                      height: "1px",
                      background: i === current ? "var(--gold)" : "var(--border)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right — Guest cards */}
            <div className="lg:col-span-2 space-y-0">
              <p
                className="text-xs tracking-[0.3em] uppercase mb-8"
                style={{ color: "var(--fg-muted)" }}
              >
                All Guests
              </p>

              {testimonials.map((t, i) => (
                <motion.button
                  key={t.name}
                  onClick={() => setCurrent(i)}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full text-left py-5 flex items-start gap-4 group transition-all"
                  style={{
                    borderBottom: "1px solid var(--border)",
                    borderLeft: i === current ? "2px solid var(--gold)" : "2px solid transparent",
                    paddingLeft: i === current ? "16px" : "0px",
                  }}
                >
                  {/* Photo */}
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0 mt-0.5"
                    style={{
                      border: i === current ? "1px solid var(--gold)" : "1px solid var(--border)",
                      opacity: i === current ? 1 : 0.6,
                    }}
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p
                        className="text-sm font-medium transition-colors"
                        style={{
                          color: i === current ? "var(--fg)" : "var(--fg-muted)",
                          fontFamily: "var(--font-display, Georgia, serif)",
                        }}
                      >
                        {t.name}
                      </p>
                      {/* Stars small */}
                      <div className="flex gap-0.5">
                        {[...Array(t.rating)].map((_, s) => (
                          <Star
                            key={s}
                            className="w-2.5 h-2.5 fill-current"
                            style={{ color: i === current ? "var(--gold)" : "var(--fg-dim)" }}
                          />
                        ))}
                      </div>
                    </div>
                    <p
                      className="text-xs mb-2"
                      style={{
                        color: i === current ? "var(--gold)" : "var(--fg-dim)",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {t.occasion}
                    </p>
                    <p
                      className="text-xs leading-relaxed line-clamp-2"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {t.text.slice(0, 90)}...
                    </p>
                  </div>
                </motion.button>
              ))}

              {/* Press mentions */}
              <div className="pt-10">
                <p
                  className="text-xs tracking-[0.3em] uppercase mb-6"
                  style={{ color: "var(--fg-muted)" }}
                >
                  As Featured In
                </p>
                {[
                  { pub: "The New York Times", line: "\"One of the greatest restaurants in America\"" },
                  { pub: "Bon Appétit", line: "\"Where fine dining meets genuine soul\"" },
                  { pub: "San Francisco Chronicle", line: "\"The gold standard of Bay Area dining\"" },
                ].map((item, i) => (
                  <div
                    key={item.pub}
                    className="py-4"
                    style={{ borderBottom: "1px solid var(--border)" }}
                  >
                    <p
                      className="text-sm font-light mb-0.5"
                      style={{
                        color: "var(--fg)",
                        fontFamily: "var(--font-display, Georgia, serif)",
                      }}
                    >
                      {item.pub}
                    </p>
                    <p
                      className="text-xs italic"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {item.line}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
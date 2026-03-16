"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Food Critic, The Daily Review",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5,
    text: "An extraordinary dining experience that transcends the ordinary. Chef Marco's attention to detail and commitment to seasonal ingredients creates dishes that are truly unforgettable. The wagyu tenderloin is a masterpiece.",
  },
  {
    name: "James & Emily Chen",
    role: "Anniversary Dinner Guests",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&q=80",
    rating: 5,
    text: "We celebrated our 10th anniversary here and it was absolutely perfect. The staff went above and beyond to make it special. From the amuse-bouche to the dessert, every course was a revelation.",
  },
  {
    name: "Robert Fontaine",
    role: "Regular Guest",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    rating: 5,
    text: "I've dined at Michelin-starred restaurants around the world, and The Grand Table holds its own with the best of them. The sommelier's wine pairing recommendations are always spot-on.",
  },
  {
    name: "Lisa Park",
    role: "Private Event Host",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
    text: "Hosted our company's annual dinner here and it was flawless. The private dining room is stunning, the service is impeccable, and the menu was customized perfectly for our group's dietary needs.",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(current === 0 ? testimonials.length - 1 : current - 1)
  const next = () => setCurrent(current === testimonials.length - 1 ? 0 : current + 1)

  return (
    <section className="py-24 px-6 overflow-hidden" style={{ background: "var(--background)" }}>
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-medium uppercase tracking-[0.3em] mb-3"
            style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}
          >
            Guest Experiences
          </p>
          <h2
            className="text-5xl font-bold mb-4"
            style={{ color: "var(--foreground)", fontFamily: "var(--font-serif)" }}
          >
            What Our Guests Say
          </h2>
          <div className="w-16 h-0.5 mx-auto" style={{ background: "var(--primary)" }} />
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              className="p-10 md:p-14 rounded-3xl border text-center"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: "var(--accent)" }} />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-xl md:text-2xl leading-relaxed mb-10 italic"
                style={{ color: "var(--foreground)", fontFamily: "var(--font-serif)" }}
              >
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-14 h-14 rounded-full object-cover border-2"
                  style={{ borderColor: "var(--primary)" }}
                />
                <div className="text-left">
                  <p
                    className="font-bold"
                    style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
                  >
                    {testimonials[current].name}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                  >
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full border transition-all hover:opacity-80"
              style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{
                    background: i === current ? "var(--primary)" : "var(--border)",
                    width: i === current ? "24px" : "8px",
                  }}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full border transition-all hover:opacity-80"
              style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { siteConfig } from "@/config/site"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const filters = ["All", "Food", "Atmosphere", "Wine", "Events"]

export function Gallery() {
  const [active, setActive] = useState("All")
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = active === "All"
    ? siteConfig.gallery
    : siteConfig.gallery.filter(g => g.category === active)

  const prev = () => setLightbox(i => i !== null ? (i === 0 ? filtered.length - 1 : i - 1) : null)
  const next = () => setLightbox(i => i !== null ? (i === filtered.length - 1 ? 0 : i + 1) : null)

  return (
    <>
      <div className="divider-gold" />
      <section
        id="gallery"
        style={{ minHeight: "100vh", background: "var(--bg-2)" }}
        className="relative"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-20 pt-28 lg:pt-36 pb-28 lg:pb-36">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span
              className="block text-[100px] leading-none font-bold mb-4 select-none"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(201,169,110,0.12)",
                fontFamily: "var(--font-display, Georgia, serif)",
              }}
            >
              04
            </span>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>
                  Gallery
                </p>
                <h2
                  className="font-light leading-tight"
                  style={{
                    fontFamily: "var(--font-display, Georgia, serif)",
                    color: "var(--fg)",
                    fontSize: "clamp(2.5rem, 4vw, 3.8rem)",
                  }}
                >
                  In the moment.
                </h2>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3 mt-8 lg:mt-0">
                {filters.map(f => (
                  <button
                    key={f}
                    onClick={() => setActive(f)}
                    className="text-xs tracking-[0.15em] uppercase px-5 py-2.5 transition-all"
                    style={{
                      border: "1px solid",
                      borderColor: active === f ? "var(--gold)" : "var(--border)",
                      color: active === f ? "var(--gold)" : "var(--fg-muted)",
                      background: active === f ? "rgba(201,169,110,0.06)" : "transparent",
                    }}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Masonry grid */}
          <div className="masonry">
            {filtered.map((item, i) => (
              <motion.div
                key={item.src + i}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="masonry-item cursor-pointer group relative overflow-hidden"
                onClick={() => setLightbox(i)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ display: "block" }}
                />
                <div
                  className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(10,8,4,0.8) 0%, transparent 60%)" }}
                >
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase" style={{ color: "var(--gold)" }}>
                      {item.category}
                    </p>
                    <p className="text-sm" style={{ color: "var(--fg)" }}>{item.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center"
              style={{ background: "rgba(10,8,4,0.96)" }}
              onClick={() => setLightbox(null)}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={e => e.stopPropagation()}
                className="relative max-w-4xl w-full mx-6"
              >
                <img
                  src={filtered[lightbox]?.src}
                  alt={filtered[lightbox]?.alt}
                  className="w-full max-h-[80vh] object-contain"
                />
                <div className="flex items-center justify-between mt-4 px-2">
                  <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                    {filtered[lightbox]?.alt}
                  </p>
                  <p className="text-xs" style={{ color: "var(--fg-dim)" }}>
                    {lightbox + 1} / {filtered.length}
                  </p>
                </div>
              </motion.div>

              {/* Controls */}
              <button
                onClick={(e) => { e.stopPropagation(); prev() }}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center transition-all hover:opacity-70"
                style={{ border: "1px solid var(--border)", color: "var(--fg)" }}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next() }}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center transition-all hover:opacity-70"
                style={{ border: "1px solid var(--border)", color: "var(--fg)" }}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-6 right-6"
                style={{ color: "var(--fg-muted)" }}
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  )
}

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  { src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80", alt: "Signature Dish", category: "Food" },
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Restaurant Interior", category: "Interior" },
  { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Chef at Work", category: "Kitchen" },
  { src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80", alt: "Fine Dining Plate", category: "Food" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Dining Room", category: "Interior" },
  { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80", alt: "Artisan Pizza", category: "Food" },
  { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Bar Area", category: "Interior" },
  { src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3b28?w=800&q=80", alt: "Dessert Plate", category: "Food" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Evening Ambiance", category: "Interior" },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Food", "Interior", "Kitchen"]
  const filtered = activeFilter === "All" ? images : images.filter(img => img.category === activeFilter)

  const navigate = (direction: "prev" | "next") => {
    if (selectedImage === null) return
    if (direction === "prev") {
      setSelectedImage(selectedImage === 0 ? filtered.length - 1 : selectedImage - 1)
    } else {
      setSelectedImage(selectedImage === filtered.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section id="gallery" className="py-24 px-6" style={{ background: "var(--secondary)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-medium uppercase tracking-[0.3em] mb-3"
            style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}
          >
            Visual Journey
          </p>
          <h2
            className="text-5xl font-bold mb-4"
            style={{ color: "var(--foreground)", fontFamily: "var(--font-serif)" }}
          >
            Our Gallery
          </h2>
          <div className="w-16 h-0.5 mx-auto" style={{ background: "var(--primary)" }} />
        </div>

        {/* Filter */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                background: activeFilter === filter ? "var(--primary)" : "var(--card)",
                color: activeFilter === filter ? "var(--primary-foreground)" : "var(--muted-foreground)",
                border: `1px solid var(--border)`,
                fontFamily: "var(--font-sans)",
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((image, i) => (
            <motion.div
              key={image.src}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{ aspectRatio: i === 0 ? "auto" : "1" }}
              onClick={() => setSelectedImage(i)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ minHeight: i === 0 ? "400px" : "200px" }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <span
                  className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity text-sm"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              style={{ background: "rgba(0,0,0,0.95)" }}
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 p-2 rounded-full text-white hover:bg-white/10 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <button
                className="absolute left-4 p-2 rounded-full text-white hover:bg-white/10 transition-colors"
                onClick={(e) => { e.stopPropagation(); navigate("prev") }}
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={filtered[selectedImage].src}
                alt={filtered[selectedImage].alt}
                className="max-w-4xl max-h-[85vh] w-full object-contain rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                className="absolute right-4 p-2 rounded-full text-white hover:bg-white/10 transition-colors"
                onClick={(e) => { e.stopPropagation(); navigate("next") }}
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
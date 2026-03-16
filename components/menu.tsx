"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const categories = ["Starters", "Mains", "Desserts", "Drinks"]

const menuItems = {
  Starters: [
    { name: "Seared Scallops", description: "Pan-seared diver scallops, cauliflower purée, crispy capers, lemon brown butter", price: "$24", tag: "Chef's Pick" },
    { name: "Burrata & Heirloom", description: "Fresh burrata, heirloom tomatoes, aged balsamic, micro basil, Sicilian olive oil", price: "$18", tag: null },
    { name: "Duck Liver Pâté", description: "Smooth duck liver pâté, fig jam, toasted brioche, pickled cornichons", price: "$16", tag: null },
    { name: "Lobster Bisque", description: "Velvety lobster bisque, crème fraîche, chives, cognac foam", price: "$22", tag: "Seasonal" },
  ],
  Mains: [
    { name: "Wagyu Beef Tenderloin", description: "8oz A5 Wagyu, truffle pomme purée, roasted asparagus, red wine jus", price: "$85", tag: "Signature" },
    { name: "Pan-Roasted Sea Bass", description: "Chilean sea bass, saffron risotto, beurre blanc, crispy leeks", price: "$52", tag: null },
    { name: "Herb Roasted Chicken", description: "Free-range chicken, wild mushroom ragù, roasted root vegetables, natural jus", price: "$38", tag: null },
    { name: "Truffle Pasta", description: "House-made pappardelle, black truffle, parmesan cream, toasted pine nuts", price: "$44", tag: "Chef's Pick" },
  ],
  Desserts: [
    { name: "Chocolate Fondant", description: "Warm valrhona chocolate fondant, salted caramel ice cream, hazelnut praline", price: "$16", tag: "Signature" },
    { name: "Crème Brûlée", description: "Classic vanilla bean crème brûlée, fresh seasonal berries, tuile biscuit", price: "$14", tag: null },
    { name: "Cheese Selection", description: "Artisan cheese board, house-made chutney, candied walnuts, artisan crackers", price: "$22", tag: null },
    { name: "Tarte Tatin", description: "Caramelized apple tarte tatin, calvados crème anglaise, cinnamon ice cream", price: "$15", tag: null },
  ],
  Drinks: [
    { name: "Champagne Selection", description: "Curated selection of premier cru champagnes and sparkling wines", price: "From $18", tag: null },
    { name: "Signature Cocktails", description: "Handcrafted cocktails using premium spirits and house-made ingredients", price: "From $16", tag: null },
    { name: "Wine Pairing", description: "Sommelier-selected wine pairing for your full dining experience", price: "$65/person", tag: "Recommended" },
    { name: "Non-Alcoholic", description: "Elegant mocktails, artisan sodas, premium teas and fresh-pressed juices", price: "From $8", tag: null },
  ],
}

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("Starters")

  return (
    <section id="menu" className="py-24 px-6" style={{ background: "var(--background)" }}>
      <div className="max-w-6xl mx-auto w-full px-6">

        {/* Header */}
        <div className="text-center mb-16 px-6">
          <p
            className="text-sm font-medium uppercase tracking-[0.3em] mb-3"
            style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}
          >
            Culinary Excellence
          </p>
          <h2
            className="text-5xl font-bold mb-4"
            style={{ color: "var(--foreground)", fontFamily: "var(--font-serif)" }}
          >
            Our Menu
          </h2>
          <div className="w-16 h-0.5 mx-auto" style={{ background: "var(--primary)" }} />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-6 py-2.5 rounded-full text-sm font-medium transition-all"
              style={{
                background: activeCategory === cat ? "var(--primary)" : "var(--secondary)",
                color: activeCategory === cat ? "var(--primary-foreground)" : "var(--muted-foreground)",
                fontFamily: "var(--font-sans)",
                border: `1px solid ${activeCategory === cat ? "var(--primary)" : "var(--border)"}`,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {menuItems[activeCategory as keyof typeof menuItems].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border transition-all hover:shadow-md"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <h3
                      className="text-lg font-bold"
                      style={{ color: "var(--foreground)", fontFamily: "var(--font-serif)" }}
                    >
                      {item.name}
                    </h3>
                    {item.tag && (
                      <span
                        className="px-2 py-0.5 rounded-full text-xs font-semibold"
                        style={{
                          background: "var(--primary)",
                          color: "var(--primary-foreground)",
                          fontFamily: "var(--font-sans)",
                        }}
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <span
                    className="text-lg font-bold flex-shrink-0 ml-4"
                    style={{ color: "var(--primary)", fontFamily: "var(--font-serif)" }}
                  >
                    {item.price}
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Download Menu CTA */}
        <div className="text-center mt-12">
          <p
            className="text-sm mb-4"
            style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
          >
            Dietary requirements? We accommodate all needs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 transition-all hover:opacity-80"
            style={{
              borderColor: "var(--primary)",
              color: "var(--primary)",
              fontFamily: "var(--font-sans)",
            }}
          >
            Ask About Special Dietary Needs
          </a>
        </div>
      </div>
    </section>
  )
}
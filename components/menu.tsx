"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/lib/theme-context"

const categories = ["Starters", "Mains", "Desserts", "Drinks"]

const menuItems = {
  Starters: [
    { name: "Seared Scallops", description: "Pan-seared diver scallops, cauliflower purée, crispy capers, lemon brown butter", price: "$24", tag: "Chef's Pick" },
    { name: "Burrata & Heirloom", description: "Fresh burrata, heirloom tomatoes, aged balsamic, micro basil, Sicilian olive oil", price: "$18", tag: null },
    { name: "Duck Liver Pâté", description: "Smooth duck liver pâté, fig jam, toasted brioche, pickled cornichons", price: "$16", tag: null },
    { name: "Lobster Bisque", description: "Velvety lobster bisque, crème fraîche, chives, cognac foam", price: "$22", tag: "Seasonal" },
    { name: "Tuna Tartare", description: "Yellowfin tuna, avocado, sesame, ginger dressing, wonton crisps", price: "$26", tag: null },
    { name: "Truffle Arancini", description: "Crispy risotto balls, black truffle, fontina cheese, romesco sauce", price: "$19", tag: "New" },
    { name: "Foie Gras Torchon", description: "Silky foie gras, brioche toast, Sauternes gel, candied walnuts", price: "$32", tag: "Signature" },
    { name: "Oysters Rockefeller", description: "Half dozen oysters, creamed spinach, parmesan, pancetta breadcrumbs", price: "$28", tag: null },
    { name: "Beef Carpaccio", description: "Thinly sliced wagyu, rocket, parmesan shavings, truffle oil, capers", price: "$24", tag: null },
    { name: "Smoked Salmon Rillette", description: "House-smoked salmon, crème fraîche, cucumber, dill, toasted sourdough", price: "$20", tag: null },
    { name: "Beet & Goat Cheese", description: "Roasted heritage beets, whipped goat cheese, candied pecans, citrus dressing", price: "$16", tag: null },
    { name: "Prawn Cocktail", description: "Jumbo prawns, Marie Rose sauce, baby gem lettuce, lemon, caviar", price: "$22", tag: null },
  ],
  Mains: [
    { name: "Wagyu Beef Tenderloin", description: "8oz A5 Wagyu, truffle pomme purée, roasted asparagus, red wine jus", price: "$85", tag: "Signature" },
    { name: "Pan-Roasted Sea Bass", description: "Chilean sea bass, saffron risotto, beurre blanc, crispy leeks", price: "$52", tag: null },
    { name: "Herb Roasted Chicken", description: "Free-range chicken, wild mushroom ragù, roasted root vegetables, natural jus", price: "$38", tag: null },
    { name: "Truffle Pasta", description: "House-made pappardelle, black truffle, parmesan cream, toasted pine nuts", price: "$44", tag: "Chef's Pick" },
    { name: "Rack of Lamb", description: "French-trimmed rack, rosemary jus, dauphinoise potato, minted pea purée", price: "$68", tag: null },
    { name: "Lobster Thermidor", description: "Half Boston lobster, cognac cream, gruyère crust, tarragon, skinny fries", price: "$78", tag: "Signature" },
    { name: "Duck Breast à l'Orange", description: "Magret duck, orange & cardamom sauce, braised endive, pommes sarladaises", price: "$48", tag: null },
    { name: "Black Cod Miso", description: "Nobu-style miso-marinated black cod, bok choy, pickled ginger, dashi broth", price: "$56", tag: "New" },
    { name: "Beef Wellington", description: "Fillet of beef, mushroom duxelles, prosciutto, golden puff pastry, Madeira jus", price: "$92", tag: "Signature" },
    { name: "Risotto Primavera", description: "Carnaroli risotto, spring vegetables, lemon zest, pecorino, herb oil", price: "$36", tag: null },
    { name: "Halibut en Papillote", description: "Pacific halibut, cherry tomatoes, olives, capers, white wine, fresh herbs", price: "$54", tag: null },
    { name: "Venison Loin", description: "Aged venison, blackberry jus, celeriac purée, roasted chestnuts, kale crisps", price: "$62", tag: "Seasonal" },
  ],
  Desserts: [
    { name: "Chocolate Fondant", description: "Warm valrhona chocolate fondant, salted caramel ice cream, hazelnut praline", price: "$16", tag: "Signature" },
    { name: "Crème Brûlée", description: "Classic vanilla bean crème brûlée, fresh seasonal berries, tuile biscuit", price: "$14", tag: null },
    { name: "Cheese Selection", description: "Artisan cheese board, house-made chutney, candied walnuts, artisan crackers", price: "$22", tag: null },
    { name: "Tarte Tatin", description: "Caramelized apple tarte tatin, calvados crème anglaise, cinnamon ice cream", price: "$15", tag: null },
    { name: "Soufflé au Grand Marnier", description: "Light-as-air Grand Marnier soufflé, crème anglaise, candied orange zest", price: "$18", tag: "Must Order" },
    { name: "Baba au Rhum", description: "Classic rum baba, chantilly cream, fresh tropical fruits, rum syrup", price: "$14", tag: null },
    { name: "Mille-Feuille", description: "Crispy puff pastry, vanilla diplomate cream, fresh raspberries, rose glaze", price: "$16", tag: "New" },
    { name: "Affogato al Caffè", description: "Madagascan vanilla gelato, double espresso, amaretto, almond biscotti", price: "$12", tag: null },
    { name: "Lemon Tart", description: "Sharp lemon curd, sweet pastry shell, Italian meringue, raspberry coulis", price: "$14", tag: null },
    { name: "Îles Flottantes", description: "Floating islands, crème anglaise, spun caramel, toasted almonds", price: "$13", tag: null },
    { name: "Pear & Almond Galette", description: "Rustic galette, frangipane, poached pears, salted caramel, vanilla ice cream", price: "$15", tag: null },
    { name: "Chocolate Marquise", description: "Rich chocolate marquise, pistachio anglaise, gold leaf, raspberry sorbet", price: "$17", tag: "Signature" },
  ],
  Drinks: [
    { name: "Champagne Selection", description: "Curated premier cru champagnes and sparkling wines from top houses", price: "From $18", tag: null },
    { name: "Signature Cocktails", description: "Handcrafted cocktails using premium spirits and house-made ingredients", price: "From $16", tag: null },
    { name: "Wine Pairing", description: "Sommelier-selected wine pairing for your full dining experience", price: "$65/person", tag: "Recommended" },
    { name: "Non-Alcoholic", description: "Elegant mocktails, artisan sodas, premium teas and fresh-pressed juices", price: "From $8", tag: null },
    { name: "Aged Whisky Flight", description: "Three premium single malts, tasting notes, artisan dark chocolate pairing", price: "$45", tag: "New" },
    { name: "Negroni Variations", description: "Classic, white, and smoked Negroni served as a tasting flight", price: "$38", tag: "Popular" },
    { name: "Natural Wine Selection", description: "Biodynamic and organic wines from small producers across Europe", price: "From $14", tag: null },
    { name: "Digestif Menu", description: "Calvados, Armagnac, Grappa, Port — perfect conclusion to your meal", price: "From $16", tag: null },
    { name: "Coffee & Tea Ritual", description: "Specialty pour-over coffee or rare tea ceremony with petit fours", price: "$12", tag: null },
    { name: "Sake Selection", description: "Curated premium sake flight paired with our Japanese-influenced dishes", price: "$35", tag: null },
    { name: "The Grand Martini", description: "Our signature martini — grey goose, elderflower, cucumber, gold leaf", price: "$22", tag: "Signature" },
    { name: "Virgin Botanical Garden", description: "House-made botanical shrubs, fresh herbs, sparkling water, edible flowers", price: "$14", tag: null },
  ],
}

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("Starters")
  const { theme } = useTheme()
  const isDark = theme === "modern" || theme === "bold"

  const borderColor = isDark ? "rgba(200,80,42,0.4)" : "#c8a882"
  const bgColor = isDark ? "var(--background)" : "var(--background)"
  const cardBg = isDark ? "rgba(255,255,255,0.02)" : "var(--card)"

  return (
    <section id="menu" className="py-28 px-6" style={{ background: bgColor }}>
      <div className="max-w-7xl mx-auto w-full">

        {/* Decorative Header */}
        <div className="text-center mb-16">
          {/* Top ornament */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-24" style={{ background: "var(--primary)", opacity: 0.4 }} />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z"
                fill="var(--primary)" opacity="0.7" />
            </svg>
            <div className="h-px w-24" style={{ background: "var(--primary)", opacity: 0.4 }} />
          </div>

          <p
            className="text-xs font-bold uppercase tracking-[0.4em] mb-4"
            style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}
          >
            Culinary Excellence
          </p>
          <h2
            className="text-6xl md:text-7xl font-bold mb-4"
            style={{ color: "var(--foreground)", fontFamily: "var(--font-serif)" }}
          >
            Our Menu
          </h2>
          <p
            className="text-sm max-w-xl mx-auto leading-relaxed mb-6"
            style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
          >
            Crafted with seasonal ingredients, our menu changes to reflect the finest
            produce available. All dishes can be adapted for dietary requirements.
          </p>

          {/* Bottom ornament */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16" style={{ background: "var(--border)" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--primary)" }} />
            <div className="h-px w-4" style={{ background: "var(--border)" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--primary)", opacity: 0.5 }} />
            <div className="h-px w-4" style={{ background: "var(--border)" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--primary)" }} />
            <div className="h-px w-16" style={{ background: "var(--border)" }} />
          </div>
        </div>

        {/* Menu Frame */}
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            border: `2px solid ${borderColor}`,
            boxShadow: isDark
              ? "0 0 60px rgba(200,80,42,0.08), inset 0 0 60px rgba(0,0,0,0.2)"
              : "0 20px 80px rgba(0,0,0,0.08), inset 0 0 40px rgba(200,136,82,0.03)",
          }}
        >
          {/* Inner decorative border */}
          <div
            className="absolute inset-3 rounded-2xl pointer-events-none z-10"
            style={{ border: `1px solid ${borderColor}`, opacity: 0.4 }}
          />

          {/* Corner ornaments */}
          {["top-left", "top-right", "bottom-left", "bottom-right"].map((pos) => (
            <div
              key={pos}
              className={`absolute z-20 w-8 h-8 ${
                pos.includes("top") ? "top-2" : "bottom-2"
              } ${pos.includes("left") ? "left-2" : "right-2"}`}
            >
              <svg viewBox="0 0 32 32" fill="none" style={{ transform: pos === "top-right" ? "scaleX(-1)" : pos === "bottom-left" ? "scaleY(-1)" : pos === "bottom-right" ? "scale(-1)" : "" }}>
                <path d="M2 2 L14 2 M2 2 L2 14" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              </svg>
            </div>
          ))}

          {/* Top accent bar */}
          <div className="h-1.5 w-full" style={{ background: "var(--primary)" }} />

          <div className="p-8 md:p-12" style={{ background: isDark ? "var(--background)" : "#fefcf8" }}>

            {/* Category Tabs */}
            <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-7 py-3 text-sm font-bold uppercase tracking-widest transition-all rounded-full"
                  style={{
                    background: activeCategory === cat ? "var(--primary)" : "transparent",
                    color: activeCategory === cat ? "var(--primary-foreground)" : "var(--muted-foreground)",
                    border: `1.5px solid ${activeCategory === cat ? "var(--primary)" : borderColor}`,
                    fontFamily: "var(--font-sans)",
                    letterSpacing: "0.15em",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px" style={{ background: borderColor, opacity: 0.5 }} />
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z"
                  fill="var(--primary)" opacity="0.5" />
              </svg>
              <div className="flex-1 h-px" style={{ background: borderColor, opacity: 0.5 }} />
            </div>

            {/* Menu Items — 6 per row = 2 rows of 6 */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0"
              >
                {menuItems[activeCategory as keyof typeof menuItems].map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    {/* Item */}
                    <div className="py-5 flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3
                            className="text-base font-bold leading-snug"
                            style={{ color: "var(--foreground)", fontFamily: "var(--font-serif)" }}
                          >
                            {item.name}
                          </h3>
                          {item.tag && (
                            <span
                              className="px-2 py-0.5 rounded-full text-xs font-bold flex-shrink-0"
                              style={{
                                background: "var(--primary)",
                                color: "var(--primary-foreground)",
                                fontFamily: "var(--font-sans)",
                                fontSize: "10px",
                                letterSpacing: "0.05em",
                              }}
                            >
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <p
                          className="text-xs leading-relaxed pr-4"
                          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                        >
                          {item.description}
                        </p>
                      </div>
                      {/* Dotted line + price */}
                      <div className="flex items-center gap-2 flex-shrink-0 pt-0.5">
                        <div
                          className="w-12 border-b border-dotted hidden md:block"
                          style={{ borderColor: borderColor, opacity: 0.5 }}
                        />
                        <span
                          className="text-base font-bold"
                          style={{ color: "var(--primary)", fontFamily: "var(--font-serif)" }}
                        >
                          {item.price}
                        </span>
                      </div>
                    </div>
                    {/* Divider between items */}
                    {i < menuItems[activeCategory as keyof typeof menuItems].length - 1 && (
                      <div
                        className="h-px w-full"
                        style={{ background: borderColor, opacity: 0.2 }}
                      />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Bottom divider */}
            <div className="flex items-center gap-4 mt-10 mb-8">
              <div className="flex-1 h-px" style={{ background: borderColor, opacity: 0.5 }} />
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z"
                  fill="var(--primary)" opacity="0.5" />
              </svg>
              <div className="flex-1 h-px" style={{ background: borderColor, opacity: 0.5 }} />
            </div>

            {/* Footer note */}
            <div className="text-center">
              <p
                className="text-xs italic mb-4"
                style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-serif)" }}
              >
                All prices are inclusive of service. Please inform your server of any allergies or dietary requirements.
                Menu changes seasonally based on the finest available produce.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest border transition-all hover:opacity-80"
                style={{
                  borderColor: "var(--primary)",
                  color: "var(--primary)",
                  fontFamily: "var(--font-sans)",
                  letterSpacing: "0.15em",
                }}
              >
                Dietary Requirements? Ask Us
              </a>
            </div>
          </div>

          {/* Bottom accent bar */}
          <div className="h-1.5 w-full" style={{ background: "var(--primary)" }} />
        </div>
      </div>
    </section>
  )
}
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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

type CategoryKey = keyof typeof menuItems
const categories: CategoryKey[] = ["Starters", "Mains", "Desserts", "Drinks"]

const tagColors: Record<string, { color: string; bg: string }> = {
  "Chef's Pick": { color: "#c9a96e", bg: "rgba(201,169,110,0.08)" },
  "Signature":   { color: "#c9a96e", bg: "rgba(201,169,110,0.08)" },
  "Seasonal":    { color: "#7a9e6e", bg: "rgba(122,158,110,0.08)" },
  "New":         { color: "#6e8fc9", bg: "rgba(110,143,201,0.08)" },
  "Must Order":  { color: "#c0522a", bg: "rgba(192,82,42,0.08)" },
  "Recommended": { color: "#c9a96e", bg: "rgba(201,169,110,0.08)" },
  "Popular":     { color: "#c0522a", bg: "rgba(192,82,42,0.08)" },
}

export function MenuSection() {
  const [active, setActive] = useState<CategoryKey>("Starters")
  const items = menuItems[active]
  const col1 = items.slice(0, 6)
  const col2 = items.slice(6, 12)

  return (
    <>
      <div className="divider-gold" />
      <section
        id="menu"
        className="relative overflow-hidden"
        style={{ minHeight: "100vh", background: "var(--bg-2)" }}
      >
        {/* Subtle texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div
          className="relative z-10"
          style={{ padding: "6rem 3rem 6rem" }}
        >
          {/* Section header */}
          <div className="max-w-7xl mx-auto mb-14">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <div
                  className="leading-none font-bold select-none mb-4"
                  style={{
                    fontSize: "7rem",
                    color: "transparent",
                    WebkitTextStroke: "1px rgba(201,169,110,0.12)",
                    fontFamily: "var(--font-display, Georgia, serif)",
                  }}
                >
                  02
                </div>
                <p
                  className="text-xs tracking-[0.3em] uppercase mb-4"
                  style={{ color: "var(--gold)" }}
                >
                  Our Menu
                </p>
                <h2
                  className="font-light leading-tight"
                  style={{
                    fontFamily: "var(--font-display, Georgia, serif)",
                    color: "var(--fg)",
                    fontSize: "clamp(2.5rem, 4vw, 3.8rem)",
                  }}
                >
                  Seasonal &amp; refined.
                </h2>
              </div>
              <p
                className="text-sm leading-relaxed lg:max-w-xs"
                style={{ color: "var(--fg-muted)" }}
              >
                Crafted with seasonal ingredients sourced from Northern California's
                finest producers. All dishes can be adapted for dietary requirements.
              </p>
            </div>
          </div>

          {/* ── THE PHYSICAL MENU CARD ── */}
          <div className="max-w-7xl mx-auto">
            <div
              className="relative"
              style={{
                /* Parchment-style dark cream background */
                background: "linear-gradient(160deg, #1a1508 0%, #120f05 40%, #1a1508 100%)",
                border: "1px solid rgba(201,169,110,0.35)",
                boxShadow:
                  "0 60px 160px rgba(0,0,0,0.7), 0 20px 60px rgba(0,0,0,0.5), inset 0 0 80px rgba(201,169,110,0.04)",
              }}
            >
              {/* Outer decorative border line */}
              <div
                className="absolute"
                style={{
                  inset: "10px",
                  border: "1px solid rgba(201,169,110,0.18)",
                  pointerEvents: "none",
                }}
              />

              {/* Inner decorative border line */}
              <div
                className="absolute"
                style={{
                  inset: "18px",
                  border: "1px solid rgba(201,169,110,0.08)",
                  pointerEvents: "none",
                }}
              />

              {/* Corner ornaments */}
              {[
                { top: "6px", left: "6px", borderWidth: "1.5px 0 0 1.5px" },
                { top: "6px", right: "6px", borderWidth: "1.5px 1.5px 0 0" },
                { bottom: "6px", left: "6px", borderWidth: "0 0 1.5px 1.5px" },
                { bottom: "6px", right: "6px", borderWidth: "0 1.5px 1.5px 0" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="absolute pointer-events-none"
                  style={{
                    ...s,
                    width: "32px",
                    height: "32px",
                    borderStyle: "solid",
                    borderColor: "var(--gold)",
                    opacity: 0.7,
                  }}
                />
              ))}

              {/* Gold top accent */}
              <div
                style={{
                  height: "2px",
                  background:
                    "linear-gradient(90deg, transparent, var(--gold-dark), var(--gold), var(--gold-light), var(--gold), var(--gold-dark), transparent)",
                }}
              />

              {/* Menu header */}
              <div
                className="text-center"
                style={{ padding: "2.5rem 4rem 2rem" }}
              >
                <p
                  className="text-xs tracking-[0.5em] uppercase mb-3"
                  style={{ color: "var(--fg-muted)" }}
                >
                  The Grand Table
                </p>
                <h3
                  className="font-light mb-3"
                  style={{
                    fontFamily: "var(--font-display, Georgia, serif)",
                    color: "var(--gold)",
                    fontSize: "2rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  À la Carte
                </h3>
                {/* Ornamental divider */}
                <div className="flex items-center justify-center gap-3">
                  <div
                    className="h-px flex-1"
                    style={{
                      maxWidth: "120px",
                      background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.4))",
                    }}
                  />
                  <span style={{ color: "var(--gold)", fontSize: "10px" }}>✦</span>
                  <div
                    className="h-px"
                    style={{ width: "40px", background: "rgba(201,169,110,0.3)" }}
                  />
                  <span style={{ color: "var(--gold)", fontSize: "14px" }}>✦</span>
                  <div
                    className="h-px"
                    style={{ width: "40px", background: "rgba(201,169,110,0.3)" }}
                  />
                  <span style={{ color: "var(--gold)", fontSize: "10px" }}>✦</span>
                  <div
                    className="h-px flex-1"
                    style={{
                      maxWidth: "120px",
                      background: "linear-gradient(90deg, rgba(201,169,110,0.4), transparent)",
                    }}
                  />
                </div>
              </div>

              {/* Category tabs — inside the menu card */}
              <div
                className="flex items-center justify-center gap-0"
                style={{
                  borderTop: "1px solid rgba(201,169,110,0.12)",
                  borderBottom: "1px solid rgba(201,169,110,0.12)",
                  margin: "0 4rem",
                }}
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className="transition-all"
                    style={{
                      padding: "14px 28px",
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: active === cat ? "var(--gold)" : "var(--fg-muted)",
                      borderBottom: active === cat
                        ? "1px solid var(--gold)"
                        : "1px solid transparent",
                      marginBottom: "-1px",
                      background: "transparent",
                      border: "none",
                      borderBottom: active === cat ? "1px solid var(--gold)" : "1px solid transparent",
                      cursor: "pointer",
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Two-column menu items */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2"
                  style={{ padding: "0 4rem" }}
                >
                  {/* Column 1 */}
                  <div style={{ paddingRight: "3rem" }}>
                    <div
                      className="text-xs tracking-[0.3em] uppercase text-center py-6"
                      style={{
                        color: "var(--fg-dim)",
                        borderBottom: "1px solid rgba(201,169,110,0.12)",
                      }}
                    >
                      Selections I – VI
                    </div>
                    {col1.map((item, i) => (
                      <MenuItem key={item.name} item={item} isLast={i === col1.length - 1} />
                    ))}
                  </div>

                  {/* Column divider */}
                  <div
                    className="hidden lg:block absolute"
                    style={{
                      left: "50%",
                      top: "0",
                      bottom: "0",
                      width: "1px",
                      background: "rgba(201,169,110,0.1)",
                    }}
                  />

                  {/* Column 2 */}
                  <div style={{ paddingLeft: "3rem" }}>
                    <div
                      className="text-xs tracking-[0.3em] uppercase text-center py-6"
                      style={{
                        color: "var(--fg-dim)",
                        borderBottom: "1px solid rgba(201,169,110,0.12)",
                      }}
                    >
                      Selections VII – XII
                    </div>
                    {col2.map((item, i) => (
                      <MenuItem key={item.name} item={item} isLast={i === col2.length - 1} />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Menu footer */}
              <div
                className="text-center"
                style={{
                  padding: "2rem 4rem 3rem",
                  borderTop: "1px solid rgba(201,169,110,0.12)",
                  margin: "0 2rem",
                }}
              >
                {/* Ornamental divider */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div
                    className="h-px"
                    style={{
                      width: "80px",
                      background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.4))",
                    }}
                  />
                  <span style={{ color: "var(--gold)", fontSize: "10px" }}>✦</span>
                  <div
                    className="h-px"
                    style={{ width: "30px", background: "rgba(201,169,110,0.3)" }}
                  />
                  <span style={{ color: "var(--gold)", fontSize: "8px" }}>✦</span>
                  <div
                    className="h-px"
                    style={{ width: "30px", background: "rgba(201,169,110,0.3)" }}
                  />
                  <span style={{ color: "var(--gold)", fontSize: "10px" }}>✦</span>
                  <div
                    className="h-px"
                    style={{
                      width: "80px",
                      background: "linear-gradient(90deg, rgba(201,169,110,0.4), transparent)",
                    }}
                  />
                </div>

                <div
                  className="flex flex-col md:flex-row items-center justify-between gap-6"
                >
                  <p
                    className="text-xs italic"
                    style={{
                      color: "var(--fg-muted)",
                      fontFamily: "var(--font-display, Georgia, serif)",
                      maxWidth: "420px",
                      lineHeight: "1.8",
                      textAlign: "left",
                    }}
                  >
                    All prices are inclusive of service. Please inform your server of any allergies
                    or dietary requirements. Menu changes seasonally.
                  </p>

                  <div
                    className="text-center flex-shrink-0 px-8 py-5"
                    style={{ border: "1px solid rgba(201,169,110,0.25)" }}
                  >
                    <p
                      className="text-xs tracking-[0.25em] uppercase mb-1"
                      style={{ color: "var(--gold)" }}
                    >
                      Chef's Tasting Menu
                    </p>
                    <p
                      className="text-3xl font-light mb-1"
                      style={{
                        color: "var(--fg)",
                        fontFamily: "var(--font-display, Georgia, serif)",
                      }}
                    >
                      $195
                    </p>
                    <p className="text-xs mb-4" style={{ color: "var(--fg-muted)" }}>
                      Eight courses · Wine pairing +$140
                    </p>
                    <button
                      onClick={() => {
                        const el = document.getElementById("reservations")
                        if (el) el.scrollIntoView({ behavior: "smooth" })
                      }}
                      className="text-xs tracking-[0.2em] uppercase px-6 py-2.5 transition-all hover:opacity-80"
                      style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
                    >
                      Reserve
                    </button>
                  </div>
                </div>
              </div>

              {/* Gold bottom accent */}
              <div
                style={{
                  height: "2px",
                  background:
                    "linear-gradient(90deg, transparent, var(--gold-dark), var(--gold), var(--gold-light), var(--gold), var(--gold-dark), transparent)",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function MenuItem({
  item,
  isLast,
}: {
  item: { name: string; description: string; price: string; tag: string | null }
  isLast: boolean
}) {
  const tag = item.tag ? tagColors[item.tag] : null

  return (
    <div
      style={{
        padding: "20px 0",
        borderBottom: isLast ? "none" : "1px solid rgba(201,169,110,0.08)",
      }}
    >
      {/* Name row */}
      <div className="flex items-baseline justify-between gap-4 mb-2">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <h4
            className="font-light"
            style={{
              fontFamily: "var(--font-display, Georgia, serif)",
              color: "var(--fg)",
              fontSize: "1.05rem",
              flexShrink: 0,
            }}
          >
            {item.name}
          </h4>
          {tag && (
            <span
              style={{
                fontSize: "9px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: tag.color,
                border: `1px solid ${tag.color}`,
                padding: "1px 6px",
                flexShrink: 0,
                opacity: 0.9,
              }}
            >
              {item.tag}
            </span>
          )}
        </div>
        {/* Dotted line */}
        <div
          className="flex-1 border-b border-dotted mx-2"
          style={{ borderColor: "rgba(201,169,110,0.2)", minWidth: "20px" }}
        />
        {/* Price */}
        <span
          className="flex-shrink-0 font-light"
          style={{
            color: "var(--gold)",
            fontFamily: "var(--font-display, Georgia, serif)",
            fontSize: "1rem",
          }}
        >
          {item.price}
        </span>
      </div>

      {/* Description */}
      <p
        className="text-xs leading-relaxed"
        style={{
          color: "var(--fg-muted)",
          paddingRight: "2rem",
          lineHeight: "1.7",
          fontStyle: "italic",
          fontFamily: "var(--font-display, Georgia, serif)",
        }}
      >
        {item.description}
      </p>
    </div>
  )
}

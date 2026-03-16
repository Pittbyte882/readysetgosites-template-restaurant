"use client"

import { motion } from "framer-motion"
import { Users, Wine, Music, Gift } from "lucide-react"

const events = [
  {
    icon: Users,
    title: "Private Dining",
    description: "Our intimate private dining room accommodates up to 20 guests. Perfect for business dinners, family celebrations, or any occasion requiring exclusivity and personalized service.",
    capacity: "Up to 20 guests",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
  },
  {
    icon: Wine,
    title: "Wine Tasting Events",
    description: "Monthly sommelier-led wine tasting evenings featuring curated selections from renowned vineyards. Paired with artisan cheese boards and light bites.",
    capacity: "Monthly events",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80",
  },
  {
    icon: Music,
    title: "Chef's Table Experience",
    description: "An exclusive 8-course tasting menu at our kitchen counter. Watch Chef Marco and his team craft each dish while enjoying personalized commentary and wine pairings.",
    capacity: "6 guests max",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80",
  },
  {
    icon: Gift,
    title: "Special Occasions",
    description: "Let us make your milestone moments unforgettable. From marriage proposals to milestone birthdays, our team will coordinate every detail to perfection.",
    capacity: "Fully customizable",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
  },
]

export function Events() {
  return (
    <section id="events" className="py-24 px-6" style={{ background: "var(--secondary)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-medium uppercase tracking-[0.3em] mb-3"
            style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}
          >
            Private & Special Events
          </p>
          <h2
            className="text-5xl font-bold mb-4"
            style={{ color: "var(--foreground)", fontFamily: "var(--font-serif)" }}
          >
            Exceptional Experiences
          </h2>
          <div className="w-16 h-0.5 mx-auto mb-6" style={{ background: "var(--primary)" }} />
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
          >
            From intimate private dinners to exclusive chef's table experiences,
            we create memorable moments for every occasion.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-3xl overflow-hidden border transition-all hover:shadow-xl"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute top-4 left-4 p-2.5 rounded-xl"
                  style={{ background: "var(--primary)" }}
                >
                  <event.icon className="w-5 h-5" style={{ color: "var(--primary-foreground)" }} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "var(--foreground)", fontFamily: "var(--font-serif)" }}
                  >
                    {event.title}
                  </h3>
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      background: "var(--muted)",
                      color: "var(--muted-foreground)",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {event.capacity}
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                >
                  {event.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-semibold transition-all hover:opacity-70"
                  style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}
                >
                  Enquire Now →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
"use client"

import { motion } from "framer-motion"
import { Award, Leaf, Heart } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized by Michelin and James Beard Foundation for culinary excellence.",
  },
  {
    icon: Leaf,
    title: "Farm to Table",
    description: "Ingredients sourced daily from local farms and sustainable suppliers.",
  },
  {
    icon: Heart,
    title: "Made with Passion",
    description: "Every dish crafted with love and years of culinary expertise.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: "var(--secondary)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
                alt="Our Chef"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div
              className="absolute bottom-4 right-4 p-6 rounded-2xl shadow-xl border"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <p
                className="text-4xl font-bold"
                style={{ color: "var(--primary)", fontFamily: "var(--font-serif)" }}
              >
                15+
              </p>
              <p
                className="text-sm mt-1"
                style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
              >
                Years of Culinary
                <br />Excellence
              </p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p
              className="text-sm font-medium uppercase tracking-[0.3em] mb-4"
              style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}
            >
              Our Story
            </p>
            <h2
              className="text-5xl font-bold mb-6 leading-tight"
              style={{ color: "var(--foreground)", fontFamily: "var(--font-serif)" }}
            >
              A Passion for
              <br />
              <span style={{ color: "var(--primary)" }}>Perfect Cuisine</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
            >
              Founded by Chef Marco Rossi in 2009, The Grand Table was born from a
              lifelong dream of creating a space where food becomes an art form.
              After training in Michelin-starred kitchens across Europe, Chef Marco
              returned home to share his passion with the world.
            </p>
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
            >
              Every dish on our menu is a reflection of our commitment to quality,
              creativity, and the belief that great food has the power to bring
              people together in meaningful ways.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value) => (
                <div key={value.title} className="flex items-start gap-4">
                  <div
                    className="p-2.5 rounded-xl flex-shrink-0"
                    style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
                  >
                    <value.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3
                      className="font-semibold mb-1"
                      style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
                    >
                      {value.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                    >
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
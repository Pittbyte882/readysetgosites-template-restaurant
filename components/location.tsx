"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Phone, Mail } from "lucide-react"

const hours = [
  { day: "Monday – Tuesday", time: "Closed" },
  { day: "Wednesday – Thursday", time: "5:30 PM – 10:00 PM" },
  { day: "Friday – Saturday", time: "5:00 PM – 11:00 PM" },
  { day: "Sunday", time: "5:00 PM – 9:30 PM" },
]

export function Location() {
  return (
    <section id="location" className="py-24 px-6" style={{ background: "var(--background)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-medium uppercase tracking-[0.3em] mb-3"
            style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}
          >
            Find Us
          </p>
          <h2
            className="text-5xl font-bold mb-4"
            style={{ color: "var(--foreground)", fontFamily: "var(--font-serif)" }}
          >
            Location & Hours
          </h2>
          <div className="w-16 h-0.5 mx-auto" style={{ background: "var(--primary)" }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border"
            style={{ borderColor: "var(--border)" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Address */}
            <div
              className="p-6 rounded-2xl border"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-2.5 rounded-xl flex-shrink-0"
                  style={{ background: "var(--primary)" }}
                >
                  <MapPin className="w-5 h-5" style={{ color: "var(--primary-foreground)" }} />
                </div>
                <div>
                  <h3
                    className="font-bold mb-1"
                    style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
                  >
                    Address
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                  >
                    123 Fine Dining Avenue
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div
              className="p-6 rounded-2xl border"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-2.5 rounded-xl flex-shrink-0"
                  style={{ background: "var(--primary)" }}
                >
                  <Clock className="w-5 h-5" style={{ color: "var(--primary-foreground)" }} />
                </div>
                <div className="flex-1">
                  <h3
                    className="font-bold mb-3"
                    style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
                  >
                    Opening Hours
                  </h3>
                  <div className="space-y-2">
                    {hours.map((h) => (
                      <div key={h.day} className="flex justify-between items-center">
                        <span
                          className="text-sm"
                          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                        >
                          {h.day}
                        </span>
                        <span
                          className="text-sm font-medium"
                          style={{
                            color: h.time === "Closed" ? "var(--muted-foreground)" : "var(--foreground)",
                            fontFamily: "var(--font-sans)",
                          }}
                        >
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div
              className="p-6 rounded-2xl border"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <h3
                className="font-bold mb-4"
                style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
              >
                Contact Us
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 transition-opacity hover:opacity-70"
                >
                  <Phone className="w-4 h-4" style={{ color: "var(--primary)" }} />
                  <span
                    className="text-sm"
                    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                  >
                    (555) 123-4567
                  </span>
                </a>
                <a
                  href="mailto:hello@thegrandtable.com"
                  className="flex items-center gap-3 transition-opacity hover:opacity-70"
                >
                  <Mail className="w-4 h-4" style={{ color: "var(--primary)" }} />
                  <span
                    className="text-sm"
                    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                  >
                    hello@thegrandtable.com
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
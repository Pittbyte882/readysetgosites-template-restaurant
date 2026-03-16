"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, Users, Check, Phone, ChevronDown, Sparkles } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

export function Reservation() {
  const { theme } = useTheme()
  const isDark = theme === "modern" || theme === "bold"

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "",
    date: "", time: "", guests: "2",
    occasion: "", requests: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const timeSlots = [
    "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM",
    "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const borderColor = isDark ? "rgba(200,80,42,0.5)" : "#c8a882"

  const inputStyle = {
    background: isDark ? "rgba(255,255,255,0.05)" : "#ffffff",
    border: "1.5px solid var(--border)",
    color: "var(--foreground)",
    fontFamily: "var(--font-sans)",
    fontSize: "14px",
    width: "100%",
    padding: "14px 16px",
    borderRadius: "12px",
    outline: "none",
    transition: "border-color 0.2s",
  }

  const labelStyle = {
    display: "block",
    fontSize: "11px",
    fontWeight: "700",
    textTransform: "uppercase" as const,
    letterSpacing: "0.12em",
    marginBottom: "8px",
    color: "var(--muted-foreground)",
    fontFamily: "var(--font-sans)",
  }

  if (isSubmitted) {
    return (
      <section id="reservation" className="py-28" style={{ background: isDark ? "var(--background)" : "var(--secondary)" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="overflow-hidden rounded-3xl"
            style={{ border: `2px solid ${borderColor}` }}
          >
            <div className="h-2" style={{ background: "var(--primary)" }} />
            <div className="p-16" style={{ background: isDark ? "var(--background)" : "#fefcf8" }}>
              <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8" style={{ background: "var(--primary)" }}>
                <Check className="w-12 h-12" style={{ color: "var(--primary-foreground)" }} />
              </div>
              <h3 className="text-4xl font-bold mb-4" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif)" }}>
                You&apos;re Confirmed!
              </h3>
              <p className="text-base leading-relaxed mb-3" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}>
                Thank you, <strong style={{ color: "var(--foreground)" }}>{formData.name}</strong>.
                Your table is reserved for{" "}
                <strong style={{ color: "var(--primary)" }}>{formData.date}</strong> at{" "}
                <strong style={{ color: "var(--primary)" }}>{formData.time}</strong> for{" "}
                <strong style={{ color: "var(--primary)" }}>{formData.guests} guests</strong>.
              </p>
              <p className="text-sm" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}>
                Confirmation sent to <strong style={{ color: "var(--primary)" }}>{formData.email}</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="reservation" style={{ background: isDark ? "var(--background)" : "var(--secondary)" }}>

      {/* Full width hero banner */}
      <div
        className="relative w-full h-64 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.65)" }} />
        <div className="relative z-10 text-center px-6">
          <p className="text-xs font-bold uppercase tracking-[0.4em] mb-3" style={{ color: "var(--accent)", fontFamily: "var(--font-sans)" }}>
            Join Us
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: "var(--font-serif)" }}>
            Reserve Your Table
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-16 bg-white/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
            <div className="h-px w-16 bg-white/30" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Info strip */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 p-6 rounded-2xl"
          style={{
            background: isDark ? "rgba(255,255,255,0.03)" : "#ffffff",
            border: `1px solid ${borderColor}`,
          }}
        >
          {[
            { icon: Clock, title: "Dinner Service", subtitle: "Wed – Sun · 5:00 PM – 11:00 PM" },
            { icon: Phone, title: "Reservations", subtitle: "(555) 123-4567" },
            { icon: Users, title: "Private Dining", subtitle: "Groups of 9+ call directly" },
            { icon: Sparkles, title: "Dress Code", subtitle: "Smart casual to formal" },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <div className="p-2 rounded-lg flex-shrink-0" style={{ background: "var(--primary)" }}>
                <item.icon className="w-4 h-4" style={{ color: "var(--primary-foreground)" }} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}>
                  {item.title}
                </p>
                <p className="text-sm font-medium mt-0.5" style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}>
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl"
          style={{ border: `2px solid ${borderColor}` }}
        >
          {/* Corner ornaments */}
          <div className="relative">
            <div className="h-2 w-full" style={{ background: "var(--primary)" }} />
          </div>

          <div className="p-10 md:p-16" style={{ background: isDark ? "var(--background)" : "#fefcf8" }}>

            <div className="grid lg:grid-cols-2 gap-16">

              {/* Left column */}
              <div className="space-y-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-3" style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}>
                    <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
                    Your Details
                    <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
                  </p>
                  <div className="space-y-5">
                    <div>
                      <label style={labelStyle}>Full Name <span style={{ color: "var(--primary)" }}>*</span></label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John & Jane Smith" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address <span style={{ color: "var(--primary)" }}>*</span></label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone Number</label>
                      <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="(555) 123-4567" style={inputStyle} />
                    </div>
                    <div className="relative">
                      <label style={labelStyle}>
                        <span className="flex items-center gap-1.5">
                          <Users className="w-3 h-3" style={{ color: "var(--primary)" }} />
                          Number of Guests <span style={{ color: "var(--primary)" }}>*</span>
                        </span>
                      </label>
                      <select required value={formData.guests} onChange={(e) => setFormData({ ...formData, guests: e.target.value })} style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}>
                        {[1,2,3,4,5,6,7,8].map(n => (
                          <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                        ))}
                        <option value="9+">9+ Guests — Private Dining</option>
                      </select>
                      <ChevronDown className="absolute right-4 bottom-4 w-4 h-4 pointer-events-none" style={{ color: "var(--muted-foreground)" }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-3" style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}>
                    <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
                    Booking Details
                    <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
                  </p>
                  <div className="space-y-5">
                    <div>
                      <label style={labelStyle}>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" style={{ color: "var(--primary)" }} />
                          Preferred Date <span style={{ color: "var(--primary)" }}>*</span>
                        </span>
                      </label>
                      <input type="date" required value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} style={inputStyle} />
                    </div>
                    <div className="relative">
                      <label style={labelStyle}>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3" style={{ color: "var(--primary)" }} />
                          Preferred Time <span style={{ color: "var(--primary)" }}>*</span>
                        </span>
                      </label>
                      <select required value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}>
                        <option value="" disabled>Select a time slot</option>
                        {timeSlots.map(slot => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 bottom-4 w-4 h-4 pointer-events-none" style={{ color: "var(--muted-foreground)" }} />
                    </div>
                    <div className="relative">
                      <label style={labelStyle}>Special Occasion</label>
                      <select value={formData.occasion} onChange={(e) => setFormData({ ...formData, occasion: e.target.value })} style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}>
                        <option value="">None / Regular Dining</option>
                        <option value="birthday">🎂 Birthday Celebration</option>
                        <option value="anniversary">💑 Anniversary</option>
                        <option value="proposal">💍 Marriage Proposal</option>
                        <option value="business">💼 Business Dinner</option>
                        <option value="other">✨ Other Special Occasion</option>
                      </select>
                      <ChevronDown className="absolute right-4 bottom-4 w-4 h-4 pointer-events-none" style={{ color: "var(--muted-foreground)" }} />
                    </div>
                    <div>
                      <label style={labelStyle}>Special Requests / Dietary Needs</label>
                      <textarea value={formData.requests} onChange={(e) => setFormData({ ...formData, requests: e.target.value })} placeholder="Allergies, seating preferences, special arrangements..." rows={4} style={{ ...inputStyle, resize: "none" as const }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="mt-10 mb-8 flex items-start gap-3 p-5 rounded-xl" style={{ background: isDark ? "rgba(200,80,42,0.08)" : "rgba(200,136,82,0.06)", borderLeft: "3px solid var(--primary)" }}>
              <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--primary)" }} />
              <p className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}>
                For parties of <strong style={{ color: "var(--foreground)" }}>9 or more</strong>, private events, or same-day reservations, please call us at{" "}
                <strong style={{ color: "var(--foreground)" }}>(555) 123-4567</strong>.
                We&apos;ll do our absolute best to accommodate you.
              </p>
            </div>

            {/* Submit */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting || !formData.name || !formData.email || !formData.date || !formData.time}
              className="w-full py-5 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:opacity-90 active:scale-[0.99] disabled:opacity-50"
              style={{
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                fontFamily: "var(--font-sans)",
                letterSpacing: "0.2em",
                fontSize: "13px",
              }}
            >
              {isSubmitting ? "Confirming Your Reservation..." : "Confirm Reservation →"}
            </button>

            <p className="text-center text-xs mt-4" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}>
              Confirmation email sent within minutes · Free cancellation up to 24 hours before
            </p>
          </div>

          <div className="h-2 w-full" style={{ background: "var(--primary)" }} />
        </motion.div>
      </div>
    </section>
  )
}
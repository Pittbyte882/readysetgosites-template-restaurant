"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, Users, Check, Phone, ChevronDown } from "lucide-react"
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

  const sectionBg = isDark ? "var(--background)" : "var(--secondary)"

  const cardStyle = {
    background: isDark ? "rgba(255,255,255,0.03)" : "var(--card)",
    border: "1.5px solid var(--primary)",
    borderTop: "none",
    borderRadius: "0 0 24px 24px",
  }

  const inputStyle = {
    background: isDark ? "rgba(255,255,255,0.05)" : "var(--card)",
    border: "1.5px solid var(--border)",
    color: "var(--foreground)",
    fontFamily: "var(--font-sans)",
    fontSize: "14px",
    transition: "border-color 0.2s",
    width: "100%",
  }

  if (isSubmitted) {
    return (
      <section id="reservation" className="py-28" style={{ background: sectionBg }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="overflow-hidden rounded-3xl"
            style={{ border: "1.5px solid var(--primary)" }}
          >
            <div className="h-2 w-full" style={{ background: "var(--primary)" }} />
            <div className="p-16" style={{ background: isDark ? "rgba(255,255,255,0.03)" : "var(--card)" }}>
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: "var(--primary)" }}
              >
                <Check className="w-10 h-10" style={{ color: "var(--primary-foreground)" }} />
              </div>
              <h3 className="text-4xl font-bold mb-4" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif)" }}>
                You&apos;re Confirmed!
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}>
                Thank you, <strong style={{ color: "var(--foreground)" }}>{formData.name}</strong>.
                Your table is reserved for{" "}
                <strong style={{ color: "var(--primary)" }}>{formData.date}</strong> at{" "}
                <strong style={{ color: "var(--primary)" }}>{formData.time}</strong> for{" "}
                <strong style={{ color: "var(--primary)" }}>{formData.guests} guests</strong>.
              </p>
              <p className="text-sm mt-3" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}>
                Confirmation sent to <strong style={{ color: "var(--primary)" }}>{formData.email}</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="reservation" className="py-28" style={{ background: sectionBg }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-bold uppercase tracking-[0.35em] mb-4"
            style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}
          >
            Join Us
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold mb-5"
            style={{ color: "var(--foreground)", fontFamily: "var(--font-serif)" }}
          >
            Reserve Your Table
          </h2>
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-16" style={{ background: "var(--border)" }} />
            <div className="w-2 h-2 rounded-full" style={{ background: "var(--primary)" }} />
            <div className="h-px w-16" style={{ background: "var(--border)" }} />
          </div>
          <p className="text-sm" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}>
            Book online or call us at{" "}
            <a href="tel:+15551234567" className="font-bold hover:opacity-70 transition-opacity" style={{ color: "var(--primary)" }}>
              (555) 123-4567
            </a>
          </p>
        </div>

        {/* Card with top accent bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl"
          style={{ border: "1.5px solid var(--primary)" }}
        >
          {/* Top accent bar */}
          <div
            className="h-2 w-full"
            style={{ background: "var(--primary)" }}
          />

          <div className="p-8 md:p-14" style={cardStyle}>
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Contact Info Row */}
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-3"
                  style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}
                >
                  <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
                  Contact Information
                  <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
                </p>
                <div className="grid md:grid-cols-3 gap-5">
                  {[
                    { label: "Full Name", key: "name", type: "text", placeholder: "John Smith", required: true },
                    { label: "Email Address", key: "email", type: "email", placeholder: "john@example.com", required: true },
                    { label: "Phone Number", key: "phone", type: "tel", placeholder: "(555) 123-4567", required: false },
                  ].map((field) => (
                    <div key={field.key}>
                      <label
                        className="block text-xs font-bold uppercase tracking-wider mb-2"
                        style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                      >
                        {field.label} {field.required && <span style={{ color: "var(--primary)" }}>*</span>}
                      </label>
                      <input
                        type={field.type}
                        required={field.required}
                        value={formData[field.key as keyof typeof formData] as string}
                        onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                        placeholder={field.placeholder}
                        className="px-4 py-3.5 rounded-xl outline-none"
                        style={inputStyle}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Reservation Details */}
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-3"
                  style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}
                >
                  <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
                  Reservation Details
                  <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

                  {/* Date */}
                  <div>
                    <label
                      className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-2"
                      style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                    >
                      <Calendar className="w-3 h-3" style={{ color: "var(--primary)" }} />
                      Date <span style={{ color: "var(--primary)" }}>*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="px-4 py-3.5 rounded-xl outline-none"
                      style={inputStyle}
                    />
                  </div>

                  {/* Time */}
                  <div className="relative">
                    <label
                      className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-2"
                      style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                    >
                      <Clock className="w-3 h-3" style={{ color: "var(--primary)" }} />
                      Time <span style={{ color: "var(--primary)" }}>*</span>
                    </label>
                    <select
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="px-4 py-3.5 rounded-xl outline-none appearance-none cursor-pointer"
                      style={inputStyle}
                    >
                      <option value="" disabled>Select time</option>
                      {timeSlots.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 bottom-4 w-4 h-4 pointer-events-none" style={{ color: "var(--muted-foreground)" }} />
                  </div>

                  {/* Guests */}
                  <div className="relative">
                    <label
                      className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-2"
                      style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                    >
                      <Users className="w-3 h-3" style={{ color: "var(--primary)" }} />
                      Guests <span style={{ color: "var(--primary)" }}>*</span>
                    </label>
                    <select
                      required
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="px-4 py-3.5 rounded-xl outline-none appearance-none cursor-pointer"
                      style={inputStyle}
                    >
                      {[1,2,3,4,5,6,7,8].map(n => (
                        <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                      ))}
                      <option value="9+">9+ (Private Dining)</option>
                    </select>
                    <ChevronDown className="absolute right-3 bottom-4 w-4 h-4 pointer-events-none" style={{ color: "var(--muted-foreground)" }} />
                  </div>

                  {/* Occasion */}
                  <div className="relative">
                    <label
                      className="block text-xs font-bold uppercase tracking-wider mb-2"
                      style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                    >
                      Occasion
                    </label>
                    <select
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      className="px-4 py-3.5 rounded-xl outline-none appearance-none cursor-pointer"
                      style={inputStyle}
                    >
                      <option value="">No occasion</option>
                      <option value="birthday">🎂 Birthday</option>
                      <option value="anniversary">💑 Anniversary</option>
                      <option value="proposal">💍 Proposal</option>
                      <option value="business">💼 Business</option>
                      <option value="other">✨ Other</option>
                    </select>
                    <ChevronDown className="absolute right-3 bottom-4 w-4 h-4 pointer-events-none" style={{ color: "var(--muted-foreground)" }} />
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label
                  className="block text-xs font-bold uppercase tracking-wider mb-2"
                  style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                >
                  Special Requests or Dietary Requirements
                </label>
                <textarea
                  value={formData.requests}
                  onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
                  placeholder="Allergies, dietary restrictions, seating preferences, or anything that would make your experience more special..."
                  rows={3}
                  className="px-4 py-3.5 rounded-xl outline-none resize-none"
                  style={inputStyle}
                />
              </div>

              {/* Note */}
              <div
                className="flex items-start gap-3 p-4 rounded-xl"
                style={{ background: isDark ? "rgba(200,80,42,0.08)" : "var(--muted)", borderLeft: "3px solid var(--primary)" }}
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--primary)" }} />
                <p className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}>
                  For parties of 9+, private events, or same-day reservations please call{" "}
                  <strong style={{ color: "var(--foreground)" }}>(555) 123-4567</strong> directly.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:opacity-90 active:scale-[0.99] disabled:opacity-60"
                style={{
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                  fontFamily: "var(--font-sans)",
                  letterSpacing: "0.15em",
                }}
              >
                {isSubmitting ? "Confirming..." : "Confirm Reservation →"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
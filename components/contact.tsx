"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Check, Mail, Phone, Clock, MapPin } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

export function Contact() {
  const { theme } = useTheme()
  const isDark = theme === "modern" || theme === "bold"

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

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
  }

  const labelStyle = {
    display: "block",
    fontSize: "11px",
    fontWeight: "700" as const,
    textTransform: "uppercase" as const,
    letterSpacing: "0.12em",
    marginBottom: "8px",
    color: "var(--muted-foreground)",
    fontFamily: "var(--font-sans)",
  }

  return (
    <section id="contact" style={{ background: isDark ? "var(--secondary)" : "var(--background)" }}>

      {/* Full width banner */}
      <div
        className="relative w-full h-48 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.65)" }} />
        <div className="relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.4em] mb-3" style={{ color: "var(--accent)", fontFamily: "var(--font-sans)" }}>
            Get in Touch
          </p>
          <h2 className="text-5xl font-bold text-white" style={{ fontFamily: "var(--font-serif)" }}>
            Contact Us
          </h2>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* Contact info cards row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { icon: Phone, label: "Phone", value: "(555) 123-4567", sub: "Call to reserve" },
            { icon: Mail, label: "Email", value: "hello@thegrandtable.com", sub: "We reply within 24hrs" },
            { icon: MapPin, label: "Address", value: "123 Fine Dining Ave", sub: "New York, NY 10001" },
            { icon: Clock, label: "Hours", value: "Wed – Sun", sub: "5:00 PM – 11:00 PM" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-2xl text-center"
              style={{
                background: isDark ? "rgba(255,255,255,0.03)" : "#ffffff",
                border: `1.5px solid ${borderColor}`,
              }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "var(--primary)" }}>
                <item.icon className="w-4 h-4" style={{ color: "var(--primary-foreground)" }} />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}>
                {item.label}
              </p>
              <p className="text-sm font-bold" style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}>
                {item.value}
              </p>
              <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}>
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Single form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl"
          style={{ border: `2px solid ${borderColor}` }}
        >
          <div className="h-2 w-full" style={{ background: "var(--primary)" }} />

          <div className="p-10 md:p-16" style={{ background: isDark ? "var(--background)" : "#fefcf8" }}>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "var(--primary)" }}>
                  <Check className="w-12 h-12" style={{ color: "var(--primary-foreground)" }} />
                </div>
                <h3 className="text-4xl font-bold mb-3" style={{ color: "var(--foreground)", fontFamily: "var(--font-serif)" }}>
                  Message Received!
                </h3>
                <p className="text-base" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}>
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>

                {/* Section label */}
                <p className="text-xs font-bold uppercase tracking-widest mb-8 flex items-center gap-3" style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}>
                  <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
                  Send Us a Message
                  <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
                </p>

                {/* Row 1 — Name, Email, Phone */}
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label style={labelStyle}>Your Name <span style={{ color: "var(--primary)" }}>*</span></label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Smith" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address <span style={{ color: "var(--primary)" }}>*</span></label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="(555) 123-4567" style={inputStyle} />
                  </div>
                </div>

                {/* Row 2 — Subject */}
                <div className="mb-6">
                  <label style={labelStyle}>Subject <span style={{ color: "var(--primary)" }}>*</span></label>
                  <input type="text" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="How can we help you today?" style={inputStyle} />
                </div>

                {/* Row 3 — Message */}
                <div className="mb-8">
                  <label style={labelStyle}>Message <span style={{ color: "var(--primary)" }}>*</span></label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your enquiry — whether it's a question about our menu, arranging a private event, dietary requirements, or anything else we can help with..."
                    rows={7}
                    style={{ ...inputStyle, resize: "none" as const }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 rounded-full font-bold uppercase tracking-widest transition-all hover:opacity-90 flex items-center justify-center gap-3 disabled:opacity-60"
                  style={{
                    background: "var(--primary)",
                    color: "var(--primary-foreground)",
                    fontFamily: "var(--font-sans)",
                    letterSpacing: "0.2em",
                    fontSize: "13px",
                  }}
                >
                  {isSubmitting ? "Sending Your Message..." : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs mt-4" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}>
                  We respond to all enquiries within 24 hours · Your information is kept private
                </p>
              </form>
            )}
          </div>

          <div className="h-2 w-full" style={{ background: "var(--primary)" }} />
        </motion.div>
      </div>
    </section>
  )
}
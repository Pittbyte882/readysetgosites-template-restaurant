"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Check, Mail, Phone, Clock, MapPin } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

export function Contact() {
  const { theme } = useTheme()
  const isDark = theme === "modern" || theme === "bold"

  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: "",
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

  const sectionBg = isDark ? "var(--secondary)" : "var(--background)"

  const inputStyle = {
    background: isDark ? "rgba(255,255,255,0.05)" : "var(--card)",
    border: "1.5px solid var(--border)",
    color: "var(--foreground)",
    fontFamily: "var(--font-sans)",
    fontSize: "14px",
    width: "100%",
    transition: "border-color 0.2s",
  }

  return (
    <section id="contact" className="py-28" style={{ background: sectionBg }}>
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-bold uppercase tracking-[0.35em] mb-4"
            style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}
          >
            Get in Touch
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold mb-5"
            style={{ color: "var(--foreground)", fontFamily: "var(--font-serif)" }}
          >
            Contact Us
          </h2>
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-16" style={{ background: "var(--border)" }} />
            <div className="w-2 h-2 rounded-full" style={{ background: "var(--primary)" }} />
            <div className="h-px w-16" style={{ background: "var(--border)" }} />
          </div>
          <p
            className="text-sm"
            style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
          >
            Questions about our menu, private events, or anything else?
            We&apos;d love to hear from you.
          </p>
        </div>

        {/* Single Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl"
          style={{ border: "1.5px solid var(--primary)" }}
        >
          {/* Top accent bar */}
          <div className="h-2 w-full" style={{ background: "var(--primary)" }} />

          <div
            className="p-8 md:p-12"
            style={{ background: isDark ? "rgba(255,255,255,0.03)" : "var(--card)" }}
          >
            {/* Quick Contact Info Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 pb-10 border-b" style={{ borderColor: "var(--border)" }}>
              {[
                { icon: Phone, label: "Phone", value: "(555) 123-4567" },
                { icon: Mail, label: "Email", value: "hello@thegrandtable.com" },
                { icon: MapPin, label: "Address", value: "123 Fine Dining Ave, NY" },
                { icon: Clock, label: "Hours", value: "Wed–Sun · 5–11 PM" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div
                    className="p-2 rounded-lg flex-shrink-0"
                    style={{ background: "var(--primary)" }}
                  >
                    <item.icon className="w-3.5 h-3.5" style={{ color: "var(--primary-foreground)" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-wider mb-0.5"
                      style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-xs font-medium"
                      style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: "var(--primary)" }}
                >
                  <Check className="w-8 h-8" style={{ color: "var(--primary-foreground)" }} />
                </div>
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "var(--foreground)", fontFamily: "var(--font-serif)" }}
                >
                  Message Received!
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                >
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs font-bold uppercase tracking-wider mb-2"
                      style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                    >
                      Your Name <span style={{ color: "var(--primary)" }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Smith"
                      className="px-4 py-3.5 rounded-xl outline-none"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-bold uppercase tracking-wider mb-2"
                      style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                    >
                      Email Address <span style={{ color: "var(--primary)" }}>*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="px-4 py-3.5 rounded-xl outline-none"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-wider mb-2"
                    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                  >
                    Subject <span style={{ color: "var(--primary)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="How can we help you?"
                    className="px-4 py-3.5 rounded-xl outline-none"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-wider mb-2"
                    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                  >
                    Message <span style={{ color: "var(--primary)" }}>*</span>
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more about your enquiry..."
                    rows={5}
                    className="px-4 py-3.5 rounded-xl outline-none resize-none"
                    style={inputStyle}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:opacity-90 flex items-center justify-center gap-2 disabled:opacity-60"
                  style={{
                    background: "var(--primary)",
                    color: "var(--primary-foreground)",
                    fontFamily: "var(--font-sans)",
                    letterSpacing: "0.15em",
                  }}
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
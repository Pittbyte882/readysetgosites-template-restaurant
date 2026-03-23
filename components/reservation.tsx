"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"
import { Check } from "lucide-react"

const times = ["5:00 PM","5:30 PM","6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM","9:00 PM","9:30 PM"]
const partySizes = Array.from({ length: 10 }, (_, i) => `${i + 1} Guest${i > 0 ? "s" : ""}`)
const occasions = ["Birthday", "Anniversary", "Business Dinner", "Date Night", "Special Occasion", "Other"]

export function Reservations() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    date: "", time: "", party: "", occasion: "", requests: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      alert(`Something went wrong. Please call us at ${siteConfig.phone}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="divider-gold" />
      <section
        id="reservations"
        className="relative overflow-hidden"
        style={{ minHeight: "100vh", background: "var(--bg)" }}
      >
        {/* Background diagonal pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "repeating-linear-gradient(135deg, rgba(201,169,110,0.03) 0px, rgba(201,169,110,0.03) 1px, transparent 1px, transparent 40px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* Gold glow top */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }}
        />

        <div
          className="relative z-10 max-w-7xl mx-auto"
          style={{ padding: "7rem 4rem" }}
        >
          <div className="grid lg:grid-cols-5 gap-16 items-start">

            {/* Left — Info column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
              style={{ paddingTop: "1rem" }}
            >
              {/* Section number */}
              <div
                className="leading-none font-bold select-none mb-8"
                style={{
                  fontSize: "7rem",
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(201,169,110,0.12)",
                  fontFamily: "var(--font-display, Georgia, serif)",
                }}
              >
                03
              </div>

              <p
                className="text-xs tracking-[0.3em] uppercase mb-5"
                style={{ color: "var(--gold)" }}
              >
                Reservations
              </p>

              <h2
                className="font-light leading-tight mb-8"
                style={{
                  fontFamily: "var(--font-display, Georgia, serif)",
                  color: "var(--fg)",
                  fontSize: "clamp(2.2rem, 3.5vw, 3.4rem)",
                }}
              >
                Reserve your
                <br />
                <em style={{ color: "var(--gold)" }}>table.</em>
              </h2>

              <p
                className="text-sm leading-loose mb-10"
                style={{ color: "var(--fg-muted)", maxWidth: "340px" }}
              >
                Reservations accepted up to 60 days in advance. For parties of 8 or more, please contact us directly. Tables held for 15 minutes.
              </p>

              {/* Hours */}
              <div className="mb-10">
                <p
                  className="text-xs tracking-[0.2em] uppercase mb-5"
                  style={{
                    color: "var(--gold)",
                    borderBottom: "1px solid var(--border)",
                    paddingBottom: "12px",
                  }}
                >
                  Hours
                </p>
                <div className="space-y-4">
                  {siteConfig.hours.map((h) => (
                    <div key={h.day} className="flex justify-between items-baseline">
                      <span className="text-sm" style={{ color: "var(--fg-muted)" }}>{h.day}</span>
                      <span
                        className="text-sm"
                        style={{
                          color: h.hours === "Closed" ? "var(--fg-dim)" : "var(--fg)",
                          fontFamily: "var(--font-display, Georgia, serif)",
                        }}
                      >
                        {h.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phone */}
              <div>
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "var(--fg-muted)" }}>
                  Large parties & private events
                </p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="transition-opacity hover:opacity-70"
                  style={{
                    color: "var(--gold)",
                    fontFamily: "var(--font-display, Georgia, serif)",
                    fontStyle: "italic",
                    fontSize: "1.3rem",
                    display: "block",
                  }}
                >
                  {siteConfig.phone}
                </a>
              </div>
            </motion.div>

            {/* Right — Framed form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {/* Outer gold frame */}
              <div
                className="relative"
                style={{
                  border: "1px solid rgba(201,169,110,0.4)",
                  background: "rgba(20,16,8,0.95)",
                  boxShadow: "0 40px 120px rgba(0,0,0,0.6), inset 0 0 60px rgba(201,169,110,0.03)",
                }}
              >
                {/* Corner ornaments */}
                {[
                  { top: "-1px", left: "-1px", borderWidth: "2px 0 0 2px" },
                  { top: "-1px", right: "-1px", borderWidth: "2px 2px 0 0" },
                  { bottom: "-1px", left: "-1px", borderWidth: "0 0 2px 2px" },
                  { bottom: "-1px", right: "-1px", borderWidth: "0 2px 2px 0" },
                ].map((style, i) => (
                  <div
                    key={i}
                    className="absolute pointer-events-none"
                    style={{
                      ...style,
                      width: "24px",
                      height: "24px",
                      borderStyle: "solid",
                      borderColor: "var(--gold)",
                    }}
                  />
                ))}

                {/* Gold top bar */}
                <div
                  style={{
                    height: "3px",
                    background: "linear-gradient(90deg, var(--gold-dark), var(--gold), var(--gold-light), var(--gold), var(--gold-dark))",
                  }}
                />

                {/* Form header */}
                <div
                  className="text-center py-8 px-10"
                  style={{ borderBottom: "1px solid rgba(201,169,110,0.15)" }}
                >
                  <p
                    className="text-xs tracking-[0.4em] uppercase"
                    style={{ color: "var(--gold)" }}
                  >
                    ✦ Make a Reservation ✦
                  </p>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-24 px-10"
                  >
                    <div
                      className="w-16 h-16 flex items-center justify-center mx-auto mb-8"
                      style={{ border: "1px solid var(--gold)" }}
                    >
                      <Check className="w-7 h-7" style={{ color: "var(--gold)" }} />
                    </div>
                    <h3
                      className="text-3xl font-light mb-4"
                      style={{
                        fontFamily: "var(--font-display, Georgia, serif)",
                        color: "var(--fg)",
                      }}
                    >
                      Reservation Confirmed
                    </h3>
                    <p className="text-sm leading-relaxed mb-2" style={{ color: "var(--fg-muted)" }}>
                      Thank you, <span style={{ color: "var(--fg)" }}>{form.name}</span>.
                      We look forward to welcoming you.
                    </p>
                    <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                      A confirmation has been sent to{" "}
                      <span style={{ color: "var(--gold)" }}>{form.email}</span>
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ padding: "2.5rem 3rem 3rem" }}>

                    {/* Section label */}
                    <p
                      className="text-xs tracking-[0.3em] uppercase mb-6"
                      style={{
                        color: "var(--fg-muted)",
                        borderBottom: "1px solid rgba(201,169,110,0.12)",
                        paddingBottom: "10px",
                      }}
                    >
                      Your Details
                    </p>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-8 mb-8">
                      <FieldGroup label="Full Name" required>
                        <FormInput
                          type="text"
                          value={form.name}
                          onChange={v => set("name", v)}
                          placeholder="Your full name"
                          required
                        />
                      </FieldGroup>
                      <FieldGroup label="Email" required>
                        <FormInput
                          type="email"
                          value={form.email}
                          onChange={v => set("email", v)}
                          placeholder="your@email.com"
                          required
                        />
                      </FieldGroup>
                      <FieldGroup label="Phone Number" required className="col-span-2">
                        <FormInput
                          type="tel"
                          value={form.phone}
                          onChange={v => set("phone", v)}
                          placeholder={siteConfig.phone}
                          required
                        />
                      </FieldGroup>
                    </div>

                    <p
                      className="text-xs tracking-[0.3em] uppercase mb-6"
                      style={{
                        color: "var(--fg-muted)",
                        borderBottom: "1px solid rgba(201,169,110,0.12)",
                        paddingBottom: "10px",
                      }}
                    >
                      Booking Details
                    </p>

                    <div className="grid grid-cols-3 gap-x-6 gap-y-8 mb-8">
                      <FieldGroup label="Date" required>
                        <FormInput
                          type="date"
                          value={form.date}
                          onChange={v => set("date", v)}
                          required
                        />
                      </FieldGroup>
                      <FieldGroup label="Time" required>
                        <FormSelect
                          value={form.time}
                          onChange={v => set("time", v)}
                          options={times}
                          placeholder="Select time"
                          required
                        />
                      </FieldGroup>
                      <FieldGroup label="Party Size" required>
                        <FormSelect
                          value={form.party}
                          onChange={v => set("party", v)}
                          options={partySizes}
                          placeholder="Select size"
                          required
                        />
                      </FieldGroup>
                    </div>

                    <p
                      className="text-xs tracking-[0.3em] uppercase mb-6"
                      style={{
                        color: "var(--fg-muted)",
                        borderBottom: "1px solid rgba(201,169,110,0.12)",
                        paddingBottom: "10px",
                      }}
                    >
                      Special Details
                    </p>

                    <div className="space-y-8 mb-10">
                      <FieldGroup label="Occasion">
                        <FormSelect
                          value={form.occasion}
                          onChange={v => set("occasion", v)}
                          options={occasions}
                          placeholder="Select occasion (optional)"
                        />
                      </FieldGroup>
                      <FieldGroup label="Special Requests or Dietary Requirements">
                        <textarea
                          value={form.requests}
                          onChange={e => set("requests", e.target.value)}
                          placeholder="Allergies, dietary restrictions, celebration notes, seating preferences..."
                          rows={4}
                          style={{
                            width: "100%",
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(201,169,110,0.15)",
                            borderBottom: "1px solid rgba(201,169,110,0.4)",
                            color: "var(--fg)",
                            padding: "14px 16px",
                            fontSize: "14px",
                            fontFamily: "inherit",
                            outline: "none",
                            resize: "none",
                            transition: "border-color 0.3s",
                          }}
                        />
                      </FieldGroup>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-5 text-sm tracking-[0.3em] uppercase font-semibold transition-all hover:opacity-90 disabled:opacity-40"
                      style={{
                        background: "linear-gradient(135deg, var(--gold-dark), var(--gold), var(--gold-light), var(--gold))",
                        color: "var(--bg)",
                        letterSpacing: "0.3em",
                      }}
                    >
                      {loading ? "Confirming..." : "✦  Confirm Reservation  ✦"}
                    </button>

                    <p
                      className="text-center text-xs mt-5"
                      style={{ color: "var(--fg-dim)" }}
                    >
                      We confirm within 2 hours · Same-day bookings please call directly
                    </p>
                  </form>
                )}

                {/* Gold bottom bar */}
                <div
                  style={{
                    height: "3px",
                    background: "linear-gradient(90deg, var(--gold-dark), var(--gold), var(--gold-light), var(--gold), var(--gold-dark))",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

/* ── Helper components ── */

function FieldGroup({
  label,
  required,
  children,
  className = "",
}: {
  label: string
  required?: boolean
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <label
        style={{
          display: "block",
          fontSize: "10px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--gold)",
          marginBottom: "10px",
          fontFamily: "inherit",
        }}
      >
        {label}
        {required && (
          <span style={{ color: "var(--gold)", marginLeft: "4px" }}>*</span>
        )}
      </label>
      {children}
    </div>
  )
}

function FormInput({
  type,
  value,
  onChange,
  placeholder,
  required,
}: {
  type: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  required?: boolean
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      style={{
        width: "100%",
        background: "rgba(255,255,255,0.03)",
        border: "none",
        borderBottom: "1px solid rgba(201,169,110,0.3)",
        color: "var(--fg)",
        padding: "12px 0",
        fontSize: "15px",
        fontFamily: "inherit",
        outline: "none",
        transition: "border-color 0.3s",
        colorScheme: "dark",
      }}
      onFocus={e => (e.target.style.borderBottomColor = "var(--gold)")}
      onBlur={e => (e.target.style.borderBottomColor = "rgba(201,169,110,0.3)")}
    />
  )
}

function FormSelect({
  value,
  onChange,
  options,
  placeholder,
  required,
}: {
  value: string
  onChange: (v: string) => void
  options: string[]
  placeholder?: string
  required?: boolean
}) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      required={required}
      style={{
        width: "100%",
        background: "rgba(10,8,4,0.8)",
        border: "none",
        borderBottom: "1px solid rgba(201,169,110,0.3)",
        color: value ? "var(--fg)" : "var(--fg-dim)",
        padding: "12px 0",
        fontSize: "15px",
        fontFamily: "inherit",
        outline: "none",
        cursor: "pointer",
        transition: "border-color 0.3s",
        appearance: "none",
      }}
      onFocus={e => (e.target.style.borderBottomColor = "var(--gold)")}
      onBlur={e => (e.target.style.borderBottomColor = "rgba(201,169,110,0.3)")}
    >
      <option value="" style={{ background: "#0a0804" }}>
        {placeholder}
      </option>
      {options.map(o => (
        <option key={o} value={o} style={{ background: "#0a0804" }}>
          {o}
        </option>
      ))}
    </select>
  )
}


"use client"

import { useState } from "react"
import { siteConfig } from "@/config/site"
import { Instagram, Facebook } from "lucide-react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail("")
  }

  const navLinks = [
    { label: "Menu", href: "#menu" },
    { label: "About", href: "#experience" },
    { label: "Gallery", href: "#gallery" },
    { label: "Events", href: "#events" },
    { label: "Location", href: "#location" },
    { label: "Reservations", href: "#reservations" },
  ]

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <div className="divider-gold" />
      <footer style={{ background: "var(--bg)" }}>

        {/* Main footer — 3 columns all centered */}
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20 lg:py-24">
          <div className="grid lg:grid-cols-3 gap-16">

            {/* Col 1 — Brand */}
            <div className="flex flex-col items-center text-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex flex-col items-center mb-6"
              >
                <span
                  className="text-sm font-bold tracking-[0.25em] mb-1"
                  style={{
                    color: "var(--gold)",
                    fontFamily: "var(--font-display, Georgia, serif)",
                  }}
                >
                  THE GRAND TABLE
                </span>
                <span
                  className="text-xs tracking-[0.15em]"
                  style={{ color: "var(--fg-muted)", fontSize: "10px" }}
                >
                  EST. {siteConfig.established} · SAN FRANCISCO
                </span>
              </button>

              <p
                className="text-sm leading-loose mb-8"
                style={{ color: "var(--fg-muted)", maxWidth: "260px" }}
              >
                {siteConfig.description}
              </p>

              <div className="flex items-center justify-center gap-4">
                {siteConfig.social.instagram && (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-60"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                )}
                {siteConfig.social.facebook && (
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-60"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Col 2 — Navigation */}
            <div className="flex flex-col items-center text-center">
              <p
                className="text-xs tracking-[0.25em] uppercase mb-6"
                style={{ color: "var(--gold)" }}
              >
                Navigate
              </p>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-sm tracking-wide transition-opacity hover:opacity-60"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Contact + Newsletter */}
            <div className="flex flex-col items-center text-center">
              <p
                className="text-xs tracking-[0.25em] uppercase mb-6"
                style={{ color: "var(--gold)" }}
              >
                Contact
              </p>

              <div className="space-y-3 mb-10">
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  {siteConfig.address}
                </p>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  {siteConfig.city}
                </p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="block text-sm transition-opacity hover:opacity-70"
                  style={{ color: "var(--fg)" }}
                >
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block text-sm transition-opacity hover:opacity-70"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {siteConfig.email}
                </a>
              </div>

              <p
                className="text-xs tracking-[0.2em] uppercase mb-4"
                style={{ color: "var(--gold)" }}
              >
                Stay in Touch
              </p>

              {subscribed ? (
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  Thank you — welcome to our table.
                </p>
              ) : (
                <form
                  onSubmit={handleNewsletter}
                  className="flex w-full max-w-xs"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    style={{
                      flex: 1,
                      background: "transparent",
                      border: "none",
                      borderBottom: "1px solid var(--border)",
                      color: "var(--fg)",
                      padding: "10px 0",
                      fontSize: "13px",
                      fontFamily: "inherit",
                      outline: "none",
                      textAlign: "center",
                    }}
                  />
                  <button
                    type="submit"
                    className="text-xs tracking-[0.15em] uppercase px-4 py-2 ml-3 transition-all hover:opacity-80 flex-shrink-0"
                    style={{
                      background: "var(--gold)",
                      color: "var(--bg)",
                    }}
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar — fully centered */}
        <div
          className="px-6 lg:px-20 py-6"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-3">
            <p className="text-xs" style={{ color: "var(--fg-dim)" }}>
              © {new Date().getFullYear()} The Grand Table. All rights reserved.
            </p>
            <p className="text-xs" style={{ color: "var(--fg-dim)" }}>
              Template by{" "}
              <a
                href="https://readysetgosites.com"
                className="transition-opacity hover:opacity-70"
                style={{ color: "var(--gold)" }}
              >
                ReadySetGoSites
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
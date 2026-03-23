"use client"

import { useState, useEffect, useRef } from "react"
import { siteConfig } from "@/config/site"
import { Menu, X, ChevronDown } from "lucide-react"

const navLinks = [
  { label: "Menu", href: "#menu", hasMega: true },
  { label: "About", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#location" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const megaRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleMegaEnter = () => {
    clearTimeout(timeoutRef.current)
    setMegaOpen(true)
  }

  const handleMegaLeave = () => {
    timeoutRef.current = setTimeout(() => setMegaOpen(false), 150)
  }

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
    setMobileOpen(false)
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: "rgba(10,8,4,0.97)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(201,169,110,0.15)",
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col items-start"
          >
            <span
              className="font-bold tracking-[0.2em] text-sm"
              style={{ color: "var(--gold)", fontFamily: "var(--font-display, Georgia, serif)" }}
            >
              THE GRAND TABLE
            </span>
            <span
             className="text-xs tracking-[0.15em] uppercase transition-colors hover:opacity-80"
              style={{ color: "rgba(245,234,208,0.8)" }}
            >
              EST. {siteConfig.established} · SAN FRANCISCO
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.hasMega ? (
                <div
                  key={link.label}
                  ref={megaRef}
                  onMouseEnter={handleMegaEnter}
                  onMouseLeave={handleMegaLeave}
                  className="relative"
                >
                  <button
                    className="flex items-center gap-1 text-xs tracking-[0.15em] uppercase transition-colors hover:opacity-80"
                    style={{ color: megaOpen ? "var(--gold)" : "rgba(245,234,208,0.8)" }}
                  >
                    {link.label}
                    <ChevronDown
                      className="w-3 h-3 transition-transform"
                      style={{ transform: megaOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </button>

                  {/* Mega menu */}
                  {megaOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[680px] rounded-none"
                      style={{
                        background: "rgba(10,8,4,0.98)",
                        border: "1px solid var(--border)",
                        borderTop: "1px solid var(--gold)",
                      }}
                      onMouseEnter={handleMegaEnter}
                      onMouseLeave={handleMegaLeave}
                    >
                      <div className="grid grid-cols-3 gap-0">
                        {siteConfig.menuCategories.slice(0, 3).map((cat, i) => (
                          <div
                            key={cat.id}
                            className="p-6"
                            style={{ borderRight: i < 2 ? "1px solid var(--border)" : "none" }}
                          >
                            <p
                              className="text-xs tracking-[0.2em] mb-4 uppercase"
                              style={{ color: "var(--gold)" }}
                            >
                              {cat.label}
                            </p>
                            <ul className="space-y-2">
                              {cat.items.slice(0, 4).map((item) => (
                                <li key={item.name}>
                                  <button
                                    onClick={() => scrollTo("#menu")}
                                    className="text-left w-full group"
                                  >
                                    <span
                                      className="text-sm block transition-colors group-hover:opacity-80"
                                      style={{
                                        color: "var(--fg)",
                                        fontFamily: "var(--font-display, Georgia, serif)",
                                      }}
                                    >
                                      {item.name}
                                    </span>
                                    <span className="text-xs" style={{ color: "var(--fg-muted)" }}>
                                      {item.price}
                                    </span>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Featured tasting menu */}
                      <div
                        className="flex items-center justify-between px-6 py-4"
                        style={{ borderTop: "1px solid var(--border)", background: "rgba(201,169,110,0.05)" }}
                      >
                        <div>
                          <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "var(--gold)" }}>
                            Chef's Tasting Menu
                          </p>
                          <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                            Eight courses · Wine pairing available · $195 per guest
                          </p>
                        </div>
                        <button
                          onClick={() => scrollTo("#reservations")}
                          className="text-xs tracking-[0.15em] uppercase px-5 py-2.5 transition-all hover:opacity-80"
                          style={{
                            border: "1px solid var(--gold)",
                            color: "var(--gold)",
                          }}
                        >
                          Reserve
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-xs tracking-[0.15em] uppercase transition-colors hover:opacity-80"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {link.label}
                </button>
              )
            )}
          </div>

          {/* Reserve CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => scrollTo("#reservations")}
              className="text-xs tracking-[0.2em] uppercase px-6 py-2.5 transition-all hover:opacity-90"
              style={{
                background: "var(--gold)",
                color: "var(--bg)",
                fontWeight: "600",
              }}
            >
              Reserve a Table
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "var(--gold)" }}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Full screen mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center"
          style={{ background: "rgba(10,8,4,0.99)" }}
        >
          <div className="corner-ornament corner-tl" />
          <div className="corner-ornament corner-tr" />
          <div className="corner-ornament corner-bl" />
          <div className="corner-ornament corner-br" />

          <div className="text-center space-y-8">
            {navLinks.map((link, i) => (
              <div key={link.label}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="block text-4xl md:text-6xl font-light tracking-tight transition-all hover:opacity-60"
                  style={{
                    color: "var(--fg)",
                    fontFamily: "var(--font-display, Georgia, serif)",
                    animationDelay: `${i * 80}ms`,
                  }}
                >
                  {link.label}
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollTo("#reservations")}
            className="mt-16 text-xs tracking-[0.3em] uppercase px-8 py-4"
            style={{
              border: "1px solid var(--gold)",
              color: "var(--gold)",
            }}
          >
            Make a Reservation
          </button>

          <p className="mt-8 text-xs tracking-[0.2em]" style={{ color: "var(--fg-muted)" }}>
            {siteConfig.phone}
          </p>
        </div>
      )}
    </>
  )
}

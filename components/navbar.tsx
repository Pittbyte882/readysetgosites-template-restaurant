"use client"

import { useState, useEffect } from "react"
import { Menu, X, UtensilsCrossed } from "lucide-react"

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "Our Story" },
  { href: "#gallery", label: "Gallery" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: isScrolled ? "var(--background)" : "transparent",
        borderBottom: isScrolled ? `1px solid var(--border)` : "none",
        boxShadow: isScrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2"
          style={{ color: isScrolled ? "var(--foreground)" : "#ffffff" }}
        >
          <UtensilsCrossed className="w-6 h-6" style={{ color: "var(--primary)" }} />
          <span
            className="text-xl font-bold tracking-wide"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            The Grand Table
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-all hover:opacity-70 tracking-wide"
              style={{
                color: isScrolled ? "var(--foreground)" : "#ffffff",
                fontFamily: "var(--font-sans)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservation"
            className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
              fontFamily: "var(--font-sans)",
            }}
          >
            Reserve a Table
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          style={{ color: isScrolled ? "var(--foreground)" : "#ffffff" }}
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div
          className="md:hidden border-t px-6 py-4 space-y-3"
          style={{
            background: "var(--background)",
            borderColor: "var(--border)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
              onClick={() => setIsMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservation"
            className="block w-full text-center px-5 py-3 rounded-full text-sm font-semibold mt-2"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
              fontFamily: "var(--font-sans)",
            }}
            onClick={() => setIsMobileOpen(false)}
          >
            Reserve a Table
          </a>
        </div>
      )}
    </header>
  )
}
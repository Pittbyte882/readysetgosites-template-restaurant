"use client"

import { useTheme, Theme } from "@/lib/theme-context"
import { Palette } from "lucide-react"
import { useState } from "react"

const themes: { id: Theme; label: string; colors: string[] }[] = [
  {
    id: "warm",
    label: "Warm & Rustic",
    colors: ["#c8502a", "#d4a017", "#faf8f3"],
  },
  {
    id: "modern",
    label: "Modern & Minimal",
    colors: ["#c9a84c", "#0a0a0a", "#f5f5f5"],
  },
  {
    id: "fresh",
    label: "Fresh & Vibrant",
    colors: ["#2d6a2d", "#7ab648", "#f8faf5"],
  },
  {
    id: "bold",
    label: "Bold & Dramatic",
    colors: ["#e63946", "#0d0d0d", "#f0f0f0"],
  },
]

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div
        className="relative"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {isOpen && (
          <div
            className="absolute bottom-14 left-0 rounded-2xl shadow-2xl p-4 w-56 border"
            style={{
              background: "var(--card)",
              borderColor: "var(--border)",
              color: "var(--card-foreground)",
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-3"
              style={{ color: "var(--muted-foreground)" }}
            >
              Color Theme
            </p>
            <div className="space-y-2">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id)
                    setIsOpen(false)
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-all hover:opacity-80"
                  style={{
                    background: theme === t.id ? "var(--muted)" : "transparent",
                    border: theme === t.id ? `1px solid var(--primary)` : "1px solid transparent",
                  }}
                >
                  <div className="flex gap-1">
                    {t.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 rounded-full border border-black/10"
                        style={{ background: color }}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium" style={{ color: "var(--card-foreground)" }}>
                    {t.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all hover:opacity-90 active:scale-95"
          style={{
            background: "var(--primary)",
            color: "var(--primary-foreground)",
          }}
        >
          <Palette className="w-4 h-4" />
          <span className="text-sm font-semibold">Theme</span>
        </button>
      </div>
    </div>
  )
}
"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { siteConfig } from "@/config/site"
import { Palette } from "lucide-react"

type ThemeName = keyof typeof siteConfig.themes

interface ThemeContextType {
  theme: ThemeName
  setTheme: (t: ThemeName) => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "warm",
  setTheme: () => {},
})

const themeClassMap: Record<ThemeName, string> = {
  warm: "",
  modern: "theme-modern",
  fresh: "theme-fresh",
  bold: "theme-bold",
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>(siteConfig.defaultTheme as ThemeName)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={themeClassMap[theme]} style={{ background: "var(--bg)", minHeight: "100vh" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const themes = Object.entries(siteConfig.themes) as [ThemeName, typeof siteConfig.themes.warm][]

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {open && (
        <div
          className="absolute bottom-14 right-0 mb-2 p-4 rounded-none"
          style={{
            background: "rgba(10,8,4,0.98)",
            border: "1px solid rgba(201,169,110,0.3)",
            width: "200px",
          }}
        >
          <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(201,169,110,0.6)" }}>
            Theme
          </p>
          <div className="space-y-2">
            {themes.map(([key, val]) => (
              <button
                key={key}
                onClick={() => { setTheme(key); setOpen(false) }}
                className="w-full flex items-center gap-3 px-3 py-2.5 text-left transition-all hover:opacity-80"
                style={{
                  background: theme === key ? "rgba(201,169,110,0.1)" : "transparent",
                  border: theme === key ? "1px solid rgba(201,169,110,0.4)" : "1px solid transparent",
                }}
              >
                <div
                  className="w-4 h-4 rounded-full flex-shrink-0"
                  style={{ background: val.primary }}
                />
                <span className="text-xs" style={{ color: theme === key ? val.primary : "#6a5a40" }}>
                  {val.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-3 text-xs tracking-[0.15em] uppercase transition-all hover:opacity-80"
        style={{
          background: "rgba(10,8,4,0.95)",
          border: "1px solid rgba(201,169,110,0.4)",
          color: "rgba(201,169,110,0.8)",
        }}
      >
        <Palette className="w-3.5 h-3.5" />
        Theme
      </button>
    </div>
  )
}

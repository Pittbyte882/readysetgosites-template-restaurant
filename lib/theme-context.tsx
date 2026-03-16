"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export type Theme = "warm" | "modern" | "fresh" | "bold"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "warm",
  setTheme: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("warm")

  const themeClass = {
    warm: "",
    modern: "theme-modern",
    fresh: "theme-fresh",
    bold: "theme-bold",
  }[theme]

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={themeClass}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
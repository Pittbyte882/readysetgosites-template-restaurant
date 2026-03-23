import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { MenuSection } from "@/components/menu-section"
import { PhotoBreak } from "@/components/photo-break"
import { Reservations } from "@/components/reservation"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { Events } from "@/components/events"
import { Location } from "@/components/location"
import { Footer } from "@/components/footer"
import { ThemeProvider, ThemeSwitcher } from "@/components/theme-switcher"

export default function Home() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <MenuSection />
        <PhotoBreak />
        <Reservations />
        <Gallery />
        <Testimonials />
        <Events />
        <Location />
      </main>
      <Footer />
      <ThemeSwitcher />
    </ThemeProvider>
  )
}

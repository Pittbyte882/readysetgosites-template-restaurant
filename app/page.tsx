import { ThemeProvider } from "@/lib/theme-context"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Menu } from "@/components/menu"
import { About } from "@/components/about"
import { Reservation } from "@/components/reservation"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { Events } from "@/components/events"
import { Location } from "@/components/location"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Reservation />
        <Gallery />
        <Testimonials />
        <Events />
        <Location />
        <Contact />
        <Footer />
      </main>
      <ThemeSwitcher />
    </ThemeProvider>
  )
}
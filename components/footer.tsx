import { UtensilsCrossed, Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer
      className="py-12 px-6 border-t"
      style={{ background: "var(--background)", borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <UtensilsCrossed className="w-6 h-6" style={{ color: "var(--primary)" }} />
              <span
                className="text-xl font-bold"
                style={{ color: "var(--foreground)", fontFamily: "var(--font-serif)" }}
              >
                The Grand Table
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-4 max-w-xs"
              style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
            >
              An unforgettable dining experience where every dish tells a story.
              Seasonal ingredients, timeless recipes, exceptional hospitality.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-lg transition-all hover:opacity-70"
                  style={{ background: "var(--secondary)", color: "var(--muted-foreground)" }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-semibold mb-4"
              style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Menu", "Our Story", "Gallery", "Events", "Contact"].map((link) => (
                <li key={link}>
                <a  
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm transition-opacity hover:opacity-70"
                    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Reservation */}
          <div>
            <h4
              className="font-semibold mb-4"
              style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
            >
              Reservations
            </h4>
            <p
              className="text-sm mb-2"
              style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
            >
              (555) 123-4567
            </p>
            <p
              className="text-sm mb-4"
              style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
            >
              hello@thegrandtable.com
            </p>
            <a
              href="#reservation"
              className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90"
              style={{
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                fontFamily: "var(--font-sans)",
              }}
            >
              Book a Table
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "var(--border)" }}
        >
          <p
            className="text-sm"
            style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
          >
            © 2026 The Grand Table. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
          >
            Template by{" "}
            <a
              href="https://readysetgosites.com"
              className="hover:opacity-70 transition-opacity"
              style={{ color: "var(--primary)" }}
            >
              ReadySetGoSites
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
import { useEffect, useState } from "react"
import { useActiveSection } from "@/hooks/useActiveSection"
import { useLanguage } from "@/context/LanguageContext"
import { cn } from "@/utils/cn"

const SECTION_IDS = ["hero", "experience", "skills", "projects"]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)
  const { lang, t, toggle } = useLanguage()

  const NAV_LINKS = [
    { label: t.nav.about,      href: "#hero" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.skills,     href: "#skills" },
    { label: t.nav.projects,   href: "#projects" },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "py-3 bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200"
          : "py-5 bg-white border-b border-transparent"
      )}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-semibold text-neutral-900 text-sm tracking-tight">
          Angel Serrano
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors duration-150",
                active === link.href.slice(1)
                  ? "text-brand-accent font-medium"
                  : "text-neutral-500 hover:text-neutral-900"
              )}
            >
              {link.label}
            </a>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggle}
            className="text-xs font-mono px-2.5 py-1 rounded-full border border-neutral-200 text-neutral-500 hover:border-neutral-400 hover:text-neutral-700 transition-colors"
            title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          <a
            href="mailto:angelserrano143@gmail.com"
            className="text-sm px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-700 transition-colors font-medium"
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="text-xs font-mono px-2 py-0.5 rounded-full border border-neutral-200 text-neutral-500"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button
            className="flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={cn("block w-5 h-px bg-neutral-900 transition-all duration-200", menuOpen && "rotate-45 translate-y-2")} />
            <span className={cn("block w-5 h-px bg-neutral-900 transition-all duration-200", menuOpen && "opacity-0")} />
            <span className={cn("block w-5 h-px bg-neutral-900 transition-all duration-200", menuOpen && "-rotate-45 -translate-y-2")} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-neutral-200 py-6 px-6 flex flex-col gap-4 shadow-md">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "text-sm font-medium transition-colors",
                active === link.href.slice(1) ? "text-brand-accent" : "text-neutral-700"
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:angelserrano143@gmail.com"
            onClick={() => setMenuOpen(false)}
            className="text-sm px-4 py-2.5 bg-neutral-900 text-white rounded-lg text-center font-medium"
          >
            {t.nav.contact}
          </a>
        </div>
      )}
    </header>
  )
}

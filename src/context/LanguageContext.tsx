import { createContext, useContext, useState, useCallback } from "react"
import type { Translations } from "@/i18n/types"
import { es } from "@/i18n/es"
import { en } from "@/i18n/en"

type Language = "es" | "en"

interface LanguageContextType {
  lang: Language
  t: Translations
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

const ENGLISH_COUNTRIES = [
  "en-US", "en-GB", "en-CA", "en-AU", "en-NZ", "en-IE", "en-ZA",
  "en-IN", "en-SG", "en-PH", "en",
]

function detectLanguage(): Language {
  try {
    const stored = localStorage.getItem("portfolio-lang") as Language | null
    if (stored === "es" || stored === "en") return stored
  } catch { /* localStorage unavailable */ }

  const browserLang = navigator.language ?? ""
  const isEnglish =
    ENGLISH_COUNTRIES.some((l) => browserLang.startsWith(l)) ||
    browserLang.startsWith("en")
  return isEnglish ? "en" : "es"
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>(detectLanguage)

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next = prev === "es" ? "en" : "es"
      try { localStorage.setItem("portfolio-lang", next) } catch { /* ok */ }
      return next
    })
  }, [])

  const t = lang === "en" ? en : es

  return (
    <LanguageContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider")
  return ctx
}

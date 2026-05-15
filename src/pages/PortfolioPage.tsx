import { LanguageProvider } from "@/context/LanguageContext"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import Experience from "@/components/sections/Experience"
import Skills from "@/components/sections/Skills"
import Projects from "@/components/sections/Projects"

export default function PortfolioPage() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </LanguageProvider>
  )
}

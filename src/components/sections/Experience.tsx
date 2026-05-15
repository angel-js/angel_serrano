import { useLanguage } from "@/context/LanguageContext"
import SectionLabel from "@/components/ui/SectionLabel"
import Reveal from "@/components/ui/Reveal"
import ExperienceCard from "./ExperienceCard"

export default function Experience() {
  const { t } = useLanguage()
  const { sectionLabel, title, currentLabel, entries } = t.experience

  return (
    <section id="experience" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <Reveal>
          <SectionLabel text={sectionLabel} />
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-14">{title}</h2>
        </Reveal>

        <div>
          {entries.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 150}>
              <ExperienceCard entry={entry} isLast={i === entries.length - 1} currentLabel={currentLabel} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

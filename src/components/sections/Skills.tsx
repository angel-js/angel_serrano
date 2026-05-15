import { useLanguage } from "@/context/LanguageContext"
import SectionLabel from "@/components/ui/SectionLabel"
import Reveal from "@/components/ui/Reveal"
import SkillGroup from "./SkillGroup"

export default function Skills() {
  const { t } = useLanguage()
  const { sectionLabel, title, groups } = t.skills

  return (
    <section id="skills" className="py-24 md:py-32 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <Reveal>
          <SectionLabel text={sectionLabel} />
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-14">{title}</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {groups.map((group, i) => (
            <Reveal key={group.id} delay={i * 100}>
              <SkillGroup group={group} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import type { TranslationExperienceEntry } from "@/i18n/types"
import Tag from "@/components/ui/Tag"

interface Props {
  entry: TranslationExperienceEntry
  isLast: boolean
  currentLabel: string
}

export default function ExperienceCard({ entry, isLast, currentLabel }: Props) {
  return (
    <div className="flex gap-6 md:gap-10">
      {/* Timeline dot + line */}
      <div className="hidden md:flex flex-col items-center pt-1">
        <div
          className={`w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1.5 ${
            entry.current ? "bg-brand-accent" : "bg-neutral-300"
          }`}
        />
        {!isLast && <div className="w-px flex-1 bg-neutral-200 mt-2" />}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <div className={`md:hidden h-0.5 w-8 mb-4 ${entry.current ? "bg-brand-accent" : "bg-neutral-300"}`} />

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 md:gap-4 mb-3">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900">{entry.company}</h3>
            <p className="text-base text-neutral-700 font-medium">{entry.role}</p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-1 flex-shrink-0">
            <span className="text-xs font-mono text-neutral-400 whitespace-nowrap">{entry.period}</span>
            <span className="text-xs font-mono text-neutral-400">{entry.location}</span>
            {entry.current && (
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                {currentLabel}
              </span>
            )}
          </div>
        </div>

        <ul className="space-y-2 mb-4">
          {entry.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2 text-sm text-neutral-600 leading-relaxed">
              <span className="text-neutral-300 flex-shrink-0 mt-1">—</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {entry.technologies.map((tech) => (
            <Tag key={tech} label={tech} />
          ))}
        </div>
      </div>
    </div>
  )
}

import type { TranslationSkillGroup } from "@/i18n/types"
import Tag from "@/components/ui/Tag"

interface Props {
  group: TranslationSkillGroup
}

export default function SkillGroup({ group }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-neutral-200 p-6 md:p-8">
      <h3 className="text-xs font-semibold text-neutral-900 mb-4 tracking-widest uppercase font-mono">
        {group.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <Tag key={skill} label={skill} variant="accent" size="md" />
        ))}
      </div>
    </div>
  )
}

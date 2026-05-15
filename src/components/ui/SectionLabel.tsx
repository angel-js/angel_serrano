interface Props {
  text: string
}

export default function SectionLabel({ text }: Props) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="h-px w-8 bg-neutral-300" />
      <span className="text-xs font-mono tracking-widest uppercase text-neutral-400">
        {text}
      </span>
    </div>
  )
}

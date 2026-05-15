import { cn } from "@/utils/cn"

type Variant = "default" | "accent"

interface Props {
  label: string
  variant?: Variant
  size?: "sm" | "md"
}

const variants: Record<Variant, string> = {
  default: "bg-neutral-100 text-neutral-600 border border-neutral-200",
  accent:  "bg-brand-accent-lt text-brand-accent border border-blue-200",
}

export default function Tag({ label, variant = "default", size = "sm" }: Props) {
  return (
    <span
      className={cn(
        "inline-block font-mono rounded-full",
        size === "sm" ? "text-xs px-2.5 py-1" : "text-sm px-3 py-1.5",
        variants[variant]
      )}
    >
      {label}
    </span>
  )
}

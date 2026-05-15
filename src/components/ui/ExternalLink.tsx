interface Props {
  href: string
  children: React.ReactNode
  className?: string
}

export default function ExternalLink({ href, children, className = "" }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-1 hover:text-brand-accent transition-colors duration-150 ${className}`}
    >
      {children}
      <span className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-current">
        ↗
      </span>
    </a>
  )
}

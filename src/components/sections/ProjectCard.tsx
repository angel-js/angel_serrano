import type { GitHubRepo } from "@/types/github"
import Tag from "@/components/ui/Tag"
import ExternalLink from "@/components/ui/ExternalLink"

interface Props {
  repo: GitHubRepo
  viewLabel: string
}

export function ProjectCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-neutral-200 p-6 animate-pulse">
      <div className="h-4 bg-neutral-100 rounded w-2/3 mb-3" />
      <div className="h-3 bg-neutral-100 rounded w-full mb-2" />
      <div className="h-3 bg-neutral-100 rounded w-4/5 mb-6" />
      <div className="flex gap-2">
        <div className="h-6 bg-neutral-100 rounded-full w-16" />
        <div className="h-6 bg-neutral-100 rounded-full w-12" />
      </div>
    </div>
  )
}

export default function ProjectCard({ repo, viewLabel }: Props) {
  return (
    <div className="group bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-neutral-900 leading-snug break-all">
          {repo.name}
        </h3>
        <ExternalLink href={repo.html_url} className="text-neutral-400 text-xs flex-shrink-0">
          {viewLabel}
        </ExternalLink>
      </div>

      <p className="text-sm text-neutral-600 leading-relaxed line-clamp-2 flex-1">
        {repo.description}
      </p>

      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          {repo.language && <Tag label={repo.language} />}
          {repo.topics.slice(0, 2).map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
        {repo.stargazers_count > 0 && (
          <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
            ★ {repo.stargazers_count}
          </span>
        )}
      </div>
    </div>
  )
}

import { useLanguage } from "@/context/LanguageContext"
import { useGitHubRepos } from "@/hooks/useGitHubRepos"
import SectionLabel from "@/components/ui/SectionLabel"
import Reveal from "@/components/ui/Reveal"
import ProjectCard, { ProjectCardSkeleton } from "./ProjectCard"
import ExternalLink from "@/components/ui/ExternalLink"

export default function Projects() {
  const { t } = useLanguage()
  const { sectionLabel, title, viewAll, view, loadError, viewOnGitHub } = t.projects
  const { repos, loading, error } = useGitHubRepos("angel-js")

  return (
    <section id="projects" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <Reveal>
          <SectionLabel text={sectionLabel} />
          <div className="flex items-end justify-between mb-14 gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">{title}</h2>
            <ExternalLink
              href="https://github.com/angel-js"
              className="text-sm text-neutral-500 font-medium hidden md:inline-flex"
            >
              {viewAll}
            </ExternalLink>
          </div>
        </Reveal>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => <ProjectCardSkeleton key={i} />)}
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <p className="text-neutral-500 text-sm">{loadError}</p>
            <ExternalLink href="https://github.com/angel-js" className="text-sm font-semibold text-neutral-700">
              {viewOnGitHub}
            </ExternalLink>
          </div>
        )}

        {!loading && !error && repos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo, i) => (
              <Reveal key={repo.id} delay={i * 80}>
                <ProjectCard repo={repo} viewLabel={view} />
              </Reveal>
            ))}
          </div>
        )}

        <div className="mt-10 flex justify-center md:hidden">
          <ExternalLink href="https://github.com/angel-js" className="text-sm font-medium text-neutral-600">
            {viewAll}
          </ExternalLink>
        </div>
      </div>
    </section>
  )
}

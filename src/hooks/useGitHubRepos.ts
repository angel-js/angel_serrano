import { useEffect, useState } from "react"
import type { GitHubRepo } from "@/types/github"

interface UseGitHubReposResult {
  repos: GitHubRepo[]
  loading: boolean
  error: boolean
}

export function useGitHubRepos(username: string): UseGitHubReposResult {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(false)

    fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=30`
    )
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API error")
        return res.json() as Promise<GitHubRepo[]>
      })
      .then((data) => {
        if (cancelled) return
        const filtered = data
          .filter((r) => !r.fork && r.description !== null && r.description !== "")
          .slice(0, 6)
        setRepos(filtered)
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => { cancelled = true }
  }, [username])

  return { repos, loading, error }
}

export interface TranslationExperienceEntry {
  id: string
  company: string
  role: string
  period: string
  location: string
  current: boolean
  bullets: string[]
  technologies: string[]
}

export interface TranslationSkillGroup {
  id: string
  title: string
  skills: string[]
}

export interface Translations {
  lang: "es" | "en"
  nav: {
    about: string
    experience: string
    skills: string
    projects: string
    contact: string
  }
  hero: {
    eyebrow: string
    bio: string
    cta: { work: string; linkedin: string; contact: string }
    available: string
  }
  experience: {
    sectionLabel: string
    title: string
    currentLabel: string
    entries: TranslationExperienceEntry[]
  }
  skills: {
    sectionLabel: string
    title: string
    groups: TranslationSkillGroup[]
  }
  projects: {
    sectionLabel: string
    title: string
    viewAll: string
    view: string
    loadError: string
    viewOnGitHub: string
  }
  footer: {
    copyright: string
  }
}

import type { Translations } from "./types"

export const en: Translations = {
  lang: "en",
  nav: {
    about: "About",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    eyebrow: "— Senior Backend & Data Platform Engineer",
    bio: "Data Platform Engineer with 5+ years in distributed systems, backend development, and batch/streaming processing. I lead end-to-end technical decisions, building scalable platforms aligned to business goals.",
    cta: { work: "View experience", linkedin: "LinkedIn", contact: "Contact" },
    available: "Available",
  },
  experience: {
    sectionLabel: "Career",
    title: "Work Experience",
    currentLabel: "Current",
    entries: [
      {
        id: "scotiabank",
        company: "Scotiabank",
        role: "Data Platform Engineer / Tech Lead",
        period: "2023 — Present",
        location: "Santiago, Chile",
        current: true,
        bullets: [
          "Led core banking modernization, migrating batch architectures to real-time streaming with Kafka and Spring Boot, reducing latency by ~99% (24h → seconds) and enabling real-time operational decisions.",
          "Designed and scaled event-driven distributed systems processing 12M events/day, improving performance and reducing production incidents by 20%.",
          "Defined end-to-end architecture (API-first, hexagonal, observability), leading the development team and increasing delivery velocity by 30%.",
        ],
        technologies: ["Java", "Spring Boot", "Apache Kafka", "Kafka Streams", "GCP", "Kubernetes", "Python"],
      },
      {
        id: "vass",
        company: "VASS Consulting",
        role: "Software Backend Engineer",
        period: "2022 — 2023",
        location: "Santiago, Chile",
        current: false,
        bullets: [
          "Built 20+ backend microservices with Java (Spring Boot), Python (FastAPI), and TypeScript (NestJS), supporting 15–30K daily users on distributed architectures.",
          "Optimized database queries by redesigning indexes and efficient joins, reducing response times by 75% (2s → 500ms).",
          "Designed and implemented RESTful APIs for system integration, improving data processing efficiency and ensuring stable, scalable services.",
        ],
        technologies: ["Java", "Spring Boot", "Python", "FastAPI", "TypeScript", "PostgreSQL", "Docker", "AWS"],
      },
    ],
  },
  skills: {
    sectionLabel: "Tech Stack",
    title: "Technologies",
    groups: [
      {
        id: "backend",
        title: "Backend",
        skills: ["Java", "Spring Boot", "Python", "FastAPI", "TypeScript", "NestJS", "REST APIs"],
      },
      {
        id: "data",
        title: "Data & Streaming",
        skills: ["Apache Kafka", "Kafka Streams", "Apache Airflow", "Pub/Sub", "PostgreSQL", "MongoDB", "Redis", "PgVector"],
      },
      {
        id: "cloud",
        title: "Cloud & DevOps",
        skills: ["GCP", "AWS", "Kubernetes", "Docker", "CI/CD", "Cloud Infrastructure"],
      },
      {
        id: "arch",
        title: "Architecture & AI",
        skills: ["Hexagonal Architecture", "Event-Driven", "Microservices", "Clean Architecture", "RAG", "LLM APIs", "AI Integrations"],
      },
    ],
  },
  projects: {
    sectionLabel: "Open Source",
    title: "Projects",
    viewAll: "View all on GitHub",
    view: "view",
    loadError: "Could not load projects.",
    viewOnGitHub: "View projects on GitHub",
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Angel Serrano Bastidas`,
  },
}

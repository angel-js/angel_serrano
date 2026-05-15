import type { Translations } from "./types"

export const es: Translations = {
  lang: "es",
  nav: {
    about: "Sobre mí",
    experience: "Experiencia",
    skills: "Skills",
    projects: "Proyectos",
    contact: "Contacto",
  },
  hero: {
    eyebrow: "— Senior Backend & Data Platform Engineer",
    bio: "Data Platform Engineer con +5 años en sistemas distribuidos, backend y procesamiento batch/streaming. Lidero decisiones técnicas end-to-end, construyendo plataformas escalables alineadas a objetivos de negocio.",
    cta: { work: "Ver experiencia", linkedin: "LinkedIn", contact: "Contacto" },
    available: "Disponible",
  },
  experience: {
    sectionLabel: "Trayectoria",
    title: "Experiencia laboral",
    currentLabel: "Actual",
    entries: [
      {
        id: "scotiabank",
        company: "Scotiabank",
        role: "Data Platform Engineer / Tech Lead",
        period: "2023 — Presente",
        location: "Santiago, Chile",
        current: true,
        bullets: [
          "Lideré la modernización del core bancario, migrando arquitecturas batch a streaming en tiempo real con Kafka y Spring Boot, reduciendo latencias en ~99% (24h → segundos).",
          "Diseñé y escalé sistemas distribuidos orientados a eventos procesando 12 millones de eventos/día, reduciendo incidentes en producción en -20%.",
          "Definí arquitectura end-to-end (API-first, hexagonal, observabilidad), liderando equipo de desarrollo y aumentando la velocidad de entrega en +30%.",
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
          "Desarrollé +20 microservicios backend con Java (Spring Boot), Python (FastAPI) y TypeScript (NestJS), soportando 15–30K usuarios diarios en arquitecturas distribuidas.",
          "Optimicé consultas a base de datos rediseñando queries con índices y joins eficientes, reduciendo tiempos de respuesta en -75% (2s → 500ms).",
          "Diseñé e implementé APIs RESTful para integración de sistemas, mejorando la eficiencia del procesamiento de datos y garantizando servicios estables y escalables.",
        ],
        technologies: ["Java", "Spring Boot", "Python", "FastAPI", "TypeScript", "PostgreSQL", "Docker", "AWS"],
      },
    ],
  },
  skills: {
    sectionLabel: "Stack técnico",
    title: "Tecnologías",
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
        title: "Arquitectura & AI",
        skills: ["Hexagonal Architecture", "Event-Driven", "Microservicios", "Clean Architecture", "RAG", "LLM APIs", "AI Integrations"],
      },
    ],
  },
  projects: {
    sectionLabel: "Open Source",
    title: "Proyectos",
    viewAll: "Ver todos en GitHub",
    view: "ver",
    loadError: "No se pudo cargar los proyectos.",
    viewOnGitHub: "Ver proyectos en GitHub",
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Angel Serrano Bastidas`,
  },
}

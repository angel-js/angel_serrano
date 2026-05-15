import type { ExperienceEntry } from "@/types/experience"

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: "job-1",
    company: "Tu Empresa Actual",
    role: "Senior Backend Software Engineer",
    period: "Ene 2023 — Presente",
    location: "Remote",
    current: true,
    description:
      "Diseño y mantenimiento de microservicios de alta disponibilidad procesando millones de eventos diarios con Apache Kafka. Liderazgo técnico en migración de arquitectura monolítica a sistemas event-driven en GCP, logrando reducción de latencia del 40%.",
    technologies: ["Java", "Spring Boot", "Apache Kafka", "GCP", "Kubernetes", "Docker"],
  },
  {
    id: "job-2",
    company: "Empresa Anterior",
    role: "Backend Software Engineer",
    period: "Ene 2022 — Dic 2022",
    location: "México City, MX",
    current: false,
    description:
      "Desarrollo de APIs REST y servicios de integración con Python y FastAPI. Implementación de pipelines de datos con Apache Airflow para automatización de reportes y ETL hacia BigQuery.",
    technologies: ["Python", "FastAPI", "Apache Airflow", "PostgreSQL", "Docker", "AWS"],
  },
  {
    id: "job-3",
    company: "Primera Empresa",
    role: "Backend Developer",
    period: "Jun 2021 — Dic 2021",
    location: "México City, MX",
    current: false,
    description:
      "Construcción de servicios backend con Java y Spring Boot para plataforma B2B. Optimización de queries SQL que redujeron tiempos de respuesta en un 60%. Participación activa en adopción de Docker y prácticas de CI/CD.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker", "CI/CD"],
  },
]

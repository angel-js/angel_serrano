import type { SkillGroup } from "@/types/skill"

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "backend",
    title: "Backend",
    skills: ["Java", "Spring Boot", "Python", "FastAPI", "REST APIs", "Microservicios"],
  },
  {
    id: "streaming",
    title: "Data & Streaming",
    skills: ["Apache Kafka", "Apache Airflow", "Event-Driven Architecture", "PostgreSQL", "Redis", "BigQuery"],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    skills: ["GCP", "AWS", "Kubernetes", "Docker", "CI/CD", "Terraform"],
  },
  {
    id: "tools",
    title: "Lenguajes & Herramientas",
    skills: ["Java", "Python", "SQL", "Bash", "Git", "IntelliJ IDEA"],
  },
]

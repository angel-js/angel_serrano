import { useLanguage } from "@/context/LanguageContext"

const TECH_BADGES = ["Java", "Kafka", "Python", "GCP", "K8s"]

export default function Hero() {
  const { t } = useLanguage()
  const { eyebrow, bio, cta, available } = t.hero

  return (
    <section id="hero" className="min-h-screen flex items-center bg-neutral-50 pt-20">
      <div className="max-w-5xl mx-auto px-6 md:px-10 w-full py-20 md:py-28">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">

          {/* Text column */}
          <div className="flex-1 max-w-xl">
            <p
              className="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-5 opacity-0 animate-fade-up"
              style={{ animationDelay: "0ms" }}
            >
              {eyebrow}
            </p>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-neutral-900 leading-[1.05] tracking-tight mb-5 opacity-0 animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              Angel
              <br />
              Serrano
              <br />
              <span className="text-neutral-400">Bastidas</span>
            </h1>

            <p
              className="text-base md:text-lg text-neutral-600 leading-relaxed mb-8 opacity-0 animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              {bio}
            </p>

            <div
              className="flex flex-wrap gap-3 mb-10 opacity-0 animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <a
                href="#experience"
                className="px-6 py-3 bg-neutral-900 text-white text-sm font-semibold rounded-lg hover:bg-neutral-700 transition-colors"
              >
                {cta.work}
              </a>
              <a
                href="https://www.linkedin.com/in/angel-serrano-bastidas/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-neutral-300 text-neutral-700 text-sm font-semibold rounded-lg hover:border-neutral-400 transition-colors"
              >
                {cta.linkedin}
              </a>
              <a
                href="mailto:angelserrano143@gmail.com"
                className="px-6 py-3 border border-neutral-300 text-neutral-700 text-sm font-semibold rounded-lg hover:border-neutral-400 transition-colors"
              >
                {cta.contact}
              </a>
            </div>

            <div
              className="flex flex-wrap gap-2 opacity-0 animate-fade-up"
              style={{ animationDelay: "400ms" }}
            >
              {TECH_BADGES.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded-full bg-white border border-neutral-200 text-neutral-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Photo column */}
          <div
            className="flex-shrink-0 opacity-0 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-neutral-200 scale-110" />
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center overflow-hidden relative">
                {<img src="/photo.JPG" alt="Angel Serrano" className="w-full h-full object-cover" />}
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white border border-neutral-200 rounded-full px-3 py-1 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-neutral-600 whitespace-nowrap">{available}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

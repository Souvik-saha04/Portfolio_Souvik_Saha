import './about.css'
import SectionTitle from "../titlesection/titlesection";

const CARDS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    tag: "01",
    title: "FRONTEND",
    techs: ["React", "Next.js", "Tailwind", "Vite"],
    desc: "Building responsive, pixel-perfect interfaces that feel fast and intuitive.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    tag: "02",
    title: "BACKEND",
    techs: ["Django", "REST APIs", "Nginx", "Langchain"],
    desc: "Scalable server-side architecture, clean APIs, and performant business logic.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    tag: "03",
    title: "DATABASE",
    techs: ["PostgreSQL", "MongoDB", "Redis", "SQLite"],
    desc: "Designing robust data models and optimized queries for any scale.",
  },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <SectionTitle>ABOUT</SectionTitle>

      <p className="about-desc">
        I&apos;m a Full Stack Developer focused on building modern web applications —
        from pixel-perfect interfaces to resilient backend systems and everything in between.
      </p>

      <div className="about-grid">
        {CARDS.map((c, i) => (
          <div key={c.title} className="about-card" style={{ "--i": i }}>
            <div className="about-card-top">
              <div className="about-card-icon">{c.icon}</div>
              <span className="about-card-tag">{c.tag}</span>
            </div>
            <div className="about-card-title">{c.title}</div>
            <div className="about-card-desc">{c.desc}</div>
            <div className="about-card-techs">
              {c.techs.map(t => (
                <span key={t} className="about-tech-pill">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
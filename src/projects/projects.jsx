// components/Projects.jsx
import './projects.css'

import SectionTitle from "../titlesection/titlesection";

const PROJECTS = [
  {
    name: "OmniAI",
    desc: "Chat with documents and websites through intelligent AI conversations. Get instant answers from your content.",
    tags: ["Next.js", "TS", "Tailwind", "Gemini"],
    accent: true,
    demo: false,
  },
  {
    name: "CareerWise",
    desc: "AI interview prep with mock sessions, feedback, and guidance. Built with Next.js, Prisma and Gemini.",
    tags: ["Next.js", "Prisma", "TS", "MongoDB"],
    accent: false,
    demo: true,
  },
  {
    name: "AI Resume Builder",
    desc: "Automated CV generation, cover letter creation, payment integration, analytics dashboard for subscription-based service.",
    tags: ["TS", "React", "Stripe", "+5"],
    accent: false,
    demo: false,
  },
  {
    name: "SecureLife",
    desc: "Comprehensive digital security platform with end-to-end encryption, secure file storage, and identity protection.",
    tags: ["Go", "React", "Docker", "AWS"],
    accent: true,
    demo: true,
  },
  {
    name: "DevBoard",
    desc: "Developer productivity dashboard with GitHub integration, task tracking, and team collaboration features.",
    tags: ["Next.js", "GraphQL", "Postgres"],
    accent: false,
    demo: false,
  },
  {
    name: "BigDash League",
    desc: "Real-time sports analytics platform with live score tracking, player statistics, and fantasy league management.",
    tags: ["React", "Node", "Redis", "Kafka"],
    accent: false,
    demo: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <SectionTitle>PROJECTS</SectionTitle>

      <p className="section-desc">
        A collection of featured projects showcasing different aspects of modern
        software development
      </p>

      <div className="projects-grid">
        {PROJECTS.map((proj, i) => (
          <div key={i} className="project-card">

            {/* Thumbnail — replace inner content with <img> when you have screenshots */}
            <div className="project-thumb">
              <div className="project-thumb-pattern" />
              <span className="project-thumb-icon">{"{}"}</span>
            </div>

            <div className="project-body">
              <div className={`project-name${proj.accent ? " accent" : ""}`}>
                {proj.name}
              </div>

              <p className="project-desc">{proj.desc}</p>

              <div className="project-tags">
                {proj.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>

              <div className="project-actions">
                <a href="#" className="btn btn-outline">&lt;/&gt; CODE</a>
                {proj.demo && (
                  <a href="#" className="btn btn-primary">↗ DEMO</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
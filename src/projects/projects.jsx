// components/Projects.jsx
import './Projects.css';
import SectionTitle from "../titlesection/titlesection";

const PROJECTS = [
  {
    id: "01",
    categories: ["AI", "FULL-STACK"],
    name: "OmniAI",
    desc: "Chat with documents and websites through intelligent AI conversations. Get instant answers from your content with state-of-the-art language models.",
    portions: ["Document Chat", "Web Scraping", "Multi-modal AI"],
    tags: ["Next.js", "TypeScript", "Tailwind", "Gemini"],
    demo: "https://omniai.demo",
    github: "https://github.com",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    previewBg: "#0f3460",
  },
  {
    id: "02",
    categories: ["AI", "SAAS"],
    name: "CareerWise",
    desc: "AI interview prep with mock sessions, real-time feedback, and personalised guidance. Built with Next.js, Prisma and Gemini for a seamless experience.",
    portions: ["Mock Interviews", "AI Feedback", "Career Analytics"],
    tags: ["Next.js", "Prisma", "TypeScript", "MongoDB"],
    demo: "https://careerwise.demo",
    github: "https://github.com",
    gradient: "linear-gradient(135deg, #2d1b69 0%, #11998e 100%)",
    previewBg: "#11998e",
  },
  {
    id: "03",
    categories: ["AI", "AUTOMATION"],
    name: "AI Resume Builder",
    desc: "Automated CV generation, cover letter creation, payment integration and analytics dashboard for a subscription-based service at scale.",
    portions: ["CV Generation", "Cover Letters", "Stripe Payments"],
    tags: ["TypeScript", "React", "Stripe", "OpenAI", "Prisma"],
    demo: null,
    github: "https://github.com",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    previewBg: "#f5576c",
  },
  {
    id: "04",
    categories: ["SECURITY", "FULL-STACK"],
    name: "SecureLife",
    desc: "Comprehensive digital security platform with end-to-end encryption, secure file storage, and identity protection built for enterprise scale.",
    portions: ["E2E Encryption", "Secure Storage", "Identity Shield"],
    tags: ["Go", "React", "Docker", "AWS"],
    demo: "https://securelife.demo",
    github: "https://github.com",
    gradient: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)",
    previewBg: "#1a1a1a",
  },
  {
    id: "05",
    categories: ["PRODUCTIVITY", "DEV TOOLS"],
    name: "DevBoard",
    desc: "Developer productivity dashboard with GitHub integration, task tracking, and team collaboration features designed for modern engineering teams.",
    portions: ["GitHub Sync", "Task Tracking", "Team Collaboration"],
    tags: ["Next.js", "GraphQL", "Postgres"],
    demo: null,
    github: "https://github.com",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    previewBg: "#764ba2",
  },
  {
    id: "06",
    categories: ["SPORTS", "REAL-TIME"],
    name: "BigDash League",
    desc: "Real-time sports analytics platform with live score tracking, player statistics, and fantasy league management powered by event-driven architecture.",
    portions: ["Live Scores", "Player Stats", "Fantasy League"],
    tags: ["React", "Node.js", "Redis", "Kafka"],
    demo: "https://bigdash.demo",
    github: "https://github.com",
    gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
    previewBg: "#f7971e",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <SectionTitle>PROJECTS</SectionTitle>

      <p className="projects-intro">
        A collection of featured projects showcasing different aspects of modern software development
      </p>

      <div className="projects-list">
        {PROJECTS.map((proj, i) => (
          <div key={i} className="project-row">

            {/* ── LEFT: text content ── */}
            <div className="project-left">

              <div className="project-number">{proj.id}</div>

              <div className="project-categories">
                <span className="project-dot">•</span>
                {proj.categories.map((c, ci) => (
                  <span key={ci} className="project-category">
                    {c}{ci < proj.categories.length - 1 ? <span className="project-cat-sep"> · </span> : null}
                  </span>
                ))}
              </div>

              <h3 className="project-name">{proj.name}</h3>

              <p className="project-desc">{proj.desc}</p>

              <div className="project-portions-label">MAIN PORTIONS</div>
              <div className="project-portions">
                {proj.portions.join(" • ")}
              </div>

              <div className="project-tags">
                {proj.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>

              <div className="project-links">
                {proj.demo && (
                  <a href={proj.demo} target="_blank" rel="noreferrer" className="project-link-icon" title="Live Demo">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  </a>
                )}
                <a href={proj.github} target="_blank" rel="noreferrer" className="project-link-icon" title="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* ── RIGHT: preview card ── */}
            <div className="project-right">
              <div className="project-preview" style={{ background: proj.gradient }}>
                <div className="project-preview-name">{proj.name.toUpperCase()}</div>
                <a href={proj.demo || proj.github} target="_blank" rel="noreferrer" className="project-preview-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                  </svg>
                </a>
                {proj.demo && (
                  <div className="project-preview-btn">PROJECT PREVIEW</div>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
// components/Projects.jsx
import './projects.css';
import SectionTitle from "../titlesection/titlesection";

const PROJECTS = [
  {
  id: "01",
  categories: ["AI", "FULL-STACK"],
  name: "GreenGrocers",
  desc: "GreenGrocers is a full-stack e-commerce platform for fresh produce and daily essentials, featuring secure authentication, product management, cart and order processing, and real-time workflows. It integrates an AI-powered bargaining system that enables dynamic price negotiation, enhancing user engagement and personalization.",
  
  portions: [
    "E-commerce System",
    "AI Bargaining Engine",
    "User Authentication",
    "Cart & Order Management"
  ],

  tags: [
    "React",
    "Vite",
    "CSS3",
    "Django",
    "Django REST Framework",
    "Python",
    "REST API"
  ],

  demo: "https://greengrocers-one.vercel.app/",
  github: "https://github.com/Souvik-saha04/citadel",

  gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  previewBg: "#0f3460",
},
  {
  id: "02",
  categories: ["AI", "FULL-STACK"],
  name: "CornPDF AI",
  
  desc: "CornPDF AI is an intelligent document question-answering system that allows users to upload PDFs and interact with them using natural language. It leverages embeddings, vector search, and LLMs to provide accurate, context-aware responses from document content, with secure Firebase-based authentication and a scalable backend architecture.",

  portions: [
    "PDF Upload & Management",
    "Document Q&A (Chat with PDFs)",
    "Vector Search & Embeddings",
    "Authentication System"
  ],

  tags: [
    "React",
    "Vite",
    "CSS3",
    "Django",
    "Django REST Framework",
    "Python",
    "LangChain",
    "FAISS",
    "Pinecone",
    "Firebase Auth",
    "LLMs",
    "REST API"
  ],

  demo: "https://github.com/Souvik-saha04/cornPDF.git",
  github: "https://github.com/Souvik-saha04/cornPDF.git",

  gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
  previewBg: "#203a43",
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
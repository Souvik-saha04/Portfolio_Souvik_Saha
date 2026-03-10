// components/TechStack.jsx
import { useState } from "react";
import './techstack.css'
import SectionTitle from "../titlesection/titlesection";

const CATEGORIES = [
  { key: "all",       label: "All"        },
  { key: "languages", label: "Languages"  },
  { key: "frontend",  label: "Frontend"   },
  { key: "backend",   label: "Backend"    },
  { key: "databases", label: "Databases"  },
  { key: "datascience", label: "Data Science" },
  { key: "devtools",  label: "Dev Tools"  },
];

const TECH_ICONS = [
  // ── Languages ───────────────────────────────────────────────────────────────
  { label: "JavaScript", logo: "/logos/javascript.png", fallback: "JS",  category: "languages" },
  { label: "Python",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",     fallback: "Py",  category: "languages" },
  { label: "Java",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",  fallback: "J",   category: "languages" },
  { label: "C",          logo: "/logos/c.png",          fallback: "C",   category: "languages" },
  { label: "HTML5",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",       fallback: "H5",  category: "languages" },
  { label: "CSS3",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",        fallback: "CSS", category: "languages" },

  // ── Frontend ─────────────────────────────────────────────────────────────────
  { label: "React",     logo: "/logos/react.png",     fallback: "⚛",  category: "frontend" },
  { label: "Tailwind",  logo: "/logos/tailwind.png",  fallback: "Tw", category: "frontend" },
  { label: "Vite",      logo: "/logos/vite.png",      fallback: "V",  category: "frontend" },
  { label: "Axios",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain-wordmark.svg",     fallback: "Ax", category: "frontend" },
  { label: "Jest",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",     fallback: "J",  category: "frontend" },

  // ── Backend ──────────────────────────────────────────────────────────────────
  { label: "Django",    logo: "/logos/django.png",    fallback: "Dj", category: "backend" },
  { label: "Nginx",     logo: "/logos/nginx.png",     fallback: "Ng", category: "backend" },
  { label: "Langchain", logo: "/logos/langchain.jpg", fallback: "LC", category: "backend" },

  // ── Databases ────────────────────────────────────────────────────────────────
  { label: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",  fallback: "🐘",  category: "databases" },
  { label: "Redis",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",     fallback: "R",   category: "databases" },
  { label: "MongoDB",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",   fallback: "M",   category: "databases" },
  { label: "MySQL",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",     fallback: "SQL", category: "databases" },
  { label: "SQLite",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",   fallback: "SQL", category: "databases" },

  // ── Data Science ─────────────────────────────────────────────────────────────
  { label: "Numpy",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",     fallback: "Np", category: "datascience" },
  { label: "Pandas",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",    fallback: "Pd", category: "datascience" },
  { label: "Matplotlib", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",fallback: "Mp", category: "datascience" },

  // ── Dev Tools ────────────────────────────────────────────────────────────────
  { label: "Git",     logo: "/logos/git.png",    fallback: "⎇",  category: "devtools" },
  { label: "GitHub",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", fallback: "GH", category: "devtools" },
  { label: "Figma",   logo: "/logos/figma.png",  fallback: "◐",  category: "devtools" },
  { label: "Vercel",  logo: "/logos/vercel.png", fallback: "▲",  category: "devtools" },
  { label: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",fallback: "Pm", category: "devtools" },
];

export default function TechStack() {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? TECH_ICONS
    : TECH_ICONS.filter(t => t.category === active);

  return (
    <section className="techstack-section">
      <SectionTitle>TECH STACK</SectionTitle>

      <p className="techstack-subtitle">Technologies I have worked with</p>

      {/* ── Category filter tabs ── */}
      <div className="techstack-tabs">
        {CATEGORIES.map(cat => (
          <button
            key={cat.key}
            className={`techstack-tab ${active === cat.key ? "active" : ""}`}
            onClick={() => setActive(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* ── Icons grid ── */}
      <div className="techstack-grid">
        {filtered.map(tech => (
          <div key={tech.label} className="tech-item">
            <div className="tech-icon-wrapper">
              {tech.logo ? (
                <img src={tech.logo} alt={tech.label} className="tech-logo-img" />
              ) : (
                <span className="tech-icon-fallback">{tech.fallback}</span>
              )}
            </div>
            <span className="tech-label">{tech.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
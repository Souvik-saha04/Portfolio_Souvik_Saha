// components/Experience.jsx
import './experience.css'
import SectionTitle from "../titlesection/titlesection";

const EXPERIENCES = [
  
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    period: "AUG 2025 – Present",
    active: false,
    desc: "Working with clients globally to build custom web and mobile solutions. Specializing in full-stack development, API design, and cloud deployments.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <SectionTitle>EXPERIENCE</SectionTitle>

      <p className="section-desc">
        My professional journey building impactful solutions
      </p>

      <div className="exp-list">
        {EXPERIENCES.map((exp, i) => (
          <div key={i} className={`exp-card${exp.active ? " active" : ""}`}>
            <div className="exp-header">
              <span className="exp-role">{exp.role}</span>
              <span className="exp-period">{exp.period}</span>
            </div>
            <div className="exp-company">{exp.company}</div>
            <p className="exp-desc">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
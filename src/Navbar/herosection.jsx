import './Hero.css';
import { useState, useEffect } from "react";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const full = "FULL-STACK _";

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setTyped(full.slice(0, ++i));
      if (i >= full.length) clearInterval(t);
    }, 90);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero">

      {/* grain overlay */}
      <div className="hero-grain" />

      {/* label */}
      <div className="hero-label fade-up">{typed}</div>

      {/* BIG NAME */}
      <div className="hero-name-block fade-up">
        <span className="hero-name-first">SOUVIK</span>
        <span className="hero-name-last">saha</span>
      </div>

      {/* bio */}
      <div className="hero-bio fade-up">
        <p>
          Building <strong>intelligent interfaces</strong>{" "}
          where <em>great design</em> meets{" "}
          <b>GenAI-powered</b> engineering.
        </p>
      </div>

      {/* CTA buttons */}
      <div className="hero-cta-row fade-up">
        <a href="#projects" className="btn-primary">
          Explore Works <span className="arrow">↗</span>
        </a>
        <a href="/autoCV_(2).pdf" download="souvik_saha_cv.pdf" className="btn-outline">
          Download CV ↓
        </a>
      </div>

      {/* Socials */}
      <div className="hero-socials fade-up">
        <a href="https://x.com/iamSouvikss" target="_blank" rel="noreferrer" className="social-btn">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" alt="Twitter" />
        </a>
        <a href="https://linkedin.com/in/your-username" target="_blank" rel="noreferrer" className="social-btn">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" alt="LinkedIn" />
        </a>
        <a href="#contact" className="social-btn">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" alt="Email" />
        </a>
        <a href="https://leetcode.com/u/SOUVIK_SAHA_2004/" target="_blank" rel="noreferrer" className="social-btn">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-original.svg" alt="LeetCode" />
        </a>
      </div>

      {/* divider */}
      <div className="hero-rule fade-up" />

      {/* scroll hint */}
      <div className="hero-scroll">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>

    </section>
  );
}
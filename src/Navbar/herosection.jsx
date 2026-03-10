import './hero.css'
import { useState, useEffect } from "react";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const full = "FULL-STACK DEVELOPER";

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setTyped(full.slice(0, ++i));
      if (i >= full.length) clearInterval(t);
    }, 78);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero">
      <div className="hero-scanlines" />

      <div className="hero-name-row">
        <h1 className="hero-name">
          SOUVIK<br />SAHA
        </h1>
        <img
          src="/logos/profle_photo.jfif"
          alt="Souvik Saha"
          className="hero-photo"
        />
      </div>

      <div className="hero-divider" />

      <p className="hero-subtitle">&gt; {typed}</p>

      <p className="hero-bio">
        Hi, I&apos;m <span className="highlight">Souvik Saha</span> — a Full Stack
        Developer passionate about building scalable web and mobile applications.
        React, Next.js, Python — solutions that are powerful and user-friendly.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn btn-primary">VIEW PROJECTS</a>
        <a href="/autoCV_(2).pdf" download="souvik_saha_cv.pdf"  className="btn btn-outline">DOWNLOAD CV</a>
      </div>

      <div className="hero-socials">
        <a href="https://x.com/iamSouvikss" target="_blank" rel="noreferrer" className="social-btn">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" />
        </a>
        <a href="https://github.com/Souvik-saha04" target="_blank" rel="noreferrer" className="social-btn">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
        </a>
        <a href="https://linkedin.com/in/your-username" target="_blank" rel="noreferrer" className="social-btn">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" />
        </a>
        <a href="https://leetcode.com/u/SOUVIK_SAHA_2004/" target="_blank" rel="noreferrer" className="social-btn">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-original.svg" />
        </a>
      </div>
      
    </section>
  );
}
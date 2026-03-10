
import { useState } from "react";
import "./App.css";

import Navbar     from "./Navbar/navbar";
import Hero       from "./Navbar/herosection";
import About      from "./Navbar/about";
import TechStack  from "./TechStack/techstack";
import Experience from "./experience/experience";
import Projects   from "./projects/projects";
import Contact    from "./contact/contact";

export default function App() {
  const [activeNav, setActiveNav] = useState("ABOUT");

  return (
    <div>
      <div className="grid-bg" />

      <div className="page-wrap">
        <Navbar active={activeNav} setActive={setActiveNav} />
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
        <footer>© 2026 SOUVIK SAHA — ALL SYSTEMS OPERATIONAL</footer>
      </div>
    </div>
  );
}
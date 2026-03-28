// components/Navbar.jsx
import "./Navbar.css";

const NAV_LINKS = ["ABOUT", "EXPERIENCE", "PROJECTS", "CONTACT"];

export default function Navbar({ active, setActive }) {
  return (
    <nav className="navbar">

      {/* Pill logo left */}
      <div className="navbar-logo">
        <span className="navbar-logo-text">SS<span className="navbar-logo-dot">.</span></span>
      </div>

      {/* Center links */}
      <div className="navbar-links">
        {NAV_LINKS.filter(l => l !== "CONTACT").map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={active === link ? "active" : ""}
            onClick={() => setActive(link)}
          >
            {link}
          </a>
        ))}
      </div>

      {/* Contact pill button right */}
      <a
        href="#contact"
        className={`navbar-contact${active === "CONTACT" ? " active" : ""}`}
        onClick={() => setActive("CONTACT")}
      >
        CONTACT
      </a>

    </nav>
  );
}
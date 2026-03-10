// components/Navbar.jsx

import "./navbar.css";

const NAV_LINKS = ["ABOUT", "EXPERIENCE", "PROJECTS", "CONTACT"];

export default function Navbar({ active, setActive }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="navbar-icon">◈</div>
        <span className="navbar-name">SOUVIK SAHA</span>
      </div>

      <div className="navbar-links">
        {NAV_LINKS.map(link => (
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
    </nav>
  );
}
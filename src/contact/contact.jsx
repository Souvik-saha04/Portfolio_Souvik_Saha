// components/Contact.jsx
import './contact.css'
import SectionTitle from "../titlesection/titlesection";

const CONTACTS = [
  { icon: "✉",  value: "souviksh2004@gmail.com" },
  { icon: "⬡",  value: "github.com/souviksaha" },
  { icon: "in", value: "linkedin.com/in/souviksaha" },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <SectionTitle>CONTACT</SectionTitle>

      <p className="contact-desc">
        Have a project in mind? Let&apos;s build something great together.
      </p>

      <div className="contact-list">
        {CONTACTS.map(({ icon, value }) => (
          <div key={value} className="contact-item">
            <span className="contact-icon">{icon}</span>
            <span className="contact-val">{value}</span>
          </div>
        ))}
      </div>

      <a href="mailto:souviksh2004@gmail.com" className="btn btn-primary">
        SEND MESSAGE →
      </a>
    </section>
  );
}
// components/SectionTitle.jsx

export default function SectionTitle({ children }) {
  return (
    <div className="section-title-wrap">
      <div className="section-title-inner">
        <h2>{children}</h2>
      </div>
    </div>
  );
}
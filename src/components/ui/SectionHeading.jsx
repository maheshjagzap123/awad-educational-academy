export default function SectionHeading({ eyebrow, title, subtitle, center }) {
  return (
    <div className={`section-heading ${center ? "text-center" : ""}`} style={{ marginBottom: 28 }}>
      {eyebrow && <span className="pill" style={{ marginBottom: 10 }}>{eyebrow}</span>}
      <h2 style={{ marginTop: eyebrow ? 8 : 0 }}>{title}</h2>
      {subtitle && (
        <p className="muted" style={{ maxWidth: 640, margin: center ? "0 auto" : 0 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

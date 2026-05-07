const Dot = () => (
  <span style={{
    width: "6px", height: "6px", borderRadius: "50%",
    background: "#1565ff", flexShrink: 0, marginTop: "10px",
    display: "inline-block",
  }} />
);

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
      {items.map((t) => (
        <li key={t} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
          <Dot />
          <span style={{ color: "rgba(255,255,255,0.72)", fontSize: "15px", lineHeight: 1.6 }}>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProblemSection() {
  const current = [
    "The phone rings while you're elbow-deep in a job",
    "You can't answer with wet hands, chemicals, or tools",
    "Calls go to voicemail — and most homeowners hang up",
    "You see the missed call hours later, after the lead has moved on",
    "After-hours and weekend inquiries vanish completely",
  ];
  const means = [
    "Lost new pool builds worth $80k–$300k",
    "Lost major remodels worth $20k–$80k",
    "Lost resurfacing, equipment, and backyard projects",
    "Hot leads handed to whichever competitor answered first",
    "No idea which missed call was the project of the month",
    "Negative \"no one answered\" reviews from frustrated homeowners",
  ];
  const ontop = [
    "Voicemail kills 72% of incoming calls — they hang up instead",
    "Homeowners pick whichever contractor calls back fastest",
    "A single new build inquiry can be worth more than a year of phone bills",
    "Hiring a real receptionist costs thousands a month and still misses nights",
  ];

  return (
    <section
      id="problem"
      style={{
        background: "#111827",
        padding: "96px 40px",
        fontFamily: "var(--font-barlow), Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <span className="reveal" style={{
          display: "inline-block", color: "#60a5fa",
          fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em",
          textTransform: "uppercase", marginBottom: "16px",
        }}>
          The Problem
        </span>

        <h2 className="reveal reveal-d1" style={{
          fontSize: "clamp(28px, 3.2vw, 46px)",
          fontWeight: 900, lineHeight: 1.12,
          margin: "0 0 48px", letterSpacing: "-0.02em",
          color: "#ffffff",
        }}>
          Missed Calls Are Costing You Real{" "}
          <span style={{ color: "#60a5fa" }}>$20k–$300k</span>{" "}
          Pool Projects.
        </h2>

        <div style={{
          display: "grid", gap: "16px",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}>
          {[
            { title: "A typical workday looks like this:", items: current },
            { title: "What it actually costs you:", items: means },
            { title: "And here's the kicker:", items: ontop },
          ].map((block, i) => (
            <div key={block.title} className={`reveal reveal-d${i + 1}`} style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: "14px",
              padding: "26px 24px",
            }}>
              <h3 style={{
                fontSize: "15px", fontWeight: 700, margin: "0 0 16px",
                color: "#ffffff", letterSpacing: "-0.01em",
              }}>
                {block.title}
              </h3>
              <BulletList items={block.items} />
            </div>
          ))}
        </div>

        <p
          className="reveal reveal-d4"
          style={{
            marginTop: "40px",
            color: "rgba(255,255,255,0.85)",
            fontSize: "clamp(16px, 1.7vw, 19px)",
            lineHeight: 1.55,
            fontWeight: 600,
            letterSpacing: "-0.005em",
            maxWidth: "900px",
            borderLeft: "3px solid #60a5fa",
            paddingLeft: "20px",
          }}
        >
          A single unanswered call on a new pool build or major remodel can
          be the difference between your best month of the year and another
          slow week.
        </p>
      </div>
    </section>
  );
}

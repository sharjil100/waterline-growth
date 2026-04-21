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
    "Some word-of-mouth, some random website leads",
    'Maybe a boosted post or a small Google campaign "someone set up"',
    "No real tracking on what actually turns into signed projects",
  ];
  const means = [
    "You have slow months you shouldn't have",
    "Competitors show up everywhere online while you disappear",
    "You end up price-shopped against guys with more reviews and nicer ads",
  ];
  const ontop = [
    'Lead vendors sell the same "quote request" to 3–5 contractors',
    "You waste time chasing people who already picked someone else",
    "You're making big-ticket projects fight for scraps of attention online",
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
          Referrals alone won&apos;t fill a{" "}
          <span style={{ color: "#60a5fa" }}>$80k–$300k</span>{" "}
          pipeline forever.
        </h2>

        <div style={{
          display: "grid", gap: "16px",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}>
          {[
            { title: "Right now, most pool contractors are here:", items: current },
            { title: "What that really means:", items: means },
            { title: "On top of that:", items: ontop },
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
      </div>
    </section>
  );
}

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
    "Some word-of-mouth",
    "Some random website leads",
    "Maybe a boosted post or small Google campaign someone set up",
    "No clear tracking on what actually turns into signed projects",
    "No real system for turning online attention into booked estimates",
  ];
  const means = [
    "Lost remodels, resurfacing jobs, and new pool builds",
    "Slow months you should not have",
    "Competitors showing up everywhere online while you disappear",
    "Price shoppers comparing you against contractors with better ads and more reviews",
    "Wasted time chasing people who were never serious",
    "No clear idea which leads, ads, or channels are actually producing revenue",
  ];
  const ontop = [
    "Lead vendors sell the same quote request to 3–5 contractors",
    "Homeowners compare you against whoever replies fastest",
    "Big-ticket pool projects end up fighting for scraps of online attention",
    "Missed calls and slow follow-up can turn into lost work",
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
          Referrals Alone Won&apos;t Fill A{" "}
          <span style={{ color: "#60a5fa" }}>$20k–$300k</span>{" "}
          Pool Pipeline Forever.
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
          A single unanswered call on a pool build or major remodel can be
          your entire monthly marketing budget walking to another contractor.
        </p>
      </div>
    </section>
  );
}

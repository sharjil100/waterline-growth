const items = [
  {
    title: "A done-for-you ad machine",
    body: "Running inside your own accounts — not ours. Built, launched, and optimized by our team.",
  },
  {
    title: "Exclusive leads in your service area",
    body: "No sharing with 5 other builders. Every lead is yours and yours alone.",
  },
  {
    title: "Fewer tire-kickers",
    body: 'Targeting and filters aimed at serious pool projects, not people "just getting prices."',
  },
  {
    title: "Clear tracking click → signed job",
    body: "See exactly how many leads became estimates and how many became signed projects.",
  },
  {
    title: "Realistic budget guidance",
    body: "We'll help you set a budget so one project can pay for many months of marketing.",
  },
  {
    title: "An engineer-minded team",
    body: "Plain-English updates from people who care about math and outcomes, not agency jargon.",
  },
];

export default function WhatYouGetSection() {
  return (
    <section
      id="get"
      style={{
        background: "#f9fafb",
        borderTop: "1px solid #e5e7eb",
        padding: "104px 40px",
        fontFamily: "var(--font-barlow), Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <span className="reveal" style={{
          display: "inline-block", color: "#1565ff",
          fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em",
          textTransform: "uppercase", marginBottom: "16px",
        }}>
          What You Get
        </span>

        <h2 className="reveal reveal-d1" style={{
          fontSize: "clamp(28px, 3.2vw, 46px)",
          fontWeight: 900, lineHeight: 1.12,
          margin: "0 0 52px", letterSpacing: "-0.02em", maxWidth: "820px",
          color: "#111827",
        }}>
          Everything you need to turn ad spend into{" "}
          <span style={{ color: "#1565ff" }}>signed projects.</span>
        </h2>

        <div style={{
          display: "grid", gap: "16px",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}>
          {items.map((it, i) => (
            <div key={it.title} className={`card-lift reveal reveal-d${Math.min(i + 1, 5)}`} style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              padding: "26px 24px",
              boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
            }}>
              <div className="icon-float" style={{
                width: "40px", height: "40px", borderRadius: "10px",
                background: "rgba(21,101,255,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "16px",
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1565ff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h3 style={{
                fontSize: "17px", fontWeight: 800, margin: "0 0 8px",
                color: "#111827", letterSpacing: "-0.01em",
              }}>
                {it.title}
              </h3>
              <p style={{
                color: "#6b7280",
                fontSize: "14.5px", lineHeight: 1.65, margin: 0,
              }}>
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

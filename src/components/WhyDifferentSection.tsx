const cards = [
  {
    title: "Built only for pools.",
    body: "We're not juggling dentists, gyms, and roofers. Just pools and outdoor living.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1565ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C12 2 5 9 5 15a7 7 0 0 0 14 0C19 9 12 2 12 2z" />
        <path d="M8 15c1.5-1.5 3-1 4.5.5S16 17 17.5 15.5" />
      </svg>
    ),
  },
  {
    title: "You keep the assets.",
    body: "Ads, pages, and accounts stay in your name. If we parted ways, you still own everything.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1565ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Signed-project math, not agency fluff.",
    body: 'We care about cost per closed project, not how many "leads" we can pretend look good in a spreadsheet.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1565ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m7 15 4-4 4 4 5-6" />
      </svg>
    ),
  },
];

export default function WhyDifferentSection() {
  return (
    <section
      id="why"
      style={{
        background: "#f5f5f5",
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
          Why We&apos;re Different
        </span>

        <h2 className="reveal reveal-d1" style={{
          fontSize: "clamp(28px, 3.2vw, 46px)",
          fontWeight: 900, lineHeight: 1.12,
          margin: "0 0 52px", letterSpacing: "-0.02em", maxWidth: "820px",
          color: "#111827",
        }}>
          Three things most agencies{" "}
          <span style={{ color: "#1565ff" }}>won&apos;t say out loud.</span>
        </h2>

        <div style={{
          display: "grid", gap: "16px",
          gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
        }}>
          {cards.map((c, i) => (
            <div key={c.title} className={`card-lift reveal reveal-d${i + 1}`} style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              padding: "28px 24px",
              boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
            }}>
              <div className="icon-float" style={{
                width: "44px", height: "44px", borderRadius: "10px",
                background: "rgba(21,101,255,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "18px",
              }}>
                {c.icon}
              </div>
              <h3 style={{
                fontSize: "18px", fontWeight: 800, margin: "0 0 10px",
                color: "#111827", letterSpacing: "-0.01em",
              }}>
                {c.title}
              </h3>
              <p style={{
                color: "#6b7280",
                fontSize: "15px", lineHeight: 1.65, margin: 0,
              }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

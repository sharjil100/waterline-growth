const projects = [
  {
    label: "New Builds",
    heading: "Custom Pool Construction",
    body: "Reach homeowners actively planning a new pool — not just browsing. We target buyers with the yard space, budget, and intent to build.",
    stat: "$80k–$300k",
    statLabel: "avg. project value",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1565ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 10c1.5-1.5 3-1 4.5.5S15 12 16.5 10.5" />
      </svg>
    ),
  },
  {
    label: "Remodels",
    heading: "Major Renovations & Remodels",
    body: "Pool replasters, equipment upgrades, and full backyard makeovers. Homeowners who already have a pool and want it transformed.",
    stat: "$20k–$80k",
    statLabel: "avg. project value",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1565ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    label: "Outdoor Living",
    heading: "Full Backyard Transformations",
    body: "Outdoor kitchens, pergolas, fire features, and full landscape builds. High-ticket buyers who want the complete outdoor experience.",
    stat: "$50k–$200k",
    statLabel: "avg. project value",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1565ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

export default function PoolShowcaseSection() {
  return (
    <section
      style={{
        background: "#0d1117",
        borderTop: "1px solid #1f2937",
        padding: "96px 40px",
        fontFamily: "var(--font-barlow), Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "52px" }}>
          <span style={{
            display: "inline-block", color: "#60a5fa",
            fontSize: "12px", fontWeight: 700, letterSpacing: "0.16em",
            textTransform: "uppercase", marginBottom: "16px",
          }}>
            Projects We Help You Win
          </span>
          <h2 style={{
            fontSize: "clamp(28px, 3.4vw, 50px)",
            fontWeight: 900, lineHeight: 1.08,
            margin: "0 0 16px", letterSpacing: "-0.02em",
            color: "#ffffff", maxWidth: "720px",
          }}>
            New builds. Remodels.{" "}
            <span style={{ color: "#1565ff" }}>Real backyard transformations.</span>
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.50)",
            fontSize: "16px", lineHeight: 1.65,
            maxWidth: "560px", margin: 0,
          }}>
            Ads built for the projects you actually want — not $500 cleanups or
            shared quote requests from five other builders.
          </p>
        </div>

        {/* Project cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
        }}>
          {projects.map((p) => (
            <div key={p.label} className="card-hover-dark" style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "16px",
              padding: "28px 26px",
            }}>
              {/* Icon */}
              <div className="icon-float" style={{
                width: "52px", height: "52px", borderRadius: "12px",
                background: "rgba(21,101,255,0.12)",
                border: "1px solid rgba(21,101,255,0.20)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "20px",
              }}>
                {p.icon}
              </div>

              {/* Label */}
              <span style={{
                display: "inline-block",
                background: "rgba(21,101,255,0.15)",
                color: "#60a5fa",
                fontSize: "11px", fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase",
                padding: "4px 12px", borderRadius: "9999px",
                marginBottom: "14px",
              }}>
                {p.label}
              </span>

              <h3 style={{
                color: "#ffffff",
                fontSize: "19px", fontWeight: 800,
                margin: "0 0 10px", letterSpacing: "-0.01em", lineHeight: 1.3,
              }}>
                {p.heading}
              </h3>

              <p style={{
                color: "rgba(255,255,255,0.52)",
                fontSize: "14.5px", lineHeight: 1.65,
                margin: "0 0 22px",
              }}>
                {p.body}
              </p>

              {/* Stat */}
              <div style={{
                borderTop: "1px solid rgba(255,255,255,0.08)",
                paddingTop: "18px",
                display: "flex", alignItems: "baseline", gap: "8px",
              }}>
                <span style={{
                  color: "#1565ff",
                  fontSize: "22px", fontWeight: 900, letterSpacing: "-0.02em",
                }}>
                  {p.stat}
                </span>
                <span style={{
                  color: "rgba(255,255,255,0.35)",
                  fontSize: "12.5px", fontWeight: 500,
                }}>
                  {p.statLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

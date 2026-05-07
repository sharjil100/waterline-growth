const items = [
  "AI Receptionist",
  "Captures Every Missed Call",
  "Hot Lead Tagging",
  "Instant Text Summary",
  "After-Hours Coverage",
  "Weekend Coverage",
  "Spam & Vendor Filtering",
  "Live Same Day",
  "Built For Pool Companies",
  "No Long-Term Contracts",
  "Cancel Anytime",
  "No Setup Fee",
];

const Dot = () => (
  <svg width="6" height="6" viewBox="0 0 6 6" style={{ flexShrink: 0 }}>
    <circle cx="3" cy="3" r="3" fill="rgba(255,255,255,0.55)" />
  </svg>
);

export default function MarqueeStrip({ reverse = false }: { reverse?: boolean } = {}) {
  /* Double items for seamless loop */
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        background: "#1565ff",
        borderTop: "1px solid rgba(255,255,255,0.12)",
        borderBottom: "1px solid rgba(255,255,255,0.12)",
        padding: "13px 0",
        overflow: "hidden",
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: "flex",
          alignItems: "center",
          width: "max-content",
          gap: 0,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              padding: "0 28px",
              whiteSpace: "nowrap",
            }}
          >
            <Dot />
            <span
              style={{
                color: "#ffffff",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

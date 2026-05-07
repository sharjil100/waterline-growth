const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1565ff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "2px" }}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function WhoThisIsForSection() {
  const bullets = [
    "You build new in-ground pools or handle major remodels",
    "Your phone rings while you're on a job site or in the truck",
    "You can't always answer with wet hands, chemicals, or tools",
    "Calls go to voicemail and homeowners hang up",
    "You don't know which missed call was a $20k–$300k project",
    "After-hours and weekend calls are slipping through",
    "You want every new build and remodel inquiry captured — not lost to a competitor",
    "You don't want to hire and manage a full-time receptionist",
  ];

  return (
    <section
      id="who"
      className="wl-section-pad who-section"
      style={{
        background: "#f5f5f5",
        borderTop: "1px solid #e5e7eb",
        fontFamily: "var(--font-barlow), Arial, sans-serif",
      }}
    >
      <div className="wl-container who-grid" style={{
        maxWidth: "1200px",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) minmax(0, 420px)",
        gap: "clamp(32px, 6vw, 64px)",
        alignItems: "center",
      }}>
        {/* Copy */}
        <div className="reveal">
          <span style={{
            display: "inline-block", color: "#1565ff",
            fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", marginBottom: "16px",
          }}>
            Who This Is For
          </span>

          <h2 style={{
            fontSize: "clamp(28px, 3.2vw, 46px)",
            fontWeight: 900, lineHeight: 1.12,
            margin: "0 0 36px", letterSpacing: "-0.02em",
            color: "#111827",
          }}>
            Built For Pool Builders And Remodelers Who{" "}
            <span style={{ color: "#1565ff" }}>Can&apos;t Always Answer The Phone.</span>
          </h2>

          <p style={{
            fontSize: "16px", fontWeight: 500,
            color: "#4b5563",
            margin: "0 0 20px",
          }}>
            This is for you if:
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: "12px" }}>
            {bullets.map((b) => (
              <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <CheckIcon />
                <span style={{ color: "#4b5563", fontSize: "15.5px", lineHeight: 1.55 }}>{b}</span>
              </li>
            ))}
          </ul>

          <p style={{
            fontSize: "15.5px", lineHeight: 1.7,
            color: "#4b5563",
            margin: 0,
          }}>
            If that sounds like your day, the{" "}
            <strong style={{ color: "#111827", fontWeight: 800 }}>Waterline Growth AI Receptionist</strong>{" "}
            is for you.
          </p>
        </div>

        {/* Pool image */}
        <div className="reveal reveal-d2 who-image" style={{
          position: "relative",
          borderRadius: "20px",
          overflow: "hidden",
          aspectRatio: "4 / 5",
          border: "1px solid #e5e7eb",
          boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
        }}>
          <img
            src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=900&q=80"
            alt="Aerial view of a clean rectangular swimming pool"
            loading="lazy"
            style={{
              width: "100%", height: "100%",
              objectFit: "cover", display: "block",
            }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.45) 100%)",
            pointerEvents: "none",
          }} />
          {/* Floating stat chip */}
          <div style={{
            position: "absolute",
            left: "20px", bottom: "20px",
            background: "#ffffff",
            borderRadius: "12px",
            padding: "12px 16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
            display: "flex", flexDirection: "column", gap: "2px",
          }}>
            <span style={{ color: "#1565ff", fontSize: "11px", fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase" }}>
              One Missed Call =
            </span>
            <span style={{ color: "#111827", fontSize: "22px", fontWeight: 900, letterSpacing: "-0.01em" }}>
              $20k–$300k Lost
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .who-grid {
            grid-template-columns: 1fr !important;
          }
          .who-image {
            aspect-ratio: 16 / 10 !important;
            max-height: 340px;
            width: 100%;
            margin: 0 auto;
          }
        }
        @media (max-width: 520px) {
          .who-image {
            aspect-ratio: 4 / 3 !important;
            max-height: 260px;
          }
        }
      `}</style>
    </section>
  );
}

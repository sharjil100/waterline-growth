export default function AgencySection() {
  return (
    <section
      className="reveal wl-section-pad"
      style={{
        backgroundColor: "#f9fafb",
        borderTop: "1px solid #e5e7eb",
        textAlign: "center",
      }}
    >
      <div className="wl-container" style={{ maxWidth: "1400px" }}>
        <h2
          style={{
            fontWeight: 900,
            textTransform: "uppercase",
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            marginBottom: "28px",
            fontSize: "clamp(22px, 5vw, 50px)",
            color: "#111827",
          }}
        >
          <span style={{ color: "#111827" }}>The AI Receptionist Built For </span>
          <span style={{ color: "#1565ff" }}>Pool Builders & Remodelers</span>
        </h2>

        <p
          style={{
            color: "#4b5563",
            fontSize: "16px",
            lineHeight: 1.8,
            maxWidth: "880px",
            margin: "0 auto",
            fontWeight: 400,
          }}
        >
          <strong style={{ color: "#111827", fontWeight: 700 }}>Waterline Growth</strong>{" "}
          is a missed-call capture service built for swimming pool contractors,
          builders, and remodelers. When you can&apos;t answer the phone, our
          AI receptionist picks up, asks the right questions, and instantly
          texts you a clean summary — with new pool builds and major remodels
          flagged as hot leads so you can call back fast and win the project.
        </p>
      </div>
    </section>
  );
}

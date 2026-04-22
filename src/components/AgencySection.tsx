export default function AgencySection() {
  return (
    <>
      {/* ── White section ─────────────────────────────────────── */}
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
            <span style={{ color: "#111827" }}>Swimming Pool Contractors </span>
            <span style={{ color: "#1565ff" }}>Digital Marketing Agency</span>
          </h2>

          <p
            style={{
              color: "#4b5563",
              fontSize: "16px",
              lineHeight: 1.80,
              maxWidth: "880px",
              margin: "0 auto",
              fontWeight: 400,
            }}
          >
            <strong style={{ color: "#111827", fontWeight: 700 }}>Waterline Growth</strong> is a
            full-service digital marketing agency specializing in pool builder contractors and companies.
            Our team creates real opportunities between you and your customers — more traffic, more
            leads, and more signed pool projects.
          </p>

        </div>
      </section>
    </>
  );
}

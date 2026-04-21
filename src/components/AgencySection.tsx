export default function AgencySection() {
  return (
    <>
      {/* ── White section ─────────────────────────────────────── */}
      <section
        className="reveal"
        style={{
          backgroundColor: "#f9fafb",
          borderTop: "1px solid #e5e7eb",
          padding: "72px 40px 80px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

          <h2
            style={{
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              marginBottom: "28px",
              fontSize: "clamp(20px, 3.1vw, 50px)",
              color: "#111827",
              whiteSpace: "nowrap",
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

      {/* ── Blue highlight strip ────────────────────────────── */}
      <div
        style={{
          background: "#1565ff",
          padding: "20px 40px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#ffffff",
            fontSize: "15.5px",
            fontWeight: 600,
            lineHeight: 1.6,
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          When you work with{" "}
          <strong style={{ fontWeight: 800 }}>Waterline Growth</strong>, you&apos;re working with a
          team that truly understands the swimming pool industry inside and out.
        </p>
      </div>
    </>
  );
}

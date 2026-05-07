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
          <span style={{ color: "#111827" }}>Swimming Pool Contractors </span>
          <span style={{ color: "#1565ff" }}>Digital Marketing Agency</span>
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
          is a digital marketing agency built specifically for swimming pool
          contractors, pool builders, and pool remodelers. We help pool
          companies get more traffic, more qualified leads, and more signed
          projects through focused Facebook and Instagram Ads, Google Search
          Ads, Local Service Ads, landing pages, call tracking, and follow-up
          systems — built around one goal: more booked estimates and more
          signed pool construction and remodel projects.
        </p>
      </div>
    </section>
  );
}

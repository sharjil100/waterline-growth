export default function AgencySection() {
  const services = [
    "Facebook & Instagram Ads",
    "Google Search Ads",
    "Local Service Ads",
    "Dedicated landing pages",
    "Full tracking setup",
    "Exclusive leads",
    "Fast lead follow-up",
    "Weekly optimization",
    "Clear reporting from click to signed project",
  ];

  return (
    <section
      className="reveal wl-section-pad"
      style={{
        backgroundColor: "#f9fafb",
        borderTop: "1px solid #e5e7eb",
      }}
    >
      <div className="wl-container" style={{ maxWidth: "1100px" }}>
        <div style={{ textAlign: "center", maxWidth: "880px", margin: "0 auto" }}>
          <span
            style={{
              display: "inline-block",
              color: "#1565ff",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Swimming Pool Contractors Digital Marketing Agency
          </span>

          <h2
            style={{
              fontWeight: 900,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              marginBottom: "24px",
              fontSize: "clamp(26px, 4.4vw, 44px)",
              color: "#0b1e3b",
            }}
          >
            Full-Service Digital Marketing For{" "}
            <span style={{ color: "#1565ff" }}>Pool Builders And Remodelers</span>
          </h2>

          <p
            style={{
              color: "#4b5563",
              fontSize: "16px",
              lineHeight: 1.8,
              margin: "0 0 18px",
              fontWeight: 400,
            }}
          >
            <strong style={{ color: "#0b1e3b", fontWeight: 700 }}>Waterline Growth</strong>{" "}
            is a digital marketing agency built specifically for swimming pool
            contractors, pool builders, and pool remodelers.
          </p>

          <p
            style={{
              color: "#4b5563",
              fontSize: "16px",
              lineHeight: 1.8,
              margin: "0 0 18px",
              fontWeight: 400,
            }}
          >
            We help pool companies get more traffic, more qualified leads, and
            more signed projects through focused Facebook Ads, Instagram Ads,
            Google Search Ads, Local Service Ads, landing pages, call tracking,
            and follow-up systems.
          </p>

          <p
            style={{
              color: "#4b5563",
              fontSize: "16px",
              lineHeight: 1.8,
              margin: "0 0 18px",
              fontWeight: 400,
            }}
          >
            This is not generic marketing for every local business.
          </p>

          <p
            style={{
              color: "#0b1e3b",
              fontSize: "17px",
              lineHeight: 1.7,
              margin: "0 0 8px",
              fontWeight: 700,
            }}
          >
            It is a pool project pipeline built around one goal:
          </p>

          <p
            style={{
              color: "#0b1e3b",
              fontSize: "17px",
              lineHeight: 1.7,
              margin: "0 0 40px",
              fontWeight: 600,
            }}
          >
            More real homeowners. More booked estimates. More signed pool
            construction and remodel projects.
          </p>
        </div>

        <div
          style={{
            background: "#ffffff",
            border: "1px solid rgba(20,40,80,0.08)",
            borderRadius: "20px",
            padding: "clamp(24px, 4vw, 36px)",
            boxShadow: "0 8px 24px rgba(20,40,80,0.05)",
          }}
        >
          <h3
            style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#1565ff",
              margin: "0 0 18px",
              textAlign: "center",
            }}
          >
            What We Help With
          </h3>

          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "10px 24px",
            }}
          >
            {services.map((s) => (
              <li
                key={s}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#1f2937",
                  fontSize: "15px",
                  fontWeight: 500,
                  padding: "8px 0",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1565ff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flex: "0 0 auto" }}
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const items = [
  "AI receptionist that picks up every missed call",
  "Smart number connected to your Google listing and website",
  "Short, natural conversation — not a phone tree",
  "Caller name, callback number, ZIP, and project type captured",
  "New builds and major remodels flagged as hot leads",
  "Instant text summary delivered to your phone",
  "After-hours, weekend, and overflow call coverage",
  "Spam and vendor calls filtered out",
  "Automated 5-star Google review follow-up after every job",
  "Smart review reminders for customers who didn't reply",
  "Filter that prompts only happy customers for reviews",
  "Fewer \"no one answered\" negative reviews",
  "Simple call log with full recordings",
  "Built specifically for the pool industry",
  "No setup fee — live the same day",
  "Month-to-month — cancel anytime",
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
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "48px", textAlign: "center" }}>
          <span
            className="reveal"
            style={{
              display: "inline-block",
              color: "#1565ff",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            What You Get
          </span>

          <h2
            className="reveal reveal-d1"
            style={{
              fontSize: "clamp(28px, 3.4vw, 46px)",
              fontWeight: 900,
              lineHeight: 1.12,
              margin: "0 auto",
              letterSpacing: "-0.02em",
              maxWidth: "820px",
              color: "#0b1e3b",
            }}
          >
            Everything You Need To Catch Calls{" "}
            <span style={{ color: "#1565ff" }}>And Earn Reviews — Automatically.</span>
          </h2>

          <p
            className="reveal reveal-d2"
            style={{
              marginTop: "16px",
              color: "#6b7280",
              fontSize: "16px",
              lineHeight: 1.7,
              maxWidth: "640px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            One flat monthly fee. Live the same day. Here&apos;s what&apos;s included:
          </p>
        </div>

        <div
          className="reveal reveal-d3"
          style={{
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "20px",
            padding: "clamp(24px, 4vw, 40px)",
            boxShadow: "0 8px 24px rgba(20,40,80,0.05)",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "12px 32px",
            }}
          >
            {items.map((text) => (
              <li
                key={text}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "10px 0",
                  borderBottom: "1px solid #f1f4f9",
                }}
              >
                <span
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background: "rgba(21,101,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "0 0 auto",
                    marginTop: "2px",
                  }}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1565ff"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span
                  style={{
                    color: "#1f2937",
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: 1.55,
                  }}
                >
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

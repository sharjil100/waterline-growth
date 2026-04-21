const testimonials = [
  {
    quote:
      "We went from random referrals to a steady flow of pool and backyard projects. One job covered the first few months.",
    name: "Name",
    company: "Company",
  },
  {
    quote:
      "I finally know what I'm getting for my ad dollars. No more black box.",
    name: "Name",
    company: "Company",
  },
];

const StarRow = () => (
  <div style={{ display: "flex", gap: "3px", marginBottom: "14px" }}>
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

export default function ProofSection() {
  return (
    <section
      id="proof"
      style={{
        background: "#ffffff",
        borderTop: "1px solid #e5e7eb",
        padding: "104px 40px",
        fontFamily: "var(--font-barlow), Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <span className="reveal" style={{
          display: "inline-block", color: "#1565ff",
          fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em",
          textTransform: "uppercase", marginBottom: "16px",
        }}>
          Results &amp; Proof
        </span>

        <h2 className="reveal reveal-d1" style={{
          fontSize: "clamp(28px, 3.2vw, 46px)",
          fontWeight: 900, lineHeight: 1.12,
          margin: "0 0 12px", letterSpacing: "-0.02em",
          color: "#111827",
        }}>
          What pool{" "}
          <span style={{ color: "#1565ff" }}>builders</span>{" "}
          say.
        </h2>
        <p className="reveal reveal-d2" style={{
          color: "#9ca3af", fontSize: "14px",
          fontStyle: "italic", margin: "0 0 48px",
        }}>
          Placeholder — real quotes and screenshots replace these as they come in.
        </p>

        <div style={{
          display: "grid", gap: "16px",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        }}>
          {testimonials.map((t, i) => (
            <div key={i} className={`card-lift reveal reveal-d${i + 2}`} style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              padding: "28px 26px",
              boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
            }}>
              <StarRow />
              <p style={{
                color: "#374151", fontSize: "16px",
                lineHeight: 1.65, margin: "0 0 20px", fontWeight: 500,
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{
                display: "flex", alignItems: "center", gap: "12px",
                borderTop: "1px solid #f3f4f6", paddingTop: "16px",
              }}>
                <div style={{
                  width: "38px", height: "38px", borderRadius: "50%",
                  background: "linear-gradient(140deg, #1565ff 0%, #0a2d5c 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontWeight: 800, fontSize: "14px",
                  flexShrink: 0,
                }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div style={{ color: "#111827", fontSize: "14px", fontWeight: 700 }}>[{t.name}]</div>
                  <div style={{ color: "#9ca3af", fontSize: "13px" }}>[{t.company}]</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

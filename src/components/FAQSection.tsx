const faqs = [
  {
    q: "How fast can we be live?",
    a: "Usually within 3–5 business days after the onboarding call and getting access to your accounts.",
  },
  {
    q: "Do I have to learn a bunch of software?",
    a: "No. We run the tools. You get simple updates and a clear view of leads, estimates, and signed projects.",
  },
  {
    q: "Can I start with just Facebook or just Google?",
    a: "Yes, but we recommend starting with both for better coverage. Facebook and Instagram help create demand. Google and Local Service Ads capture people already searching. We can match the rollout to your budget and pace.",
  },
  {
    q: "Is this only for new pool builders?",
    a: "No. The system is built for both pool builders and pool remodelers. We can target new pool construction, major remodels, resurfacing, equipment upgrades, and full backyard projects depending on what you want more of.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. It is month-to-month. If it is not paying for itself, you should not stay.",
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      style={{
        background: "#f9fafb",
        borderTop: "1px solid #e5e7eb",
        padding: "104px 40px",
        fontFamily: "var(--font-barlow), Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <span className="reveal" style={{
          display: "inline-block", color: "#1565ff",
          fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em",
          textTransform: "uppercase", marginBottom: "16px",
        }}>
          FAQ
        </span>

        <h2 className="reveal reveal-d1" style={{
          fontSize: "clamp(28px, 3.2vw, 46px)",
          fontWeight: 900, lineHeight: 1.12,
          margin: "0 0 44px", letterSpacing: "-0.02em",
          color: "#111827",
        }}>
          Questions Pool Companies{" "}
          <span style={{ color: "#1565ff" }}>Ask</span>{" "}
          Before Booking.
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {faqs.map((f, i) => (
            <details
              key={i}
              className={`faq-item reveal reveal-d${i + 1}`}
              style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "18px 22px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              <summary style={{
                cursor: "pointer", listStyle: "none",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                gap: "16px",
                fontSize: "16.5px", fontWeight: 700, color: "#111827",
                letterSpacing: "-0.005em",
              }}>
                {f.q}
                <span className="faq-plus" style={{
                  flexShrink: 0, width: "26px", height: "26px", borderRadius: "6px",
                  background: "rgba(21,101,255,0.08)",
                  border: "1px solid rgba(21,101,255,0.22)",
                  color: "#1565ff", fontSize: "18px", fontWeight: 700,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  lineHeight: 1,
                }}>+</span>
              </summary>
              <p style={{
                color: "#6b7280",
                fontSize: "15px", lineHeight: 1.65,
                margin: "12px 0 2px",
              }}>
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "How fast can we be live?",
    a: "Usually inside the same 10–15 minute setup call. We connect a smart number to your Google Business Profile and website while we're on the line, and your AI receptionist starts capturing missed calls that day.",
  },
  {
    q: "Will it sound robotic to my customers?",
    a: "No. The receptionist holds a short, natural conversation — name, callback, ZIP, project type, urgency — and gets out of the way. Most calls wrap up in under a minute and homeowners feel heard, not interrogated.",
  },
  {
    q: "What about new builds and major remodels?",
    a: "Inquiries about new in-ground pool construction and major remodels are flagged as hot leads. You get an instant text so you can call back before a competitor does — even if the call came in at 9pm on a Sunday.",
  },
  {
    q: "Do you filter spam and vendor calls?",
    a: "Yes. The receptionist screens out telemarketers, vendor pitches, and obvious spam, so the only summaries you see are real homeowners worth calling back.",
  },
  {
    q: "Does this replace my phone?",
    a: "No. Your phone still rings first on every call. The receptionist only picks up when you can't — missed calls, after-hours, or when you're already on the line.",
  },
  {
    q: "Is there a contract?",
    a: "No. It's month-to-month, $397 flat, cancel anytime. If it's not paying for itself, you shouldn't stay.",
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
          Questions Pool Owners Ask{" "}
          <span style={{ color: "#1565ff" }}>Before Going Live.</span>
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {faqs.map((f, i) => (
            <details
              key={i}
              className={`faq-item reveal reveal-d${Math.min(i + 1, 5)}`}
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

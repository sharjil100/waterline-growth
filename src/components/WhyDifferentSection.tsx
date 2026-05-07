const cards = [
  {
    title: "We don't replace your phone.",
    body: "Calls still ring your phone first. The AI receptionist only picks up when you can't — missed calls, after-hours, or when you're already on another line. Unlike traditional answering services that route everything through a call center, you stay in control of every call you can take.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1565ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "Short, human conversations.",
    body: "No phone trees. No \"press 1 for service.\" The receptionist holds a brief, natural conversation, gets the basics — name, callback, ZIP, project type — and gets out of the way. Most calls wrap up in under a minute, with the homeowner feeling heard, not interrogated.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1565ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Built specifically for the pool industry.",
    body: "It knows the difference between a service call, a resurfacing inquiry, an equipment failure, and a $200k new build. Generic answering services treat every call the same — ours flags new pool builds and major remodels as hot leads so the high-value projects never get buried.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1565ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C12 2 5 9 5 15a7 7 0 0 0 14 0C19 9 12 2 12 2z" />
        <path d="M8 15c1.5-1.5 3-1 4.5.5S16 17 17.5 15.5" />
      </svg>
    ),
  },
];

export default function WhyDifferentSection() {
  return (
    <section
      id="why"
      style={{
        background: "#f5f5f5",
        borderTop: "1px solid #e5e7eb",
        padding: "104px 40px",
        fontFamily: "var(--font-barlow), Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <span className="reveal" style={{
          display: "inline-block", color: "#1565ff",
          fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em",
          textTransform: "uppercase", marginBottom: "16px",
        }}>
          Why We&apos;re Different
        </span>

        <h2 className="reveal reveal-d1" style={{
          fontSize: "clamp(28px, 3.2vw, 46px)",
          fontWeight: 900, lineHeight: 1.12,
          margin: "0 0 52px", letterSpacing: "-0.02em", maxWidth: "820px",
          color: "#111827",
        }}>
          Three Reasons This Isn&apos;t Like{" "}
          <span style={{ color: "#1565ff" }}>The Last Answering Service You Tried.</span>
        </h2>

        <div style={{
          display: "grid", gap: "16px",
          gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
        }}>
          {cards.map((c, i) => (
            <div key={c.title} className={`card-lift reveal reveal-d${i + 1}`} style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              padding: "28px 24px",
              boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
            }}>
              <div className="icon-float" style={{
                width: "44px", height: "44px", borderRadius: "10px",
                background: "rgba(21,101,255,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "18px",
              }}>
                {c.icon}
              </div>
              <h3 style={{
                fontSize: "18px", fontWeight: 800, margin: "0 0 10px",
                color: "#111827", letterSpacing: "-0.01em",
              }}>
                {c.title}
              </h3>
              <p style={{
                color: "#6b7280",
                fontSize: "15px", lineHeight: 1.65, margin: 0,
              }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

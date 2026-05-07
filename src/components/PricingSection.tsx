const LockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1565ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const BoltIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1565ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const ChartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1565ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="16" y="5" width="4" height="15" rx="1" />
    <rect x="10" y="9" width="4" height="11" rx="1" />
    <rect x="4" y="13" width="4" height="7" rx="1" />
  </svg>
);

const TagIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1565ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const CircleCheck = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10" stroke="#1565ff" strokeWidth="1.8" />
    <path d="m8 12 3 3 5-5" stroke="#1565ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const leftFeatures = [
  {
    icon: <LockIcon />,
    title: "No Lock-In",
    desc: "Month-to-month means you're never trapped. Stay because it works.",
  },
  {
    icon: <BoltIcon />,
    title: "Live Same Day",
    desc: "Onboarding takes one 10–15 minute call. You're capturing missed calls the same day.",
  },
  {
    icon: <ChartIcon />,
    title: "Flat Monthly Rate",
    desc: "10 missed calls or 100 — the price doesn't change.",
  },
  {
    icon: <TagIcon />,
    title: "Zero Setup Fee",
    desc: "First payment is your first month. That's it.",
  },
];

const features = [
  "AI receptionist for missed calls",
  "Smart number on your Google listing",
  "Hot lead tagging for new builds & remodels",
  "Instant text summary to your phone",
  "After-hours and weekend coverage",
  "Spam and vendor call filtering",
  "Automated 5-star Google review follow-up",
  "Smart reminders for non-responders",
  "Built specifically for the pool industry",
  "Full call log with recordings",
  "No setup fee · Live same day",
  "Month-to-month, cancel anytime",
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      style={{
        background: "#ffffff",
        borderTop: "1px solid #e5e7eb",
        padding: "100px 40px",
        fontFamily: "var(--font-barlow), Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* ── Header ──────────────────────────────────── */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <span style={{
            display: "inline-block",
            border: "1px solid #d1d5db",
            borderRadius: "9999px",
            padding: "5px 18px",
            fontSize: "11px", fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "#6b7280",
            marginBottom: "20px",
          }}>
            Pricing
          </span>
          <h2 style={{
            fontSize: "clamp(28px, 3.4vw, 50px)",
            fontWeight: 900, lineHeight: 1.1,
            margin: "0 0 14px", letterSpacing: "-0.02em",
            color: "#111827",
          }}>
            What Does It Cost?
          </h2>
          <p style={{
            color: "#6b7280", fontSize: "16px",
            margin: "0 auto", maxWidth: "560px",
            lineHeight: 1.6,
          }}>
            One flat monthly fee for the AI receptionist and the review
            follow-up system. No setup fees, no contracts, no per-call charges.
            Catching one missed new build — or earning a few extra 5-star
            Google reviews — pays for the service many times over.
          </p>
        </div>

        {/* ── 3-column grid ───────────────────────────── */}
        <div className="pricing-grid" style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.1fr) minmax(0, 1fr)",
          gap: "18px",
          alignItems: "start",
        }}>

          {/* LEFT — Feature cards */}
          <div className="pricing-left" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {leftFeatures.map((f) => (
              <div key={f.title} className="card-lift" style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "16px 18px",
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}>
                <div className="icon-float" style={{
                  width: "36px", height: "36px", borderRadius: "8px",
                  background: "rgba(21,101,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {f.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "14.5px", color: "#111827", marginBottom: "4px" }}>
                    {f.title}
                  </div>
                  <div style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.55 }}>
                    {f.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER — Dark featured card */}
          <div className="pricing-featured" style={{
            background: "#111827",
            borderRadius: "20px",
            padding: "32px 28px",
            position: "relative",
          }}>
            {/* Badge */}
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <span style={{
                background: "#1565ff",
                color: "#ffffff",
                fontSize: "11px", fontWeight: 800,
                letterSpacing: "0.10em", textTransform: "uppercase",
                padding: "7px 20px", borderRadius: "9999px",
                display: "inline-block",
              }}>
                AI Receptionist + Reviews
              </span>
            </div>

            {/* Price — typographic treatment matching reference */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: "2px", marginBottom: "6px" }}>
              <span style={{
                color: "rgba(255,255,255,0.50)",
                fontSize: "22px", fontWeight: 700,
                paddingTop: "10px", lineHeight: 1,
              }}>$</span>
              <span style={{
                color: "#ffffff",
                fontSize: "68px", fontWeight: 900,
                letterSpacing: "-0.03em", lineHeight: 1,
              }}>397</span>
              <span style={{
                color: "rgba(255,255,255,0.50)",
                fontSize: "16px", fontWeight: 500,
                paddingTop: "46px", lineHeight: 1,
              }}>/mo</span>
            </div>

            <p style={{
              textAlign: "center",
              color: "rgba(255,255,255,0.40)",
              fontSize: "12.5px", margin: "0 0 22px",
              letterSpacing: "0.01em",
            }}>
              Flat rate · No contracts · Month-to-month
            </p>

            {/* Feature checklist */}
            <div style={{
              borderTop: "1px solid rgba(255,255,255,0.10)",
              paddingTop: "18px",
              marginBottom: "24px",
              display: "flex", flexDirection: "column", gap: "9px",
            }}>
              {features.map((f) => (
                <div key={f} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <CircleCheck />
                  <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "13.5px" }}>{f}</span>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <a href="#book" className="btn-primary" style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
              background: "#1565ff",
              color: "#ffffff",
              padding: "15px 20px", borderRadius: "10px",
              fontWeight: 800, fontSize: "15px",
              textDecoration: "none",
              marginBottom: "12px",
            }}>
              <PhoneIcon />
              Book 10-Minute Setup Call
              <ArrowIcon />
            </a>

            <p style={{
              textAlign: "center",
              color: "rgba(255,255,255,0.30)",
              fontSize: "12px", margin: 0,
            }}>
              No setup fee · Live same day
            </p>
          </div>

          {/* RIGHT — Two callout cards */}
          <div className="pricing-right" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

            {/* Blue accent card (mirrors yellow in reference) */}
            <div style={{
              background: "#eff6ff",
              border: "1px solid #bfdbfe",
              borderRadius: "16px",
              padding: "22px 20px",
            }}>
              <p style={{
                color: "#2563eb",
                fontSize: "11px", fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase",
                margin: "0 0 10px",
              }}>
                Think About This
              </p>
              <h4 style={{
                color: "#1e3a8a",
                fontSize: "17px", fontWeight: 800, lineHeight: 1.4,
                margin: "0 0 10px",
              }}>
                One captured new build covers years of service.
              </h4>
              <p style={{
                color: "#3b82f6",
                fontSize: "13.5px", lineHeight: 1.6, margin: 0,
              }}>
                Even a single saved $20k remodel covers four years of the flat $397/mo fee.
              </p>
            </div>

            {/* White prose card */}
            <div style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "16px",
              padding: "22px 20px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            }}>
              <p style={{
                color: "#6b7280",
                fontSize: "14px", lineHeight: 1.65, marginBottom: "12px",
              }}>
                You don&apos;t hire a $4,000/mo receptionist. You don&apos;t
                chase down customers asking for reviews. You don&apos;t lose
                nights and weekends to voicemail.
              </p>
              <p style={{
                color: "#111827",
                fontSize: "14.5px", fontWeight: 700, lineHeight: 1.55, margin: 0,
              }}>
                You get an AI receptionist that picks up every call you
                can&apos;t — and a review system that turns finished projects
                into 5-star Google reviews on autopilot.
              </p>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
            max-width: 560px;
            margin: 0 auto;
          }
          .pricing-featured { order: -1; }
          .pricing-left { order: 1; }
          .pricing-right { order: 2; }
        }
      `}</style>
    </section>
  );
}

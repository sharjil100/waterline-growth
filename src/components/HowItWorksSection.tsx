import type { ReactNode } from "react";

type Step = {
  kicker: string;
  title: string;
  body: ReactNode;
  bullets?: string[];
  icon: ReactNode;
};

const steps: Step[] = [
  {
    kicker: "Discovery",
    title: "We map your ideal projects and service area",
    body: "On a quick call, we nail down your best jobs — new builds vs. remodels — ideal neighborhoods, and real-world capacity so we only chase work you actually want to sign.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    kicker: "Build",
    title: "We build a simple, focused funnel",
    body: "A lean, tight funnel that pre-qualifies before you ever get the lead.",
    bullets: [
      "Dedicated landing page for pool projects in your area",
      "Ad creative that looks like real pools and yards, not stock junk",
      "Filters to block bots, wrong states, and obvious bad leads",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16M6 10l6 10 6-10M8 4v6M16 4v6" />
      </svg>
    ),
  },
  {
    kicker: "Launch",
    title: "Multi-platform ads in your own accounts",
    body: "We run Facebook/Instagram, Google Search, and Local Service Ads inside YOUR profiles — so every dollar and every lead stays yours to keep.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18" />
      </svg>
    ),
  },
  {
    kicker: "Protect",
    title: "Fast follow-up that saves leads",
    body: "New form fills and missed calls get instant text follow-up so interested homeowners actually book an estimate — instead of drifting to the next builder.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    kicker: "Optimize",
    title: "Weekly tuning toward signed projects",
    body: "A dashboard that tracks what matters — not vanity metrics.",
    bullets: [
      "Leads per channel",
      "Leads → in-person estimates",
      "Estimates → signed projects",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 4 4 5-5" />
      </svg>
    ),
  },
];

function GhostNumber({ n }: { n: number }) {
  return (
    <span
      aria-hidden
      style={{
        fontSize: "clamp(88px, 14vw, 180px)",
        fontWeight: 900,
        lineHeight: 0.8,
        letterSpacing: "-0.06em",
        color: "transparent",
        WebkitTextStroke: "1.5px rgba(21,101,255,0.22)",
        display: "inline-block",
      }}
    >
      {String(n).padStart(2, "0")}
    </span>
  );
}

export default function HowItWorksSection() {
  return (
    <section
      id="how"
      className="wl-section-pad"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(21,101,255,0.06) 0%, transparent 60%), linear-gradient(180deg, #ffffff 0%, #f6f9ff 100%)",
        borderTop: "1px solid #eef1f5",
        fontFamily: "var(--font-barlow), Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="wl-container">
        {/* Kicker */}
        <div
          className="reveal"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 14px",
            borderRadius: "9999px",
            background: "rgba(21,101,255,0.08)",
            border: "1px solid rgba(21,101,255,0.18)",
            marginBottom: "22px",
          }}
        >
          <span className="pulse-dot" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#1565ff" }} />
          <span style={{ color: "#1565ff", fontSize: "12.5px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            How It Works
          </span>
        </div>

        {/* Heading */}
        <h2
          className="reveal reveal-d1"
          style={{
            fontSize: "clamp(32px, 4.6vw, 60px)",
            fontWeight: 900,
            lineHeight: 1.04,
            letterSpacing: "-0.025em",
            color: "#0b1e3b",
            margin: "0 0 18px",
            maxWidth: "920px",
          }}
        >
          From first click to signed contract —{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #1565ff 0%, #3ea3ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            five steps, no mystery.
          </span>
        </h2>

        <p
          className="reveal reveal-d2"
          style={{
            fontSize: "clamp(15px, 1.4vw, 17.5px)",
            color: "rgba(11,30,59,0.62)",
            lineHeight: 1.7,
            margin: "0 0 clamp(48px, 8vw, 96px)",
            maxWidth: "640px",
          }}
        >
          A system built around a single question: did the ad budget turn into a booked pool job? We engineer every step around answering yes.
        </p>

        {/* Steps spine */}
        <div style={{ position: "relative" }}>
          {/* Vertical progress line — desktop only */}
          <div
            aria-hidden
            className="how-spine"
            style={{
              position: "absolute",
              top: "24px",
              bottom: "40px",
              left: "calc(50% - 1px)",
              width: "2px",
              background:
                "linear-gradient(180deg, rgba(21,101,255,0) 0%, rgba(21,101,255,0.35) 8%, rgba(21,101,255,0.35) 92%, rgba(21,101,255,0) 100%)",
              zIndex: 0,
            }}
          />

          <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "clamp(40px, 6vw, 72px)", position: "relative", zIndex: 1 }}>
            {steps.map((s, i) => {
              const isRight = i % 2 === 1;
              return (
                <li
                  key={s.title}
                  className={`reveal reveal-d${Math.min(i + 1, 5)} how-step`}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "clamp(32px, 5vw, 80px)",
                    alignItems: "center",
                  }}
                >
                  {/* Ghost number side */}
                  <div
                    style={{
                      order: isRight ? 2 : 1,
                      display: "flex",
                      justifyContent: isRight ? "flex-start" : "flex-end",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <GhostNumber n={i + 1} />
                  </div>

                  {/* Card side */}
                  <div
                    className="how-card card-lift"
                    style={{
                      order: isRight ? 1 : 2,
                      position: "relative",
                      padding: "clamp(24px, 3vw, 36px)",
                      borderRadius: "20px",
                      background: "#ffffff",
                      border: "1px solid rgba(20,40,80,0.07)",
                      boxShadow: "0 4px 14px rgba(20,40,80,0.04), 0 20px 50px rgba(20,40,80,0.05)",
                    }}
                  >
                    {/* Dot on the spine */}
                    <div
                      aria-hidden
                      className="how-dot"
                      style={{
                        position: "absolute",
                        top: "50%",
                        [isRight ? "left" : "right"]: "-50px",
                        transform: "translateY(-50%)",
                        width: "14px",
                        height: "14px",
                        borderRadius: "50%",
                        background: "#1565ff",
                        boxShadow: "0 0 0 6px rgba(21,101,255,0.15), 0 0 20px rgba(21,101,255,0.35)",
                      }}
                    />

                    {/* Kicker row */}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                      <div
                        className="icon-float"
                        style={{
                          width: "46px",
                          height: "46px",
                          borderRadius: "12px",
                          background: "linear-gradient(135deg, #1565ff 0%, #3ea3ff 100%)",
                          color: "#ffffff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 8px 18px rgba(21,101,255,0.32)",
                        }}
                      >
                        {s.icon}
                      </div>
                      <span
                        style={{
                          fontSize: "11.5px",
                          fontWeight: 700,
                          color: "#1565ff",
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                        }}
                      >
                        Step {String(i + 1).padStart(2, "0")} · {s.kicker}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: "clamp(19px, 2vw, 24px)",
                        fontWeight: 800,
                        letterSpacing: "-0.01em",
                        color: "#0b1e3b",
                        margin: "0 0 10px",
                        lineHeight: 1.28,
                      }}
                    >
                      {s.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "15px",
                        lineHeight: 1.7,
                        color: "rgba(11,30,59,0.68)",
                        margin: s.bullets ? "0 0 14px" : 0,
                      }}
                    >
                      {s.body}
                    </p>

                    {s.bullets && (
                      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                        {s.bullets.map((b) => (
                          <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14.5px", color: "rgba(11,30,59,0.72)", lineHeight: 1.55 }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1565ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "3px" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Closing CTA */}
        <div
          className="reveal"
          style={{
            marginTop: "clamp(56px, 8vw, 88px)",
            padding: "clamp(28px, 4vw, 44px)",
            borderRadius: "24px",
            background: "linear-gradient(135deg, #0b1e3b 0%, #1565ff 100%)",
            color: "#ffffff",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            boxShadow: "0 24px 60px rgba(21,101,255,0.28)",
          }}
        >
          <div style={{ maxWidth: "560px" }}>
            <h3 style={{ fontSize: "clamp(20px, 2.4vw, 28px)", fontWeight: 800, margin: "0 0 8px", letterSpacing: "-0.01em" }}>
              Want to see it applied to your service area?
            </h3>
            <p style={{ fontSize: "15px", margin: 0, color: "rgba(255,255,255,0.82)", lineHeight: 1.6 }}>
              15-minute pipeline call. No pitch deck, no contracts — just the numbers for your market.
            </p>
          </div>
          <a
            href="#book"
            className="btn-primary"
            style={{
              background: "#ffffff",
              color: "#0b1e3b",
              padding: "14px 28px",
              borderRadius: "9999px",
              fontWeight: 800,
              fontSize: "15px",
              letterSpacing: "0.02em",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Book Pipeline Call →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .how-spine { display: none; }
          .how-dot { display: none !important; }
          .how-step {
            grid-template-columns: 1fr !important;
            gap: 4px !important;
          }
          .how-step > div:first-child {
            order: 1 !important;
            justify-content: flex-start !important;
          }
          .how-step > div:last-child {
            order: 2 !important;
          }
          .how-step [aria-hidden="true"] {
            font-size: clamp(64px, 11vw, 110px) !important;
          }
        }
      `}</style>
    </section>
  );
}

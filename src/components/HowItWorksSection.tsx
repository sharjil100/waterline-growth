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
    kicker: "Smart Number",
    title: "We connect a smart number to your business",
    body: "On a 10–15 minute setup call, we connect a new number to your Google Business Profile and website. It still rings your phone first — you only hear from our AI receptionist when you can't pick up.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    kicker: "Capture",
    title: "Every missed call gets answered",
    body: "When you can't pick up, the AI receptionist takes over in a short, natural conversation and collects exactly what you need to call them back fast.",
    bullets: [
      "Caller name and best callback number",
      "ZIP code and service area",
      "New customer or existing customer",
      "Type of project — new build, remodel, resurface, equipment, service",
      "Urgency and ideal timeframe",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 5a2 2 0 0 1 2-2h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 12l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5z" />
      </svg>
    ),
  },
  {
    kicker: "Hot Lead Flag",
    title: "New builds & major remodels get tagged",
    body: "Inquiries about new in-ground pools and major remodels are flagged as hot leads — so a $20k–$300k project never gets buried under routine service questions.",
    bullets: [
      "New in-ground pool build inquiries",
      "Major remodel and renovation inquiries",
      "After-hours and weekend hot leads",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2s7 4 7 12a7 7 0 0 1-14 0c0-4 3-6 4-9 1 1 2 3 3 5 1-2 0-4 0-8z" />
      </svg>
    ),
  },
  {
    kicker: "Text Summary",
    title: "You get a clean text summary in seconds",
    body: "The receptionist hangs up, you get a text. Caller details, what they need, urgency — everything you need to decide who to call back first. No app to check, no dashboard to learn.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    kicker: "5-Star Reviews",
    title: "Finished projects turn into Google reviews",
    body: "After every completed pool build, remodel, or service job, we check in with the homeowner, confirm they're happy, and send a one-tap Google review link. Quiet follow-up reminders catch the ones who meant to leave a review but got busy.",
    bullets: [
      "Automated post-job satisfaction check-in",
      "One-tap Google review link sent by text",
      "Smart follow-up reminders for non-responders",
      "Built-in filter so only happy customers get the review prompt",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
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
          From Missed Call To 5-Star Review —{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #1565ff 0%, #3ea3ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Five Steps, Live Same Day.
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
          Setup takes one short call. After that, every missed call is
          captured, tagged, and texted to you — and every finished project
          turns into a 5-star Google review automatically.
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
              Ready to stop missing $20k–$300k pool projects?
            </h3>
            <p style={{ fontSize: "15px", margin: 0, color: "rgba(255,255,255,0.82)", lineHeight: 1.6 }}>
              10-minute setup call. No setup fee, month-to-month, live the same day.
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
            Book Setup Call →
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

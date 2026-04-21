import Image from "next/image";
import type { ReactNode } from "react";

const steps: { title: string; body: ReactNode; icon: ReactNode }[] = [
  {
    title: "We map your ideal projects and service area",
    body: "On a quick call, we nail down your best jobs (new builds vs remodels), ideal neighborhoods, and real-world capacity.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "We build a simple, focused funnel",
    body: (
      <>
        We set up:
        <ul style={{ margin: "10px 0 0", paddingLeft: "18px", color: "#6b7280" }}>
          <li>A dedicated landing page for pool projects in your area</li>
          <li>Ad creative that looks like real pools and yards, not stock junk</li>
          <li>Filters to block bots, wrong states, and obvious bad leads</li>
        </ul>
      </>
    ),
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "We turn on multi-platform ads in your own accounts",
    body: (
      <>
        We run Facebook/Instagram, Google Search, and (when you're ready) Local
        Service Ads inside <strong style={{ color: "#111827" }}>your</strong>{" "}
        profiles so you see every dollar and every lead.
      </>
    ),
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "We protect your leads with fast follow-up",
    body: "New form leads and missed calls get fast text follow-up so more people actually book an estimate instead of disappearing.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "We tune weekly to signed projects, not just cheap leads",
    body: (
      <>
        You get a simple view of:
        <ul style={{ margin: "10px 0 10px", paddingLeft: "18px", color: "#6b7280" }}>
          <li>How many leads came in per channel</li>
          <li>Which turned into in-person estimates</li>
          <li>Which became signed projects</li>
        </ul>
        We shift budget toward what brings in closed jobs, not vanity numbers.
      </>
    ),
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" />
        <polyline points="19 12 12 19 5 12" />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f8fbff 100%)",
        borderTop: "1px solid #e5e7eb",
        padding: "120px 40px",
        fontFamily: "var(--font-barlow), Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <span className="reveal" style={{
          display: "inline-block", color: "#1565ff",
          fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em",
          textTransform: "uppercase", marginBottom: "16px",
        }}>
          How It Works
        </span>

        <h2 className="reveal reveal-d1" style={{
          fontSize: "clamp(28px, 3.2vw, 46px)",
          fontWeight: 900, lineHeight: 1.12,
          margin: "0 0 16px", letterSpacing: "-0.02em", maxWidth: "820px",
          color: "#111827",
        }}>
          How The{" "}
          <span style={{ color: "#1565ff" }}>Pool Project Pipeline System</span>{" "}
          works.
        </h2>

        <p style={{
          fontSize: "16px", color: "#6b7280", margin: "0 0 72px", maxWidth: "700px",
          lineHeight: 1.7,
        }}>
          From discovery to closed deals, here's exactly how we turn your ad budget into signed projects.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "64px", alignItems: "stretch" }}>
          {/* Left: Steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px", position: "relative" }}>
            {/* Timeline connector line */}
            <div style={{
              position: "absolute",
              left: "39px",
              top: "32px",
              bottom: "0",
              width: "2px",
              background: "linear-gradient(to bottom, #1565ff, rgba(21,101,255,0.1))",
              pointerEvents: "none",
            }} />

            {steps.map((s, i) => (
              <div key={s.title} className={`reveal reveal-d${Math.min(i + 1, 5)}`} style={{
                display: "grid", gridTemplateColumns: "80px 1fr", gap: "24px", alignItems: "center",
                position: "relative",
              }}>
                {/* Numbered circle */}
                <div style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                }}>
                  <div style={{
                    flexShrink: 0,
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: i === 0 ? "#1565ff" : `linear-gradient(135deg, rgba(21,101,255,${0.9 - i * 0.15}), rgba(21,101,255,${0.6 - i * 0.1}))`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: 900,
                    fontSize: "28px",
                    boxShadow: `0 8px 24px rgba(21,101,255,${0.35 - i * 0.08})`,
                    zIndex: 10,
                    position: "relative",
                  }}>
                    {i + 1}
                  </div>
                </div>

                {/* Title only */}
                <div style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                }}>
                  <div style={{
                    flexShrink: 0,
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "rgba(21,101,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#1565ff",
                  }}>
                    {s.icon}
                  </div>
                  <h3 style={{
                    fontSize: "18px",
                    fontWeight: 800,
                    margin: 0,
                    color: "#111827",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.4,
                  }}>
                    {s.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Pool Image */}
          <div style={{
            position: "sticky",
            top: "40px",
            height: "600px",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(21,101,255,0.2)",
          }}>
            <Image
              src="https://images.unsplash.com/photo-1576267423446-16c0d0d7f77e?w=700&h=700&fit=crop"
              alt="Beautiful residential backyard pool"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

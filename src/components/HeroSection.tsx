import type { ReactNode } from "react";
import Image from "next/image";
import PoolWater from "./PoolWater";

/* ── Orbit delay helper ──────────────────────────────────── */
function delay(angle: number, speed: number) {
  return `${-(speed * angle / 360).toFixed(3)}s`;
}

/* ── Orbit item wrapper ──────────────────────────────────── */
function OrbitItem({
  angle, speed, radius, size, dir = "cw", children,
}: {
  angle: number; speed: number; radius: number;
  size: number; dir?: "cw" | "ccw"; children: ReactNode;
}) {
  const main    = dir === "cw" ? "orbitCW"  : "orbitCCW";
  const counter = dir === "cw" ? "orbitCCW" : "orbitCW";
  const d = delay(angle, speed);
  return (
    <div style={{
      position: "absolute", top: "50%", left: "50%",
      width: 0, height: 0,
      animation: `${main} ${speed}s linear infinite`,
      animationDelay: d,
    }}>
      <div style={{
        position: "absolute",
        top: `${-(radius + size / 2)}px`,
        left: `${-(size / 2)}px`,
        width: `${size}px`, height: `${size}px`,
        animation: `${counter} ${speed}s linear infinite`,
        animationDelay: d,
      }}>
        {children}
      </div>
    </div>
  );
}

/* ── Channel pill with logo + label ──────────────────────── */
function ChannelPill({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div style={{
      width: "100%", height: "100%", borderRadius: "16px",
      background: "rgba(6,20,60,0.88)",
      border: "1px solid rgba(21,101,255,0.35)",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      color: "#1565ff",
      gap: "2px",
      boxShadow: "0 6px 24px rgba(0,0,0,0.30), 0 0 16px rgba(255,255,255,0.08)",
      backdropFilter: "blur(12px)",
    }}>
      {children}
      <span style={{
        color: "rgba(255,255,255,0.82)",
        fontSize: "9px", fontWeight: 700,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        marginTop: "1px",
      }}>
        {label}
      </span>
    </div>
  );
}

/* ── Marketing channel SVG icons (monochrome blue) ──────── */
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#4a9eff">
    <path d="M22 12A10 10 0 0 0 2 12a10 10 0 0 0 8.44 9.88V14.89H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a9eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.1" fill="#4a9eff" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#4a9eff">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2s9 5 20 5a9.5 9.5 0 0 0-9-5.5c4.75 2.25 7-7 7-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#4a9eff">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a9eff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.5a9 9 0 1 1-2.6-6.3" />
    <path d="M21 4v5h-5" />
    <path d="M12 12h5.5" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a9eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a9eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const LeadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a9eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a9eff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="16" y="5"  width="4" height="15" rx="1" />
    <rect x="10" y="9"  width="4" height="11" rx="1" />
    <rect x="4"  y="13" width="4" height="7"  rx="1" />
  </svg>
);

/* ── Full orbital system ─────────────────────────────────── */
function OrbitalSystem() {
  const SIZE    = 640;
  const POOL_W  = 380;
  const POOL_H  = 260;
  const POOL_R  = 30;
  const R1      = 262;
  const R2      = 324;
  const PILL_SZ = 64;

  return (
    <div style={{
      position: "relative", width: SIZE, height: SIZE, flexShrink: 0,
      animation: "floatY 7s ease-in-out infinite",
    }}>
      {/* Orbit ring borders */}
      {[R1, R2].map((r) => (
        <div key={r} style={{
          position: "absolute",
          top: SIZE / 2 - r, left: SIZE / 2 - r,
          width: r * 2, height: r * 2,
          borderRadius: "50%",
          border: "1px solid rgba(21,101,255,0.22)",
          animation: "ringPulse 4s ease-in-out infinite",
        }} />
      ))}

      {/* Pool — rectangular, centered */}
      <div style={{
        position: "absolute",
        top:  SIZE / 2 - POOL_H / 2,
        left: SIZE / 2 - POOL_W / 2,
      }}>
        <PoolWater width={POOL_W} height={POOL_H} radius={POOL_R}>
          <span style={{
            fontSize: "11px", fontWeight: 700,
            color: "rgba(200,220,255,0.82)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}>
            All Your Leads
          </span>
          <span style={{
            fontSize: "44px", fontWeight: 900,
            color: "#ffffff", lineHeight: 1,
            letterSpacing: "-0.02em",
            textShadow: "0 2px 30px rgba(21,101,255,0.65)",
          }}>
            ONE PIPELINE
          </span>
          <span style={{
            fontSize: "11.5px", fontWeight: 600,
            color: "rgba(255,255,255,0.78)",
            letterSpacing: "0.08em",
            marginTop: "10px",
          }}>
            Facebook · Instagram · X · LinkedIn · Google
          </span>
        </PoolWater>
      </div>

      {/* Ring 1 — CW, 5 channels */}
      <OrbitItem angle={0}   speed={26} radius={R1} size={PILL_SZ}><ChannelPill label="Facebook"><FacebookIcon /></ChannelPill></OrbitItem>
      <OrbitItem angle={72}  speed={26} radius={R1} size={PILL_SZ}><ChannelPill label="Instagram"><InstagramIcon /></ChannelPill></OrbitItem>
      <OrbitItem angle={144} speed={26} radius={R1} size={PILL_SZ}><ChannelPill label="Google"><GoogleIcon /></ChannelPill></OrbitItem>
      <OrbitItem angle={216} speed={26} radius={R1} size={PILL_SZ}><ChannelPill label="X"><TwitterIcon /></ChannelPill></OrbitItem>
      <OrbitItem angle={288} speed={26} radius={R1} size={PILL_SZ}><ChannelPill label="LinkedIn"><LinkedInIcon /></ChannelPill></OrbitItem>

      {/* Ring 2 — CCW, 4 supporting */}
      <OrbitItem angle={45}  speed={38} radius={R2} size={PILL_SZ} dir="ccw"><ChannelPill label="Maps"><MapPinIcon /></ChannelPill></OrbitItem>
      <OrbitItem angle={135} speed={38} radius={R2} size={PILL_SZ} dir="ccw"><ChannelPill label="Call Ads"><LeadIcon /></ChannelPill></OrbitItem>
      <OrbitItem angle={225} speed={38} radius={R2} size={PILL_SZ} dir="ccw"><ChannelPill label="Tracking"><AnalyticsIcon /></ChannelPill></OrbitItem>
      <OrbitItem angle={315} speed={38} radius={R2} size={PILL_SZ} dir="ccw"><ChannelPill label="LSA"><ShieldCheckIcon /></ChannelPill></OrbitItem>
    </div>
  );
}

/* ── Navbar ──────────────────────────────────────────────── */
function Navbar() {
  return (
    <nav style={{
      position: "relative", zIndex: 50, width: "100%",
      background: "#0d0d0d",
    }}>
      <div style={{
        maxWidth: "1380px", margin: "0 auto", padding: "0 48px",
        height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>

        {/* Logo — inverted to white on black nav */}
        <a href="#top" style={{ display: "flex", alignItems: "center", flexShrink: 0, textDecoration: "none" }}>
          <Image
            src="/logo (1).svg"
            alt="Waterline Growth"
            width={160}
            height={50}
            priority
            style={{
              height: "56px",
              width: "auto",
              objectFit: "contain",
              filter: "brightness(0) invert(1)",
            }}
          />
        </a>

        {/* Nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {[
            { label: "How It Works", href: "#how" },
            { label: "What You Get",  href: "#get" },
            { label: "Pricing",       href: "#pricing" },
            { label: "FAQ",           href: "#faq" },
          ].map(({ label, href }) => (
            <a key={label} href={href} className="nav-link" style={{
              color: "rgba(255,255,255,0.72)", fontSize: "14px", fontWeight: 500,
              textDecoration: "none", letterSpacing: "0.02em",
            }}>
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="#book" className="nav-cta" style={{
          background: "#1565ff", color: "#ffffff",
          padding: "10px 22px", borderRadius: "8px",
          fontWeight: 700, fontSize: "14px", letterSpacing: "0.02em",
          textDecoration: "none", whiteSpace: "nowrap",
        }}>
          Book Pipeline Call
        </a>
      </div>
    </nav>
  );
}

/* ── Trust strip ─────────────────────────────────────────── */
function TrustStrip() {
  const items = [
    "Exclusive leads — never shared",
    "Runs in YOUR ad accounts",
    "No long-term contracts",
    "Tracking click → signed job",
  ];
  return (
    <div style={{
      display: "flex", flexWrap: "wrap", gap: "14px 22px",
      paddingTop: "28px",
      borderTop: "1px solid rgba(21,101,255,0.14)",
    }}>
      {items.map((t) => (
        <div key={t} style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          color: "rgba(11,30,59,0.65)",
          fontSize: "13px", fontWeight: 500, letterSpacing: "0.01em",
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1565ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
          {t}
        </div>
      ))}
    </div>
  );
}

/* ── Hero section ────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section id="top" style={{
      minHeight: "100vh",
      background: [
        "radial-gradient(ellipse at 72% 50%, rgba(21,101,255,0.10) 0%, transparent 55%)",
        "linear-gradient(148deg, #ffffff 0%, #f6f9ff 60%, #eef4ff 100%)",
      ].join(","),
      display: "flex", flexDirection: "column",
      fontFamily: "var(--font-barlow), Arial, sans-serif",
      overflow: "hidden",
    }}>

      <Navbar />

      {/* Two-column layout */}
      <div style={{
        flex: 1,
        maxWidth: "1380px", margin: "0 auto", padding: "0 48px",
        width: "100%",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: "48px",
      }}>

        {/* LEFT */}
        <div style={{ flex: "0 0 auto", maxWidth: "540px", display: "flex", flexDirection: "column" }}>

          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(21,101,255,0.07)", border: "1px solid rgba(21,101,255,0.22)",
            borderRadius: "9999px", padding: "6px 14px", marginBottom: "24px",
            width: "fit-content",
          }}>
            <span className="pulse-dot" style={{
              width: "7px", height: "7px", borderRadius: "50%",
              background: "#1565ff",
              display: "inline-block",
            }} />
            <span style={{ color: "#1565ff", fontSize: "13px", fontWeight: 600, letterSpacing: "0.04em" }}>
              Pool Builder Marketing Agency
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(30px, 3.4vw, 54px)",
            fontWeight: 900, lineHeight: 1.08,
            color: "#0b1e3b", margin: "0 0 22px",
            letterSpacing: "-0.02em",
          }}>
            Stop Losing{" "}
            <span style={{ color: "#1565ff" }}>$80k–$300k</span>{" "}
            Pool Jobs To Builders Who Advertise{" "}
            <span style={{ color: "#1565ff" }}>Louder</span>, Not Better
          </h1>

          <p style={{
            color: "rgba(11,30,59,0.68)", fontSize: "16.5px",
            lineHeight: 1.72, margin: "0 0 32px", fontWeight: 400,
            maxWidth: "500px",
          }}>
            We run Facebook, Instagram, Google, and Local Service Ads under your
            own accounts so you get real pool and backyard projects in your
            service area — not shared leads or tire-kickers.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "12px", flexWrap: "wrap" }}>
            <a href="#book" className="btn-primary" style={{
              background: "#1565ff", color: "#ffffff",
              padding: "14px 28px", borderRadius: "9999px",
              fontWeight: 800, fontSize: "15px", letterSpacing: "0.02em",
              textDecoration: "none", display: "inline-block",
              animation: "ctaGlow 3s ease-in-out infinite",
            }}>
              Book 15-Minute Pipeline Call
            </a>
            <a href="#how" className="link-arrow" style={{
              color: "rgba(11,30,59,0.72)", fontSize: "15px", fontWeight: 600,
              textDecoration: "none", display: "flex", alignItems: "center", gap: "6px",
            }}>
              See How It Works
              <svg className="arrow-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <p style={{
            color: "rgba(11,30,59,0.45)", fontSize: "13px",
            margin: "0 0 32px", fontWeight: 400,
          }}>
            No setup fee. Simple monthly fee. We build it, run it, and show you the numbers.
          </p>

          <TrustStrip />
        </div>

        {/* RIGHT */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: "1 1 auto" }}>
          <OrbitalSystem />
        </div>

      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/#top" },
  { label: "How It Works", href: "/#how" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Book Call", href: "/#book" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export default function FooterSection() {
  return (
    <footer
      style={{
        background: "#0d0d0d",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "64px clamp(20px, 5vw, 40px) 36px",
        fontFamily: "var(--font-barlow), Arial, sans-serif",
        color: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Top row */}
        <div className="footer-grid" style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1.4fr)",
          gap: "48px",
          marginBottom: "52px",
        }}>

          {/* Brand */}
          <div>
            <Image
              src="/logo (1).svg"
              alt="Waterline Growth"
              width={200}
              height={64}
              style={{
                height: "64px",
                width: "auto",
                objectFit: "contain",
                marginBottom: "16px",
                display: "block",
                filter: "brightness(0) invert(1)",
              }}
            />
            <p style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "14px",
              lineHeight: 1.7,
              maxWidth: "300px",
              margin: "0 0 16px",
            }}>
              Full-service digital marketing for pool builders and remodelers.
              Exclusive leads. Real results.
            </p>
            <p style={{
              color: "rgba(255,255,255,0.25)",
              fontSize: "11.5px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              margin: 0,
            }}>
              Built for pool builders and remodelers
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{
              color: "rgba(255,255,255,0.30)",
              fontSize: "11px", fontWeight: 700,
              letterSpacing: "0.14em", textTransform: "uppercase",
              margin: "0 0 16px",
            }}>
              Navigation
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} className="footer-link" style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "14px", fontWeight: 500,
                  textDecoration: "none",
                }}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <p style={{
              color: "rgba(255,255,255,0.30)",
              fontSize: "11px", fontWeight: 700,
              letterSpacing: "0.14em", textTransform: "uppercase",
              margin: "0 0 16px",
            }}>
              Legal
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {legalLinks.map((l) => (
                <Link key={l.label} href={l.href} className="footer-link" style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "14px", fontWeight: 500,
                  textDecoration: "none",
                }}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p style={{
              color: "rgba(255,255,255,0.30)",
              fontSize: "11px", fontWeight: 700,
              letterSpacing: "0.14em", textTransform: "uppercase",
              margin: "0 0 16px",
            }}>
              Contact
            </p>
            <a
              href="mailto:team@waterlinegrowth.com"
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "14px", fontWeight: 500,
                textDecoration: "none",
                display: "block", marginBottom: "24px",
              }}
            >
              team@waterlinegrowth.com
            </a>

            <a
              href="#book"
              className="footer-cta"
              style={{
                display: "inline-block",
                background: "#1565ff",
                color: "#ffffff",
                padding: "10px 22px",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "13.5px",
                letterSpacing: "0.02em",
                textDecoration: "none",
              }}
            >
              Book Pipeline Call
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom" style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          paddingTop: "22px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "24px",
        }}>
          <div>
            <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "13px", margin: "0 0 12px" }}>
              &copy; 2026 Waterline Growth. All rights reserved.
            </p>
            <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "13px", margin: 0 }}>
              Exclusive leads &middot; Pool builders &amp; remodelers only &middot; Month-to-month
            </p>
          </div>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <a href="https://www.facebook.com/people/Waterline-Growth/61586177527312/" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "center", textDecoration: "none" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12A10 10 0 0 0 2 12a10 10 0 0 0 8.44 9.88V14.89H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/waterlinegrowth/" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "center", textDecoration: "none" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
              </svg>
            </a>
            <a href="https://x.com/WaterlineGrowth" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "center", textDecoration: "none" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2s9 5 20 5a9.5 9.5 0 0 0-9-5.5c4.75 2.25 7-7 7-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/waterline-growth/" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "center", textDecoration: "none" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://www.google.com/search?q=Waterline+Growth" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "center", textDecoration: "none" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.5a9 9 0 1 1-2.6-6.3" />
                <path d="M21 4v5h-5" />
                <path d="M12 12h5.5" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

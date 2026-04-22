import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import FooterSection from "./FooterSection";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "100vh",
          paddingTop: "120px",
          paddingBottom: "80px",
          background: "linear-gradient(180deg, #ffffff 0%, #f6f9ff 100%)",
          fontFamily: "var(--font-barlow), Arial, sans-serif",
          color: "#111827",
        }}
      >
        <div className="wl-container" style={{ maxWidth: "860px" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              color: "#1565ff",
              fontSize: "13.5px",
              fontWeight: 600,
              textDecoration: "none",
              marginBottom: "24px",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              margin: "0 0 12px",
              lineHeight: 1.1,
            }}
          >
            {title}
          </h1>

          <p
            style={{
              fontSize: "13.5px",
              fontWeight: 600,
              color: "#6b7280",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              margin: "0 0 40px",
            }}
          >
            Effective Date: {updated}
          </p>

          <article
            style={{
              fontSize: "15.5px",
              lineHeight: 1.75,
              color: "#1f2937",
            }}
            className="legal-prose"
          >
            {children}
          </article>
        </div>
      </main>
      <FooterSection />

      <style>{`
        .legal-prose h2 {
          font-size: clamp(20px, 2.4vw, 26px);
          font-weight: 800;
          letter-spacing: -0.01em;
          margin: 40px 0 12px;
          color: #0b1e3b;
        }
        .legal-prose h3 {
          font-size: clamp(16px, 1.8vw, 19px);
          font-weight: 700;
          margin: 28px 0 10px;
          color: #0b1e3b;
        }
        .legal-prose p { margin: 0 0 14px; }
        .legal-prose ul { margin: 8px 0 18px; padding-left: 22px; }
        .legal-prose li { margin-bottom: 6px; }
        .legal-prose a { color: #1565ff; text-decoration: underline; }
        .legal-prose strong { color: #0b1e3b; }
      `}</style>
    </>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { NAVBAR_HEIGHT } from "./navbarConstants";

const links = [
  { label: "How It Works", href: "/#how" },
  { label: "What You Get", href: "/#get" },
  { label: "Pricing",      href: "/#pricing" },
  { label: "FAQ",          href: "/#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0,
        zIndex: 100, width: "100%",
        background: "rgba(13,13,13,0.92)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div className="wl-container" style={{
          height: `${NAVBAR_HEIGHT}px`, display: "flex",
          alignItems: "center", justifyContent: "space-between",
        }}>

          <a href="/#top" style={{ display: "flex", alignItems: "center", flexShrink: 0, textDecoration: "none" }}>
            <Image
              src="/logo (1).svg"
              alt="Waterline Growth"
              width={160}
              height={50}
              priority
              className="nav-logo"
              style={{
                height: "56px",
                width: "auto",
                objectFit: "contain",
                filter: "brightness(0) invert(1)",
              }}
            />
          </a>

          <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            {links.map(({ label, href }) => (
              <a key={label} href={href} className="nav-link" style={{
                color: "rgba(255,255,255,0.72)", fontSize: "14px", fontWeight: 500,
                textDecoration: "none", letterSpacing: "0.02em",
              }}>
                {label}
              </a>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a href="/#book" className="nav-cta" style={{
              background: "#1565ff", color: "#ffffff",
              padding: "10px 22px", borderRadius: "8px",
              fontWeight: 700, fontSize: "14px", letterSpacing: "0.02em",
              textDecoration: "none", whiteSpace: "nowrap",
            }}>
              Book Setup Call
            </a>

            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="nav-burger"
              style={{
                display: "none",
                width: "40px", height: "40px",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: "8px",
                color: "#ffffff",
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
              }}
            >
              {open ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      {open && (
        <div
          className="nav-drawer"
          style={{
            position: "fixed",
            top: `${NAVBAR_HEIGHT}px`,
            left: 0, right: 0, bottom: 0,
            zIndex: 99,
            background: "rgba(13,13,13,0.98)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            display: "flex",
            flexDirection: "column",
            padding: "24px 24px 40px",
          }}
          onClick={() => setOpen(false)}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {links.map(({ label, href }) => (
              <a key={label} href={href} style={{
                color: "#ffffff",
                fontSize: "20px", fontWeight: 600,
                textDecoration: "none",
                padding: "16px 4px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}>
                {label}
              </a>
            ))}
            <a href="/#book" style={{
              marginTop: "24px",
              background: "#1565ff", color: "#ffffff",
              padding: "14px 22px", borderRadius: "10px",
              fontWeight: 800, fontSize: "15px",
              textAlign: "center",
              textDecoration: "none",
            }}>
              Book Setup Call
            </a>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 760px) {
          .nav-burger { display: flex !important; }
          .nav-cta { display: none !important; }
        }
      `}</style>
    </>
  );
}

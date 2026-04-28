"use client";

import { useState, type CSSProperties } from "react";

const labelStyle: CSSProperties = {
  display: "block",
  fontSize: "13px",
  fontWeight: 700,
  color: "#0b1e3b",
  marginBottom: "6px",
  letterSpacing: "-0.005em",
};

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  fontSize: "14px",
  fontWeight: 500,
  color: "#0b1e3b",
  background: "#ffffff",
  border: "1.5px solid #e2e8f0",
  borderRadius: "10px",
  outline: "none",
  fontFamily: "inherit",
  boxSizing: "border-box",
  transition: "border-color 140ms ease, box-shadow 140ms ease",
};

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function BookingForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to real endpoint (Calendly, Formspree, or your own API route)
    setSent(true);
  }

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "480px",
        margin: "0 auto",
        background: "#ffffff",
        borderRadius: "20px",
        padding: "32px 30px",
        boxShadow:
          "0 30px 80px rgba(21,101,255,0.22), 0 12px 36px rgba(0,0,0,0.35), 0 0 0 1px rgba(21,101,255,0.18)",
        fontFamily: "var(--font-barlow), Arial, sans-serif",
      }}
    >
      <h3
        style={{
          fontSize: "20px",
          fontWeight: 900,
          color: "#0b1e3b",
          margin: "0 0 18px",
          letterSpacing: "-0.02em",
        }}
      >
        Book My Setup Call
      </h3>

      {sent ? (
        <div
          style={{
            background: "rgba(21,101,255,0.08)",
            border: "1.5px solid rgba(21,101,255,0.35)",
            borderRadius: "12px",
            padding: "20px",
            color: "#0b1e3b",
            fontSize: "15px",
            lineHeight: 1.55,
          }}
        >
          <strong style={{ color: "#1565ff", display: "block", marginBottom: "4px" }}>
            Got it — we&rsquo;ll reach out shortly.
          </strong>
          Keep an eye on your phone. We&rsquo;ll call within one business day to
          set up your 15-minute pipeline call.
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate>
          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="bf-name" style={labelStyle}>
              Your Name <span style={{ color: "#1565ff" }}>*</span>
            </label>
            <input
              id="bf-name"
              name="name"
              type="text"
              required
              placeholder="Mike Johnson"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="bf-phone" style={labelStyle}>
              Phone Number <span style={{ color: "#1565ff" }}>*</span>
            </label>
            <input
              id="bf-phone"
              name="phone"
              type="tel"
              required
              placeholder="(555) 555-5555"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="bf-company" style={labelStyle}>
              Company Name <span style={{ color: "#1565ff" }}>*</span>
            </label>
            <input
              id="bf-company"
              name="company"
              type="text"
              required
              placeholder="Johnson Pools LLC"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "22px" }}>
            <label htmlFor="bf-area" style={labelStyle}>
              Service Area
            </label>
            <input
              id="bf-area"
              name="area"
              type="text"
              placeholder="Dallas, TX"
              style={inputStyle}
            />
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              background: "#1565ff",
              color: "#ffffff",
              padding: "14px 20px",
              borderRadius: "10px",
              border: "none",
              fontWeight: 800,
              fontSize: "14.5px",
              letterSpacing: "0.01em",
              cursor: "pointer",
              fontFamily: "inherit",
              animation: "ctaGlow 3s ease-in-out infinite",
            }}
          >
            <PhoneIcon />
            Book My Setup Call
            <ArrowIcon />
          </button>

          <p
            style={{
              textAlign: "center",
              color: "#5a6b85",
              fontSize: "12px",
              fontWeight: 500,
              margin: "18px 0 0",
            }}
          >
            No setup fee <span style={{ color: "#1565ff" }}>·</span> Month-to-month{" "}
            <span style={{ color: "#1565ff" }}>·</span> Cancel anytime
          </p>
        </form>
      )}
    </div>
  );
}

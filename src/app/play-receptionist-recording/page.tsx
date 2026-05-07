import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "AI Receptionist Recording — Waterline Growth",
  description: "Listen to your AI receptionist call recording.",
};

function getSafeAudioUrl(raw: string | string[] | undefined): string | null {
  if (!raw) return null;
  const value = Array.isArray(raw) ? raw[0] : raw;
  try {
    const parsed = new URL(value);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      return null;
    }
    return parsed.toString();
  } catch {
    return null;
  }
}

export default async function PlayReceptionistRecordingPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const audioUrl = getSafeAudioUrl(params.url);

  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "100vh",
          paddingTop: "120px",
          paddingBottom: "80px",
          background:
            "radial-gradient(1200px 600px at 50% -10%, #e8f0ff 0%, transparent 60%), linear-gradient(180deg, #ffffff 0%, #f6f9ff 100%)",
          fontFamily: "var(--font-barlow), Arial, sans-serif",
          color: "#0b1e3b",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="wl-container"
          style={{
            maxWidth: "560px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Pill label */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "999px",
              background: "rgba(21,101,255,0.08)",
              border: "1px solid rgba(21,101,255,0.18)",
              color: "#1565ff",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#1565ff",
                boxShadow: "0 0 0 4px rgba(21,101,255,0.18)",
              }}
            />
            AI Receptionist
          </span>

          {/* Card */}
          <div
            style={{
              width: "100%",
              background: "#ffffff",
              borderRadius: "20px",
              border: "1px solid rgba(20,40,80,0.08)",
              boxShadow:
                "0 1px 2px rgba(20,40,80,0.04), 0 12px 32px rgba(20,40,80,0.08), 0 32px 80px rgba(20,40,80,0.06)",
              padding: "40px 32px 32px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative top accent */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background:
                  "linear-gradient(90deg, #1565ff 0%, #2f7dd8 50%, #1565ff 100%)",
              }}
            />

            {/* Icon badge */}
            <div
              style={{
                width: "72px",
                height: "72px",
                margin: "0 auto 20px",
                borderRadius: "20px",
                background:
                  "linear-gradient(135deg, #1565ff 0%, #2f7dd8 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow:
                  "0 8px 24px rgba(21,101,255,0.35), inset 0 1px 0 rgba(255,255,255,0.25)",
              }}
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12h2l2-7 4 14 3-10 2 5h5" />
              </svg>
            </div>

            <h1
              style={{
                fontSize: "clamp(24px, 3.4vw, 30px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                margin: "0 0 8px",
                lineHeight: 1.15,
                color: "#0b1e3b",
              }}
            >
              Lead Call Recording
            </h1>

            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.55,
                color: "#5a6b85",
                margin: "0 0 28px",
                maxWidth: "380px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Listen to the conversation your AI receptionist had with this
              lead.
            </p>

            {audioUrl ? (
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #f6f9ff 0%, #eef3ff 100%)",
                  border: "1px solid rgba(21,101,255,0.18)",
                  borderRadius: "14px",
                  padding: "16px",
                }}
              >
                <audio
                  controls
                  autoPlay
                  preload="auto"
                  src={audioUrl}
                  style={{
                    width: "100%",
                    display: "block",
                    outline: "none",
                  }}
                >
                  Your browser does not support audio playback.
                </audio>
              </div>
            ) : (
              <div
                style={{
                  background: "rgba(176,0,32,0.04)",
                  border: "1px solid rgba(176,0,32,0.18)",
                  borderRadius: "14px",
                  padding: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  color: "#b00020",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                No recording URL provided.
              </div>
            )}

            {/* Meta row */}
            <div
              style={{
                marginTop: "24px",
                paddingTop: "20px",
                borderTop: "1px solid rgba(20,40,80,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                color: "#6b7a94",
                fontSize: "12.5px",
                fontWeight: 600,
                letterSpacing: "0.04em",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Secure private link · For your team only
            </div>
          </div>

          {/* Tip below card */}
          <p
            style={{
              marginTop: "20px",
              fontSize: "13px",
              color: "#6b7a94",
              textAlign: "center",
              maxWidth: "420px",
              lineHeight: 1.5,
            }}
          >
            Tip: on iPhone, tap the play button — Safari blocks autoplay with
            sound until you interact.
          </p>
        </div>
      </main>
      <FooterSection />
    </>
  );
}

"use client";

import { useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "After nearly 50 years in business, I've worked with every kind of advertising, from newspapers to magazines, and nothing has delivered results like Waterline Growth. The team built a professional, visually compelling website and landing pages that consistently generate leads and referrals. They're organized, proactive, and transparent, checking in regularly, providing clear reports, and following through with real results.",
    name: "Ken",
    role: "Pool Builder · 50+ years",
  },
  {
    quote:
      "Working with Waterline Growth has been incredibly valuable. Their Facebook and Google advertising brought in high-quality leads we weren't reaching before, resulting in a noticeable increase in our conversion rate. They're responsive, explain their strategy clearly, and take the time to work closely with us. It truly feels like a partnership rather than a transaction.",
    name: "Matt",
    role: "Pool Contractor",
  },
  {
    quote:
      "I couldn't be happier with my experience with Waterline Growth. The free trial was helpful, but what truly set them apart were the upfront conversations — they presented a clear, thoughtful plan that others didn't. I was initially skeptical that social media could generate real work, but they quickly proved me wrong. They stood out from the competition, helped grow my business, and earned my trust.",
    name: "Arnie",
    role: "Pool Builder",
  },
  {
    quote:
      "Working with Waterline Growth has been a great experience. Their Facebook advertising is driving sales, communication has been excellent, and they've been honest and responsive every step of the way. I would absolutely recommend them.",
    name: "Ken",
    role: "Remodeler",
  },
  {
    quote:
      "Working with Waterline Growth has completely transformed my business. Before partnering with them, I struggled to generate consistent leads. Now, I receive a steady stream of high-quality prospects every week. Their digital marketing strategy, communication, and results have far exceeded my expectations.",
    name: "Tracy",
    role: "Pool Builder",
  },
];

function ArrowBtn({
  dir,
  onClick,
}: {
  dir: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous testimonial" : "Next testimonial"}
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "12px",
        background: "#0b1e3b",
        color: "#ffffff",
        border: "1px solid rgba(21,101,255,0.35)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 4px 14px rgba(11,30,59,0.18)",
        transition: "transform 150ms ease, background 150ms ease, box-shadow 150ms ease",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#1565ff";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#0b1e3b";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        {dir === "prev" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
      </svg>
    </button>
  );
}

function Card({
  data,
  state,
}: {
  data: Testimonial;
  state: "center" | "left" | "right";
}) {
  const isCenter = state === "center";
  const translate =
    state === "left" ? "-60%" : state === "right" ? "60%" : "0%";
  const scale = isCenter ? 1 : 0.86;
  const opacity = isCenter ? 1 : 0.42;
  const zIndex = isCenter ? 3 : 1;

  return (
    <article
      aria-hidden={!isCenter}
      className={`testimonial-card testimonial-card-${state}`}
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        width: "min(560px, 92vw)",
        transform: `translate(-50%, 0) translateX(${translate}) scale(${scale})`,
        opacity,
        zIndex,
        transition: "transform 520ms cubic-bezier(0.22, 1, 0.36, 1), opacity 520ms cubic-bezier(0.22, 1, 0.36, 1)",
        background: "linear-gradient(160deg, #0b1e3b 0%, #081631 60%, #040d22 100%)",
        borderRadius: "24px",
        padding: "32px 36px 28px",
        color: "#ffffff",
        boxShadow: isCenter
          ? "0 40px 80px -20px rgba(11,30,59,0.55), 0 0 0 1px rgba(21,101,255,0.28)"
          : "0 20px 40px -20px rgba(11,30,59,0.45), 0 0 0 1px rgba(255,255,255,0.06)",
        pointerEvents: isCenter ? "auto" : "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Decorative opening quote mark */}
      <span
        aria-hidden
        style={{
          fontSize: "56px",
          lineHeight: 0.8,
          fontWeight: 900,
          color: "rgba(21,101,255,0.35)",
          fontFamily: "Georgia, serif",
          marginBottom: "4px",
          height: "28px",
        }}
      >
        &ldquo;
      </span>

      <p
        style={{
          fontSize: "clamp(14.5px, 1.3vw, 16px)",
          lineHeight: 1.6,
          color: "rgba(255,255,255,0.82)",
          margin: "0 0 22px",
          textAlign: "left",
        }}
      >
        {data.quote}
      </p>

      {/* Author row — centered */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          paddingTop: "20px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "linear-gradient(140deg, #1565ff 0%, #0a2d5c 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            fontWeight: 800,
            fontSize: "15px",
            flexShrink: 0,
          }}
        >
          {data.name.charAt(0)}
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
          <span style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>{data.name}</span>
          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            {data.role}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function ProofSection() {
  const [index, setIndex] = useState(0);
  const n = testimonials.length;

  const go = (d: 1 | -1) => setIndex((i) => (i + d + n) % n);
  const prev = (index - 1 + n) % n;
  const next = (index + 1) % n;

  const progress = ((index + 1) / n) * 100;

  return (
    <section
      id="proof"
      className="wl-section-pad"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 50% 20%, rgba(21,101,255,0.06) 0%, transparent 60%), #f7f9fc",
        borderTop: "1px solid #eef1f5",
        fontFamily: "var(--font-barlow), Arial, sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div className="wl-container" style={{ textAlign: "center" }}>
        <span
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
            Results &amp; Proof
          </span>
        </span>

        <h2
          className="reveal reveal-d1"
          style={{
            fontSize: "clamp(28px, 3.6vw, 46px)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#0b1e3b",
            margin: "0 auto 14px",
            maxWidth: "760px",
          }}
        >
          Results you can reach, too.
        </h2>

        <p
          className="reveal reveal-d2"
          style={{
            color: "rgba(11,30,59,0.58)",
            fontSize: "clamp(14.5px, 1.3vw, 16px)",
            lineHeight: 1.65,
            margin: "0 auto clamp(48px, 8vw, 80px)",
            maxWidth: "560px",
          }}
        >
          Let the builders we work with speak for themselves.
        </p>

        {/* Carousel stage */}
        <div
          className="reveal reveal-d3 testimonial-stage"
          style={{
            position: "relative",
            minHeight: "clamp(420px, 50vw, 500px)",
            marginBottom: "40px",
          }}
        >
          {testimonials.map((t, i) => {
            const state: "center" | "left" | "right" =
              i === index ? "center" : i === prev ? "left" : i === next ? "right" : "left";
            const visible = i === index || i === prev || i === next;
            if (!visible) return null;
            return <Card key={i} data={t} state={state} />;
          })}

          {/* Soft side fade masks */}
          <div
            aria-hidden
            className="testimonial-fade"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "clamp(40px, 10vw, 120px)",
              height: "100%",
              background: "linear-gradient(90deg, #f7f9fc 0%, transparent 100%)",
              pointerEvents: "none",
              zIndex: 4,
            }}
          />
          <div
            aria-hidden
            className="testimonial-fade"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "clamp(40px, 10vw, 120px)",
              height: "100%",
              background: "linear-gradient(270deg, #f7f9fc 0%, transparent 100%)",
              pointerEvents: "none",
              zIndex: 4,
            }}
          />
        </div>

        {/* Controls */}
        <div
          style={{
            position: "relative",
            zIndex: 5,
            display: "flex",
            alignItems: "center",
            gap: "20px",
            justifyContent: "center",
            margin: "0 auto",
            maxWidth: "520px",
          }}
        >
          <ArrowBtn dir="prev" onClick={() => go(-1)} />

          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                fontSize: "12px",
                color: "rgba(11,30,59,0.55)",
                fontWeight: 600,
                letterSpacing: "0.12em",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {String(index + 1).padStart(2, "0")} of {String(n).padStart(2, "0")}
            </span>
            <div
              style={{
                width: "100%",
                height: "2px",
                background: "rgba(11,30,59,0.10)",
                borderRadius: "2px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  background: "linear-gradient(90deg, #1565ff 0%, #3ea3ff 100%)",
                  borderRadius: "2px",
                  transition: "width 520ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              />
            </div>
          </div>

          <ArrowBtn dir="next" onClick={() => go(1)} />
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .testimonial-card-left,
          .testimonial-card-right {
            display: none !important;
          }
          .testimonial-fade {
            display: none !important;
          }
          .testimonial-stage {
            min-height: 0 !important;
            margin-bottom: 28px !important;
          }
          .testimonial-card-center {
            position: relative !important;
            left: auto !important;
            top: auto !important;
            transform: none !important;
            width: 100% !important;
            max-width: 520px !important;
            margin: 0 auto !important;
            padding: 24px 22px 22px !important;
            border-radius: 20px !important;
          }
          .testimonial-card-center p {
            font-size: 14.5px !important;
            line-height: 1.6 !important;
            color: rgba(255,255,255,0.88) !important;
          }
        }
      `}</style>
    </section>
  );
}

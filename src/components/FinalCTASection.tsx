import BookingForm from "./BookingForm";

export default function FinalCTASection() {
  return (
    <section
      id="book"
      style={{
        position: "relative",
        background: [
          "radial-gradient(ellipse at 18% 50%, rgba(255,255,255,0.10) 0%, transparent 48%)",
          "radial-gradient(ellipse at 85% 80%, rgba(0,50,200,0.55) 0%, transparent 52%)",
          "linear-gradient(155deg, #061d50 0%, #0f3d9e 35%, #1565ff 68%, #0a2d6e 100%)",
        ].join(","),
        padding: "120px 56px",
        color: "#fff",
        fontFamily: "var(--font-barlow), Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Subtle mesh grid overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: [
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          ].join(","),
          backgroundSize: "56px 56px",
        }}
      />

      <div
        className="wl-collapse-900"
        style={{
          position: "relative",
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gap: "clamp(32px, 6vw, 72px)",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 580px)",
          alignItems: "center",
        }}
      >
        {/* Left — Copy */}
        <div className="reveal" style={{ maxWidth: "560px" }}>
          <span
            style={{
              display: "inline-block",
              color: "rgba(150,210,255,0.95)",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "22px",
            }}
          >
            Let&rsquo;s Build Your Pipeline
          </span>

          <h2
            style={{
              fontSize: "clamp(30px, 3.4vw, 52px)",
              fontWeight: 900,
              lineHeight: 1.1,
              margin: "0 0 22px",
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            Ready To Turn Your Slow Season Into{" "}
            <span style={{ color: "rgba(150,210,255,1)" }}>
              Signed Pool Projects?
            </span>
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.80)",
              fontSize: "17px",
              lineHeight: 1.7,
              margin: "0 0 28px",
            }}
          >
            We&rsquo;ll build and run your Pool Project Pipeline System so you
            can stay on the job site while your marketing works in the
            background.
          </p>

          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "15.5px",
              fontWeight: 600,
              lineHeight: 1.55,
              margin: "0 0 14px",
            }}
          >
            In one short call, we will:
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {[
              "Map your service area",
              "Review your project capacity",
              "Look at the types of jobs you want most",
              "Identify which channels make sense first",
              "Give you a clear plan, whether you hire us or not",
            ].map((t) => (
              <li
                key={t}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  color: "rgba(255,255,255,0.88)",
                  fontSize: "15.5px",
                  lineHeight: 1.55,
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(150,210,255,0.95)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0, marginTop: "2px" }}
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Form */}
        <div className="reveal reveal-d2" style={{ width: "100%", maxWidth: "580px" }}>
          <BookingForm />
        </div>
      </div>
    </section>
  );
}

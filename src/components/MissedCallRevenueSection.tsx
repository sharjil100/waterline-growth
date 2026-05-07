import MissedCallRevenueCalculator from "@/components/MissedCallRevenueCalculator";

const bullets = [
  {
    title: "Every missed call is a missed bid",
    body: "For pool builders and remodelers, one lost conversation can mean tens of thousands in missed revenue.",
  },
  {
    title: "Built for builders & remodelers",
    body: "Defaults tuned to real pool economics — new builds, remodels, and resurfacing — not generic home-services averages.",
  },
  {
    title: "Then we plug the leak",
    body: "Call tracking, fast follow-up, and ad spend pointed at projects you can actually close.",
  },
];

export default function MissedCallRevenueSection() {
  return (
    <section
      id="missed-call-calculator"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(1200px 600px at 85% 0%, rgba(21,101,255,0.10), transparent 60%), radial-gradient(900px 500px at 0% 100%, rgba(21,101,255,0.07), transparent 60%), #f6f9ff",
      }}
    >
      <div className="wl-container wl-section-pad">
        <div
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] gap-10 lg:gap-14 items-center"
          style={{ fontFamily: "var(--font-barlow), Arial, sans-serif" }}
        >
          {/* Left — copy */}
          <div className="order-1 lg:order-1 max-w-[560px] mx-auto lg:mx-0 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1565ff]/10 px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] text-[#1565ff]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1565ff]" />
              Free Tool
            </div>

            <h2 className="mt-4 text-[clamp(28px,4.4vw,46px)] font-black leading-[1.08] tracking-tight text-[#0b1e3b]">
              See What Missed Calls Are{" "}
              <span className="text-[#1565ff]">Really Costing You</span>
            </h2>

            <p className="mt-4 text-[clamp(15px,1.4vw,17px)] leading-[1.65] text-[#5a6b85]">
              Most pool companies do not know how much pipeline they lose
              every week from missed calls, slow follow-up, and untracked
              leads. Plug in a few numbers — see the damage in seconds.
            </p>

            <ul className="mt-6 flex flex-col gap-4 text-left mx-auto lg:mx-0 max-w-[440px]">
              {bullets.map((b) => (
                <li key={b.title} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#1565ff] text-white shadow-[0_4px_10px_rgba(21,101,255,0.35)]"
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-[15.5px] font-bold tracking-tight text-[#0b1e3b]">
                      {b.title}
                    </div>
                    <div className="mt-0.5 text-[14.5px] leading-snug text-[#5a6b85]">
                      {b.body}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex justify-center lg:justify-start">
              <a
                href="#book"
                className="group inline-flex items-center gap-2 rounded-[12px] bg-[#0b1e3b] px-5 py-3 text-[14px] font-extrabold tracking-[0.01em] text-white transition hover:bg-[#1565ff] focus:outline-none focus:ring-4 focus:ring-[#1565ff]/30"
              >
                Book My Setup Call
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — calculator */}
          <div className="order-2 lg:order-2">
            <MissedCallRevenueCalculator />
          </div>
        </div>
      </div>
    </section>
  );
}

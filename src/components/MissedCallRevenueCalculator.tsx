"use client";

import { useEffect, useRef, useState } from "react";

type BusinessType = "builder" | "remodeler";

type Defaults = {
  missedCallsPerWeek: number;
  averageProjectValue: number;
  closeRate: number;
  profitMargin: number;
};

const DEFAULTS: Record<BusinessType, Defaults> = {
  builder: {
    missedCallsPerWeek: 3,
    averageProjectValue: 80000,
    closeRate: 0.15,
    profitMargin: 0.25,
  },
  remodeler: {
    missedCallsPerWeek: 5,
    averageProjectValue: 25000,
    closeRate: 0.2,
    profitMargin: 0.35,
  },
};

const currencyFmt = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const formatCurrency = (n: number) =>
  Number.isFinite(n) ? currencyFmt.format(Math.max(0, Math.round(n))) : "$0";

const formatPercent = (n: number) => `${Math.round(n * 100)}%`;

type FieldProps = {
  id: string;
  label: string;
  value: number;
  onChange: (n: number) => void;
  prefix?: string;
  suffix?: string;
};

function NumberField({
  id,
  label,
  value,
  onChange,
  prefix,
  suffix,
}: FieldProps) {
  const [text, setText] = useState<string>(String(value));
  const lastExternal = useRef<number>(value);

  useEffect(() => {
    if (value !== lastExternal.current) {
      lastExternal.current = value;
      setText(String(value));
    }
  }, [value]);

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[11.5px] font-bold text-[#0b1e3b] mb-1 tracking-tight"
      >
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="pointer-events-none absolute inset-y-0 left-2.5 flex items-center text-[13px] font-semibold text-[#5a6b85]">
            {prefix}
          </span>
        )}
        <input
          id={id}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={text}
          onChange={(e) => {
            const raw = e.target.value.replace(/[^0-9]/g, "");
            const normalized = raw.replace(/^0+(?=\d)/, "");
            setText(normalized);
            const n = normalized === "" ? 0 : Number(normalized);
            lastExternal.current = n;
            onChange(Number.isFinite(n) ? n : 0);
          }}
          onBlur={() => {
            if (text === "") {
              setText("0");
              lastExternal.current = 0;
              onChange(0);
            }
          }}
          className={`w-full rounded-[8px] border-[1.5px] border-slate-200 bg-white py-2 text-[13.5px] font-semibold text-[#0b1e3b] outline-none transition focus:border-[#1565ff] focus:ring-4 focus:ring-[#1565ff]/15 ${
            prefix ? "pl-7" : "pl-3"
          } ${suffix ? "pr-7" : "pr-3"}`}
        />
        {suffix && (
          <span className="pointer-events-none absolute inset-y-0 right-2.5 flex items-center text-[13px] font-semibold text-[#5a6b85]">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function ResultCard({
  label,
  value,
  emphasis,
}: {
  label: string;
  value: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className={`rounded-[12px] px-3 py-2.5 transition ${
        emphasis
          ? "bg-gradient-to-br from-[#1565ff] to-[#0d49c0] text-white shadow-[0_8px_20px_rgba(21,101,255,0.28)]"
          : "bg-slate-50 border border-slate-200"
      }`}
    >
      <div
        className={`text-[10px] font-bold uppercase tracking-[0.06em] ${
          emphasis ? "text-white/80" : "text-[#5a6b85]"
        }`}
      >
        {label}
      </div>
      <div
        className={`mt-0.5 font-black tabular-nums tracking-tight ${
          emphasis
            ? "text-white text-[20px] sm:text-[22px]"
            : "text-[#0b1e3b] text-[16px] sm:text-[17px]"
        }`}
      >
        {value}
      </div>
    </div>
  );
}

export default function MissedCallRevenueCalculator() {
  const [businessType, setBusinessType] = useState<BusinessType>("builder");
  const [missedCallsPerWeek, setMissedCallsPerWeek] = useState<number>(
    DEFAULTS.builder.missedCallsPerWeek
  );
  const [averageProjectValue, setAverageProjectValue] = useState<number>(
    DEFAULTS.builder.averageProjectValue
  );
  const [showMath, setShowMath] = useState(false);

  function handleBusinessTypeChange(next: BusinessType) {
    setBusinessType(next);
    const d = DEFAULTS[next];
    setMissedCallsPerWeek(d.missedCallsPerWeek);
    setAverageProjectValue(d.averageProjectValue);
  }

  const { closeRate, profitMargin } = DEFAULTS[businessType];

  const safeMissed = Math.max(missedCallsPerWeek, 0);
  const safeValue = Math.max(averageProjectValue, 0);

  const lostAnnualRevenue = safeMissed * 52 * closeRate * safeValue;
  const lostAnnualProfit = lostAnnualRevenue * profitMargin;
  const lostMonthlyRevenue = lostAnnualRevenue / 12;
  const lostMonthlyProfit = lostAnnualProfit / 12;

  return (
    <div
      className="w-full max-w-[560px] mx-auto rounded-[20px] bg-white p-5 sm:p-6 shadow-[0_30px_80px_rgba(21,101,255,0.18),0_12px_36px_rgba(11,30,59,0.10),0_0_0_1px_rgba(21,101,255,0.12)]"
      style={{ fontFamily: "var(--font-barlow), Arial, sans-serif" }}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-[18px] sm:text-[20px] font-black leading-[1.15] tracking-tight text-[#0b1e3b]">
            Missed Pool Project Revenue
          </h3>
          <p className="mt-1 text-[12.5px] leading-snug text-[#5a6b85]">
            See what your pool company is losing from missed calls.
          </p>
        </div>
        <div className="flex-shrink-0 inline-flex items-center gap-1.5 rounded-full bg-[#1565ff]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#1565ff]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#1565ff]" />
          Calculator
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <label
            htmlFor="mcrc-business"
            className="block text-[12px] font-bold text-[#0b1e3b] mb-1 tracking-tight"
          >
            Business Type
          </label>
          <div
            role="tablist"
            aria-label="Business type"
            className="grid grid-cols-2 gap-1.5 rounded-[10px] bg-slate-100 p-1"
          >
            {(
              [
                { key: "builder", label: "Pool Builder" },
                { key: "remodeler", label: "Pool Remodeler" },
              ] as const
            ).map((opt) => {
              const active = businessType === opt.key;
              return (
                <button
                  key={opt.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => handleBusinessTypeChange(opt.key)}
                  className={`rounded-[8px] py-2 text-[12.5px] font-bold tracking-tight transition ${
                    active
                      ? "bg-white text-[#0b1e3b] shadow-[0_3px_10px_rgba(11,30,59,0.10)]"
                      : "text-[#5a6b85] hover:text-[#0b1e3b]"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
          <input
            id="mcrc-business"
            type="hidden"
            value={businessType}
            readOnly
          />
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <NumberField
            id="mcrc-missed"
            label="Missed calls / wk"
            value={missedCallsPerWeek}
            onChange={setMissedCallsPerWeek}
          />
          <NumberField
            id="mcrc-value"
            label="Avg. project value"
            value={averageProjectValue}
            onChange={setAverageProjectValue}
            prefix="$"
          />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <ResultCard
          label="Lost annual revenue"
          value={formatCurrency(lostAnnualRevenue)}
          emphasis
        />
        <ResultCard
          label="Lost annual profit"
          value={formatCurrency(lostAnnualProfit)}
        />
        <ResultCard
          label="Lost monthly revenue"
          value={formatCurrency(lostMonthlyRevenue)}
        />
        <ResultCard
          label="Lost monthly profit"
          value={formatCurrency(lostMonthlyProfit)}
        />
      </div>

      <p className="mt-3 text-[11px] leading-snug text-[#5a6b85]">
        Based on typical pool industry assumptions.
      </p>

      <div className="mt-2 rounded-[10px] border border-slate-200 bg-slate-50/60">
        <button
          type="button"
          onClick={() => setShowMath((v) => !v)}
          aria-expanded={showMath}
          aria-controls="mcrc-math"
          className="flex w-full items-center justify-between gap-2 px-3 py-2 text-[12px] font-bold tracking-tight text-[#0b1e3b] transition hover:text-[#1565ff]"
        >
          How this is calculated
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform ${showMath ? "rotate-180" : ""}`}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        {showMath && (
          <div
            id="mcrc-math"
            className="border-t border-slate-200 px-3 py-2.5 text-[11.5px] leading-relaxed text-[#5a6b85]"
          >
            <p>
              We estimate how many missed calls could have become booked
              projects, then multiply that by your average project value.
            </p>
            <ul className="mt-2 space-y-1 text-[11px]">
              <li>
                <span className="font-semibold text-[#0b1e3b]">
                  Industry close rate:
                </span>{" "}
                {formatPercent(closeRate)} of leads turn into booked projects
                for{" "}
                {businessType === "builder"
                  ? "pool builders"
                  : "pool remodelers"}
                .
              </li>
              <li>
                <span className="font-semibold text-[#0b1e3b]">
                  Profit margin:
                </span>{" "}
                {formatPercent(profitMargin)} of revenue typically becomes
                gross profit.
              </li>
              <li>
                <span className="font-semibold text-[#0b1e3b]">Formula:</span>{" "}
                missed calls/wk &times; 52 weeks &times;{" "}
                {formatPercent(closeRate)} close rate &times; avg. project
                value.
              </li>
            </ul>
          </div>
        )}
      </div>

      <a
        href="#book"
        className="group mt-4 flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#1565ff] px-5 py-3 text-[14px] font-extrabold tracking-[0.01em] text-white transition hover:bg-[#0d49c0] focus:outline-none focus:ring-4 focus:ring-[#1565ff]/30"
      >
        Recover Missed Pool Leads
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
  );
}

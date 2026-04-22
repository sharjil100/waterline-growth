"use client";

import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   Caustics — SVG feTurbulence generates real refracted light
───────────────────────────────────────────────────────────── */
function Caustics() {
  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        mixBlendMode: "screen",
        opacity: 0.55,
        pointerEvents: "none",
      }}
    >
      <defs>
        <filter id="pool-caustics" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.013 0.018"
            numOctaves="2"
            seed="7"
          >
            <animate
              attributeName="baseFrequency"
              dur="14s"
              values="0.013 0.018; 0.016 0.015; 0.012 0.020; 0.013 0.018"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feColorMatrix
            values="0 0 0 0 0.82
                    0 0 0 0 0.93
                    0 0 0 0 1
                    0 0 0 2.6 -1.05"
          />
          <feGaussianBlur stdDeviation="0.6" />
        </filter>
      </defs>
      <rect width="100%" height="100%" filter="url(#pool-caustics)" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   Submerged steps — real stone steps tinted by water
───────────────────────────────────────────────────────────── */
function SubmergedStairs({ width, height }: { width: number; height: number }) {
  const STEPS = 4;
  const stairW = width * 0.46;
  const stairD = height * 0.24;
  const left = (width - stairW) / 2;
  const stepH = stairD / STEPS;

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left,
        width: stairW,
        height: stairD,
        zIndex: 2,
        pointerEvents: "none",
      }}
    >
      {Array.from({ length: STEPS }).map((_, i) => {
        const inset = i * 10;
        // Deeper steps get a darker blue-cream (refracted through more water)
        const r = Math.round(225 - i * 22);
        const g = Math.round(232 - i * 18);
        const b = Math.round(220 - i * 10);
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: i * stepH,
              left: inset,
              right: inset,
              height: stepH + 1,
              background: `linear-gradient(180deg,
                rgba(${r},${g},${b},${0.78 - i * 0.08}) 0%,
                rgba(${r - 30},${g - 25},${b - 15},${0.60 - i * 0.07}) 100%)`,
              borderTop: "1px solid rgba(255,255,255,0.35)",
              boxShadow: `0 2px 5px rgba(0,18,45,${0.30 + i * 0.05})`,
            }}
          />
        );
      })}

      {/* Water tint across the stairs — like looking through water */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(70,165,205,0.22) 0%, rgba(30,110,175,0.38) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Soft refraction wobble — subtle displacement */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-4%",
          background:
            "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)",
          filter: "blur(2px)",
          pointerEvents: "none",
        }}
        animate={{ x: [0, 3, -2, 2, 0], y: [0, -1, 1, -1, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   POOL — realistic swimming pool with stone coping, depth gradient,
   caustics, submerged stairs, and specular highlights.
───────────────────────────────────────────────────────────── */
export default function PoolWater({
  width = 400,
  height = 272,
  children,
}: {
  width?: number;
  height?: number;
  children?: React.ReactNode;
}) {
  const COPING = 12;

  return (
    <div
      style={{
        width,
        height,
        position: "relative",
        perspective: "1800px",
      }}
    >
      {/* Ground shadow under the pool */}
      <div
        style={{
          position: "absolute",
          bottom: "-22px",
          left: "8%",
          right: "8%",
          height: "28px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(20,30,50,0.22) 0%, transparent 70%)",
          filter: "blur(8px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Stone coping — the white/cream pool edge */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "0px",
          overflow: "hidden",
          background:
            "linear-gradient(180deg, #fbfaf5 0%, #efeae0 55%, #ddd6c6 100%)",
          boxShadow: [
            "0 18px 42px rgba(20,30,50,0.18)",
            "0 2px 6px rgba(20,30,50,0.08)",
            "inset 0 1px 0 rgba(255,255,255,0.90)",
            "inset 0 -1px 0 rgba(0,0,0,0.04)",
          ].join(","),
          transform: "rotateX(16deg)",
          transformOrigin: "center center",
        }}
      >
        {/* Pool basin — water */}
        <div
          style={{
            position: "absolute",
            top: COPING,
            left: COPING,
            right: COPING,
            bottom: COPING,
            borderRadius: "0px",
            overflow: "hidden",
            // Depth gradient: shallow turquoise (near stairs, top) → deeper navy
            background: [
              // overall depth grade top→bottom
              "linear-gradient(180deg, #6ec8d8 0%, #3fa0c4 14%, #2377b2 32%, #155396 52%, #0c3a7f 72%, #072458 100%)",
            ].join(","),
            boxShadow: [
              "inset 0 10px 22px rgba(0,20,60,0.35)",
              "inset 0 -6px 18px rgba(0,10,40,0.45)",
              "inset 0 0 0 1px rgba(255,255,255,0.10)",
            ].join(","),
          }}
        >
          {/* Depth overlay — deepens toward center for natural look */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 90% 70% at 50% 60%, rgba(4,16,48,0.28) 0%, transparent 65%)",
              pointerEvents: "none",
            }}
          />

          {/* Caustics — refracted sunlight patterns */}
          <Caustics />

          {/* Submerged stairs at top end */}
          <SubmergedStairs width={width} height={height} />

          {/* Gentle surface shimmer — subtle, not UI glow */}
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 60% 45% at 45% 55%, rgba(180,220,255,0.16) 0%, transparent 60%)",
              mixBlendMode: "screen",
              pointerEvents: "none",
            }}
            animate={{
              backgroundPosition: [
                "45% 55%",
                "55% 60%",
                "48% 50%",
                "45% 55%",
              ],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Specular highlight — soft diagonal sun streak */}
          <div
            style={{
              position: "absolute",
              top: "18%",
              left: "-15%",
              right: "-15%",
              height: "38%",
              background:
                "linear-gradient(112deg, transparent 38%, rgba(255,255,255,0.14) 50%, transparent 62%)",
              pointerEvents: "none",
            }}
          />

          {/* Top waterline highlight under coping */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 100%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* Flat text overlay — stays facing viewer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 44px",
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        {children}
      </div>
    </div>
  );
}

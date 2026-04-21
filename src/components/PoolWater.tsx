"use client";

import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   Caustic light blob — sunlight refracting through water
───────────────────────────────────────────────────────────── */
function Caustic({
  x, y, w, h, rot, delay, duration,
}: {
  x: number; y: number; w: number; h: number;
  rot: number; delay: number; duration: number;
}) {
  return (
    <motion.div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        width: w,
        height: h,
        borderRadius: "50%",
        background:
          "radial-gradient(ellipse, rgba(200,225,255,0.70) 0%, rgba(130,180,255,0.32) 40%, transparent 72%)",
        filter: "blur(3px)",
        transform: `translate(-50%, -50%) rotate(${rot}deg)`,
        mixBlendMode: "screen",
      }}
      animate={{
        x: [0, 18, -12, 22, -8, 0],
        y: [0, -14, 18, -6, 14, 0],
        opacity: [0.55, 0.95, 0.5, 0.85, 0.6, 0.55],
        scaleX: [1, 1.35, 0.75, 1.25, 0.9, 1],
        scaleY: [1, 0.78, 1.25, 0.85, 1.15, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

/* ─────────────────────────────────────────────────────────────
   Horizontal wave slice — morphing SVG path
───────────────────────────────────────────────────────────── */
function WaveLayer({
  width, height, color, yBase, amplitude, speed, delay: d,
}: {
  width: number; height: number; color: string;
  yBase: number; amplitude: number; speed: number; delay: number;
}) {
  const amp = amplitude;

  const wave1 = `M0 ${yBase} C${width * 0.18} ${yBase - amp}, ${width * 0.38} ${yBase + amp * 1.1}, ${width * 0.56} ${yBase - amp * 0.7} S${width * 0.82} ${yBase + amp * 0.9}, ${width} ${yBase - amp * 0.2} L${width} ${height} L0 ${height} Z`;
  const wave2 = `M0 ${yBase} C${width * 0.22} ${yBase + amp * 1.1}, ${width * 0.44} ${yBase - amp}, ${width * 0.62} ${yBase + amp * 0.6} S${width * 0.86} ${yBase - amp * 0.9}, ${width} ${yBase + amp * 0.3} L${width} ${height} L0 ${height} Z`;

  return (
    <motion.path
      fill={color}
      initial={{ d: wave1 }}
      animate={{ d: [wave1, wave2, wave1] }}
      transition={{ duration: speed, repeat: Infinity, ease: "easeInOut", delay: d }}
    />
  );
}

/* ─────────────────────────────────────────────────────────────
   Surface highlight band — bright streak travelling across water
───────────────────────────────────────────────────────────── */
function SurfaceStreak({
  width, height, yBase, delay, duration,
}: {
  width: number; height: number; yBase: number;
  delay: number; duration: number;
}) {
  const amp = 8;
  const start = `M -${width * 0.2} ${yBase} Q ${width * 0.2} ${yBase - amp}, ${width * 0.5} ${yBase} T ${width * 1.1} ${yBase}`;
  const end   = `M ${width * 1.2} ${yBase} Q ${width * 0.7} ${yBase + amp}, ${width * 0.4} ${yBase} T -${width * 0.1} ${yBase}`;
  return (
    <motion.path
      stroke="rgba(210,230,255,0.85)"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      filter="blur(1.5px)"
      initial={{ d: start, opacity: 0 }}
      animate={{
        d: [start, end, start],
        opacity: [0, 0.75, 0],
      }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

/* ─────────────────────────────────────────────────────────────
   POOL WATER — rectangular pool with prominent water motion
───────────────────────────────────────────────────────────── */
export default function PoolWater({
  width = 400,
  height = 272,
  radius = 30,
  children,
}: {
  width?: number;
  height?: number;
  radius?: number;
  children?: React.ReactNode;
}) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: `${radius}px`,
        position: "relative",
        overflow: "hidden",
        background: [
          "radial-gradient(ellipse 70% 60% at 38% 30%, rgba(110,170,255,0.72) 0%, transparent 55%)",
          "radial-gradient(ellipse 60% 50% at 68% 65%, rgba(50,120,230,0.50) 0%, transparent 50%)",
          "radial-gradient(ellipse 55% 45% at 28% 70%, rgba(70,140,250,0.40) 0%, transparent 48%)",
          "linear-gradient(155deg, #1550d0 0%, #0a35a0 22%, #072680 48%, #04155a 78%, #02082a 100%)",
        ].join(","),
        boxShadow: [
          "0 0 90px rgba(21,101,255,0.52)",
          "0 0 180px rgba(21,101,255,0.22)",
          "inset 0 0 70px rgba(21,101,255,0.18)",
          "inset 0 2px 0 rgba(200,225,255,0.45)",
          "inset 0 -10px 20px rgba(2,8,30,0.6)",
        ].join(","),
        border: "2px solid rgba(200,225,255,0.35)",
      }}
    >
      {/* ── Pool coping strip (top inner light band) ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "14px",
          background:
            "linear-gradient(180deg, rgba(220,235,255,0.32) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Pool tile grid ───────────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: `${radius}px`,
          backgroundImage: [
            "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
          ].join(","),
          backgroundSize: "24px 24px",
        }}
      />

      {/* ── Moving surface shimmer gradient ───────────── */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: `${radius}px`,
          background:
            "radial-gradient(ellipse 60% 50% at 40% 35%, rgba(140,195,255,0.55) 0%, transparent 55%)",
          mixBlendMode: "screen",
        }}
        animate={{
          backgroundPosition: [
            "40% 35%",
            "62% 48%",
            "32% 62%",
            "55% 28%",
            "40% 35%",
          ],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Caustic light blobs ──────────────────────── */}
      <Caustic x={30} y={32} w={120} h={54} rot={18}  delay={0}   duration={4.2} />
      <Caustic x={62} y={42} w={100} h={48} rot={-22} delay={0.5} duration={5.0} />
      <Caustic x={24} y={62} w={110} h={50} rot={32}  delay={1.0} duration={4.6} />
      <Caustic x={70} y={28} w={80}  h={38} rot={-15} delay={1.6} duration={5.4} />
      <Caustic x={50} y={72} w={105} h={46} rot={8}   delay={0.3} duration={4.0} />
      <Caustic x={80} y={60} w={70}  h={34} rot={-38} delay={2.0} duration={5.8} />
      <Caustic x={18} y={44} w={85}  h={40} rot={25}  delay={1.3} duration={4.8} />
      <Caustic x={46} y={50} w={90}  h={44} rot={-8}  delay={2.6} duration={5.2} />

      {/* ── Animated wave layers (SVG, morphing paths) ── */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
      >
        <WaveLayer width={width} height={height} color="rgba(90,160,255,0.30)" yBase={height * 0.56} amplitude={30} speed={4.2} delay={0}   />
        <WaveLayer width={width} height={height} color="rgba(50,110,230,0.26)" yBase={height * 0.68} amplitude={22} speed={5.6} delay={1.1} />
        <WaveLayer width={width} height={height} color="rgba(120,185,255,0.20)" yBase={height * 0.42} amplitude={18} speed={3.8} delay={0.6} />
        <WaveLayer width={width} height={height} color="rgba(30,80,200,0.22)"   yBase={height * 0.82} amplitude={16} speed={6.4} delay={1.8} />

        {/* Surface streaks — bright highlights travelling across */}
        <SurfaceStreak width={width} height={height} yBase={height * 0.30} delay={0}   duration={6} />
        <SurfaceStreak width={width} height={height} yBase={height * 0.55} delay={2}   duration={7} />
        <SurfaceStreak width={width} height={height} yBase={height * 0.78} delay={4}   duration={6.5} />
      </svg>

      {/* ── Subtle ripple ellipses ────────────────────── */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.32,
        }}
        viewBox={`0 0 ${width} ${height}`}
      >
        {[
          [width * 0.35, height * 0.30, 28],
          [width * 0.65, height * 0.70, 40],
          [width * 0.50, height * 0.50, 55],
        ].map(([cx, cy, r], i) => (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx={r * 1.3}
            ry={r * 0.7}
            fill="none"
            stroke="rgba(160,205,255,0.65)"
            strokeWidth="0.8"
          />
        ))}
      </svg>

      {/* ── Edge vignette — darkens pool corners ──────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: `${radius}px`,
          background:
            "radial-gradient(ellipse 75% 65% at 50% 50%, transparent 55%, rgba(2,6,24,0.80) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Content slot (text overlay) ───────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 28px",
          zIndex: 10,
        }}
      >
        {children}
      </div>
    </div>
  );
}

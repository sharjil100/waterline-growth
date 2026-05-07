import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Waterline Growth - AI Receptionist For Pool Builders & Remodelers",
  description:
    "Stop losing $20k–$300k pool projects to voicemail. Our AI receptionist captures every missed call, flags new builds and major remodels as hot leads, and texts you the summary. Flat $397/mo, no setup fee, live the same day.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={barlow.variable}>
      <body style={{ margin: 0, padding: 0, background: "#ffffff", fontFamily: "var(--font-barlow), Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Waterline Growth - Pool Builder Marketing Agency",
  description:
    "Lead-driven marketing for swimming pool contractors. We help pool builders grow with Facebook Ads, Google Ads, and digital marketing.",
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

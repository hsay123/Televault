import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const sans = DM_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600"],
});

const mono = JetBrains_Mono({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "TeleVault — Your Telegram as a cloud drive",
  description:
    "Store anything. No monthly bills. Your Telegram account becomes 5 TB of private cloud storage.",
  openGraph: {
    title: "TeleVault",
    description: "Your Telegram account as a real cloud drive. 5 TB. One payment.",
    url: "https://televault.app",
    siteName: "TeleVault",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
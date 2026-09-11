import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TeleVault — Personal File Management Through Telegram",
  description:
    "TeleVault is a desktop file manager for organizing, searching and managing files through your own Telegram account.",
  keywords: [
    "file manager",
    "Telegram",
    "desktop app",
    "file organization",
    "cloud storage",
    "TeleVault",
  ],
  openGraph: {
    title: "TeleVault — Personal File Management Through Telegram",
    description:
      "TeleVault is a desktop file manager for organizing, searching and managing files through your own Telegram account.",
    url: "https://televault.app",
    siteName: "TeleVault",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TeleVault — Personal File Management Through Telegram",
    description:
      "TeleVault is a desktop file manager for organizing, searching and managing files through your own Telegram account.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
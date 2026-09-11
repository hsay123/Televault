"use client";

import Link from "next/link";
import { motion } from "motion/react";

interface PlatformCard {
  name: string;
  icon: React.ReactNode;
  description: string;
  fileSize: string;
  href: string;
  variant: "primary" | "secondary";
}

const platforms: PlatformCard[] = [
  {
    name: "Windows",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
      </svg>
    ),
    description:
      "Compatible with Windows 10 and above. Installer included.",
    fileSize: "~45 MB",
    href: process.env.NEXT_PUBLIC_DOWNLOAD_WINDOWS || "#",
    variant: "primary",
  },
  {
    name: "macOS",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
    description: "Compatible with macOS 12 Monterey and above. DMG disk image.",
    fileSize: "~52 MB",
    href: process.env.NEXT_PUBLIC_DOWNLOAD_MAC || "#",
    variant: "secondary",
  },
];

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <div className="text-center mb-10">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold text-text-primary mb-3"
          >
            Download TeleVault
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary"
          >
            Your license will be verified before download.
          </motion.p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-surface border border-border-subtle rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-accent-light">{platform.icon}</div>
                <h2 className="text-lg font-semibold text-text-primary">
                  {platform.name}
                </h2>
              </div>

              <p className="text-text-secondary text-sm mb-4 flex-1">
                {platform.description}
              </p>

              <p className="text-text-muted text-xs mb-4">
                {platform.fileSize}
              </p>

              <a
                href={platform.href}
                className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${
                  platform.variant === "primary"
                    ? "bg-accent text-white hover:bg-accent/90"
                    : "bg-surface border border-border-subtle text-text-primary hover:bg-accent/10"
                }`}
              >
                Download for {platform.name}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8"
        >
          <Link
            href="/"
            className="text-accent-light text-sm hover:underline"
          >
            Back to home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

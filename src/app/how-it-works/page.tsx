import type { Metadata } from "next";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "How It Works — TeleVault",
  description:
    "Learn how TeleVault works: install the app, connect your Telegram account, and start managing your files.",
};

const steps = [
  {
    number: "01",
    title: "Install TeleVault",
    description:
      "Download the TeleVault desktop application for your platform. Install it like any native desktop application.",
    details: "Available for Windows and macOS.",
  },
  {
    number: "02",
    title: "Connect your Telegram account",
    description:
      "Open TeleVault and authenticate through the application's supported Telegram API flow. Your credentials are handled through Telegram's own authentication mechanisms.",
    details:
      "Authentication uses Telegram's API/MTProto protocol.",
  },
  {
    number: "03",
    title: "Manage your files",
    description:
      "Once connected, TeleVault presents your Telegram files in a clean desktop file-manager interface. Create folders, upload files, search, preview, and download.",
    details:
      "Your files remain in your Telegram account.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary">
            How it works
          </h1>
          <p className="mt-5 text-lg text-text-secondary leading-relaxed">
            Three steps to a better file-management experience. No complex setup,
            no additional accounts, no subscriptions.
          </p>
        </div>

        <div className="space-y-16 mb-20">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-start"
            >
              <span className="text-6xl font-semibold text-accent/15 font-mono leading-none">
                {step.number}
              </span>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mb-3">
                  {step.title}
                </h2>
                <p className="text-base text-text-secondary leading-relaxed mb-3 max-w-xl">
                  {step.description}
                </p>
                <p className="text-sm text-text-muted">{step.details}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-border-subtle bg-surface/50 p-8 md:p-10 max-w-3xl mb-20">
          <h3 className="text-lg font-medium text-text-primary mb-6 text-center">
            Architecture Overview
          </h3>
          <div className="flex flex-col items-center gap-4">
            <div className="px-5 py-3 rounded-lg bg-accent/10 border border-accent/20 text-sm font-medium text-accent-light">
              Your Computer
            </div>
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" className="text-text-muted">
              <path d="M10 0v20M10 20l-4-4M10 20l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="px-5 py-3 rounded-lg bg-surface-elevated border border-border text-sm font-medium text-text-primary">
              TeleVault
            </div>
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" className="text-text-muted">
              <path d="M10 0v20M10 20l-4-4M10 20l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="px-5 py-3 rounded-lg bg-surface-elevated border border-border text-sm font-medium text-text-primary">
              Telegram API / MTProto
            </div>
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" className="text-text-muted">
              <path d="M10 0v20M10 20l-4-4M10 20l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="px-5 py-3 rounded-lg bg-accent/10 border border-accent/20 text-sm font-medium text-accent-light">
              Your Telegram Account / Channel
            </div>
          </div>
          <p className="mt-8 text-xs text-text-muted text-center leading-relaxed max-w-lg mx-auto">
            TeleVault is a third-party application. Your files are handled through
            your own Telegram account rather than a TeleVault-operated central
            storage bucket.
          </p>
        </div>
      </div>
      <FinalCTA />
    </div>
  );
}

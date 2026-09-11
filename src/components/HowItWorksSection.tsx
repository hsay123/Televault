"use client";

import { motion, useReducedMotion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Install TeleVault",
    description:
      "Download and install the desktop application on your computer.",
  },
  {
    number: "02",
    title: "Connect your Telegram account",
    description:
      "Authenticate through the application's supported Telegram API flow.",
  },
  {
    number: "03",
    title: "Manage your files",
    description:
      "Create folders, upload, search, preview, and download files through TeleVault.",
  },
];

export function HowItWorksSection() {
  const reduce = useReducedMotion();

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary"
          >
            Three steps.
            <br /> One clean workflow.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative"
            >
              <span className="text-5xl font-semibold text-accent/15 font-mono">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-medium text-text-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-xl border border-border-subtle bg-surface/50 p-6 md:p-8 max-w-3xl"
        >
          <div className="flex flex-col items-center text-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3 text-sm">
              <div className="px-3 py-1.5 rounded-lg bg-accent/10 text-accent-light font-medium">
                Your Computer
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted rotate-90 sm:rotate-0">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <div className="px-3 py-1.5 rounded-lg bg-surface-elevated text-text-primary font-medium">
                TeleVault
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted rotate-90 sm:rotate-0">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <div className="px-3 py-1.5 rounded-lg bg-surface-elevated text-text-primary font-medium">
                Telegram API
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted rotate-90 sm:rotate-0">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <div className="px-3 py-1.5 rounded-lg bg-accent/10 text-accent-light font-medium">
                Your Files
              </div>
            </div>
          </div>
          <p className="mt-6 text-xs text-text-muted text-center leading-relaxed max-w-xl mx-auto">
            TeleVault is a third-party application. Your files are handled through
            your own Telegram account rather than a TeleVault-operated central
            storage bucket.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

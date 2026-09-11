"use client";

import { motion, useReducedMotion } from "motion/react";

const beforeItems = [
  "Files scattered across chats",
  "Manual searching through messages",
  "No proper folder structure",
  "Difficult bulk management",
];

const afterItems = [
  "Organized folder hierarchy",
  "Powerful search interface",
  "File previews and thumbnails",
  "Upload, download, manage",
];

export function ProblemSection() {
  const reduce = useReducedMotion();

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary"
          >
            Telegram was never designed
            <br className="hidden sm:block" /> to feel like a file system.
          </motion.h2>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 text-lg text-text-secondary"
          >
            TeleVault gives your files a proper home.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl border border-border-subtle bg-surface/50 p-6 md:p-8"
          >
            <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
              Before
            </span>
            <h3 className="mt-3 text-lg font-medium text-text-primary mb-5">
              Scattered file management
            </h3>
            <ul className="space-y-3.5">
              {beforeItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-red-400/70 shrink-0 mt-0.5"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl border border-accent/20 bg-accent/5 p-6 md:p-8"
          >
            <span className="text-xs font-medium text-accent-light uppercase tracking-wider">
              After
            </span>
            <h3 className="mt-3 text-lg font-medium text-text-primary mb-5">
              TeleVault
            </h3>
            <ul className="space-y-3.5">
              {afterItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-accent-light shrink-0 mt-0.5"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

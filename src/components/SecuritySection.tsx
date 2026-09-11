"use client";

import { motion, useReducedMotion } from "motion/react";

const securityItems = [
  {
    title: "Telegram authentication",
    description:
      "Authentication is handled through Telegram's supported authentication mechanism. Your credentials are processed via Telegram's API.",
  },
  {
    title: "Secure transport",
    description:
      "Communication with Telegram uses Telegram's API and network security mechanisms including MTProto encryption.",
  },
  {
    title: "Local session handling",
    description:
      "TeleVault stores Telegram session information on your local device. Session data is stored according to the application's security implementation.",
  },
  {
    title: "No server-side file storage",
    description:
      "TeleVault does not store your files on its own servers. Files remain in your Telegram account storage.",
  },
];

export function SecuritySection() {
  const reduce = useReducedMotion();

  return (
    <section className="py-24 md:py-32 bg-surface/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary"
          >
            Designed with
            <br /> security in mind.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {securityItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-xl border border-border-subtle bg-background/50 p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-8 w-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-400">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-text-primary">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

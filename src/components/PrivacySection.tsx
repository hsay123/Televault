"use client";

import { motion, useReducedMotion } from "motion/react";

export function PrivacySection() {
  const reduce = useReducedMotion();

  return (
    <section className="py-24 md:py-32 bg-surface/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary text-center"
          >
            Your files aren&apos;t sitting
            <br /> on a TeleVault server.
          </motion.h2>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 rounded-xl border border-border-subtle bg-background/50 p-8 md:p-10"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-full max-w-sm space-y-3">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-surface border border-border-subtle">
                  <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-light">
                      <rect width="18" height="12" x="3" y="6" rx="2" />
                      <path d="M3 14h18" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">Your Computer</p>
                    <p className="text-xs text-text-muted">TeleVault runs locally</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <svg width="20" height="24" viewBox="0 0 20 24" fill="none" className="text-text-muted">
                    <path d="M10 0v20M10 20l-4-4M10 20l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-surface border border-border-subtle">
                  <div className="h-8 w-8 rounded-lg bg-surface-elevated flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-secondary">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">Telegram API / MTProto</p>
                    <p className="text-xs text-text-muted">Secure transport layer</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <svg width="20" height="24" viewBox="0 0 20 24" fill="none" className="text-text-muted">
                    <path d="M10 0v20M10 20l-4-4M10 20l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-accent/5 border border-accent/20">
                  <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-light">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">Your Telegram Account</p>
                    <p className="text-xs text-text-muted">Files live in your account</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-8 text-sm text-text-secondary text-center leading-relaxed max-w-lg mx-auto">
              TeleVault connects to your Telegram account via the Telegram
              API/MTProto. Your files remain in your own Telegram storage. TeleVault
              acts as your file-management interface, not as a central storage
              provider.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

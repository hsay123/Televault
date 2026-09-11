"use client";

import { motion, useReducedMotion } from "motion/react";

const trustPoints = [
  "One-time purchase",
  "Your Telegram account",
  "No recurring subscription",
  "Desktop-first",
  "Independent third-party app",
];

export function TrustStrip() {
  const reduce = useReducedMotion();

  return (
    <section className="border-y border-border-subtle bg-surface/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {trustPoints.map((point, i) => (
            <span key={point} className="flex items-center gap-2 text-sm text-text-muted">
              {i > 0 && (
                <span className="hidden sm:inline h-1 w-1 rounded-full bg-border" />
              )}
              <span className="flex items-center gap-1.5">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-accent/60 shrink-0"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {point}
              </span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

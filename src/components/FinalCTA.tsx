"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

export function FinalCTA() {
  const reduce = useReducedMotion();

  return (
    <section className="py-24 md:py-32 bg-surface/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary"
        >
          Your files deserve
          <br /> a better interface.
        </motion.h2>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 text-lg text-text-secondary"
        >
          Meet TeleVault.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8"
        >
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-medium text-white transition-all hover:bg-accent-dim active:scale-[0.98] shadow-lg shadow-accent/20"
          >
            Get TeleVault — ₹249
          </Link>
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-5 text-sm text-text-muted"
        >
          One-time purchase. Independent third-party software.
        </motion.p>
      </div>
    </section>
  );
}

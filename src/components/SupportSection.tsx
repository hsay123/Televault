"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

export function SupportSection() {
  const reduce = useReducedMotion();

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-xl border border-border-subtle bg-surface/50 p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div>
            <h3 className="text-base font-medium text-text-primary mb-1">
              Need help?
            </h3>
            <p className="text-sm text-text-secondary">
              Having trouble installing or using TeleVault?
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all active:scale-[0.98] shrink-0"
          >
            Contact Support
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

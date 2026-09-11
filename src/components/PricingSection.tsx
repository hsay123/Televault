"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

const features = [
  "TeleVault desktop application",
  "Personal license",
  "File organization",
  "Folder management",
  "Search",
  "Upload and download",
  "File previews where supported",
  "Product updates per license policy",
];

export function PricingSection() {
  const reduce = useReducedMotion();

  return (
    <section className="py-24 md:py-32" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary"
          >
            Simple pricing.
            <br /> No subscription.
          </motion.h2>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-lg"
        >
          <div className="rounded-xl border border-accent/20 bg-background p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <h3 className="text-lg font-medium text-text-primary mb-1">
                TeleVault
              </h3>
              <div className="flex items-baseline gap-1 mt-4 mb-1">
                <span className="text-5xl font-semibold text-text-primary tracking-tight">
                  ₹249
                </span>
              </div>
              <p className="text-sm text-text-muted mb-8">One-time purchase</p>

              <ul className="space-y-3 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-text-secondary">
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
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/pricing"
                className="flex items-center justify-center w-full rounded-lg bg-accent px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-accent-dim active:scale-[0.98] shadow-lg shadow-accent/20"
              >
                Get TeleVault — ₹249
              </Link>

              <p className="mt-4 text-xs text-text-muted text-center">
                Secure checkout powered by Razorpay
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

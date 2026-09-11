"use client";

import { motion, useReducedMotion } from "motion/react";

export function TelegramDisclaimer() {
  const reduce = useReducedMotion();

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs text-text-muted leading-relaxed max-w-xl mx-auto">
            TeleVault is an independent third-party application and is not
            affiliated with, endorsed by, or sponsored by Telegram. TeleVault
            is not an official Telegram product. All trademarks and brand names
            are the property of their respective owners.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

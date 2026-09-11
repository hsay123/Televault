"use client";

import { motion, useReducedMotion } from "motion/react";

export function BackupWarning() {
  const reduce = useReducedMotion();

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-6 md:p-8 max-w-3xl"
        >
          <div className="flex items-start gap-4">
            <div className="shrink-0 mt-0.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-yellow-500/80">
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                <path d="M12 9v4M12 17h.01" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-medium text-text-primary mb-2">
                TeleVault is not a backup service.
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                TeleVault provides a file-management experience over your Telegram
                storage. It does not automatically create an independent second copy
                of your files unless explicitly stated by the product.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                For important or irreplaceable data, maintain an independent backup.
                Potential risks include loss of access to your Telegram account,
                accidental deletion, Telegram account restrictions, service or API
                changes, and device or account authentication problems.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

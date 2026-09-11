"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "What is TeleVault?",
    answer:
      "TeleVault is a desktop file-management application that allows you to organize, search, preview, upload, and manage files through your own Telegram account.",
  },
  {
    question: "How does TeleVault store my files?",
    answer:
      "TeleVault does not store your files on its own servers. Your files remain in your Telegram account storage. TeleVault acts as a file-management interface, connecting to your Telegram account via the Telegram API/MTProto.",
  },
  {
    question: "Do I need a Telegram account?",
    answer:
      "Yes. TeleVault requires a Telegram account to function. You authenticate through the application, and your files are managed through your own Telegram account and channels.",
  },
  {
    question: "Is TeleVault affiliated with Telegram?",
    answer:
      "No. TeleVault is an independent third-party application and is not affiliated with, endorsed by, or sponsored by Telegram.",
  },
  {
    question: "Is this a subscription?",
    answer:
      "No. TeleVault is currently offered as a one-time purchase of ₹249. There is no recurring subscription.",
  },
  {
    question: "Does TeleVault provide independent backups?",
    answer:
      "No. Unless explicitly stated otherwise, TeleVault does not provide a separate independent backup of your files. It manages files within your existing Telegram storage.",
  },
  {
    question: "What happens if I uninstall TeleVault?",
    answer:
      "Uninstalling TeleVault removes the application from your computer. Your files remain in your Telegram account. However, any folder organization created within TeleVault may not persist outside the application.",
  },
  {
    question: "Can I access my files without TeleVault?",
    answer:
      "Yes. Your files remain in your Telegram account and can be accessed through Telegram's own interfaces. TeleVault provides an enhanced file-management experience on top of your existing storage.",
  },
  {
    question: "What happens if I lose access to my Telegram account?",
    answer:
      "If you lose access to your Telegram account, you will not be able to use TeleVault to manage your files. We recommend maintaining access to your Telegram account and keeping independent backups of important data.",
  },
  {
    question: "Which operating systems are supported?",
    answer:
      "TeleVault currently supports Windows and macOS. Check the download page for the latest supported platforms.",
  },
  {
    question: "Do you store my Telegram credentials?",
    answer:
      "TeleVault handles Telegram authentication through Telegram's supported API mechanisms. Refer to the Privacy Policy for details on what data is processed and stored.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Please refer to our Refund & Cancellation Policy for details on refund eligibility and the process for requesting a refund.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach our support team through the Contact page. We aim to respond to inquiries promptly.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border-subtle">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-text-primary pr-4 group-hover:text-accent-light transition-colors">
          {question}
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`shrink-0 text-text-muted transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-text-secondary leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary"
          >
            Frequently asked
            <br /> questions.
          </motion.h2>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

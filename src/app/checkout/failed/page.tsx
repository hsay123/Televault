"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";

type PaymentStatus = "failed" | "cancelled" | "pending";

const statusConfig: Record<
  PaymentStatus,
  { title: string; description: string; iconColor: string }
> = {
  failed: {
    title: "Payment wasn't completed.",
    description: "Your payment was not confirmed. You have not been charged.",
    iconColor: "bg-red-500/15 text-red-400",
  },
  cancelled: {
    title: "Payment was cancelled.",
    description: "You cancelled the payment. You have not been charged.",
    iconColor: "bg-yellow-500/15 text-yellow-400",
  },
  pending: {
    title: "Payment is pending.",
    description:
      "Your payment is being processed. This may take a few minutes.",
    iconColor: "bg-blue-500/15 text-blue-400",
  },
};

function FailedContent() {
  const searchParams = useSearchParams();
  const status = (searchParams.get("status") as PaymentStatus) || "failed";
  const config = statusConfig[status] || statusConfig.failed;

  return (
    <div className="min-h-[100dvh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full bg-surface border border-border-subtle rounded-2xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className={`w-16 h-16 ${config.iconColor} rounded-full flex items-center justify-center mx-auto mb-6`}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-text-primary mb-3"
        >
          {config.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-text-secondary mb-8"
        >
          {config.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col gap-3"
        >
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-dim transition-colors"
          >
            Try payment again
          </Link>

          <button
            onClick={() => {
              alert("Payment status check coming soon.");
            }}
            className="inline-flex items-center justify-center px-6 py-3 bg-surface border border-border-subtle text-text-primary rounded-lg font-medium hover:bg-accent/10 transition-colors"
          >
            Check payment status
          </button>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-surface border border-border-subtle text-text-secondary rounded-lg font-medium hover:bg-accent/10 transition-colors"
          >
            Contact support
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6"
        >
          <Link
            href="/"
            className="text-accent-light text-sm hover:underline"
          >
            Back to home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function CheckoutFailedPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[100dvh] flex items-center justify-center">
          <div className="text-text-muted text-sm">Loading...</div>
        </div>
      }
    >
      <FailedContent />
    </Suspense>
  );
}

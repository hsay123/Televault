import type { Metadata } from "next";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy — TeleVault",
  description:
    "Refund eligibility, cancellation process, and payment resolution policies for TeleVault purchases.",
};

const sections = [
  {
    heading: "Digital Product Nature",
    content: `TeleVault is a digital software product delivered electronically upon successful payment. By completing a purchase, you acknowledge that you are purchasing a digital product that is delivered immediately and that the nature of such products limits the applicability of traditional refund policies. This policy outlines the circumstances under which refunds may be granted.`,
  },
  {
    heading: "Refund Eligibility",
    content: `You may request a refund within [REFUND WINDOW — DEFINE BEFORE LAUNCH] of your original purchase date, provided that:\n\n(a) You have not used the Product in a manner inconsistent with the License Agreement;\n(b) The refund request is submitted through the contact methods specified in this policy;\n(c) The request is made within the eligible time window.\n\nAfter the eligible refund window has passed, all purchases are final and non-refundable.`,
  },
  {
    heading: "Duplicate Payments",
    content: `If you have been charged multiple times for the same purchase due to a payment processing error, please contact us immediately at support@televault.app with your transaction details. We will work with Razorpay to identify and refund any duplicate charges as quickly as possible.`,
  },
  {
    heading: "Failed Payments",
    content: `If your payment was attempted but not successfully completed (e.g., the transaction was declined, timed out, or resulted in an error), no charge should have been applied to your payment method. If you believe a failed payment was charged, please contact your bank or card issuer first, and then reach out to us if the issue persists.`,
  },
  {
    heading: "Payment Captured but Product Not Delivered",
    content: `If your payment was successfully processed but you did not receive your license key or download link, please contact us at support@televault.app. We will investigate the issue and either deliver the Product or process a full refund within a reasonable timeframe.`,
  },
  {
    heading: "Technical Issues",
    content: `If you experience a genuine technical issue that prevents TeleVault from functioning on your device and that cannot be resolved through reasonable troubleshooting or support, you may be eligible for a refund. Please contact us with a description of the issue, your operating system, and any relevant error messages. We will make reasonable efforts to resolve the issue before processing a refund.`,
  },
  {
    heading: "How to Request a Refund",
    content: `To request a refund, please send an email to support@televault.app with the following information:\n\n• Your name\n• Email address used for the purchase\n• Order or transaction reference number\n• Reason for the refund request\n\nWe aim to acknowledge refund requests within 48 hours and provide a resolution within 5–7 business days.`,
  },
  {
    heading: "Refund Processing Time",
    content: `Approved refunds are processed through Razorpay and typically appear in your account within 5–10 business days, depending on your bank or payment provider. TeleVault is not responsible for delays caused by your bank or payment processor.`,
  },
  {
    heading: "Payment Processor Limitations",
    content: `All refunds are processed through Razorpay. TeleVault does not have direct access to your payment method and cannot issue refunds outside of the Razorpay system. If you paid via a specific method (e.g., UPI, credit card, net banking), the refund will be credited back to the same method where technically feasible.`,
  },
];

export default function RefundsPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="mt-5 text-lg text-text-secondary leading-relaxed">
            Our policies regarding refunds, cancellations, and payment
            resolution for TeleVault purchases.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-text-muted leading-relaxed mb-10">
            Last updated: August 2026
          </p>

          {sections.map((section, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-xl font-medium text-text-primary mb-4">
                {index + 1}. {section.heading}
              </h2>
              <div className="text-sm text-text-secondary leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      <FinalCTA />
    </div>
  );
}

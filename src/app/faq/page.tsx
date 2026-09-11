import type { Metadata } from "next";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "FAQ — TeleVault",
  description:
    "Frequently asked questions about TeleVault: how it works, pricing, security, Telegram integration, and more.",
};

export default function FAQPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary">
            FAQ
          </h1>
          <p className="mt-5 text-lg text-text-secondary leading-relaxed">
            Questions about TeleVault? We have answers.
          </p>
        </div>
      </div>
      <FAQSection />
      <FinalCTA />
    </div>
  );
}

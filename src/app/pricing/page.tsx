import type { Metadata } from "next";
import { PricingSection } from "@/components/PricingSection";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Pricing — TeleVault",
  description:
    "TeleVault is a one-time purchase of ₹249. No subscriptions, no recurring fees.",
};

export default function PricingPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary">
            Pricing
          </h1>
          <p className="mt-5 text-lg text-text-secondary leading-relaxed">
            One simple price. No hidden fees, no recurring charges, no surprises.
          </p>
        </div>
      </div>
      <PricingSection />
      <FinalCTA />
    </div>
  );
}

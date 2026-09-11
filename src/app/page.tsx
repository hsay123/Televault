import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ProblemSection } from "@/components/ProblemSection";
import { ValueProp } from "@/components/ValueProp";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { PrivacySection } from "@/components/PrivacySection";
import { BackupWarning } from "@/components/BackupWarning";
import { SecuritySection } from "@/components/SecuritySection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { SupportSection } from "@/components/SupportSection";
import { FinalCTA } from "@/components/FinalCTA";
import { TelegramDisclaimer } from "@/components/TelegramDisclaimer";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <ValueProp />
      <HowItWorksSection />
      <PrivacySection />
      <BackupWarning />
      <SecuritySection />
      <PricingSection />
      <FAQSection />
      <TelegramDisclaimer />
      <SupportSection />
      <FinalCTA />
    </>
  );
}
import type { Metadata } from "next";
import { SecuritySection } from "@/components/SecuritySection";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Security — TeleVault",
  description:
    "Learn about TeleVault's security approach: authentication, secure transport, local session handling, and data architecture.",
};

export default function SecurityPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary">
            Security
          </h1>
          <p className="mt-5 text-lg text-text-secondary leading-relaxed">
            TeleVault is designed with security in mind. Here is how the
            application handles your data and authentication.
          </p>
        </div>
      </div>
      <SecuritySection />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="rounded-xl border border-border-subtle bg-surface/50 p-6 md:p-8 max-w-3xl">
          <h3 className="text-lg font-medium text-text-primary mb-4">
            Data architecture
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-6">
            TeleVault connects to your Telegram account via the Telegram
            API/MTProto. Your files remain in your own Telegram storage.
            TeleVault acts as your file-management interface, not as a central
            storage provider.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="rounded-lg border border-border-subtle bg-background/50 p-4 text-center">
              <p className="text-sm font-medium text-text-primary mb-1">
                No file storage
              </p>
              <p className="text-xs text-text-muted">
                Files stay in your Telegram account
              </p>
            </div>
            <div className="rounded-lg border border-border-subtle bg-background/50 p-4 text-center">
              <p className="text-sm font-medium text-text-primary mb-1">
                Local sessions
              </p>
              <p className="text-xs text-text-muted">
                Session data on your device
              </p>
            </div>
            <div className="rounded-lg border border-border-subtle bg-background/50 p-4 text-center">
              <p className="text-sm font-medium text-text-primary mb-1">
                Secure transport
              </p>
              <p className="text-xs text-text-muted">
                Telegram API encryption
              </p>
            </div>
          </div>
        </div>
      </div>
      <FinalCTA />
    </div>
  );
}

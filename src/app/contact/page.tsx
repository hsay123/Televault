import type { Metadata } from "next";
import { FinalCTA } from "@/components/FinalCTA";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — TeleVault",
  description:
    "Get in touch with TeleVault support for help with your purchase, technical issues, or general inquiries.",
};

const SUPPORT_EMAIL = "support@televault.app";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary">
            Contact Support
          </h1>
          <p className="mt-5 text-lg text-text-secondary leading-relaxed">
            Need help with TeleVault? Have a question about your purchase, a
            technical issue, or a general inquiry? We are here to help.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="rounded-xl border border-border-subtle bg-surface/50 p-6 md:p-8">
            <h2 className="text-xl font-medium text-text-primary mb-4">
              Email Us
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              For purchase support, refund requests, technical issues, or any
              other inquiries, reach us directly at:
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent-dim active:scale-[0.98]"
            >
              {SUPPORT_EMAIL}
            </a>
          </div>

          <div className="rounded-xl border border-border-subtle bg-surface/50 p-6 md:p-8">
            <h2 className="text-xl font-medium text-text-primary mb-4">
              Send a Message
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              Alternatively, fill out the form below and we will get back to you
              as soon as possible.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>

      <FinalCTA />
    </div>
  );
}

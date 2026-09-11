import type { Metadata } from "next";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Privacy Policy — TeleVault",
  description:
    "How TeleVault collects, uses, and protects your personal data across the website, payment processing, application, and Telegram integration.",
};

const websiteData = [
  {
    heading: "Information Collected During Purchase",
    content: `When you purchase TeleVault, we collect the following information necessary to process your order and deliver the Product:\n\n• Email address — used to deliver your license key and purchase confirmation\n• Full name — used for payment processing and receipt generation\n• Phone number — collected only if provided during checkout; not required for purchase\n• Payment identifiers — processed entirely through Razorpay; we do not store credit card numbers, debit card numbers, UPI IDs, or any raw payment credentials on our servers`,
  },
  {
    heading: "Website Analytics",
    content: `The TeleVault website may use privacy-respecting analytics tools to understand aggregate visitor behavior, such as page views, traffic sources, and general geographic distribution. These tools do not personally identify you and operate without invasive tracking. No personally identifiable information is collected through analytics.`,
  },
  {
    heading: "Cookies",
    content: `The TeleVault website uses only essential cookies required for basic site functionality. We do not use advertising, tracking, or third-party marketing cookies. If additional cookies are introduced in the future, this policy will be updated accordingly.`,
  },
  {
    heading: "Support Communications",
    content: `When you contact us for support, we collect the information you provide in your message, including your email address and any details about your issue. Support communications are retained only as long as necessary to resolve your inquiry and for a reasonable period afterward to provide context for follow-up questions.`,
  },
  {
    heading: "License Information",
    content: `We maintain a record of your purchase and associated license key for the purpose of product delivery, support, and refund processing. This record is stored securely and is not shared with third parties.`,
  },
];

const paymentData = [
  {
    heading: "Payment Processor",
    content: `All payment processing is handled by Razorpay. TeleVault does not directly collect, store, or have access to your full payment card details, bank account information, or UPI credentials. Razorpay's collection and processing of payment information is governed by their own privacy policy.`,
  },
  {
    heading: "What We Receive from Razorpay",
    content: `From Razorpay, we receive only the information necessary to confirm your purchase: transaction status (successful, failed, pending), payment identifier, amount paid, and the email address you provided at checkout. We do not receive or store your card number, CVV, PIN, or banking credentials.`,
  },
];

const appData = [
  {
    heading: "Download Information",
    content: `We do not track or log individual downloads of the TeleVault application. We do not collect device identifiers, IP addresses, or system information in connection with product downloads.`,
  },
  {
    heading: "Application Behavior",
    content: `TeleVault is a desktop application that runs locally on your device. The application does not phone home, collect telemetry, or transmit any usage data to our servers. All file management operations occur between your device and the Telegram API directly.`,
  },
];

const telegramData = [
  {
    heading: "Telegram Authentication and Session Information",
    content: `When you connect your Telegram account to TeleVault, authentication is handled through the Telegram API and MTProto protocol. Your session credentials are stored locally on your device and are never transmitted to TeleVault's servers. TeleVault does not have access to your Telegram account credentials, session keys, or authentication tokens.`,
  },
  {
    heading: "File Contents and Telegram Data",
    content: `TeleVault does not receive, access, store, or transmit the contents of your files, messages, media, or any other data stored in your Telegram account. All file operations — listing, searching, organizing, transferring — occur through the Telegram API directly between your device and Telegram's servers. TeleVault acts solely as an interface and has no server-side access to your Telegram data.`,
  },
];

const otherData = [
  {
    heading: "Data Retention",
    content: `We retain your purchase and license information for as long as necessary to provide support and fulfill our obligations under these policies. Support communication is retained for a reasonable period following resolution of your inquiry. We do not retain payment card details, as these are handled exclusively by Razorpay.`,
  },
  {
    heading: "Deletion Requests",
    content: `You may request deletion of your personal data by contacting us at support@televault.app. Upon receiving a verified deletion request, we will delete or anonymize your personal data within 30 days, except where retention is required by law or for the resolution of active support or refund matters.`,
  },
  {
    heading: "Third-Party Processors",
    content: `Your data may be processed by the following third-party service providers:\n\n• Razorpay — payment processing\n• Email service provider — transactional emails and support communications\n\nThese processors handle data in accordance with their respective privacy policies and are contractually obligated to protect your information.`,
  },
  {
    heading: "Security Practices",
    content: `We implement reasonable administrative, technical, and physical safeguards to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    heading: "Contact",
    content: `For questions about this Privacy Policy or to make a data request, contact us at support@televault.app.`,
  },
];

function SectionGroup({
  title,
  sections,
  startIndex,
}: {
  title: string;
  sections: { heading: string; content: string }[];
  startIndex: number;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-text-primary mb-6">
        {title}
      </h2>
      {sections.map((section, i) => (
        <div key={i} className="mb-10">
          <h3 className="text-xl font-medium text-text-primary mb-4">
            {startIndex + i}. {section.heading}
          </h3>
          <div className="text-sm text-text-secondary leading-relaxed whitespace-pre-line">
            {section.content}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary">
            Privacy Policy
          </h1>
          <p className="mt-5 text-lg text-text-secondary leading-relaxed">
            How we collect, use, and protect your information across the
            TeleVault website, payment process, desktop application, and
            Telegram integration.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-text-muted leading-relaxed mb-10">
            Last updated: August 2026
          </p>

          <SectionGroup
            title="Website Data"
            sections={websiteData}
            startIndex={1}
          />
          <SectionGroup
            title="Payment Data"
            sections={paymentData}
            startIndex={websiteData.length + 1}
          />
          <SectionGroup
            title="TeleVault Application Data"
            sections={appData}
            startIndex={websiteData.length + paymentData.length + 1}
          />
          <SectionGroup
            title="Telegram Data"
            sections={telegramData}
            startIndex={
              websiteData.length + paymentData.length + appData.length + 1
            }
          />
          <SectionGroup
            title="General"
            sections={otherData}
            startIndex={
              websiteData.length +
              paymentData.length +
              appData.length +
              telegramData.length +
              1
            }
          />
        </div>
      </div>

      <FinalCTA />
    </div>
  );
}

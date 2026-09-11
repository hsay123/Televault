import type { Metadata } from "next";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Terms & Conditions — TeleVault",
  description:
    "Terms and conditions governing the use of TeleVault, including license terms, usage restrictions, and liability limitations.",
};

const sections = [
  {
    heading: "Acceptance of Terms",
    content: `By purchasing, downloading, installing, or using TeleVault ("the Product"), you ("the User") agree to be bound by these Terms & Conditions ("Terms"). If you do not agree to these Terms, you must not purchase or use the Product. These Terms constitute a legally binding agreement between you and TeleVault ("the Company," "we," or "us").`,
  },
  {
    heading: "Description of Service",
    content: `TeleVault is a desktop application that enables users to manage, organize, search, and transfer files through their own Telegram account. The Product acts as a file-management interface and does not provide cloud storage, file hosting, or any server-side storage services. All files remain within the User's own Telegram account and associated storage.`,
  },
  {
    heading: "Eligibility",
    content: `You must be at least 18 years of age, or the age of majority in your jurisdiction, to purchase or use TeleVault. By using the Product, you represent and warrant that you meet this requirement and have the legal capacity to enter into these Terms.`,
  },
  {
    heading: "License Grant",
    content: `Upon successful purchase, TeleVault grants you a limited, non-exclusive, non-transferable, revocable license to install and use the Product for your personal, non-commercial purposes, subject to the terms of the accompanying License Agreement. This license does not convey ownership of the Product, its source code, or any associated intellectual property.`,
  },
  {
    heading: "Personal and Non-Commercial Use",
    content: `TeleVault is licensed exclusively for personal, non-commercial use. You may not use the Product for any commercial, business, or revenue-generating purpose without prior written consent from TeleVault. This includes, but is not limited to, using the Product in the course of providing services to third parties, using it in a business workflow, or incorporating it into a commercial product or service.`,
  },
  {
    heading: "Prohibited Uses",
    content: `You agree not to:\n\n(a) Redistribute, resell, sublicense, or share the Product with any third party;\n(b) Reverse engineer, decompile, disassemble, or attempt to derive the source code of the Product;\n(c) Modify, adapt, or create derivative works based on the Product;\n(d) Remove, alter, or obscure any proprietary notices, labels, or marks on the Product;\n(e) Use the Product in any manner that violates applicable laws, regulations, or third-party rights;\n(f) Use the Product to transmit or store material that is unlawful, harmful, threatening, abusive, or otherwise objectionable;\n(g) Attempt to gain unauthorized access to the Product, its related systems, or any third-party accounts accessed through the Product.`,
  },
  {
    heading: "Intellectual Property",
    content: `All rights, title, and interest in and to the Product, including but not limited to its design, code, graphics, text, trademarks, and all related intellectual property, are and remain the exclusive property of TeleVault. Nothing in these Terms grants you any right, title, or interest in the Product beyond the limited license expressly granted herein.`,
  },
  {
    heading: "Third-Party Services",
    content: `TeleVault integrates with third-party services, including but not limited to Telegram and Razorpay (for payment processing). Your use of these third-party services is governed by their respective terms and privacy policies. TeleVault is not responsible for the availability, accuracy, or practices of any third-party service. We encourage you to review the terms and privacy policies of any third-party service you access through or in connection with the Product.`,
  },
  {
    heading: "Telegram API Dependency",
    content: `TeleVault operates through the Telegram API and MTProto protocol. The Product's functionality depends on the continued availability and operation of Telegram's infrastructure. TeleVault has no control over Telegram's service availability, API changes, rate limits, or policy modifications. TeleVault shall not be liable for any interruption, degradation, or cessation of the Product's functionality resulting from changes to, restrictions on, or unavailability of the Telegram API.`,
  },
  {
    heading: "User Responsibility",
    content: `You are solely responsible for:\n\n(a) Maintaining the security of your Telegram account credentials;\n(b) All activity that occurs under your Telegram account in connection with the Product;\n(c) Ensuring that your use of the Product complies with Telegram's Terms of Service;\n(d) Backing up your files and data independently of the Product;\n(e) Any data loss, corruption, or damage resulting from your use or misuse of the Product.`,
  },
  {
    heading: "No Guarantee of Data Availability",
    content: `TeleVault does not guarantee the availability, integrity, or recoverability of any data. Since all files reside within the User's Telegram account, TeleVault has no ability to restore, recover, or retrieve data in the event of loss, corruption, deletion, or account suspension. You are strongly encouraged to maintain independent backups of all important data.`,
  },
  {
    heading: "Service Changes and Updates",
    content: `TeleVault reserves the right to modify, suspend, or discontinue the Product, or any feature thereof, at any time and without prior notice. We may release updates, patches, or new versions of the Product from time to time. Continued use of the Product following any such changes constitutes acceptance of those changes.`,
  },
  {
    heading: "Payment Terms",
    content: `TeleVault is offered as a one-time purchase product. The applicable price is displayed on the pricing page at the time of purchase. All payments are processed through Razorpay. By making a purchase, you authorize Razorpay to charge the applicable amount to your chosen payment method. Prices are displayed in Indian Rupees (INR) and are inclusive of applicable taxes unless otherwise stated.`,
  },
  {
    heading: "Refunds",
    content: `Refund requests are handled in accordance with our Refund & Cancellation Policy, which is incorporated into these Terms by reference. Please refer to our Refund & Cancellation Policy for details on eligibility, process, and timeframes.`,
  },
  {
    heading: "Limitation of Liability",
    content: `To the maximum extent permitted by applicable law, TeleVault shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from:\n\n(a) Your access to, use of, or inability to use the Product;\n(b) Any conduct or content of any third party in connection with the Product;\n(c) Any content obtained from the Product;\n(d) Unauthorized access to, use of, or alteration of your data or transmissions.\n\nIn no event shall TeleVault's total aggregate liability exceed the amount you paid for the Product in the twelve (12) months preceding the claim.`,
  },
  {
    heading: "Disclaimer of Warranties",
    content: `THE PRODUCT IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. TeleVault does not warrant that the Product will be uninterrupted, error-free, secure, or free of viruses or other harmful components, or that any defects will be corrected.`,
  },
  {
    heading: "Termination",
    content: `These Terms are effective until terminated. Your rights under these Terms will terminate automatically if you fail to comply with any provision herein. Upon termination, you must cease all use of the Product and destroy all copies in your possession. Sections that by their nature should survive termination shall survive, including but not limited to intellectual property, limitation of liability, disclaimer, and governing law.`,
  },
  {
    heading: "Changes to Terms",
    content: `TeleVault reserves the right to modify these Terms at any time. Changes will be effective upon posting of the revised Terms on the TeleVault website. Your continued use of the Product following any changes constitutes acceptance of the modified Terms. It is your responsibility to review these Terms periodically.`,
  },
  {
    heading: "Governing Law",
    content: `These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in India.`,
  },
  {
    heading: "Contact",
    content: `If you have any questions about these Terms, please contact us at support@televault.app.`,
  },
];

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary">
            Terms &amp; Conditions
          </h1>
          <p className="mt-5 text-lg text-text-secondary leading-relaxed">
            Please read these terms carefully before purchasing or using
            TeleVault.
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

import type { Metadata } from "next";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "License Agreement — TeleVault",
  description:
    "License terms governing your use of TeleVault, including grant scope, restrictions on redistribution, modification, and reverse engineering.",
};

const sections = [
  {
    heading: "License Grant",
    content: `Upon successful purchase of TeleVault, you are granted a limited, non-exclusive, non-transferable, revocable license to install and use the Product on a personal device that you own or control. This license is granted solely for your personal, non-commercial use.\n\nThis license does not convey ownership of the Product, its source code, or any associated intellectual property. TeleVault retains all ownership rights.`,
  },
  {
    heading: "Personal Use Only",
    content: `The license granted under this Agreement is strictly limited to personal, non-commercial use. You may install and use TeleVault for your own file management needs but may not use the Product in any commercial, business, or organizational context without prior written permission from TeleVault.\n\nProhibited commercial uses include, but are not limited to:\n\n• Using the Product as part of a service offered to clients or customers\n• Integrating the Product into a commercial workflow or business process\n• Using the Product to generate revenue, directly or indirectly\n• Deploying the Product in an organizational or enterprise environment`,
  },
  {
    heading: "No Source Code Ownership",
    content: `Your purchase grants you a license to use the compiled application only. You do not acquire any rights to, or ownership of, the Product's source code, object code, algorithms, data structures, design, or any underlying intellectual property. The Product is proprietary software, and its source code is not included with your purchase.`,
  },
  {
    heading: "No Trademark Ownership",
    content: `Nothing in this Agreement grants you any right to use the TeleVault name, logo, trademarks, service marks, or any other brand identifiers. The "TeleVault" name and associated branding are the exclusive property of TeleVault and may not be used in any context without prior written consent.`,
  },
  {
    heading: "Redistribution Restrictions",
    content: `You may not redistribute, publish, or make the Product available to any third party, whether for free or for compensation. This includes, but is not limited to:\n\n• Sharing the Product installer or binaries with other individuals\n• Uploading the Product to file-sharing platforms, forums, or repositories\n• Distributing the Product through any channel not authorized by TeleVault\n• Making the Product available on a network where it could be accessed by multiple users`,
  },
  {
    heading: "Resale Restrictions",
    content: `You may not sell, sublicense, rent, lease, or otherwise transfer the Product or your license to any third party. The license is personal to you and is not transferable. If you no longer wish to use the Product, your license may be revoked in accordance with the Termination section below, but you may not transfer it to another person.`,
  },
  {
    heading: "Reverse Engineering Restrictions",
    content: `You may not reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code of the Product, except to the extent expressly permitted by applicable law notwithstanding a contractual prohibition to the contrary. You may not extract or attempt to extract algorithms, encryption methods, authentication mechanisms, or any proprietary logic from the Product.`,
  },
  {
    heading: "Modification Restrictions",
    content: `You may not modify, adapt, translate, or create derivative works based on the Product. This includes, but is not limited to:\n\n• Altering the Product's behavior, appearance, or functionality\n• Removing or modifying any proprietary notices, labels, or watermarks\n• Injecting code, plugins, or extensions that alter the Product's intended behavior\n• Using the Product as a basis for developing a competing product or service`,
  },
  {
    heading: "Termination",
    content: `This license is effective until terminated. Your license will terminate automatically if you fail to comply with any provision of this Agreement. Upon termination, you must cease all use of the Product and destroy all copies, including backup copies, in your possession or control.\n\nTeleVault reserves the right to revoke your license at any time if we reasonably believe you have violated the terms of this Agreement. Revocation may occur without prior notice in cases of clear violation.`,
  },
];

export default function LicensePage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary">
            License Agreement
          </h1>
          <p className="mt-5 text-lg text-text-secondary leading-relaxed">
            The terms governing your right to use TeleVault. Please read
            carefully before installation.
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

import type { Metadata } from "next";
import { ValueProp } from "@/components/ValueProp";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Features — TeleVault",
  description:
    "Explore TeleVault's features: file organization, search, previews, upload, download, and desktop-first file management.",
};

const detailedFeatures = [
  {
    title: "A real file system",
    description:
      "Organize files into folders and subfolders instead of treating everything like chat attachments. Create nested folder structures that make sense for your workflow.",
    details: [
      "Create and manage folders and subfolders",
      "Drag-and-drop file organization",
      "Rename and move files between folders",
      "Visual folder hierarchy in sidebar",
    ],
  },
  {
    title: "Find files instantly",
    description:
      "Powerful search interface that locates any file across your entire Telegram storage in seconds. No more scrolling through chat histories.",
    details: [
      "Full-text search across file names",
      "Filter by file type, size, and date",
      "Instant results as you type",
      "Search within specific folders",
    ],
  },
  {
    title: "Upload and download with confidence",
    description:
      "Clear upload progress indicators, file status tracking, and reliable download management. Know exactly where your files are at all times.",
    details: [
      "Real-time upload progress bars",
      "Batch upload support",
      "Download queue management",
      "File status indicators",
    ],
  },
  {
    title: "Preview before you download",
    description:
      "View images, documents, and supported file types directly in TeleVault before saving them locally. Save time and bandwidth.",
    details: [
      "Image preview with zoom",
      "Document preview for supported formats",
      "Video and audio playback preview",
      "Quick-look style file inspection",
    ],
  },
  {
    title: "Built around your Telegram account",
    description:
      "Files are managed through your own Telegram account and channels, giving you full control over your data and storage.",
    details: [
      "Uses your existing Telegram storage",
      "No additional accounts required",
      "Files stay in your Telegram account",
      "Manage multiple Telegram channels",
    ],
  },
  {
    title: "Desktop-first experience",
    description:
      "Keyboard-friendly workflows and an efficient interface designed for focused file management. Built for productivity.",
    details: [
      "Native desktop application",
      "Efficient memory usage",
      "Quick access from system tray",
      "Native OS integration",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary">
            Features
          </h1>
          <p className="mt-5 text-lg text-text-secondary leading-relaxed">
            Everything you need to manage your files through your own Telegram
            account. No bloat, no complexity, just a clean file-management
            experience.
          </p>
        </div>

        <div className="space-y-20">
          {detailedFeatures.map((feature, i) => (
            <div
              key={feature.title}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-start ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mb-4">
                  {feature.title}
                </h2>
                <p className="text-base text-text-secondary leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3 text-sm text-text-secondary"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-accent-light shrink-0 mt-0.5"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`rounded-xl border border-border-subtle bg-surface/50 aspect-[4/3] flex items-center justify-center ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <span className="text-xs text-text-muted">
                  Feature screenshot placeholder
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FinalCTA />
    </div>
  );
}

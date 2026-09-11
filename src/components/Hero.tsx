"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent-light tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              TELEVAULT 1.0
            </span>
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-text-primary leading-[1.08]"
          >
            Your files. Your Telegram.
            <br />
            Your vault.
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto"
          >
            TeleVault gives your Telegram storage a proper desktop
            file-management experience. Organize, search, preview, upload and
            manage your files from one clean interface.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-accent-dim active:scale-[0.98] shadow-lg shadow-accent/20"
            >
              Get TeleVault — ₹249
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center rounded-lg border border-border px-7 py-3.5 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all active:scale-[0.98]"
            >
              See how it works
            </Link>
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-5 text-sm text-text-muted"
          >
            One-time purchase · No subscription
          </motion.p>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-20 relative mx-auto max-w-5xl"
        >
          <div className="rounded-xl border border-border bg-surface overflow-hidden shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle bg-surface-elevated/50">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <span className="ml-2 text-xs text-text-muted font-mono">
                TeleVault
              </span>
            </div>
            <div className="flex h-[320px] sm:h-[400px] md:h-[480px]">
              <div className="hidden sm:flex w-48 md:w-56 flex-col border-r border-border-subtle bg-surface/50 p-3 gap-1">
                <div className="px-3 py-2 text-xs font-medium text-text-muted uppercase tracking-wider">
                  Folders
                </div>
                {[
                  { name: "Documents", active: true, count: 24 },
                  { name: "Photos", active: false, count: 142 },
                  { name: "Projects", active: false, count: 8 },
                  { name: "Downloads", active: false, count: 31 },
                  { name: "Archive", active: false, count: 56 },
                ].map((folder) => (
                  <div
                    key={folder.name}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors ${
                      folder.active
                        ? "bg-accent/10 text-accent-light"
                        : "text-text-secondary hover:bg-white/5"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                      </svg>
                      {folder.name}
                    </span>
                    <span className="text-xs text-text-muted">{folder.count}</span>
                  </div>
                ))}
                <div className="mt-auto px-3 py-3 border-t border-border-subtle">
                  <div className="text-xs text-text-muted mb-1.5">Storage</div>
                  <div className="h-1.5 rounded-full bg-surface-elevated overflow-hidden">
                    <div
                      className="h-full rounded-full bg-accent/60"
                      style={{ width: "34%" }}
                    />
                  </div>
                  <div className="text-xs text-text-muted mt-1.5">
                    4.2 GB of 12.5 GB used
                  </div>
                </div>
              </div>

              <div className="flex-1 p-4 md:p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <h3 className="text-sm font-medium text-text-primary">
                      Documents
                    </h3>
                    <span className="text-xs text-text-muted">24 files</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="hidden md:flex items-center gap-2 rounded-lg border border-border-subtle bg-surface px-3 py-1.5">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-text-muted"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                      <span className="text-xs text-text-muted">Search files...</span>
                    </div>
                    <button className="flex items-center gap-1.5 rounded-lg bg-accent/10 border border-accent/20 px-3 py-1.5 text-xs font-medium text-accent-light">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                      Upload
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { name: "invoice_march.pdf", size: "245 KB", type: "pdf" },
                    { name: "project_notes.docx", size: "1.2 MB", type: "doc" },
                    { name: "screenshot_01.png", size: "890 KB", type: "img" },
                    { name: "budget_2026.xlsx", size: "156 KB", type: "sheet" },
                    { name: "presentation.pdf", size: "4.5 MB", type: "pdf" },
                    { name: "meeting_recording.mp4", size: "28 MB", type: "video" },
                  ].map((file) => (
                    <div
                      key={file.name}
                      className="group rounded-lg border border-border-subtle bg-surface-elevated/30 p-3 hover:border-accent/20 hover:bg-accent/5 transition-all cursor-pointer"
                    >
                      <div className="flex h-16 md:h-20 items-center justify-center rounded-md bg-background/50 mb-3">
                        <div
                          className={`h-8 w-8 rounded-lg flex items-center justify-center ${
                            file.type === "pdf"
                              ? "bg-red-500/10 text-red-400"
                              : file.type === "doc"
                                ? "bg-blue-500/10 text-blue-400"
                                : file.type === "img"
                                  ? "bg-green-500/10 text-green-400"
                                  : file.type === "sheet"
                                    ? "bg-emerald-500/10 text-emerald-400"
                                    : "bg-purple-500/10 text-purple-400"
                          }`}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                            <path d="M14 2v6h6" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-xs font-medium text-text-primary truncate mb-0.5">
                        {file.name}
                      </p>
                      <p className="text-xs text-text-muted">{file.size}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -inset-4 bg-accent/3 rounded-2xl blur-xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}

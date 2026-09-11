"use client";
export default function Footer() {
  return (
    <footer style={{ padding: "48px 24px", borderTop: "1px solid var(--border)" }}>
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M13 2L4.5 13.5H11L10 22L20.5 10H14L13 2Z" fill="url(#footerGrad)" />
            <defs>
              <linearGradient id="footerGrad" x1="4" y1="2" x2="20" y2="22">
                <stop stopColor="#8b7cf8" />
                <stop offset="1" stopColor="#2dd4bf" />
              </linearGradient>
            </defs>
          </svg>
          <span style={{ fontSize: 13, fontWeight: 600, color: "var(--subtle)", fontFamily: "var(--font-sans)" }}>
            TeleVault
          </span>
        </div>

        <div style={{ fontSize: 12, color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
          v0.1.0 · made with obsession
        </div>

        <div style={{ display: "flex", gap: 20 }}>
          {[
            { label: "GitHub", href: "https://github.com/hsay123/Televault" },
            { label: "Privacy", href: "/privacy" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontSize: 12,
                color: "var(--muted)",
                textDecoration: "none",
                transition: "color 0.2s",
                fontFamily: "var(--font-sans)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
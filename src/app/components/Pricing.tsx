"use client";
export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        padding: "120px 24px",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 480, margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 400,
            color: "var(--white)",
            letterSpacing: "-0.02em",
            marginBottom: 12,
          }}
        >
          One price.
          <br />
          <em style={{ color: "var(--accent)" }}>Yours for good.</em>
        </h2>
        <p
          style={{
            fontSize: 15,
            color: "var(--subtle)",
            marginBottom: 48,
            lineHeight: 1.6,
            fontWeight: 300,
          }}
        >
          Pay once. No subscription. Updates included forever.
        </p>

        {/* Price card */}
        <div
          style={{
            borderRadius: 24,
            background: "var(--surface)",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "40px 36px",
            boxShadow:
              "0 0 0 1px rgba(139,124,248,0.15), 0 40px 80px rgba(0,0,0,0.5)",
            marginBottom: 20,
          }}
        >
          {/* Price */}
          <div style={{ marginBottom: 32 }}>
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 64,
                color: "var(--white)",
                lineHeight: 1,
                marginBottom: 4,
              }}
            >
              ₹299
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)" }}>
              one-time · all platforms
            </div>
          </div>

          {/* Features list */}
          <div style={{ marginBottom: 32, textAlign: "left" }}>
            {[
              "5 TB storage via Telegram",
              "Nested folders + file versioning",
              "AES-256 client-side encryption",
              "Cross-device sync",
              "Unlimited file size (auto-chunked)",
              "macOS · Linux · Windows",
              "All future updates",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 0",
                  borderBottom: "1px solid var(--border)",
                  fontSize: 14,
                  color: "var(--text)",
                }}
              >
                <span style={{ color: "var(--teal)", fontSize: 12 }}>✓</span>
                {item}
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="/download"
            style={{
              display: "block",
              padding: "14px 0",
              borderRadius: 40,
              background: "linear-gradient(135deg, var(--accent), var(--teal))",
              color: "#fff",
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              textAlign: "center",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.9";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Download TeleVault
          </a>
        </div>

        <p style={{ fontSize: 12, color: "var(--muted)" }}>
          macOS 12+, Ubuntu 20+, Windows 10+
        </p>
      </div>
    </section>
  );
}
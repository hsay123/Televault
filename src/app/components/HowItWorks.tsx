const steps = [
  {
    num: "01",
    title: "Get your Telegram API key",
    body: "Visit my.telegram.org, create an app, copy the API ID and Hash. Takes 2 minutes.",
  },
  {
    num: "02",
    title: "Download TeleVault",
    body: "Install the app. Enter your API credentials. TeleVault creates 3 private channels in your Telegram account automatically.",
  },
  {
    num: "03",
    title: "Upload anything",
    body: "Drag files in. They go straight to Telegram. Access them from any device running TeleVault.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        padding: "120px 24px",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 400,
              color: "var(--white)",
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            Up in three steps.
          </h2>
          <p style={{ color: "var(--subtle)", fontSize: 16, fontWeight: 300 }}>
            No servers to manage. No storage accounts to create.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 2,
          }}
        >
          {steps.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "40px 32px",
                background: i === 1 ? "rgba(139,124,248,0.06)" : "transparent",
                border: "1px solid var(--border)",
                borderLeft: i === 0 ? "1px solid var(--border)" : "none",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--accent)",
                  marginBottom: 20,
                  letterSpacing: "0.05em",
                }}
              >
                {s.num}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 22,
                  fontWeight: 400,
                  color: "var(--white)",
                  marginBottom: 14,
                  lineHeight: 1.3,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--subtle)",
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
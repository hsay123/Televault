const features = [
  {
    id: "storage",
    eyebrow: "01 — Storage",
    headline: ["5 TB of private storage,", "zero monthly bills."],
    italic: "zero monthly bills.",
    body: "Your Telegram account already stores files permanently. TeleVault adds a real filesystem on top — nested folders, file versioning, trash with restore — without touching Telegram's limits.",
    detail: "5,497,558,138,880 bytes. Yours.",
    visual: "storage",
  },
  {
    id: "upload",
    eyebrow: "02 — Upload",
    headline: ["Any file. Any size.", "Straight to Telegram."],
    italic: "Straight to Telegram.",
    body: "Files stream directly from your machine to Telegram — nothing is written to disk temporarily. Large files split into 512 MB chunks automatically. A 50 GB video uploads the same way as a 50 KB PDF.",
    detail: "No temp files. No ENOSPC. No limits.",
    visual: "upload",
  },
  {
    id: "privacy",
    eyebrow: "03 — Privacy",
    headline: ["Your files are yours.", "Not ours. Not Telegram's."],
    italic: "Not ours. Not Telegram's.",
    body: "TeleVault never sees your files. They live in your Telegram account. Enable encryption and files are AES-256 encrypted on your device before upload — only you hold the key.",
    detail: "AES-256-GCM. Key lives in your OS keychain.",
    visual: "privacy",
  },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        {features.map((f, i) => (
          <div
            key={f.id}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center",
              marginBottom: 140,
              direction: i % 2 === 1 ? "rtl" : "ltr",
            }}
          >
            {/* Text */}
            <div style={{ direction: "ltr" }}>
              <div
                style={{
                  fontSize: 11,
                  color: "var(--accent)",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.08em",
                  marginBottom: 20,
                  textTransform: "uppercase",
                }}
              >
                {f.eyebrow}
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "var(--white)",
                  marginBottom: 24,
                }}
              >
                {f.headline[0]}
                <br />
                <em style={{ color: "var(--accent)" }}>{f.headline[1]}</em>
              </h2>

              <p
                style={{
                  fontSize: 16,
                  color: "var(--subtle)",
                  lineHeight: 1.75,
                  marginBottom: 20,
                  fontWeight: 300,
                  maxWidth: 420,
                }}
              >
                {f.body}
              </p>

              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--muted)",
                  padding: "8px 14px",
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: 8,
                  border: "1px solid var(--border)",
                  display: "inline-block",
                }}
              >
                {f.detail}
              </div>
            </div>

            {/* Visual placeholder — replaced with real screenshots */}
            <div style={{ direction: "ltr" }}>
              <div
                style={{
                  aspectRatio: "4/3",
                  borderRadius: 20,
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FeatureVisual type={f.visual} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeatureVisual({ type }: { type: string }) {
  if (type === "storage")
    return (
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 48,
            fontWeight: 500,
            color: "var(--accent)",
            lineHeight: 1,
            marginBottom: 8,
          }}
        >
          5 TB
        </div>
        <div style={{ fontSize: 13, color: "var(--muted)" }}>per account · forever</div>
      </div>
    );

  if (type === "upload")
    return (
      <div style={{ width: "80%" }}>
        {["project.fig → 2.4 GB", "win11.iso → 5.8 GB", "footage.mp4 → 12.1 GB"].map(
          (f, i) => (
            <div
              key={i}
              style={{
                padding: "10px 14px",
                marginBottom: 8,
                background: "rgba(255,255,255,0.03)",
                borderRadius: 10,
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: i === 0 ? "var(--teal)" : "var(--muted)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--text)",
                }}
              >
                {f}
              </span>
              {i === 0 && (
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: 11,
                    color: "var(--teal)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  ✓ done
                </span>
              )}
            </div>
          )
        )}
      </div>
    );

  return (
    <div style={{ textAlign: "center", padding: 24 }}>
      <div style={{ fontSize: 40, marginBottom: 8 }}>🔐</div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "var(--muted)",
          lineHeight: 1.8,
        }}
      >
        AES-256-GCM
        <br />
        Key: OS Keychain
        <br />
        Upload: encrypted
        <br />
        Telegram: {"can't read"}
      </div>
    </div>
  );
}
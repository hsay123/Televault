"use client";
import AppMockup from "./AppMockup";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 400,
          background:
            "radial-gradient(ellipse, rgba(139,124,248,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Eyebrow */}
      <div
        className="animate-fade-up"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "5px 14px",
          borderRadius: 20,
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.03)",
          marginBottom: 32,
        }}
      >
        {/* Telegram dot */}
        <div
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "var(--teal)",
            animation: "pulse-glow 2s ease-in-out infinite",
          }}
        />
        <span
          style={{
            fontSize: 12,
            color: "var(--subtle)",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.05em",
          }}
        >
          Powered by Telegram
        </span>
      </div>

      {/* Headline — serif, large, editorial */}
      <h1
        className="animate-fade-up delay-100"
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(48px, 8vw, 96px)",
          fontWeight: 400,
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          textAlign: "center",
          color: "var(--white)",
          maxWidth: 800,
          marginBottom: 24,
        }}
      >
        Your Telegram,
        <br />
        <em style={{ color: "var(--accent)" }}>your storage.</em>
      </h1>

      {/* Subheadline */}
      <p
        className="animate-fade-up delay-200"
        style={{
          fontSize: 18,
          color: "var(--subtle)",
          textAlign: "center",
          maxWidth: 480,
          lineHeight: 1.65,
          marginBottom: 40,
          fontWeight: 300,
        }}
      >
        TeleVault turns your Telegram account into 5 TB of private cloud storage.
        Real folders. No monthly bills. One payment.
      </p>

      {/* CTAs */}
      <div
        className="animate-fade-up delay-300"
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          marginBottom: 80,
        }}
      >
        <a
          href="#pricing"
          style={{
            padding: "12px 28px",
            borderRadius: 40,
            background: "var(--accent)",
            color: "#fff",
            fontSize: 15,
            fontWeight: 600,
            textDecoration: "none",
            transition: "transform 0.2s, opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          Download for macOS
        </a>
        <span style={{ fontSize: 13, color: "var(--muted)" }}>
          Linux & Windows coming soon
        </span>
      </div>

      {/* App Mockup */}
      <div
        className="animate-fade-up delay-400 animate-float"
        style={{ width: "100%", maxWidth: 900 }}
      >
        <AppMockup />
      </div>
    </section>
  );
}
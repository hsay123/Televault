"use client";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 20,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 32,
          padding: "10px 20px",
          borderRadius: 40,
          background: scrolled ? "rgba(10,10,10,0.85)" : "rgba(10,10,10,0.5)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.4)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* Lightning bolt icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M13 2L4.5 13.5H11L10 22L20.5 10H14L13 2Z"
              fill="url(#navGrad)"
              stroke="none"
            />
            <defs>
              <linearGradient id="navGrad" x1="4" y1="2" x2="20" y2="22">
                <stop stopColor="#8b7cf8" />
                <stop offset="1" stopColor="#2dd4bf" />
              </linearGradient>
            </defs>
          </svg>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 14,
              color: "var(--white)",
              letterSpacing: "-0.02em",
            }}
          >
            TeleVault
          </span>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          {["Features", "How it works", "Pricing"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/ /g, "-")}`}
              style={{
                fontSize: 13,
                color: "var(--subtle)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--subtle)")}
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#pricing"
          style={{
            padding: "7px 16px",
            borderRadius: 20,
            background: "var(--accent)",
            color: "#fff",
            fontSize: 13,
            fontWeight: 600,
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Download
        </a>
      </div>
    </nav>
  );
}
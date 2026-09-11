"use client";
import { useEffect, useState } from "react";

export default function AppMockup() {
  const [uploadPct, setUploadPct] = useState(34);

  // Animate the upload progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setUploadPct((p) => (p >= 96 ? 20 : p + 1.2));
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const folders = [
    { name: "mydata", files: 5 },
    { name: "videos", files: 3 },
    { name: "window", files: 1 },
  ];

  const files = [
    { name: "Screencast_2026.mp4", type: "VID", size: "9.7 MB", color: "#0a84ff" },
    { name: "resume_april.pdf", type: "PDF", size: "420 KB", color: "#ff453a" },
    { name: "photo_2026.jpg", type: "IMG", size: "174 KB", color: "#30d158" },
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        borderRadius: 20,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow:
          "0 40px 120px rgba(0,0,0,0.8), 0 0 0 0.5px rgba(255,255,255,0.05)",
        background: "#000",
      }}
    >
      {/* Window chrome */}
      <div
        style={{
          padding: "12px 16px",
          background: "#0a0a0a",
          borderBottom: "1px solid #1a1a1a",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div style={{ display: "flex", gap: 6 }}>
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <div
              key={c}
              style={{ width: 11, height: 11, borderRadius: "50%", background: c }}
            />
          ))}
        </div>
        <div
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 12,
            color: "#444",
            fontFamily: "var(--font-sans)",
          }}
        >
          TeleVault
        </div>
      </div>

      {/* App layout */}
      <div style={{ display: "flex", height: 420 }}>
        {/* Sidebar */}
        <div
          style={{
            width: 200,
            flexShrink: 0,
            background: "#0a0a0a",
            borderRight: "1px solid #1a1a1a",
            padding: "16px 0",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Logo */}
          <div
            style={{
              padding: "0 16px 16px",
              borderBottom: "1px solid #1a1a1a",
              marginBottom: 12,
            }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#e8e8e6",
                fontFamily: "var(--font-sans)",
              }}
            >
              ⚡ TeleVault
            </div>
          </div>

          {/* Nav links */}
          {[
            { icon: "⊟", label: "All Files", active: true },
            { icon: "◷", label: "Recent", active: false },
            { icon: "★", label: "Starred", active: false },
            { icon: "⊗", label: "Trash", active: false },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                padding: "7px 16px",
                fontSize: 12,
                color: item.active ? "#e8e8e6" : "#555",
                background: item.active ? "rgba(139,124,248,0.12)" : "transparent",
                display: "flex",
                alignItems: "center",
                gap: 8,
                borderLeft: item.active
                  ? "2px solid var(--accent)"
                  : "2px solid transparent",
                fontFamily: "var(--font-sans)",
              }}
            >
              <span style={{ fontSize: 10 }}>{item.icon}</span>
              {item.label}
            </div>
          ))}

          {/* Spacer */}
          <div style={{ flex: 1 }} />

          {/* Storage bar */}
          <div style={{ padding: "12px 16px", borderTop: "1px solid #1a1a1a" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 10,
                color: "#555",
                marginBottom: 6,
                fontFamily: "var(--font-mono)",
              }}
            >
              <span>26.7 MB</span>
              <span>5 TB</span>
            </div>
            <div style={{ height: 3, background: "#1a1a1a", borderRadius: 2 }}>
              <div
                style={{
                  height: "100%",
                  width: "0.5%",
                  background: "var(--accent)",
                  borderRadius: 2,
                }}
              />
            </div>
            <div
              style={{
                fontSize: 10,
                color: "#444",
                marginTop: 4,
                fontFamily: "var(--font-mono)",
              }}
            >
              5.00 TB free
            </div>
          </div>

          {/* User row */}
          <div
            style={{
              padding: "8px 16px",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: 8,
                background: "linear-gradient(135deg,#8b7cf8,#2dd4bf)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                fontWeight: 700,
                color: "#fff",
              }}
            >
              Y
            </div>
            <span style={{ fontSize: 12, color: "#888", fontFamily: "var(--font-sans)" }}>
              Yash
            </span>
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            flex: 1,
            minWidth: 0,
            background: "#000",
            overflowY: "auto",
            padding: 24,
          }}
        >
          {/* Folders section */}
          <div
            style={{
              fontSize: 18,
              fontFamily: "var(--font-serif)",
              color: "#e8e8e6",
              marginBottom: 16,
            }}
          >
            Folders
          </div>

          <div style={{ display: "flex", gap: 14, marginBottom: 32 }}>
            {folders.map((f) => (
              <div
                key={f.name}
                style={{
                  width: 110,
                  borderRadius: 14,
                  background: "#111",
                  border: "1px solid #1a1a1a",
                  padding: 10,
                  cursor: "pointer",
                }}
              >
                {/* Mini folder illustration */}
                <div
                  style={{
                    width: "100%",
                    height: 64,
                    borderRadius: 8,
                    background: "linear-gradient(175deg,#5a5a5c,#383839)",
                    marginBottom: 8,
                    position: "relative",
                    overflow: "visible",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  {/* Papers */}
                  {[-4, 0, 4].map((rot, i) => (
                    <div
                      key={i}
                      style={{
                        position: "absolute",
                        width: 30,
                        height: 34,
                        borderRadius: 4,
                        background: i === 1 ? "#fff" : "#e8e8e6",
                        bottom: 8,
                        left: "50%",
                        transform: `translateX(-50%) rotate(${rot}deg)`,
                        boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
                        zIndex: i === 1 ? 2 : 1,
                      }}
                    />
                  ))}
                  {/* Folder body */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 38,
                      borderRadius: "0 0 8px 8px",
                      background: "linear-gradient(175deg,#6e6e70,#3f3f41)",
                      zIndex: 3,
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      paddingBottom: 4,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 7,
                        fontWeight: 700,
                        color: "rgba(255,255,255,0.18)",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "0.3px",
                      }}
                    >
                      TeleVault
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#e8e8e6",
                    fontFamily: "var(--font-sans)",
                    marginBottom: 2,
                  }}
                >
                  {f.name}
                </div>
                <div style={{ fontSize: 10, color: "#555", fontFamily: "var(--font-sans)" }}>
                  {f.files} files
                </div>
              </div>
            ))}
          </div>

          {/* Files section */}
          <div
            style={{
              fontSize: 18,
              fontFamily: "var(--font-serif)",
              color: "#e8e8e6",
              marginBottom: 12,
            }}
          >
            Recently Uploaded
          </div>

          <div style={{ borderRadius: 12, border: "1px solid #1a1a1a", overflow: "hidden" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 80px 80px",
                padding: "7px 14px",
                borderBottom: "1px solid #1a1a1a",
                fontSize: 10,
                color: "#444",
                fontWeight: 600,
                fontFamily: "var(--font-sans)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              <div>File</div>
              <div>Type</div>
              <div>Size</div>
            </div>
            {files.map((f) => (
              <div
                key={f.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 80px 80px",
                  padding: "9px 14px",
                  borderBottom: "1px solid #111",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: 7,
                      background: `${f.color}22`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 8,
                      fontWeight: 800,
                      color: f.color,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {f.type}
                  </div>
                  <span style={{ fontSize: 12, color: "#ccc", fontFamily: "var(--font-sans)" }}>
                    {f.name}
                  </span>
                </div>
                <div style={{ fontSize: 11, color: "#555", fontFamily: "var(--font-mono)" }}>
                  {f.type}
                </div>
                <div style={{ fontSize: 11, color: "#555", fontFamily: "var(--font-mono)" }}>
                  {f.size}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upload card — bottom right corner */}
        <div
          style={{
            position: "absolute",
            bottom: 20,
            right: 20,
            width: 240,
            borderRadius: 16,
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: "0 16px 48px rgba(0,0,0,0.6)",
            padding: 14,
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "#e8e8e6",
              marginBottom: 10,
              fontFamily: "var(--font-sans)",
            }}
          >
            ↑ Uploading 1 file
          </div>
          <div
            style={{
              fontSize: 11,
              color: "#888",
              marginBottom: 6,
              fontFamily: "var(--font-sans)",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Win11_25H2.iso</span>
            <span style={{ fontFamily: "var(--font-mono)" }}>
              {Math.round(uploadPct)}%
            </span>
          </div>
          <div
            style={{
              height: 3,
              background: "#1a1a1a",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${uploadPct}%`,
                background: "linear-gradient(90deg, var(--accent), var(--teal))",
                borderRadius: 2,
                transition: "width 0.1s linear",
                boxShadow: "0 0 8px rgba(139,124,248,0.5)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
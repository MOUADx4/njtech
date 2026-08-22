import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const size        = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt         = "NJTECH Solution — Infrastructures Télécom 4G / 5G";

export default async function OgImage() {
  const raw    = await readFile(join(process.cwd(), "public/images/logo.png"));
  const logo   = `data:image/png;base64,${raw.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width:          1200,
        height:         630,
        background:     "#020816",
        display:        "flex",
        flexDirection:  "column",
        position:       "relative",
        overflow:       "hidden",
        fontFamily:     "system-ui, sans-serif",
      }}
    >
      {/* Grid texture */}
      <div
        style={{
          position:        "absolute",
          inset:           0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize:  "48px 48px",
        }}
      />

      {/* Glow top-left */}
      <div
        style={{
          position:     "absolute",
          top:          -160,
          left:         -80,
          width:        700,
          height:       700,
          borderRadius: "50%",
          background:   "radial-gradient(circle, rgba(3,151,231,0.18) 0%, transparent 65%)",
        }}
      />

      {/* Glow bottom-right */}
      <div
        style={{
          position:     "absolute",
          bottom:       -200,
          right:        -100,
          width:        600,
          height:       600,
          borderRadius: "50%",
          background:   "radial-gradient(circle, rgba(3,151,231,0.10) 0%, transparent 65%)",
        }}
      />

      {/* Top accent line */}
      <div
        style={{
          position:   "absolute",
          top:        0,
          left:       0,
          right:      0,
          height:     3,
          background: "linear-gradient(90deg, transparent, #0397e7, transparent)",
        }}
      />

      {/* Main content */}
      <div
        style={{
          display:        "flex",
          flexDirection:  "column",
          flex:           1,
          padding:        "64px 80px",
          position:       "relative",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logo}
          alt="NJTECH Solution"
          style={{ height: 72, width: "auto", objectFit: "contain" }}
        />

        {/* Center text block */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Label */}
          <div
            style={{
              display:       "flex",
              alignItems:    "center",
              gap:           12,
              marginBottom:  8,
            }}
          >
            <div style={{ width: 36, height: 2, background: "#0397e7", borderRadius: 2 }} />
            <span
              style={{
                fontSize:      13,
                fontWeight:    700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color:         "#0397e7",
              }}
            >
              Infrastructures Télécom
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize:      68,
              fontWeight:    800,
              lineHeight:    1.0,
              letterSpacing: "-0.03em",
              color:         "#ffffff",
            }}
          >
            Déployer le réseau
          </div>
          <div
            style={{
              fontSize:      68,
              fontWeight:    800,
              lineHeight:    1.0,
              letterSpacing: "-0.03em",
              background:    "linear-gradient(135deg, #38bdf8 0%, #0397e7 50%, #0076c2 100%)",
              WebkitBackgroundClip: "text",
              color:         "transparent",
            }}
          >
            de demain.
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
          }}
        >
          {/* Badges */}
          <div style={{ display: "flex", gap: 10 }}>
            {["Déploiement 4G / 5G", "Bureau d'étude", "Maintenance"].map((b) => (
              <div
                key={b}
                style={{
                  border:        "1px solid rgba(255,255,255,0.1)",
                  borderRadius:  999,
                  padding:       "8px 18px",
                  fontSize:      13,
                  fontWeight:    600,
                  color:         "rgba(255,255,255,0.55)",
                  background:    "rgba(255,255,255,0.04)",
                }}
              >
                {b}
              </div>
            ))}
          </div>

          {/* Domain */}
          <div
            style={{
              fontSize:  16,
              fontWeight: 500,
              color:     "rgba(255,255,255,0.25)",
              letterSpacing: "0.04em",
            }}
          >
            njtech-solution.fr
          </div>
        </div>
      </div>
    </div>,
    { ...size },
  );
}

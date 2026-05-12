import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "V.&J. Fonseca — Painéis e Perfis Metálicos";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          width: "100%",
          padding: "72px",
          background:
            "radial-gradient(ellipse at top right, rgba(91,155,229,0.22), transparent 50%), #0a0b0d",
          color: "#f4f4f5",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#5b9be5",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 32, height: 2, background: "#5b9be5" }} />
          V.&amp;J. Fonseca · Setúbal
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 96, lineHeight: 1, letterSpacing: -2 }}>
            Aço que sustenta
          </div>
          <div
            style={{
              fontSize: 96,
              lineHeight: 1,
              letterSpacing: -2,
              color: "#9ba1a8",
            }}
          >
            o que se constrói.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            color: "#9ba1a8",
            borderTop: "1px solid #2a2d33",
            paddingTop: 28,
            fontFamily: "Inter, system-ui",
          }}
        >
          <span>
            Painéis · Fachadas · Vedações · Perfis
          </span>
          <span style={{ letterSpacing: 3, textTransform: "uppercase" }}>
            vj-fonseca.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}

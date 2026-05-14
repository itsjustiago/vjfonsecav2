import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "V.&J. Fonseca — Serralharia em Cabanas de Torres";

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
            "radial-gradient(ellipse at top right, rgba(111,136,164,0.22), transparent 50%), #0a0b0d",
          color: "#f4f4f5",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#f4f4f5",
            fontSize: 18,
            letterSpacing: -0.2,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: 9999,
              background: "#f4f4f5",
              boxShadow: "inset 0 0 0 1.5px #5c6169",
            }}
          />
          V.&amp;J. Fonseca · Cabanas de Torres · desde 2019
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 112,
              lineHeight: 1.02,
              letterSpacing: -3.5,
              fontWeight: 500,
            }}
          >
            Ferro forjado
          </div>
          <div
            style={{
              fontSize: 112,
              lineHeight: 1.02,
              letterSpacing: -3.5,
              fontWeight: 500,
              color: "#9ba1a8",
            }}
          >
            à medida.
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
          }}
        >
          <span>Portões · Gradeamentos · Estruturas · Vedações</span>
          <span style={{ letterSpacing: 2, textTransform: "uppercase" }}>
            vj-fonseca.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}

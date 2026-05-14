import type { Metadata, Viewport } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: {
    default: "V.&J. Fonseca — Serralharia em Cabanas de Torres, Alenquer",
    template: "%s · V.&J. Fonseca",
  },
  description:
    "Serralharia em Cabanas de Torres, Alenquer. Portões, gradeamentos, estruturas e vedações em ferro e aço, à medida. Orçamento em 24h.",
  keywords: [
    "serralharia",
    "portões",
    "gradeamentos",
    "estruturas metálicas",
    "vedações",
    "ferro forjado",
    "aço inox",
    "Cabanas de Torres",
    "Alenquer",
    "zona Oeste",
  ],
  authors: [{ name: "V.&J. Fonseca" }],
  metadataBase: new URL("https://vj-fonseca.com"),
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://vj-fonseca.com",
    siteName: "V.&J. Fonseca",
    title: "V.&J. Fonseca — Serralharia em Cabanas de Torres",
    description:
      "Portões, gradeamentos, estruturas e vedações em ferro e aço. Cabanas de Torres · Alenquer · desde 2019.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0b0d",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "V.&J. Fonseca, Lda",
  image: "https://vj-fonseca.com/og.png",
  url: "https://vj-fonseca.com",
  telephone: "+351263079366",
  email: "jf@vjfonseca.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua das Flores n.º 8",
    postalCode: "2580-121",
    addressLocality: "Cabanas de Torres",
    addressRegion: "Alenquer",
    addressCountry: "PT",
  },
  areaServed: [
    "Alenquer",
    "Sobral de Monte Agraço",
    "Torres Vedras",
    "Cadaval",
    "Azambuja",
    "Mafra",
    "Lisboa",
  ],
  description:
    "Serralharia em Cabanas de Torres, Alenquer. Portões, gradeamentos, estruturas e vedações em ferro e aço, à medida.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-PT"
      className={`${dmSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grain bg-[--color-bg-base] text-(color:--color-text-primary)">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

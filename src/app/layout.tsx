import type { Metadata, Viewport } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "V.&J. Fonseca — Painéis e Perfis Metálicos | Setúbal",
    template: "%s · V.&J. Fonseca",
  },
  description:
    "Fornecedor especializado em painéis metálicos, fachadas, vedações e perfis para construção. Setúbal, Palmela e região de Lisboa. Orçamento em 24h.",
  keywords: [
    "painéis metálicos",
    "painel sandwich",
    "fachadas metálicas",
    "vedação metálica",
    "perfis galvanizados",
    "serralharia industrial",
    "Setúbal",
    "Palmela",
    "construção metálica",
  ],
  authors: [{ name: "V.&J. Fonseca" }],
  metadataBase: new URL("https://vj-fonseca.com"),
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://vj-fonseca.com",
    siteName: "V.&J. Fonseca",
    title: "V.&J. Fonseca — Painéis e Perfis Metálicos",
    description:
      "Fornecedor especializado em coberturas, fachadas, vedações e perfis metálicos. Setúbal · Palmela.",
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
  name: "V.&J. Fonseca",
  image: "https://vj-fonseca.com/og.png",
  url: "https://vj-fonseca.com",
  telephone: "+351263079366",
  email: "jf@vjfonseca.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Setúbal",
    addressRegion: "Setúbal",
    addressCountry: "PT",
  },
  areaServed: ["Setúbal", "Palmela", "Lisboa"],
  description:
    "Fornecedor especializado em painéis metálicos, fachadas, vedações e perfis para a construção.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-PT"
      className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grain bg-[--color-bg-base] text-[--color-text-primary]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

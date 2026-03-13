import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kay Atma | Escuela de Yoga y Terapias Ancestrales",
  description:
    "Kay Atma es una escuela de yoga y terapias ancestrales en La Ligua, V Región, Chile. Encuentra equilibrio, paz y bienestar a través de la práctica consciente del yoga con el Maestro Gyan Kay.",
  keywords: [
    "yoga",
    "terapias ancestrales",
    "La Ligua",
    "Chile",
    "Hatha Yoga",
    "Kundalini",
    "meditación",
    "bienestar",
    "Kay Atma",
    "Gyan Kay",
  ],
  authors: [{ name: "Kay Atma" }],
  openGraph: {
    title: "Kay Atma | Escuela de Yoga y Terapias Ancestrales",
    description:
      "Encuentra equilibrio, paz y bienestar a través de la práctica consciente del yoga y terapias ancestrales en La Ligua, Chile.",
    type: "website",
    locale: "es_CL",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#263B16",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

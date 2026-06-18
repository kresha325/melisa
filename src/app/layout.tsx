import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://die-energiesparer.de"),
  title: {
    default: "Die Energiesparer | Strom & Gas Kosten senken",
    template: "%s | Die Energiesparer",
  },
  description:
    "Kostenlose Beratung und Tarifwechsel für Strom und Gas. Sparen Sie bis zu 850€ pro Jahr mit Die Energiesparer.",
  keywords: [
    "Strom sparen",
    "Gas sparen",
    "Energietarif",
    "Tarifwechsel",
    "Energieberatung",
    "Deutschland",
    "Energiesparer",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Die Energiesparer | Strom & Gas Kosten senken",
    description:
      "Kostenlose Beratung und Tarifwechsel. Bis zu 850€ sparen.",
    type: "website",
    locale: "de_DE",
    siteName: "Die Energiesparer",
    images: [
      {
        url: "/logo.png",
        width: 1536,
        height: 1024,
        alt: "Die Energiesparer Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

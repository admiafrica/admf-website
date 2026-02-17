import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const proximaNova = localFont({
  src: [
    { path: "../assets/fonts/ProximaNova-Thin.otf", weight: "300", style: "normal" },
    { path: "../assets/fonts/ProximaNova-Regular.otf", weight: "400", style: "normal" },
    { path: "../assets/fonts/ProximaNova-Semibold.otf", weight: "600", style: "normal" },
  ],
  variable: "--font-proxima",
  display: "swap",
});

const nexa = localFont({
  src: [
    { path: "../assets/fonts/Nexa-Book.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/Nexa-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-nexa-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ADMI Foundation | Investing in Africa's Creative Talent",
    template: "%s | ADMI Foundation",
  },
  description:
    "ADMI Foundation provides scholarships, mentorship, and equipment grants to empower the next generation of African creatives in film, animation, music, and game development.",
  metadataBase: new URL("https://admf.africa"),
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "ADMI Foundation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${proximaNova.variable} ${nexa.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

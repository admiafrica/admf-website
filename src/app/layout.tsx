import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
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
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "ADMI Foundation - Investing in Africa's Creative Talent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P3KK5BDJ');`,
          }}
        />
      </head>
      <body className={`${proximaNova.variable} ${nexa.variable} antialiased`} suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P3KK5BDJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

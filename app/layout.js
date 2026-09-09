import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { structuredData } from "./structured-data";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  title: "Taic Digital | Fractional Marketing & UX in Halifax, NS",
  description:
    "Fractional digital marketing support for small businesses: web strategy, UX/UI design, SEO/GEO, paid media, analytics and content. Based in Halifax, NS.",
  alternates: {
    canonical: "https://taicdigital.ca/",
  },
  icons: {
    icon: "/favicon.png",
  },
};

// Rendered as plain <meta> tags (Next.js hoists them into <head>) rather
// than via metadata.openGraph — that key triggers Next's built-in fallback
// that auto-generates twitter:* tags from the Open Graph data, which we
// don't want.
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Taic Digital" />
        <meta
          property="og:title"
          content="Taic Digital | Fractional Marketing & UX in Halifax, NS"
        />
        <meta
          property="og:description"
          content="Big agency thinking, small business focus. Taic Digital delivers fractional web strategy, UX/UI, SEO/GEO, paid media, analytics and content support."
        />
        <meta property="og:url" content="https://taicdigital.ca/" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:image" content="https://taicdigital.ca/og-image.png" />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}

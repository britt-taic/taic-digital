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
  openGraph: {
    type: "website",
    siteName: "Taic Digital",
    title: "Taic Digital | Fractional Marketing & UX in Halifax, NS",
    description:
      "Big agency thinking, small business focus. Taic Digital delivers fractional web strategy, UX/UI, SEO/GEO, paid media, analytics and content support.",
    url: "https://taicdigital.ca/",
    locale: "en_CA",
    // placeholder: replace once there's a real 1200x630 share image
    images: [{ url: "https://taicdigital.ca/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taic Digital | Fractional Marketing & UX in Halifax, NS",
    description:
      "Fractional digital marketing support for small businesses: web strategy, UX/UI design, SEO/GEO, paid media, analytics and content.",
    // same placeholder as og:image above
    images: ["https://taicdigital.ca/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}

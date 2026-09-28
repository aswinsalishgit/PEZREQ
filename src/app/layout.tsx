import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pezreq.com"),
  title: {
    template: "%s | PEZREQ",
    default: "PEZREQ | Demo Website",
  },
  description: "PEZREQ is a luxury jewellery house offering timeless, architectural, and sophisticated pieces shaped by restraint.",
  keywords: ["Luxury Jewellery", "Architectural Jewellery", "Fine Jewellery", "Rings", "Necklaces", "Bespoke Jewellery"],
  authors: [{ name: "PEZREQ House" }],
  creator: "PEZREQ",
  publisher: "PEZREQ",
  openGraph: {
    title: "PEZREQ | Demo Website",
    description: "Architecture for the body. Crafted for those who understand restraint.",
    url: "https://pezreq.com",
    siteName: "PEZREQ",
    images: [
      {
        url: "/pezreq-banner.png",
        width: 1200,
        height: 630,
        alt: "PEZREQ Luxury Jewellery",
      }
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PEZREQ | Luxury Jewellery",
    description: "Architecture for the body. Crafted for those who understand restraint.",
    creator: "@pezreq_house",
    images: ["/pezreq-banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
  },
};

import { StoreProvider } from "@/lib/context/StoreContext";
import CartDrawer from "@/components/cart/CartDrawer";
import SearchOverlay from "@/components/search/SearchOverlay";
import PageTransition from "@/components/ui/PageTransition";
import WaterBubbleScroll from "@/components/ui/WaterBubbleScroll";
import CustomCursor from "@/components/ui/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${playfair.variable} h-full antialiased overflow-x-hidden`}>
      <body className="min-h-full flex flex-col font-sans text-pezreq-charcoal bg-background overflow-x-hidden w-full max-w-[100vw]">
        <StoreProvider>
          <PageTransition>
            {children}
          </PageTransition>
          <CustomCursor />
          <WaterBubbleScroll />
          <CartDrawer />
          <SearchOverlay />
        </StoreProvider>
      </body>
    </html>
  );
}

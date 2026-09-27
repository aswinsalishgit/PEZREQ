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
  title: {
    template: "%s | PEZREQ",
    default: "PEZREQ | Luxury Jewellery",
  },
  description: "PEZREQ is a luxury jewellery house offering timeless, architectural, and sophisticated pieces.",
  icons: {
    icon: "/favicon.png",
  },
};

import { StoreProvider } from "@/lib/context/StoreContext";
import CartDrawer from "@/components/cart/CartDrawer";
import SearchOverlay from "@/components/search/SearchOverlay";
import PageTransition from "@/components/ui/PageTransition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-pezreq-charcoal bg-background">
        <StoreProvider>
          <PageTransition>
            {children}
          </PageTransition>
          <CartDrawer />
          <SearchOverlay />
        </StoreProvider>
      </body>
    </html>
  );
}

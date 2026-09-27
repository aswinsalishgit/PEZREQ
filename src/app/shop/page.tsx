import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/data/products";
import Link from "next/link";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

export default function ShopPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-pezreq-charcoal selection:text-pezreq-ivory">
      <Header />
      
      {/* Editorial Hero */}
      <section className="pt-40 pb-20 px-4 md:pt-48 md:pb-24 border-b border-glass-border">
        <div className="container-luxury text-center max-w-4xl">
          <h1 className="text-display text-pezreq-charcoal mb-6">All Fine Jewellery</h1>
          <p className="text-body text-pezreq-charcoal/70 max-w-2xl mx-auto">
            Explore the complete PEZREQ collection. Each piece is a masterclass in structural design and material integrity, designed for those who appreciate architecture for the body.
          </p>
        </div>
      </section>

      {/* Filter and Sort Bar */}
      <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-glass-border">
        <div className="container-luxury py-4 flex justify-between items-center text-nav text-pezreq-charcoal">
          <button className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filter</span>
          </button>
          
          <div className="hidden md:flex gap-8">
            <Link href="/shop/rings" className="hover:opacity-70 transition-opacity">Rings</Link>
            <Link href="/shop/necklaces" className="hover:opacity-70 transition-opacity">Necklaces</Link>
            <Link href="/shop/bracelets" className="hover:opacity-70 transition-opacity">Bracelets</Link>
            <Link href="/shop/earrings" className="hover:opacity-70 transition-opacity">Earrings</Link>
          </div>

          <button className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <span>Sort By</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-24 container-luxury">
        <div className="mb-12 flex justify-between items-center text-meta">
          <span>{products.length} Results</span>
        </div>
        <ProductGrid products={products} />
      </section>

      <Footer />
    </main>
  );
}

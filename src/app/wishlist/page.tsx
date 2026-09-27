"use client";

import React, { useMemo } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/product/ProductGrid";
import { useStore } from "@/lib/context/StoreContext";
import { products } from "@/data/products";
import Link from "next/link";

export default function WishlistPage() {
  const { wishlist } = useStore();
  
  const wishlistedProducts = useMemo(() => {
    return products.filter(p => wishlist.includes(p.id));
  }, [wishlist]);

  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-pezreq-charcoal selection:text-pezreq-ivory">
      <Header />
      
      <section className="pt-40 pb-20 px-4 md:pt-48 md:pb-24 border-b border-glass-border">
        <div className="container-luxury text-center max-w-4xl">
          <h1 className="text-display text-pezreq-charcoal mb-6">Wishlist</h1>
          <p className="text-body text-pezreq-charcoal/70 max-w-2xl mx-auto">
            Your personal selection of PEZREQ pieces.
          </p>
        </div>
      </section>

      <section className="py-24 container-luxury">
        {wishlistedProducts.length > 0 ? (
          <ProductGrid products={wishlistedProducts} />
        ) : (
          <div className="text-center py-12">
            <p className="text-body text-pezreq-charcoal/70 mb-8">Your wishlist is currently empty.</p>
            <Link 
              href="/shop"
              className="inline-block px-10 py-4 bg-pezreq-charcoal text-pezreq-ivory text-nav uppercase tracking-widest hover:bg-pezreq-near-black transition-colors"
            >
              Explore Collections
            </Link>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}

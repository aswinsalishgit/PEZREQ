"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search as SearchIcon } from "lucide-react";
import Link from "next/link";
import { useStore } from "@/lib/context/StoreContext";
import { products } from "@/data/products";

export default function SearchOverlay() {
  const { isSearchOpen, setIsSearchOpen } = useStore();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  const searchResults = query.trim().length > 1 
    ? products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.collection.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 bg-background/95 backdrop-blur-xl z-[120] overflow-y-auto"
        >
          <div className="container-luxury py-8 md:py-12">
            {/* Header / Close */}
            <div className="flex justify-between items-center mb-16 md:mb-24">
              <span className="text-nav uppercase tracking-widest text-pezreq-charcoal hidden sm:block">Search</span>
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="p-2 -mr-2 hover:opacity-50 transition-opacity focus:outline-none ml-auto"
              >
                <X className="w-6 h-6 text-pezreq-charcoal" />
              </button>
            </div>

            {/* Massive Search Input */}
            <div className="relative mb-16 md:mb-24 max-w-4xl mx-auto">
              <SearchIcon className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 text-pezreq-charcoal/30" />
              <input
                ref={inputRef}
                type="text"
                placeholder="What are you looking for?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent border-b-2 border-pezreq-charcoal/20 pb-4 pl-12 md:pl-16 text-3xl md:text-5xl font-serif text-pezreq-charcoal placeholder:text-pezreq-charcoal/20 focus:outline-none focus:border-pezreq-charcoal transition-colors rounded-none"
              />
            </div>

            {/* Results or Suggestions */}
            <div className="max-w-4xl mx-auto">
              {query.trim().length > 1 ? (
                <div>
                  <h3 className="text-meta text-pezreq-muted mb-8">Results for &quot;{query}&quot;</h3>
                  {searchResults.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                      {searchResults.map(product => (
                        <Link 
                          key={product.id} 
                          href={`/product/${product.slug}`}
                          onClick={() => setIsSearchOpen(false)}
                          className="group block"
                        >
                          <div className="text-nav mb-2 group-hover:text-pezreq-muted transition-colors">{product.name}</div>
                          <div className="text-meta text-pezreq-muted">{product.collection}</div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="text-body text-pezreq-charcoal/50">No pieces found. Try a different term.</p>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div>
                    <h3 className="text-meta text-pezreq-muted mb-6">Suggested Searches</h3>
                    <ul className="space-y-4">
                      {["Signature Collection", "Gold Rings", "Diamond Pendants", "Everyday Essentials"].map(term => (
                        <li key={term}>
                          <button 
                            onClick={() => setQuery(term)}
                            className="text-nav text-pezreq-charcoal hover:text-pezreq-muted transition-colors focus:outline-none"
                          >
                            {term}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-meta text-pezreq-muted mb-6">Explore Collections</h3>
                    <ul className="space-y-4">
                      {[
                        { name: "Signature", url: "/shop/signature" },
                        { name: "Contour", url: "/shop/contour" },
                        { name: "Noir", url: "/shop/noir" }
                      ].map(col => (
                        <li key={col.name}>
                          <Link 
                            href={col.url}
                            onClick={() => setIsSearchOpen(false)}
                            className="text-nav text-pezreq-charcoal hover:text-pezreq-muted transition-colors"
                          >
                            {col.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

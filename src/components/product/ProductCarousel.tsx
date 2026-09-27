"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCarouselProps {
  products: Product[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create a horizontal parallax effect if needed, but a native scroll snap with smooth behavior is often more performant and accessible for e-commerce.
  return (
    <div className="relative w-full overflow-hidden" ref={containerRef}>
      <div className="flex gap-4 md:gap-8 overflow-x-auto pb-12 px-4 sm:px-8 lg:px-12 snap-x snap-mandatory hide-scrollbar">
        {products.map((product, idx) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="min-w-[280px] w-[280px] md:min-w-[360px] md:w-[360px] snap-center group flex-shrink-0"
          >
            <Link href={`/product/${product.slug}`} className="block relative focus:outline-none focus:ring-2 focus:ring-pezreq-muted">
              {/* Image Container with Hover zoom and image swap */}
              <div className="relative aspect-[3/4] bg-pezreq-champagne mb-6 overflow-hidden">
                <Image 
                  src={product.images[0]} 
                  alt={product.name} 
                  fill 
                  className="object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105"
                />
                {product.hoverImage && (
                  <Image 
                    src={product.hoverImage} 
                    alt={`${product.name} Alternate View`} 
                    fill 
                    className="object-cover absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  />
                )}
                
                {/* Badges */}
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-background text-foreground text-micro px-2 py-1 tracking-widest z-10">
                    {product.badge}
                  </span>
                )}
                
                {/* Wishlist */}
                <button className="absolute top-4 right-4 p-2 bg-background/50 hover:bg-background rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 focus:outline-none">
                  <Heart className="w-4 h-4 text-foreground" strokeWidth={1.5} />
                </button>
              </div>
              
              {/* Text Info */}
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <h4 className="text-body font-normal text-pezreq-near-black mb-1 transition-colors group-hover:text-pezreq-muted">
                    {product.name}
                  </h4>
                  <span className="text-meta">{product.materials[0]}</span>
                </div>
                <span className="text-body font-medium text-pezreq-charcoal">
                  {new Intl.NumberFormat("en-US", { style: "currency", currency: product.currency, maximumFractionDigits: 0 }).format(product.price)}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

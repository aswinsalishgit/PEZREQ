"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductCarouselProps {
  products: Product[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
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
            className="min-w-[280px] w-[280px] md:min-w-[360px] md:w-[360px] snap-center flex-shrink-0"
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

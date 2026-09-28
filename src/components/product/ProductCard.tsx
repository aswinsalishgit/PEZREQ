"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Product } from "@/data/products";
import { useStore } from "@/lib/context/StoreContext";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const { toggleWishlist, isInWishlist } = useStore();
  const wishlisted = isInWishlist(product.id);

  return (
    <div className="group flex flex-col h-full w-full">
      <Link href={`/product/${product.slug}`} className="block relative focus:outline-none focus:ring-2 focus:ring-pezreq-muted flex-grow">
        {/* Image Container with Hover zoom and image swap */}
        <div className="relative aspect-[3/4] bg-pezreq-champagne mb-4 overflow-hidden w-full">
          <Image 
            src={product.images[0]} 
            alt={product.name} 
            fill 
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105"
          />
          {/* hoverImage disabled per user request: "they dont change on hover" */}
          
          {/* Badges */}
          {product.badge && (
            <span className="absolute top-4 left-4 liquid-glass text-pezreq-charcoal text-micro px-2 py-1 tracking-widest z-10">
              {product.badge}
            </span>
          )}
          
          {/* Wishlist */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product.id);
            }}
            className={`absolute top-4 right-4 p-2 bg-pezreq-ivory/80 hover:bg-pezreq-ivory rounded-full transition-all duration-300 z-10 focus:outline-none ${wishlisted ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
            aria-label={`Add ${product.name} to wishlist`}
          >
            <Heart className={`w-4 h-4 text-pezreq-charcoal transition-colors ${wishlisted ? 'fill-pezreq-charcoal' : ''}`} strokeWidth={wishlisted ? 1 : 1.5} />
          </button>
        </div>
        
        {/* Text Info */}
        <div className="flex flex-col mt-auto pt-2">
          <div className="flex justify-between items-start gap-4">
            <h4 className="text-sm md:text-body font-normal text-pezreq-near-black mb-1 transition-colors group-hover:text-pezreq-muted line-clamp-2">
              {product.name}
            </h4>
            <span className="text-sm md:text-body font-medium text-pezreq-charcoal shrink-0">
              {new Intl.NumberFormat("en-US", { style: "currency", currency: product.currency, maximumFractionDigits: 0 }).format(product.price)}
            </span>
          </div>
          <span className="text-meta text-xs md:text-sm">{product.materials[0]}</span>
        </div>
      </Link>
    </div>
  );
}

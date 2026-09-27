"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import Accordion from "@/components/ui/Accordion";
import { Heart } from "lucide-react";

import { useStore } from "@/lib/context/StoreContext";

interface ProductClientProps {
  product: Product;
}

export default function ProductClient({ product }: ProductClientProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || "");
  const [isZoomed, setIsZoomed] = useState<number | null>(null);
  const wishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, 1, selectedSize);
  };

  const accordionItems = [
    {
      title: "Description",
      content: <p>{product.description}</p>
    },
    {
      title: "Materials & Care",
      content: (
        <div className="flex flex-col gap-2">
          <p><strong>Materials:</strong> {product.materials.join(", ")}</p>
          <p><strong>Care:</strong> To maintain the brilliance of this piece, avoid contact with harsh chemicals and store in the provided PEZREQ pouch when not in wear. A complimentary professional cleaning service is available for all PEZREQ clients annually.</p>
        </div>
      )
    },
    {
      title: "Delivery & Returns",
      content: <p>Complimentary insured global shipping via secure courier. Orders are dispatched within 2 business days. Unworn pieces may be exchanged or returned within 14 days of receipt, provided the security tag remains intact.</p>
    },
    {
      title: "Bespoke & Sizing",
      content: <p>Looking for a custom size or alternate material? Our artisans can adapt this design to your precise specifications. Contact our private client team to arrange a bespoke consultation.</p>
    }
  ];

  return (
    <div className="container-luxury pt-32 pb-24 md:pt-40">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
        
        {/* LEFT: Image Gallery */}
        <div className="w-full lg:w-3/5 flex flex-col gap-4 lg:gap-8">
          {product.images.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative bg-pezreq-champagne overflow-hidden cursor-zoom-in ${isZoomed === idx ? 'aspect-auto h-screen' : 'aspect-[4/5] lg:aspect-auto lg:h-[90vh]'}`}
              onClick={() => setIsZoomed(isZoomed === idx ? null : idx)}
            >
              <Image 
                src={img} 
                alt={`${product.name} View ${idx + 1}`} 
                fill 
                priority={idx === 0}
                className={`transition-transform duration-1000 ease-[0.16,1,0.3,1] ${isZoomed === idx ? 'object-cover scale-150' : 'object-cover hover:scale-105'}`}
              />
            </div>
          ))}
          {product.hoverImage && (
            <div className="relative bg-pezreq-champagne aspect-[4/5] lg:aspect-auto lg:h-[90vh] overflow-hidden">
               <Image 
                src={product.hoverImage} 
                alt={`${product.name} Alternate View`} 
                fill 
                className="object-cover"
              />
            </div>
          )}
        </div>

        {/* RIGHT: Product Information (Sticky) */}
        <div className="w-full lg:w-2/5">
          <div className="sticky top-32 flex flex-col items-start">
            
            {/* Breadcrumb / Collection Label */}
            <span className="text-micro text-pezreq-muted tracking-[0.2em] uppercase mb-6 block">
              {product.collection} Collection
            </span>

            {/* Title & Price */}
            <h1 className="text-display text-pezreq-charcoal mb-4">{product.name}</h1>
            <span className="text-2xl font-light text-pezreq-charcoal mb-8">
              {new Intl.NumberFormat("en-US", { style: "currency", currency: product.currency, maximumFractionDigits: 0 }).format(product.price)}
            </span>

            <p className="text-body text-pezreq-charcoal/80 mb-10 max-w-md font-light leading-relaxed">
              {product.description}
            </p>

            {/* Sizing */}
            {product.sizes.length > 0 && (
              <div className="w-full mb-10">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-nav text-pezreq-charcoal">Size</span>
                  <button className="text-meta text-pezreq-muted hover:text-pezreq-charcoal transition-colors underline underline-offset-4">
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 border text-sm uppercase tracking-widest transition-all duration-300 ${
                        selectedSize === size 
                        ? 'border-pezreq-charcoal bg-pezreq-charcoal text-pezreq-ivory' 
                        : 'border-glass-border hover:border-pezreq-charcoal/50 text-pezreq-charcoal bg-transparent'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="w-full flex gap-4 mb-12">
              <button 
                onClick={handleAddToCart}
                className="flex-1 py-4 bg-pezreq-charcoal text-pezreq-ivory text-nav uppercase tracking-widest hover:bg-pezreq-near-black transition-colors"
              >
                Add to Bag
              </button>
              <button 
                onClick={() => toggleWishlist(product.id)}
                className="px-6 py-4 border border-glass-border hover:border-pezreq-charcoal transition-colors flex items-center justify-center group"
                aria-label="Toggle Wishlist"
              >
                <Heart className={`w-5 h-5 text-pezreq-charcoal transition-colors ${wishlisted ? 'fill-pezreq-charcoal' : 'group-hover:fill-pezreq-charcoal'}`} strokeWidth={wishlisted ? 1 : 1.5} />
              </button>
            </div>

            {/* Accordions */}
            <Accordion items={accordionItems} />

          </div>
        </div>
      </div>
    </div>
  );
}

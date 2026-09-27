import React from "react";
import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="py-24 text-center">
        <p className="text-body text-pezreq-muted">No pieces found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-10 sm:gap-x-6 sm:gap-y-16">
      {products.map((product, idx) => (
        <ProductCard key={product.id} product={product} priority={idx < 4} />
      ))}
    </div>
  );
}

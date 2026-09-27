import React from "react";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import Link from "next/link";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

export async function generateStaticParams() {
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

export default async function CategoryPage(props: { params: Promise<{ category: string }> }) {
  const params = await props.params;
  const currentCategory = categories.find((c) => c.slug === params.category);

  if (!currentCategory) {
    notFound();
  }

  const categoryProducts = products.filter((p) => p.category === params.category);

  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-pezreq-charcoal selection:text-pezreq-ivory">
      <Header />
      
      {/* Editorial Hero */}
      <section className="pt-40 pb-20 px-4 md:pt-48 md:pb-24 border-b border-glass-border">
        <div className="container-luxury text-center max-w-4xl">
          <h1 className="text-display text-pezreq-charcoal mb-6">{currentCategory.name}</h1>
          <p className="text-body text-pezreq-charcoal/70 max-w-2xl mx-auto">
            {currentCategory.description}
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
            <Link href="/shop" className="hover:opacity-70 transition-opacity">View All</Link>
            {categories.map((cat) => (
              <Link 
                key={cat.id} 
                href={`/shop/${cat.slug}`} 
                className={`transition-opacity ${cat.slug === params.category ? 'font-semibold border-b border-pezreq-charcoal' : 'hover:opacity-70'}`}
              >
                {cat.name}
              </Link>
            ))}
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
          <span>{categoryProducts.length} Results</span>
        </div>
        <ProductGrid products={categoryProducts} />
      </section>

      <Footer />
    </main>
  );
}

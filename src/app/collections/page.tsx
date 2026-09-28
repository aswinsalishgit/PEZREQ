import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { products } from "@/data/products";

const collectionsData = [
  {
    id: "signature",
    name: "Signature Forms",
    description: "The definitive PEZREQ aesthetic. Bold, structural, and uncompromising. Designed to be the foundation of a modern jewellery wardrobe.",
  },
  {
    id: "contour",
    name: "Contour",
    description: "Fluid, kinetic designs that move gracefully with the wearer. An exploration of tension, curve, and seamless metalwork.",
  },
  {
    id: "noir",
    name: "Noir",
    description: "A masterclass in tension and contrast. Dark rhodium plating over white gold, accented with brilliant diamonds.",
  },
  {
    id: "everyday",
    name: "Everyday",
    description: "Essential pieces for the modern silhouette. Minimalist, refined, and crafted for continuous wear.",
  }
];

export const metadata = {
  title: "Collections | PEZREQ",
  description: "Explore the distinct collections of PEZREQ jewellery.",
};

export default function CollectionsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-pezreq-charcoal selection:text-pezreq-ivory">
      <Header />
      
      {/* Editorial Hero */}
      <section className="pt-40 pb-20 px-4 md:pt-48 md:pb-24 border-b border-glass-border">
        <div className="container-luxury text-center max-w-4xl">
          <ScrollReveal type="typography">
            <h1 className="text-display text-pezreq-charcoal mb-6">Collections</h1>
            <p className="text-body text-pezreq-charcoal/70 max-w-2xl mx-auto">
              Discover our distinct families of design. Each collection represents a unique exploration of form, material, and restraint.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 lg:gap-x-16">
          {collectionsData.map((collection, index) => {
            // Find a product from this collection to use its image
            const product = products.find(p => p.collection === collection.id);
            const imageSrc = product?.images[0] || "/placeholder-collection.jpg";

            return (
              <ScrollReveal key={collection.id} delay={index * 0.1}>
                <Link href="/shop" className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-pezreq-muted/20 border border-glass-border">
                    <Image
                      src={imageSrc}
                      alt={collection.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-pezreq-charcoal/0 group-hover:bg-pezreq-charcoal/5 transition-colors duration-500"></div>
                  </div>
                  <h2 className="text-3xl font-serif text-pezreq-charcoal mb-4">{collection.name}</h2>
                  <p className="text-body text-pezreq-charcoal/60 mb-6">{collection.description}</p>
                  <span className="text-nav link-underline pb-1 transition-colors group-hover:text-pezreq-charcoal text-pezreq-charcoal/70">
                    Explore Collection
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}

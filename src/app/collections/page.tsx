import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Collections - PEZREQ",
  description: "Explore PEZREQ collections: Signature, Everyday, Occasion, and Featured.",
};

export default function CollectionsPage() {
  const collections = [
    {
      id: "signature",
      title: "Signature Collection",
      description: "The defining aesthetic. Bold, architectural, and timeless.",
      image: "/solischoker.jpg",
      href: "/shop?collection=signature",
    },
    {
      id: "everyday",
      title: "Everyday Essentials",
      description: "Subtle forms meant to be lived in, every single day.",
      image: "/lineapendant.jpg",
      href: "/shop?collection=everyday",
    },
    {
      id: "noir",
      title: "Noir",
      description: "A masterclass in tension. Black rhodium plating over white gold.",
      image: "/noircurvering.jpg",
      href: "/shop?collection=noir",
    },
    {
      id: "contour",
      title: "Contour",
      description: "Kinetic design in motion. Flowing forms for the body.",
      image: "/formacuff.jpg",
      href: "/shop?collection=contour",
    },
  ];

  return (
    <main className="min-h-screen bg-pezreq-charcoal text-pezreq-ivory pt-32 pb-24">
      <div className="container-luxury">
        <header className="mb-20">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Collections</h1>
          <p className="text-body text-pezreq-ivory/70 max-w-2xl">
            Explore our curated collections. Each piece is crafted with uncompromising precision, designed to embolden the form and shape the void.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {collections.map((collection, index) => (
            <Link 
              key={collection.id} 
              href={collection.href}
              className={`group block ${index % 2 === 1 ? "md:mt-32" : ""}`}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden mb-8">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl mb-3">{collection.title}</h2>
                  <p className="text-sm text-pezreq-ivory/70 max-w-sm">{collection.description}</p>
                </div>
                <div className="p-3 border border-pezreq-ivory/20 rounded-full group-hover:bg-pezreq-ivory group-hover:text-pezreq-charcoal transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

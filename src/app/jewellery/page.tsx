import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const categoriesData = [
  { 
    id: "rings",
    title: "Rings", 
    href: "/shop/rings", 
    desc: "Sculptural forms for the hands. Engineered for tension, balance, and weight.",
    img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2000&auto=format&fit=crop"
  },
  { 
    id: "necklaces",
    title: "Necklaces", 
    href: "/shop/necklaces", 
    desc: "Fluid geometry designed to rest perfectly against the collarbone.",
    img: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2000&auto=format&fit=crop"
  },
  { 
    id: "bracelets",
    title: "Bracelets", 
    href: "/shop/bracelets", 
    desc: "Architectural cuffs and seamless chains. Heavy, polished, unapologetic.",
    img: "/sereinbracelet.jpg"
  },
  { 
    id: "earrings",
    title: "Earrings", 
    href: "/shop/earrings", 
    desc: "Lightweight, dramatic, timeless. Precision drops and structural hoops.",
    img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2000&auto=format&fit=crop"
  },
];

export const metadata = {
  title: "Fine Jewellery | PEZREQ",
  description: "Explore the PEZREQ jewellery categories: Rings, Necklaces, Bracelets, and Earrings.",
};

export default function JewelleryPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-pezreq-charcoal selection:text-pezreq-ivory">
      <Header />
      
      {/* Editorial Hero */}
      <section className="pt-40 pb-20 px-4 md:pt-48 md:pb-24 border-b border-glass-border">
        <div className="container-luxury text-center max-w-4xl">
          <ScrollReveal type="typography">
            <h1 className="text-display text-pezreq-charcoal mb-6">Fine Jewellery</h1>
            <p className="text-body text-pezreq-charcoal/70 max-w-2xl mx-auto">
              Categorical expressions of the PEZREQ ethos. Discover rings, necklaces, bracelets, and earrings crafted with uncompromising precision.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 lg:gap-x-16">
          {categoriesData.map((category, index) => (
            <ScrollReveal key={category.id} delay={index * 0.1}>
              <Link href={category.href} className="group block">
                <div className="relative aspect-square md:aspect-[4/5] overflow-hidden mb-8 bg-pezreq-muted/20 border border-glass-border">
                  <Image
                    src={category.img}
                    alt={category.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-pezreq-charcoal/0 group-hover:bg-pezreq-charcoal/5 transition-colors duration-500"></div>
                </div>
                <h2 className="text-3xl font-serif text-pezreq-charcoal mb-4">{category.title}</h2>
                <p className="text-body text-pezreq-charcoal/60 mb-6">{category.desc}</p>
                <span className="text-nav link-underline pb-1 transition-colors group-hover:text-pezreq-charcoal text-pezreq-charcoal/70">
                  Shop {category.title}
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

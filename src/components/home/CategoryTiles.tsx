"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const categories = [
  { 
    title: "Rings", 
    href: "/shop/rings", 
    desc: "Sculptural forms for the hands.",
    colSpan: "col-span-1 md:col-span-2",
    theme: "dark",
    img: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2000&auto=format&fit=crop"
  },
  { 
    title: "Necklaces", 
    href: "/shop/necklaces", 
    desc: "Fluid geometry.",
    colSpan: "col-span-1",
    theme: "light",
    img: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=2000&auto=format&fit=crop"
  },
  { 
    title: "Bracelets", 
    href: "/shop/bracelets", 
    desc: "Architectural cuffs.",
    colSpan: "col-span-1",
    theme: "light",
    img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2000&auto=format&fit=crop"
  },
  { 
    title: "Earrings", 
    href: "/shop/earrings", 
    desc: "Lightweight, dramatic, timeless.",
    colSpan: "col-span-1 md:col-span-2",
    theme: "dark",
    img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2000&auto=format&fit=crop"
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-24 container-luxury">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat, idx) => (
          <ScrollReveal 
            key={cat.title} 
            delay={idx * 0.15} 
            className={`group relative overflow-hidden flex flex-col justify-end p-8 md:p-12 min-h-[45vh] transition-transform duration-1000 ease-[0.16,1,0.3,1] ${cat.colSpan} ${cat.theme === 'dark' ? 'text-pezreq-ivory' : 'text-pezreq-charcoal'} hover:scale-[0.98]`}
          >
            <Image 
              src={cat.img} 
              alt={cat.title} 
              fill 
              className="object-cover transition-transform duration-[2s] ease-[0.16,1,0.3,1] group-hover:scale-105" 
            />
            
            {/* Gradient overlay for text legibility */}
            <div className={`absolute inset-0 z-0 ${cat.theme === 'dark' ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent' : 'bg-gradient-to-t from-white/90 via-white/30 to-transparent'}`} />

            <Link href={cat.href} className="absolute inset-0 z-20" aria-label={`Shop ${cat.title}`} />
            
            {/* The signature liquid glass hover reveal */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ${cat.theme === 'dark' ? 'liquid-glass-dark' : 'liquid-glass'} z-10 pointer-events-none`} />

            <div className="relative z-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h3 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-2 tracking-tight transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-4">
                  {cat.title}
                </h3>
                <p className={`text-nav uppercase tracking-widest ${cat.theme === 'dark' ? 'text-pezreq-ivory/60' : 'text-pezreq-charcoal/60'} transition-transform duration-700 delay-75 ease-[0.16,1,0.3,1] group-hover:translate-x-4`}>
                  {cat.desc}
                </p>
              </div>
              
              <div className="overflow-hidden hidden sm:block">
                <span className={`inline-block font-sans text-xs uppercase tracking-widest px-6 py-3 rounded-full border ${cat.theme === 'dark' ? 'border-pezreq-ivory/20 group-hover:bg-pezreq-ivory group-hover:text-pezreq-charcoal' : 'border-pezreq-charcoal/20 group-hover:bg-pezreq-charcoal group-hover:text-pezreq-ivory'} transition-all duration-700 translate-y-[150%] group-hover:translate-y-0`}>
                  Explore
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

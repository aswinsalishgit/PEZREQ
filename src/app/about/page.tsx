import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | PEZREQ",
  description: "Discover the philosophy, design language, and uncompromising craftsmanship behind PEZREQ Jewellery.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-pezreq-charcoal selection:text-pezreq-ivory">
      <Header />
      
      {/* 1. Introduction Hero */}
      <section className="pt-40 pb-20 md:pt-56 md:pb-32 px-4 border-b border-glass-border">
        <div className="container-luxury text-center max-w-5xl mx-auto">
          <ScrollReveal>
            <span className="text-micro text-pezreq-muted tracking-[0.2em] uppercase mb-8 block">The PEZREQ Vision</span>
            <h1 className="text-display text-pezreq-charcoal leading-[1.1] mb-8">
              Architecture<br className="hidden md:block"/> for the Body.
            </h1>
            <p className="text-body text-pezreq-charcoal/80 max-w-2xl mx-auto leading-relaxed">
              Founded on the principles of restraint and structural integrity, PEZREQ is a luxury jewellery house that rejects the superfluous. We create timeless, engineered forms designed to interact seamlessly with the human silhouette.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Philosophy & 3. Design */}
      <section className="py-24 md:py-40 container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="order-2 lg:order-1 flex flex-col gap-12">
            <ScrollReveal direction="right" delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl text-pezreq-charcoal mb-6">A Philosophy of Restraint</h2>
              <p className="text-body text-pezreq-charcoal/80 leading-relaxed font-light">
                In an era dominated by visual noise, we find profound power in editing. Our design process is subtractive; we strip away every unnecessary detail until only the absolute geometric truth remains. What is left is not simply minimal, but essential.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <h2 className="font-serif text-3xl md:text-4xl text-pezreq-charcoal mb-6">The Language of Form</h2>
              <p className="text-body text-pezreq-charcoal/80 leading-relaxed font-light">
                A ring is not just a circle of gold; it is a boundary, a definition of space. We draft structural elements designed to withstand the test of time and trend. We rely on the absolute perfection of the polish, the exactness of the bevel, and the honesty of the material to convey luxury.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="order-1 lg:order-2">
            <ScrollReveal direction="left">
              <div className="relative aspect-[3/4] w-full bg-pezreq-champagne overflow-hidden">
                 <Image 
                   src="/solischoker.jpg" 
                   alt="PEZREQ Design Philosophy" 
                   fill 
                   className="object-cover hover:scale-105 transition-transform duration-[2s] ease-[0.16,1,0.3,1]"
                 />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Craftsmanship (Full Bleed Image) */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image 
          src="/atelier.jpg" 
          alt="PEZREQ Atelier"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-pezreq-near-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
          <ScrollReveal>
            <span className="text-micro text-pezreq-ivory/70 tracking-[0.2em] uppercase mb-6 block">The Atelier</span>
            <h2 className="text-display text-pezreq-ivory mb-6 drop-shadow-lg">Swiss Precision.</h2>
            <p className="text-body text-pezreq-ivory/90 max-w-xl mx-auto font-light leading-relaxed">
              Where traditional goldsmithing meets modern engineering. Our atelier operates on tolerances measured in fractions of a millimeter, ensuring that the physical object perfectly matches the uncompromising vision of the design.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Materials */}
      <section className="py-24 md:py-40 bg-pezreq-warm-white border-b border-glass-border">
        <div className="container-luxury">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-pezreq-charcoal mb-8">Uncompromising Materials</h2>
              <p className="text-body text-pezreq-charcoal/80 leading-relaxed font-light">
                We utilize only the finest ethically sourced 18k solid gold, platinum, and conflict-free diamonds. Our commitment to sustainability is woven directly into our supply chain, ensuring that our architectural forms leave a minimal footprint on the world.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "18k Solid Gold", desc: "The foundation of our house. Chosen for its perfect balance of durability and rich, warm luster." },
              { title: "Platinum", desc: "For our most structural pieces, offering unparalleled strength and a brilliant white finish that never fades." },
              { title: "Ethical Diamonds", desc: "Sourced strictly through the Kimberley Process. We utilize VVS clarity stones to ensure absolute brilliance." }
            ].map((mat, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="border-t border-pezreq-charcoal/20 pt-6">
                  <h3 className="text-nav uppercase tracking-widest text-pezreq-charcoal mb-4">{mat.title}</h3>
                  <p className="text-meta text-pezreq-charcoal/70 leading-relaxed">{mat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Future vision & 7. Closing */}
      <section className="py-32 md:py-48 px-4 text-center">
        <div className="container-luxury max-w-4xl">
          <ScrollReveal>
            <h2 className="text-editorial text-pezreq-charcoal mb-12">
              &quot;We are not simply making jewellery.<br/>We are defining a modern legacy.&quot;
            </h2>
            <Link 
              href="/shop"
              className="inline-flex items-center gap-4 text-nav border-b border-pezreq-charcoal/30 pb-2 hover:border-pezreq-charcoal transition-colors uppercase tracking-widest"
            >
              Explore the Collections
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

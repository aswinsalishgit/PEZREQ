import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />

      {/* 3. Full-screen hero campaign */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-pezreq-charcoal/20 z-10" /> {/* Elegant overlay */}
        <video 
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
          poster="/pezreq banner.png"
        >
          <source src="/samplevideo.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-background tracking-widest uppercase mb-6 drop-shadow-lg">
            Elegance in Form
          </h2>
          <p className="text-background/90 text-sm md:text-base tracking-[0.2em] uppercase mb-10 max-w-lg font-light">
            Architectural luxury for the modern era
          </p>
          <Link 
            href="/collections/signature"
            className="group flex items-center gap-4 text-background border-b border-background/50 pb-2 hover:border-background transition-colors tracking-widest text-sm uppercase"
          >
            Explore the Campaign
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 4. Intro editorial statement */}
      <section className="py-32 px-4 max-w-4xl mx-auto text-center">
        <h3 className="font-serif text-3xl md:text-5xl leading-tight text-pezreq-charcoal text-balance">
          "We do not simply make jewellery. We sculpt light, space, and material into timeless architecture for the body."
        </h3>
        <div className="mt-12 w-px h-24 bg-pezreq-charcoal/20 mx-auto" />
      </section>

      {/* 5. Featured collection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative aspect-[4/5] w-full overflow-hidden bg-pezreq-champagne">
            <Image 
              src="/placeholder-collection.jpg"
              alt="Featured Collection"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
          <div className="order-1 lg:order-2 lg:pl-12 flex flex-col items-start">
            <span className="text-xs tracking-[0.2em] text-pezreq-warm-grey-dark uppercase mb-4">Featured</span>
            <h3 className="font-serif text-4xl lg:text-5xl text-pezreq-charcoal mb-6">The Signature Arc</h3>
            <p className="text-pezreq-charcoal/70 mb-10 leading-relaxed font-light max-w-md">
              Discover our defining collection. A study in tension and balance, where structural forms meet fluid mechanics. Each piece is hand-finished to achieve a flawless surface that captures the essence of modern luxury.
            </p>
            <Link 
              href="/collections/signature"
              className="flex items-center gap-3 text-sm tracking-widest uppercase text-pezreq-charcoal hover:opacity-70 transition-opacity"
            >
              Discover Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Product discovery carousel (Static mockup for now) */}
      <section className="py-24 bg-pezreq-champagne/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
          <h3 className="font-serif text-3xl text-pezreq-charcoal">Curated Selection</h3>
          <Link href="/shop" className="text-xs tracking-widest uppercase border-b border-pezreq-charcoal pb-1 hover:text-pezreq-charcoal/70 hover:border-pezreq-charcoal/70 transition-colors">
            View All
          </Link>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-12 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory hide-scrollbar max-w-7xl mx-auto">
          {/* Product 1 */}
          <div className="min-w-[300px] w-[300px] snap-center group cursor-pointer flex-shrink-0">
            <div className="relative aspect-[3/4] bg-background mb-6 overflow-hidden">
              <Image src="/placeholder.jpg" alt="Ring" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-sm text-pezreq-charcoal mb-1">Architectural Gold Ring</h4>
                <p className="text-xs text-pezreq-charcoal/60">18k Yellow Gold</p>
              </div>
              <span className="text-sm text-pezreq-charcoal">$1,250</span>
            </div>
          </div>
          {/* Product 2 */}
          <div className="min-w-[300px] w-[300px] snap-center group cursor-pointer flex-shrink-0">
            <div className="relative aspect-[3/4] bg-background mb-6 overflow-hidden">
              <Image src="/placeholder.jpg" alt="Necklace" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-sm text-pezreq-charcoal mb-1">Diamond Pavé Necklace</h4>
                <p className="text-xs text-pezreq-charcoal/60">Platinum</p>
              </div>
              <span className="text-sm text-pezreq-charcoal">$3,400</span>
            </div>
          </div>
          {/* Product 3 */}
          <div className="min-w-[300px] w-[300px] snap-center group cursor-pointer flex-shrink-0">
            <div className="relative aspect-[3/4] bg-background mb-6 overflow-hidden">
              <Image src="/placeholder.jpg" alt="Cuff" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-sm text-pezreq-charcoal mb-1">Sculptural Silver Cuff</h4>
                <p className="text-xs text-pezreq-charcoal/60">Sterling Silver</p>
              </div>
              <span className="text-sm text-pezreq-charcoal">$850</span>
            </div>
          </div>
          {/* Product 4 */}
          <div className="min-w-[300px] w-[300px] snap-center group cursor-pointer flex-shrink-0">
            <div className="relative aspect-[3/4] bg-background mb-6 overflow-hidden">
              <Image src="/placeholder.jpg" alt="Earrings" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-sm text-pezreq-charcoal mb-1">Emerald Drop Earrings</h4>
                <p className="text-xs text-pezreq-charcoal/60">18k Yellow Gold</p>
              </div>
              <span className="text-sm text-pezreq-charcoal">$4,200</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Craftsmanship/editorial section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-glass-border">
          <div className="p-12 lg:p-20 flex flex-col justify-center bg-background">
            <h3 className="font-serif text-3xl mb-6 text-pezreq-charcoal">Swiss Precision, Modern Form</h3>
            <p className="text-pezreq-charcoal/70 leading-relaxed font-light mb-8">
              Every PEZREQ creation undergoes rigorous inspection and hand-polishing by master artisans. We source only the finest sustainable materials, ensuring each piece not only looks extraordinary but stands the test of time.
            </p>
            <Link 
              href="/about"
              className="text-xs tracking-widest uppercase flex items-center gap-2 hover:opacity-70 transition-opacity w-fit"
            >
              Our Craftsmanship <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="relative aspect-square lg:aspect-auto w-full h-full bg-pezreq-charcoal">
             {/* Replace with actual image later */}
             <Image src="/pezreq banner.png" alt="Craftsmanship" fill className="object-cover opacity-80" />
          </div>
        </div>
      </section>

      {/* 12. Service / trust section */}
      <section className="py-24 bg-pezreq-charcoal text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border border-background/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-lg font-serif">I</span>
              </div>
              <h4 className="text-sm tracking-widest uppercase mb-4">Bespoke Service</h4>
              <p className="text-background/60 text-sm leading-relaxed font-light">Personalized consultations to find or create your perfect piece.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border border-background/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-lg font-serif">II</span>
              </div>
              <h4 className="text-sm tracking-widest uppercase mb-4">Secure Delivery</h4>
              <p className="text-background/60 text-sm leading-relaxed font-light">Complimentary insured shipping on all orders worldwide.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border border-background/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-lg font-serif">III</span>
              </div>
              <h4 className="text-sm tracking-widest uppercase mb-4">Lifetime Care</h4>
              <p className="text-background/60 text-sm leading-relaxed font-light">Complimentary cleaning and inspection to maintain brilliance.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

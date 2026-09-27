import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProductCarousel from "@/components/product/ProductCarousel";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";
import ParallaxImage from "@/components/ui/ParallaxImage";

export default function Home() {
  const signatureProducts = products.filter(p => p.bestSeller || p.newArrival);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PEZREQ",
    "url": "https://pezreq.com",
    "logo": "https://pezreq.com/pezreq%20logo.png",
    "description": "PEZREQ is a luxury jewellery house offering timeless, architectural, and sophisticated pieces.",
    "sameAs": [
      "https://instagram.com/pezreq_house"
    ]
  };

  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-pezreq-charcoal selection:text-pezreq-ivory">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Header />
      
      {/* 1. HERO */}
      <Hero />

      {/* 2. BRAND STATEMENT */}
      <section className="py-32 md:py-48 px-4 sm:px-8 max-w-5xl mx-auto text-center flex flex-col items-center">
        <ScrollReveal type="typography">
          <h2 className="text-editorial text-pezreq-charcoal mb-12">
            &quot;Jewellery shaped by restraint, material, and form.&quot;
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="w-px h-24 bg-pezreq-charcoal/20 mx-auto" />
        </ScrollReveal>
      </section>

      {/* 3. FEATURED COLLECTION (Asymmetrical) */}
      <section className="py-24 container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <ScrollReveal direction="right" type="image">
              <div className="relative aspect-[4/5] w-full bg-pezreq-champagne overflow-hidden group">
                <ParallaxImage 
                  src="/placeholder-collection.jpg" 
                  alt="Featured Collection" 
                  containerClassName="absolute inset-0 w-full h-full"
                  className="transition-transform duration-[2s] ease-[0.16,1,0.3,1] group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-start lg:pt-32">
            <ScrollReveal direction="left" type="typography">
              <span className="text-micro mb-6 block text-pezreq-muted">LATEST ARRIVAL</span>
              <h3 className="font-serif text-4xl lg:text-5xl text-pezreq-charcoal mb-8 leading-tight">
                The Contour Collection
              </h3>
              <p className="text-body mb-10 max-w-sm">
                A study in fluidity. Solid gold and sterling silver are sculpted to trace the natural lines of the body, creating pieces that feel inherently personal.
              </p>
              <Link 
                href="/collections/contour"
                className="group flex items-center gap-4 text-nav link-underline pb-1 transition-colors"
              >
                Discover Contour
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE PRODUCTS CAROUSEL */}
      <section className="py-32 bg-pezreq-warm-white">
        <div className="container-luxury mb-16 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <ScrollReveal>
            <h3 className="font-serif text-3xl md:text-4xl text-pezreq-charcoal">Signature Forms</h3>
            <p className="text-body mt-4 max-w-md">Our most definitive pieces, refined over time to absolute purity.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link href="/shop" className="text-nav link-underline pb-1 transition-colors">
              View All Pieces
            </Link>
          </ScrollReveal>
        </div>
        <ProductCarousel products={signatureProducts} />
      </section>

      {/* 5. FULL-BLEED CAMPAIGN */}
      <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden">
        <ParallaxImage 
          src="/pezreq banner.png" 
          alt="Campaign Banner"
          overlay={true}
          containerClassName="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center p-4">
          <ScrollReveal>
            <h2 className="text-display text-pezreq-ivory mb-8 drop-shadow-lg">Elevated Daily.</h2>
            <Link 
              href="/collections/everyday"
              className="inline-block px-10 py-4 bg-pezreq-ivory text-pezreq-charcoal text-nav hover:bg-pezreq-champagne transition-colors"
            >
              Shop The Everyday Edition
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. SHOP BY CATEGORY (Editorial Tiles) */}
      <section className="py-24 md:py-32 container-luxury">
        <ScrollReveal type="typography">
          <h3 className="font-serif text-3xl md:text-4xl text-pezreq-charcoal mb-12 md:mb-16 text-center">Shop by Category</h3>
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {[
            { title: "Rings", href: "/shop/rings", img: "/placeholder.jpg" },
            { title: "Necklaces", href: "/shop/necklaces", img: "/placeholder.jpg" },
            { title: "Bracelets", href: "/shop/bracelets", img: "/placeholder.jpg" },
            { title: "Earrings", href: "/shop/earrings", img: "/placeholder.jpg" },
          ].map((cat, idx) => (
            <ScrollReveal key={cat.title} delay={idx * 0.1}>
              <Link href={cat.href} className="group relative block aspect-[4/5] md:aspect-square overflow-hidden bg-pezreq-champagne">
                <Image src={cat.img} alt={cat.title} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-[2s] ease-[0.16,1,0.3,1] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-pezreq-near-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                <h4 className="absolute bottom-4 left-4 md:bottom-8 md:left-8 font-serif text-xl md:text-3xl text-pezreq-ivory tracking-wide">{cat.title}</h4>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 7. CRAFTSMANSHIP (Storytelling) */}
      <section className="py-24 md:py-32 bg-pezreq-charcoal text-pezreq-ivory">
        <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <ScrollReveal type="typography">
              <h3 className="text-micro text-pezreq-muted mb-6">THE ATELIER</h3>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-8">
                Swiss precision.<br/>Uncompromising materials.
              </h2>
              <p className="text-body text-pezreq-ivory/70 mb-10">
                Every PEZREQ piece begins as a raw concept, iterated through hundreds of sketches before reaching the workbench. We employ a blend of traditional goldsmithing and modern precision engineering, ensuring tolerances measured in fractions of a millimeter.
              </p>
              <Link href="/about" className="text-nav flex items-center gap-4 link-underline pb-1 transition-colors">
                Explore our Craft <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="left" type="image">
            <div className="relative aspect-[3/4] w-full border border-pezreq-ivory/10 overflow-hidden bg-pezreq-near-black p-8">
               <div className="w-full h-full relative opacity-70 mix-blend-luminosity">
                 <ParallaxImage src="/pezreq banner.png" alt="Craftsmanship" containerClassName="absolute inset-0 w-full h-full" />
               </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. JOURNAL (Editorial Stories) */}
      <section className="py-32 container-luxury">
        <ScrollReveal>
          <div className="flex justify-between items-end mb-16">
            <h3 className="font-serif text-3xl md:text-4xl text-pezreq-charcoal">The Journal</h3>
            <Link href="/journal" className="text-nav hidden md:block link-underline pb-1 transition-colors">
              Read All Entries
            </Link>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "The Architecture of a Ring", date: "SEP 2026", category: "DESIGN" },
            { title: "Sourcing Ethical Gold", date: "AUG 2026", category: "SUSTAINABILITY" },
            { title: "An Interview with the Founder", date: "JUL 2026", category: "PEOPLE" },
          ].map((post, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <Link href="/journal" className="group block">
                <div className="relative aspect-[3/4] bg-pezreq-champagne mb-6 overflow-hidden">
                  <Image src="/placeholder.jpg" alt={post.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-micro">{post.category}</span>
                  <span className="text-meta">{post.date}</span>
                </div>
                <h4 className="font-serif text-xl text-pezreq-charcoal leading-snug group-hover:text-pezreq-muted transition-colors">
                  {post.title}
                </h4>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 10. SERVICE PROMISE */}
      <section className="border-t border-glass-border bg-pezreq-warm-white">
        <div className="container-luxury py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { title: "Bespoke Consultation", desc: "Private appointments" },
            { title: "Secure Delivery", desc: "Complimentary global shipping" },
            { title: "Jewellery Care", desc: "Lifetime maintenance" },
            { title: "Personal Assistance", desc: "Dedicated advisors" },
          ].map((service, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="flex flex-col items-center">
                <span className="font-serif text-2xl text-pezreq-charcoal mb-4">0{idx + 1}</span>
                <h5 className="text-nav mb-2">{service.title}</h5>
                <p className="text-meta">{service.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

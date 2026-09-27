import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-pezreq-charcoal selection:text-pezreq-ivory">
      <Header />
      
      <div className="flex-1 flex flex-col items-center justify-center pt-32 pb-24 px-4 text-center">
        <ScrollReveal type="typography">
          <span className="text-micro text-pezreq-muted tracking-[0.3em] uppercase mb-6 block">
            404 — Not Found
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-pezreq-charcoal mb-8 leading-tight">
            The void <br /> remains unfilled.
          </h1>
          <p className="text-body text-pezreq-charcoal/70 mb-12 max-w-md mx-auto">
            The page you are looking for has been moved or no longer exists. 
            We invite you to return to our collections.
          </p>
          <Link 
            href="/shop"
            className="inline-block px-12 py-4 liquid-glass-dark text-pezreq-ivory text-nav uppercase tracking-widest hover:bg-pezreq-near-black transition-colors"
          >
            Discover Collections
          </Link>
        </ScrollReveal>
      </div>

      <Footer />
    </main>
  );
}

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { journalEntries } from "@/data/journal";

export const metadata = {
  title: "Journal | PEZREQ",
  description: "Editorial thoughts on design, materials, and the architecture of jewellery.",
};

export default function JournalPage() {
  const featuredArticle = journalEntries[0];
  const remainingArticles = journalEntries.slice(1);

  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-pezreq-charcoal selection:text-pezreq-ivory">
      <Header />
      
      {/* Header */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-24 px-4 border-b border-glass-border">
        <div className="container-luxury text-center max-w-4xl">
          <ScrollReveal>
            <h1 className="text-display text-pezreq-charcoal mb-6">Journal</h1>
            <p className="text-body text-pezreq-charcoal/70 max-w-2xl mx-auto font-light leading-relaxed">
              Thoughts on design, materiality, and the architecture of modern jewellery.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-8 md:py-16 container-luxury">
        <ScrollReveal>
          <Link href={`/journal/${featuredArticle.slug}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="relative aspect-[4/3] lg:aspect-[3/4] w-full bg-pezreq-champagne overflow-hidden">
                <Image 
                  src={featuredArticle.images[0]} 
                  alt={featuredArticle.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-[2s] ease-[0.16,1,0.3,1] group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col items-start max-w-xl">
                <div className="flex gap-4 items-center text-meta text-pezreq-muted mb-6">
                  <span className="uppercase tracking-widest">{featuredArticle.category}</span>
                  <span>—</span>
                  <span>{featuredArticle.date}</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-pezreq-charcoal mb-6 leading-tight group-hover:text-pezreq-muted transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-body text-pezreq-charcoal/80 mb-8 font-light leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <span className="text-nav uppercase tracking-widest text-pezreq-charcoal border-b border-pezreq-charcoal/30 pb-1 group-hover:border-pezreq-charcoal transition-colors">
                  Read Article
                </span>
              </div>
            </div>
          </Link>
        </ScrollReveal>
      </section>

      {/* Grid of Articles */}
      <section className="py-16 md:py-24 container-luxury border-t border-glass-border">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-24">
          {remainingArticles.map((article, idx) => (
            <ScrollReveal key={article.id} delay={idx * 0.1}>
              <Link href={`/journal/${article.slug}`} className="group block h-full flex flex-col">
                <div className="relative aspect-[4/3] w-full bg-pezreq-champagne overflow-hidden mb-8">
                  <Image 
                    src={article.images[0]} 
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105"
                  />
                </div>
                
                <div className="flex gap-4 items-center text-meta text-pezreq-muted mb-4">
                  <span className="uppercase tracking-widest">{article.category}</span>
                  <span>—</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="font-serif text-2xl md:text-3xl text-pezreq-charcoal mb-4 group-hover:text-pezreq-muted transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-meta text-pezreq-charcoal/70 mb-6 font-light line-clamp-3">
                  {article.excerpt}
                </p>
                
                <span className="mt-auto text-meta uppercase tracking-widest text-pezreq-charcoal/50 group-hover:text-pezreq-charcoal transition-colors">
                  Read More
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

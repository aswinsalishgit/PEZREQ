import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { journalEntries } from "@/data/journal";

interface JournalArticleProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return journalEntries.map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({ params }: JournalArticleProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = journalEntries.find((e) => e.slug === slug);

  if (!entry) {
    return {
      title: "Article Not Found | PEZREQ",
    };
  }

  return {
    title: `${entry.title} | Journal | PEZREQ`,
    description: entry.excerpt,
  };
}

export default async function JournalArticlePage({ params }: JournalArticleProps) {
  const { slug } = await params;
  const article = journalEntries.find((e) => e.slug === slug);

  if (!article) {
    notFound();
  }

  // Get two deterministic related articles
  const currentIndex = journalEntries.findIndex(e => e.id === article.id);
  const relatedArticles = journalEntries
    .filter(e => e.id !== article.id)
    .slice(currentIndex % (journalEntries.length - 2), currentIndex % (journalEntries.length - 2) + 2);

  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-pezreq-charcoal selection:text-pezreq-ivory">
      <Header />
      
      {/* Article Hero */}
      <section className="pt-40 md:pt-48 pb-12 px-4 border-b border-glass-border">
        <div className="container-luxury max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="flex gap-4 justify-center items-center text-meta text-pezreq-muted mb-8">
              <span className="uppercase tracking-widest">{article.category}</span>
              <span>—</span>
              <span>{article.date}</span>
              <span className="hidden sm:inline">—</span>
              <span className="hidden sm:inline">{article.readTime}</span>
            </div>
            <h1 className="text-display text-pezreq-charcoal mb-8 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl md:text-2xl font-serif text-pezreq-charcoal/70 italic max-w-3xl mx-auto">
              {article.excerpt}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container-luxury py-12 md:py-16">
        <ScrollReveal>
          <div className="relative aspect-video lg:aspect-[21/9] w-full bg-pezreq-champagne overflow-hidden">
            <Image 
              src={article.images[0]} 
              alt={article.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Article Body */}
      <section className="py-8 md:py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="prose prose-lg md:prose-xl prose-pezreq prose-p:font-light prose-p:leading-relaxed prose-p:text-pezreq-charcoal/80">
            {article.content.map((paragraph, idx) => (
              <ScrollReveal key={idx} delay={0.1}>
                <p className="mb-8">{paragraph}</p>
                {/* Insert inline image if available */}
                {idx === 1 && article.images[1] && (
                  <div className="relative aspect-[4/3] w-full my-16 bg-pezreq-champagne overflow-hidden">
                    <Image 
                      src={article.images[1]} 
                      alt="Editorial view"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal>
            <div className="mt-24 pt-8 border-t border-glass-border flex justify-between items-center">
              <span className="text-nav uppercase tracking-widest text-pezreq-charcoal">Share Article</span>
              <div className="flex gap-6">
                <button className="text-meta text-pezreq-muted hover:text-pezreq-charcoal transition-colors focus:outline-none">COPY LINK</button>
                <button className="text-meta text-pezreq-muted hover:text-pezreq-charcoal transition-colors focus:outline-none">PINTEREST</button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-24 container-luxury bg-pezreq-warm-white border-t border-glass-border mt-16">
          <ScrollReveal>
            <h2 className="text-nav uppercase tracking-widest text-pezreq-charcoal mb-16 text-center">Further Reading</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
            {relatedArticles.map((related, idx) => (
              <ScrollReveal key={related.id} delay={idx * 0.1}>
                <Link href={`/journal/${related.slug}`} className="group block">
                  <div className="relative aspect-[4/3] w-full bg-pezreq-champagne overflow-hidden mb-6">
                    <Image 
                      src={related.images[0]} 
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-2xl text-pezreq-charcoal mb-4 group-hover:text-pezreq-muted transition-colors">
                    {related.title}
                  </h3>
                  <span className="text-meta text-pezreq-muted uppercase tracking-widest">
                    {related.category}
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

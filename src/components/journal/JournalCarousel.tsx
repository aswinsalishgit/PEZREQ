"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { JournalEntry } from "@/data/journal";

interface JournalCarouselProps {
  entries: JournalEntry[];
}

export default function JournalCarousel({ entries }: JournalCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.8 : 400;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full group">
      <div 
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8 -mx-4 px-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 scroll-smooth"
      >
        {entries.slice(0, 3).map((post, idx) => (
          <ScrollReveal key={idx} delay={idx * 0.1} className="w-[80vw] sm:w-[320px] flex-shrink-0 snap-start md:w-auto md:flex-shrink-1">
            <Link href={`/journal/${post.slug}`} className="group block h-full">
              <div className="relative aspect-[3/4] bg-pezreq-champagne mb-6 overflow-hidden">
                <Image src={post.images[0]} alt={post.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-micro uppercase">{post.category}</span>
                <span className="text-meta">{post.date}</span>
              </div>
              <h4 className="font-serif text-xl text-pezreq-charcoal leading-snug group-hover:text-pezreq-muted transition-colors">
                {post.title}
              </h4>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-pezreq-background to-transparent pointer-events-none md:hidden" style={{ opacity: canScrollLeft ? 1 : 0, transition: 'opacity 0.3s' }} />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-pezreq-background to-transparent pointer-events-none md:hidden" style={{ opacity: canScrollRight ? 1 : 0, transition: 'opacity 0.3s' }} />

      <button 
        onClick={() => scroll('left')}
        className={`absolute left-2 lg:left-6 top-[35%] -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-pezreq-warm-white/90 backdrop-blur-md border border-glass-border shadow-md rounded-full text-pezreq-charcoal hover:bg-pezreq-charcoal hover:text-pezreq-ivory transition-all z-10 md:hidden duration-300 ${canScrollLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5 mr-1" strokeWidth={1.5} />
      </button>

      <button 
        onClick={() => scroll('right')}
        className={`absolute right-2 lg:right-6 top-[35%] -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-pezreq-warm-white/90 backdrop-blur-md border border-glass-border shadow-md rounded-full text-pezreq-charcoal hover:bg-pezreq-charcoal hover:text-pezreq-ivory transition-all z-10 md:hidden duration-300 ${canScrollRight ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5 ml-1" strokeWidth={1.5} />
      </button>
    </div>
  );
}

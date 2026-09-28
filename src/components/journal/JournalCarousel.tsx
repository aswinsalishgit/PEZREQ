"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { JournalEntry } from "@/data/journal";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
        className="flex gap-4 md:gap-8 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar scroll-smooth md:grid md:grid-cols-3 md:overflow-x-visible md:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 md:mx-0 md:px-0"
      >
        {entries.map((post, idx) => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-[85vw] max-w-[320px] md:w-auto snap-start flex-shrink-0 md:flex-shrink"
          >
            <Link href={`/journal/${post.slug}`} className="group block">
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
          </motion.div>
        ))}
        {/* Spacer to allow the last item to snap fully to the left edge on mobile */}
        <div className="w-[15vw] sm:w-[30vw] md:hidden flex-shrink-0" aria-hidden="true" />
      </div>

      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-pezreq-warm-white to-transparent pointer-events-none hidden md:block" style={{ opacity: canScrollLeft ? 1 : 0, transition: 'opacity 0.3s' }} />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-pezreq-warm-white to-transparent pointer-events-none hidden md:block" style={{ opacity: canScrollRight ? 1 : 0, transition: 'opacity 0.3s' }} />

      <button 
        onClick={() => scroll('left')}
        className={`absolute left-2 lg:left-6 top-[35%] -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-pezreq-warm-white/90 backdrop-blur-md border border-glass-border shadow-md rounded-full text-pezreq-charcoal hover:bg-pezreq-charcoal hover:text-pezreq-ivory transition-all z-10 duration-300 ${canScrollLeft ? 'opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5 mr-1" strokeWidth={1.5} />
      </button>

      <button 
        onClick={() => scroll('right')}
        className={`absolute right-2 lg:right-6 top-[35%] -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-pezreq-warm-white/90 backdrop-blur-md border border-glass-border shadow-md rounded-full text-pezreq-charcoal hover:bg-pezreq-charcoal hover:text-pezreq-ivory transition-all z-10 duration-300 md:hidden ${canScrollRight ? 'opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5 ml-1" strokeWidth={1.5} />
      </button>
    </div>
  );
}

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
        className="flex gap-4 md:gap-8 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar scroll-smooth md:grid md:grid-cols-3 md:overflow-x-visible md:pb-0"
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
      </div>
    </div>
  );
}

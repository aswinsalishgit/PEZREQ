"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { easings, durations, variants } from "@/lib/design/motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scaleVideo = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const yVideo = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[95vh] min-h-[600px] w-full overflow-hidden bg-pezreq-charcoal"
      aria-label="PEZREQ Hero Campaign"
    >
      {/* Video Background with Parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ scale: scaleVideo, y: yVideo }}
      >
        <video 
          className="absolute inset-0 h-full w-full object-cover object-[center_30%] md:object-center"
          autoPlay 
          muted 
          loop 
          playsInline
          poster="/pezreq banner.png"
          preload="auto"
        >
          <source src="/samplevideo.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-pezreq-near-black/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-pezreq-near-black/60 via-transparent to-pezreq-near-black/20" />
      </motion.div>
      
      {/* Content Container */}
      <motion.div 
        className="relative z-20 h-full flex flex-col items-center justify-end pb-32 md:justify-center md:pb-0 text-center px-4 md:px-8"
        style={{ y: yText, opacity: opacityText }}
      >
        <div className="overflow-hidden mb-6">
          <motion.h1 
            className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-pezreq-ivory tracking-widest uppercase drop-shadow-xl"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: durations.slow, ease: easings.cinematic, delay: 0.2 }}
          >
            Jewellery, Refined.
          </motion.h1>
        </div>

        <motion.div className="overflow-hidden mb-12">
          <motion.p 
            className="text-pezreq-ivory/90 text-sm md:text-base tracking-[0.2em] uppercase font-light drop-shadow-md"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: durations.slow, ease: easings.cinematic, delay: 0.4 }}
          >
            Timeless forms. Contemporary expression.
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: durations.slow, ease: easings.entrance, delay: 0.8 }}
        >
          {/* Primary CTA */}
          <Link 
            href="/collections/signature"
            className="group flex items-center gap-4 text-pezreq-ivory border-b border-pezreq-ivory/40 pb-2 hover:border-pezreq-ivory transition-colors tracking-widest text-xs uppercase"
          >
            Explore Collection
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500 ease-out" />
          </Link>
          
          {/* Secondary CTA */}
          <Link 
            href="/about"
            className="text-pezreq-ivory/70 hover:text-pezreq-ivory transition-colors tracking-widest text-xs uppercase"
          >
            Discover PEZREQ
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

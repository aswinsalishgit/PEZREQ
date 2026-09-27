"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { easings, durations } from "@/lib/design/motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll animations for parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Very subtle background scale and content movement on scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Motion variants for staggering content
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: durations.slow, 
        ease: easings.cinematic 
      } 
    },
  };

  return (
    <section 
      ref={containerRef} 
      className="relative h-[100svh] w-full overflow-hidden bg-pezreq-near-black"
    >
      {/* Background Video with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover object-center lg:object-[center_30%]"
          autoPlay
          muted
          loop
          playsInline
          poster="/pezreq banner.png"
          preload="metadata"
        >
          <source src="/samplevideo.mp4" type="video/mp4" />
        </video>
        
        {/* Elegant Overlays */}
        <div className="absolute inset-0 bg-pezreq-near-black/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-pezreq-near-black/40 via-transparent to-pezreq-near-black/60" />
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        style={{ y: contentY, opacity }}
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto mt-12"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-micro text-pezreq-ivory/80 mb-6 tracking-[0.3em]"
        >
          THE PEZREQ AESTHETIC
        </motion.h2>

        <motion.h1 
          variants={itemVariants}
          className="font-serif text-5xl md:text-7xl lg:text-[7rem] text-pezreq-ivory leading-[0.9] tracking-tight uppercase mb-8 drop-shadow-xl"
        >
          Architecture <br className="hidden md:block"/> for the Body.
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-pezreq-ivory/90 text-sm md:text-base tracking-[0.1em] uppercase mb-12 font-light max-w-lg leading-relaxed"
        >
          Timeless forms. Contemporary expression.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10"
        >
          <Link 
            href="/collections/signature"
            className="group relative px-8 py-4 bg-pezreq-ivory text-pezreq-charcoal text-xs tracking-[0.15em] uppercase hover:bg-pezreq-champagne transition-colors duration-500 overflow-hidden"
          >
            <span className="relative z-10">Explore Collection</span>
          </Link>
          
          <Link 
            href="/about"
            className="group relative text-pezreq-ivory text-xs tracking-[0.15em] uppercase py-2"
          >
            <span className="relative z-10">Discover PEZREQ</span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-pezreq-ivory/30 group-hover:bg-pezreq-ivory transition-colors duration-500" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

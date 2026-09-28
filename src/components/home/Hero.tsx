"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { easings, durations } from "@/lib/design/motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const video0Ref = useRef<HTMLVideoElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState<0 | 1>(0);
  
  const crossfadeDuration = 2; // 2 seconds crossfade for a luxurious dissolve

  const handleTimeUpdate = (index: 0 | 1) => {
    const video = index === 0 ? video0Ref.current : video1Ref.current;
    if (!video) return;
    
    // When getting close to the end, prepare to switch
    if (activeVideo === index && video.duration && video.currentTime >= video.duration - crossfadeDuration) {
      const nextIndex = index === 0 ? 1 : 0;
      const nextVideo = nextIndex === 0 ? video0Ref.current : video1Ref.current;
      
      if (nextVideo) {
        nextVideo.currentTime = 0;
        nextVideo.play().catch(() => {});
        setActiveVideo(nextIndex);
      }
    }
  };

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
        className="absolute inset-0 w-full h-[120%] -top-[10%] bg-pezreq-charcoal"
      >
        <video
          ref={video0Ref}
          className={`absolute inset-0 w-full h-full object-cover object-center lg:object-[center_30%] transition-opacity duration-[2000ms] ease-in-out ${activeVideo === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          autoPlay
          muted
          playsInline
          poster="/pezreq-banner.png"
          preload="metadata"
          onTimeUpdate={() => handleTimeUpdate(0)}
        >
          <source src="/samplevideo.mp4" type="video/mp4" />
        </video>
        <video
          ref={video1Ref}
          className={`absolute inset-0 w-full h-full object-cover object-center lg:object-[center_30%] transition-opacity duration-[2000ms] ease-in-out ${activeVideo === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          muted
          playsInline
          poster="/pezreq-banner.png"
          preload="auto"
          onTimeUpdate={() => handleTimeUpdate(1)}
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
        className="relative z-20 h-full flex flex-col items-center justify-end md:justify-center pb-24 md:pb-0 text-center px-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-micro text-pezreq-ivory/80 mb-6 tracking-[0.3em]"
        >
          THE PEZREQ HOUSE — DEMO WEBSITE
        </motion.h2>

        <motion.h1 
          variants={itemVariants}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] text-pezreq-ivory leading-[0.95] md:leading-[0.9] tracking-tight uppercase mb-6 md:mb-8 drop-shadow-2xl"
        >
          PERFECTLY YOU. <br className="hidden md:block"/> PURELY PEZREQ.
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-pezreq-ivory/90 text-xs sm:text-sm md:text-base tracking-[0.1em] uppercase mb-10 md:mb-12 font-light max-w-lg leading-relaxed drop-shadow-md"
        >
          Modern jewellery for every occasion.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col w-full sm:w-auto sm:flex-row items-center gap-4 sm:gap-10"
        >
          <Link 
            href="/collections"
            className="group relative w-full sm:w-auto px-8 py-4 liquid-glass text-pezreq-charcoal text-xs tracking-[0.15em] uppercase hover:bg-pezreq-champagne transition-colors duration-500"
          >
            <span className="relative z-10 block text-center">Explore Collection</span>
          </Link>
          
          <Link 
            href="/about"
            className="group relative w-full sm:w-auto px-8 py-4 liquid-glass-dark text-pezreq-ivory text-xs tracking-[0.15em] uppercase transition-colors duration-500"
          >
            <span className="relative z-10 block text-center">Discover PEZREQ</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

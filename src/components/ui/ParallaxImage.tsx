"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  offset?: number;
  overlay?: boolean;
}

export default function ParallaxImage({ 
  src, 
  alt, 
  priority = false, 
  className = "", 
  containerClassName = "",
  offset = 50,
  overlay = false
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // If user prefers reduced motion, don't apply parallax
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  const transformY = shouldReduceMotion ? 0 : y;

  return (
    <div ref={ref} className={`relative overflow-hidden ${containerClassName}`}>
      <motion.div 
        style={{ y: transformY, scale: shouldReduceMotion ? 1 : 1.15 }}
        className="absolute inset-0 w-full h-full origin-center"
      >
        <Image 
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          priority={priority}
          className={`object-cover ${className}`}
        />
        {overlay && (
          <div className="absolute inset-0 bg-pezreq-charcoal/20 mix-blend-multiply" />
        )}
      </motion.div>
    </div>
  );
}

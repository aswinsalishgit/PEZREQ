"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { easings, durations } from "@/lib/design/motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function ScrollReveal({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up"
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { y: 40 };
      case "down": return { y: -40 };
      case "left": return { x: 40 };
      case "right": return { x: -40 };
      default: return { y: 0, x: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...getInitialPosition() }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ 
        duration: durations.slow, 
        ease: easings.cinematic,
        delay: delay 
      }}
    >
      {children}
    </motion.div>
  );
}

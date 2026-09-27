"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { easings, durations } from "@/lib/design/motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  type?: "standard" | "image" | "typography";
}

export default function ScrollReveal({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up",
  type = "standard"
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const shouldReduceMotion = useReducedMotion();

  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { y: 40 };
      case "down": return { y: -40 };
      case "left": return { x: 40 };
      case "right": return { x: -40 };
      default: return { y: 0, x: 0 };
    }
  };

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const initialValues: any = { opacity: 0, ...getInitialPosition() };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const animateValues: any = { opacity: 1, y: 0, x: 0 };

  if (type === "image") {
    initialValues.clipPath = "inset(10% 0% 10% 0%)";
    initialValues.filter = "blur(4px)";
    animateValues.clipPath = "inset(0% 0% 0% 0%)";
    animateValues.filter = "blur(0px)";
  } else if (type === "typography") {
    initialValues.y = direction === "up" ? 20 : 0;
    initialValues.filter = "blur(4px)";
    animateValues.filter = "blur(0px)";
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initialValues}
      animate={isInView ? animateValues : {}}
      transition={{ 
        duration: type === "image" ? 1.2 : durations.slow, 
        ease: type === "image" ? [0.16, 1, 0.3, 1] : easings.cinematic,
        delay: delay 
      }}
    >
      {children}
    </motion.div>
  );
}

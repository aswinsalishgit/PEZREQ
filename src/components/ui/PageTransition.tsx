"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { easings, durations } from "@/lib/design/motion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ 
        duration: durations.base, 
        ease: easings.entrance 
      }}
      className="flex-1 flex flex-col"
    >
      {children}
    </motion.div>
  );
}

"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export default function WaterBubbleScroll() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const bubbleRef = useRef<HTMLDivElement>(null);

  // Map scroll progress to a top percentage, leaving room for the bubble height
  const topPosition = useTransform(scrollYProgress, [0, 1], ["2%", "96%"]);

  // Show only after a slight scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect background color underneath the bubble to smoothly transition its color
  useMotionValueEvent(scrollYProgress, "change", () => {
    if (!bubbleRef.current) return;
    
    const rect = bubbleRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    // Since parent has pointer-events-none, this gets the actual page element underneath
    const el = document.elementFromPoint(x, y);
    
    if (el) {
      let current: Element | null = el;
      while (current) {
        const bgColor = window.getComputedStyle(current).backgroundColor;
        
        // Check if color is not completely transparent
        if (bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
          const match = bgColor.match(/\d+/g);
          if (match && match.length >= 3) {
            const r = parseInt(match[0]);
            const g = parseInt(match[1]);
            const b = parseInt(match[2]);
            const a = match[3] ? parseFloat(match[3]) : 1;
            
            if (a > 0.1) { // Ignore very faint backgrounds
              // Calculate luminance
              const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
              setIsDarkBackground(luminance < 0.5);
              return;
            }
          }
        }
        current = current.parentElement;
      }
    }
  });

  return (
    <motion.div
      className="fixed right-3 z-[100] pointer-events-none"
      style={{ top: topPosition }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div
        ref={bubbleRef}
        className="w-4 h-4 md:w-5 md:h-5 shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.4)] backdrop-blur-md"
        animate={{
          backgroundColor: isDarkBackground ? "rgba(253, 251, 247, 0.85)" : "rgba(26, 26, 26, 0.85)", // Ivory or Charcoal with slight transparency for glass effect
          borderRadius: [
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "40% 60% 70% 30% / 40% 70% 30% 60%",
            "50% 50% 50% 50% / 50% 50% 50% 50%"
          ],
        }}
        transition={{
          backgroundColor: { duration: 0.8, ease: "easeInOut" },
          borderRadius: {
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }
        }}
      />
    </motion.div>
  );
}

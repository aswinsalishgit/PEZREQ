"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function WaterBubbleScroll() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  // Map scroll progress to a top percentage, leaving room for the bubble height
  const topPosition = useTransform(scrollYProgress, [0, 1], ["2%", "96%"]);

  // Show only after a slight scroll to avoid conflicting with the top nav instantly
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        className="w-4 h-4 md:w-5 md:h-5 bg-white/40 backdrop-blur-3xl backdrop-saturate-200 border border-white/50 shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.6)] mix-blend-screen"
        animate={{
          borderRadius: [
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "40% 60% 70% 30% / 40% 70% 30% 60%",
            "50% 50% 50% 50% / 50% 50% 50% 50%"
          ],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent rounded-[inherit]" />
      </motion.div>
    </motion.div>
  );
}

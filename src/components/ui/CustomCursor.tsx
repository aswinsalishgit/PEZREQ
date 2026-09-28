"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const mousePosRef = useRef({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const lastCheck = useRef(0);

  const checkBackgroundColor = (x: number, y: number) => {
    const el = document.elementFromPoint(x, y);
    if (el) {
      let current: Element | null = el;
      while (current) {
        const bgColor = window.getComputedStyle(current).backgroundColor;
        if (bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
          const match = bgColor.match(/\d+/g);
          if (match && match.length >= 3) {
            const r = parseInt(match[0]);
            const g = parseInt(match[1]);
            const b = parseInt(match[2]);
            const a = match[3] ? parseFloat(match[3]) : 1;
            
            if (a > 0.1) {
              const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
              setIsDarkBackground(luminance < 0.5);
              return;
            }
          }
        }
        current = current.parentElement;
      }
    }
  };

  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) {
      return;
    }
    
    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      
      const now = Date.now();
      if (now - lastCheck.current > 50) { // Throttle to 50ms
        lastCheck.current = now;
        checkBackgroundColor(e.clientX, e.clientY);
      }
    };

    const handleScroll = () => {
      const now = Date.now();
      if (now - lastCheck.current > 100) { // Throttle to 100ms on scroll
        lastCheck.current = now;
        checkBackgroundColor(mousePosRef.current.x, mousePosRef.current.y);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('[role="button"]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 1) {
        e.preventDefault();
      }
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);

    document.documentElement.classList.add('hide-cursor');

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleMouseDown);
      document.documentElement.classList.remove('hide-cursor');
    };
  }, []);

  if (!isVisible) return null;

  // Droplet styling based on background
  const dropletBg = isDarkBackground ? "rgba(253, 251, 247, 0.15)" : "rgba(26, 26, 26, 0.1)";
  const dropletBorder = isDarkBackground ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.1)";

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none z-[9999]"
        style={{
          boxShadow: isHovering ? `inset 0 4px 10px ${isDarkBackground ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.15)'}, 0 4px 15px rgba(0,0,0,0.1)` : 'none',
          border: isHovering ? `1px solid ${dropletBorder}` : 'none',
          backdropFilter: isHovering ? 'blur(1px) contrast(120%) brightness(110%) saturate(120%)' : 'none',
          WebkitBackdropFilter: isHovering ? 'blur(1px) contrast(120%) brightness(110%) saturate(120%)' : 'none',
        }}
        animate={{
          x: mousePosition.x - (isHovering ? 14 : 6),
          y: mousePosition.y - (isHovering ? 14 : 6),
          width: isHovering ? 28 : 12,
          height: isHovering ? 28 : 12,
          backgroundColor: isHovering ? dropletBg : (isDarkBackground ? "rgba(253, 251, 247, 1)" : "rgba(26, 26, 26, 1)"),
          borderRadius: isHovering ? [
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "40% 60% 70% 30% / 40% 70% 30% 60%",
            "50% 50% 50% 50% / 50% 50% 50% 50%"
          ] : "50%",
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 35,
          mass: 0.1,
          borderRadius: {
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          },
          backgroundColor: { duration: 0.3 }
        }}
      />
      
      {/* Subtle outer ring when NOT hovering */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9998]"
        style={{
          border: `1px solid ${isDarkBackground ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.2)"}`
        }}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 25,
          mass: 0.4,
        }}
      />
    </>
  );
}

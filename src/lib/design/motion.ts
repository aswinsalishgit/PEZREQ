/**
 * PEZREQ Luxury Design System - Motion Constants
 * 
 * Swiss editorial and luxury fashion brands rely on slow, deliberate, 
 * and exceptionally smooth animations.
 */

// Custom Easings
export const easings = {
  // Ultra-smooth, cinematic feel for large layout transitions
  cinematic: [0.16, 1, 0.3, 1] as const,
  // Snappy but smooth for micro-interactions (hover, active states)
  micro: [0.25, 0.1, 0.25, 1] as const,
  // Graceful entrance, slight delay at the start
  entrance: [0.21, 0.47, 0.32, 0.98] as const,
  // Elegant exit
  exit: [0.82, 0.085, 0.395, 0.895] as const,
};

// Durations (in seconds for Framer Motion)
export const durations = {
  instant: 0.1,
  fast: 0.3,
  base: 0.5,
  slow: 0.8,
  cinematic: 1.2,
};

// Reusable Framer Motion variants
export const variants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: durations.base, ease: easings.entrance } },
    exit: { opacity: 0, transition: { duration: durations.fast, ease: easings.exit } },
  },
  
  slideUpFade: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: durations.slow, ease: easings.cinematic } },
    exit: { opacity: 0, y: 10, transition: { duration: durations.fast, ease: easings.exit } },
  },

  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },

  parallaxImage: {
    initial: { scale: 1.1 },
    animate: { scale: 1, transition: { duration: durations.cinematic, ease: easings.cinematic } },
  }
};

"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { easings, durations } from "@/lib/design/motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const mobileLinks = [
  { name: "Shop", href: "/shop" },
  { name: "Collections", href: "/collections" },
  { name: "Jewellery", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Journal", href: "/journal" },
];

const mobileUtilities = [
  { name: "Search", href: "/search" },
  { name: "Account", href: "/account" },
  { name: "Wishlist", href: "/wishlist" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Handle escape key
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      // Prevent body scroll
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: durations.fast, ease: easings.micro }}
          className="fixed inset-0 z-[100] bg-pezreq-ivory flex flex-col overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          {/* Header */}
          <div className="flex justify-between items-center px-4 sm:px-6 h-20 border-b border-glass-border">
            <span className="font-serif text-2xl tracking-[0.2em] text-pezreq-charcoal uppercase">PEZREQ</span>
            <button
              onClick={onClose}
              className="p-2 -mr-2 text-pezreq-charcoal hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-pezreq-charcoal"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col px-6 py-12 space-y-8 flex-1">
            {mobileLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: durations.base, ease: easings.entrance }}
              >
                <Link
                  href={link.href}
                  className="text-display !text-4xl text-pezreq-charcoal hover:text-pezreq-muted transition-colors focus:outline-none"
                  onClick={onClose}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: durations.base }}
              className="mt-12 pt-12 border-t border-glass-border grid grid-cols-2 gap-6"
            >
              {mobileUtilities.map((util) => (
                <Link
                  key={util.name}
                  href={util.href}
                  className="text-nav text-pezreq-charcoal hover:opacity-70 transition-opacity"
                  onClick={onClose}
                >
                  {util.name}
                </Link>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { easings, durations } from "@/lib/design/motion";

export type MegaMenuType = "SHOP" | "COLLECTIONS" | "JEWELLERY" | "ABOUT" | null;

interface MegaMenuProps {
  activeMenu: MegaMenuType;
  onMouseEnter: (menu: MegaMenuType) => void;
  onMouseLeave: () => void;
}

const menuData = {
  SHOP: {
    links: [
      { name: "Rings", href: "/shop/rings" },
      { name: "Necklaces", href: "/shop/necklaces" },
      { name: "Bracelets", href: "/shop/bracelets" },
      { name: "Earrings", href: "/shop/earrings" },
      { name: "View All", href: "/shop" },
    ],
    image: "/noircurvering.jpg",
    imageAlt: "Latest Shop Collection",
    editorialText: "Discover pieces that transcend time, sculpted for the modern aesthetic."
  },
  COLLECTIONS: {
    links: [
      { name: "Featured", href: "/collections" },
      { name: "Signature", href: "/collections" },
      { name: "New Arrivals", href: "/collections" },
      { name: "Everyday", href: "/collections" },
      { name: "Occasion", href: "/collections" },
    ],
    image: "/aureliaring.jpg",
    imageAlt: "Signature Collection",
    editorialText: "The defining aesthetic. Bold, architectural, and timeless."
  },
  JEWELLERY: {
    links: [
      { name: "Gold", href: "/shop?material=gold" },
      { name: "Silver", href: "/shop?material=silver" },
      { name: "Diamond", href: "/shop?material=diamond" },
      { name: "Gemstone", href: "/shop?material=gemstone" },
      { name: "Bespoke", href: "/contact?subject=bespoke" },
    ],
    image: "/sereinbracelet.jpg",
    imageAlt: "Fine Jewellery Materials",
    editorialText: "Crafted from ethically sourced, exceptional materials."
  },
  ABOUT: {
    links: [
      { name: "Our Story", href: "/about" },
      { name: "Craftsmanship", href: "/about#craftsmanship" },
      { name: "Materials", href: "/about#materials" },
    ],
    image: "/atelier.jpg",
    imageAlt: "PEZREQ Craftsmanship",
    editorialText: "We sculpt light, space, and material into timeless architecture for the body."
  }
};

export default function MegaMenu({ activeMenu, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  const currentMenu = activeMenu ? menuData[activeMenu] : null;

  return (
    <AnimatePresence>
      {activeMenu && currentMenu && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: durations.fast, ease: easings.micro }}
          className="absolute left-0 w-full top-full liquid-glass overflow-hidden"
          onMouseEnter={() => onMouseEnter(activeMenu)}
          onMouseLeave={onMouseLeave}
          role="dialog"
          aria-label={`${activeMenu} Navigation Menu`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-between">
            {/* Links Section */}
            <div className="flex-1 max-w-md">
              <h3 className="text-micro text-pezreq-muted mb-6">{activeMenu}</h3>
              <ul className="space-y-4">
                {currentMenu.links.map((link, idx) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: durations.base, ease: easings.entrance }}
                  >
                    <Link 
                      href={link.href}
                      className="font-serif text-2xl text-pezreq-charcoal hover:text-pezreq-muted transition-colors focus:outline-none focus:ring-2 focus:ring-pezreq-muted rounded-sm"
                      onClick={onMouseLeave}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Editorial / Image Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: durations.base, ease: easings.entrance }}
              className="flex-1 max-w-lg hidden lg:flex gap-8 items-center border-l border-glass-border pl-12"
            >
              <div className="relative aspect-[3/4] w-48 bg-pezreq-champagne overflow-hidden shrink-0">
                <Image 
                  src={currentMenu.image} 
                  alt={currentMenu.imageAlt} 
                  fill 
                  className="object-cover"
                />
              </div>
              <p className="text-body italic">{currentMenu.editorialText}</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

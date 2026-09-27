"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, Menu, X, User } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
          isScrolled ? "bg-background/90 backdrop-blur-md border-b border-glass-border" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                className={`p-2 -ml-2 transition-colors ${
                  isScrolled ? "text-pezreq-charcoal" : "text-background"
                }`}
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" strokeWidth={1.5} />
              </button>
            </div>

            {/* Desktop Navigation Links (Left) */}
            <nav className="hidden lg:flex space-x-8">
              <Link
                href="/shop"
                className={`text-sm tracking-widest uppercase transition-colors hover:opacity-70 ${
                  isScrolled ? "text-pezreq-charcoal" : "text-background"
                }`}
              >
                Shop
              </Link>
              <Link
                href="/collections"
                className={`text-sm tracking-widest uppercase transition-colors hover:opacity-70 ${
                  isScrolled ? "text-pezreq-charcoal" : "text-background"
                }`}
              >
                Collections
              </Link>
            </nav>

            {/* Logo (Center) */}
            <div className="flex-shrink-0 flex items-center justify-center cursor-pointer">
              <Link href="/">
                {/* Text fallback or custom logo image */}
                <h1
                  className={`font-serif text-2xl tracking-[0.2em] uppercase transition-colors ${
                    isScrolled ? "text-pezreq-charcoal" : "text-background"
                  }`}
                >
                  PEZREQ
                </h1>
              </Link>
            </div>

            {/* Desktop Icons (Right) */}
            <div className="hidden lg:flex items-center space-x-6">
              <button
                className={`transition-colors hover:opacity-70 ${
                  isScrolled ? "text-pezreq-charcoal" : "text-background"
                }`}
              >
                <Search className="h-5 w-5" strokeWidth={1.5} />
              </button>
              <button
                className={`transition-colors hover:opacity-70 ${
                  isScrolled ? "text-pezreq-charcoal" : "text-background"
                }`}
              >
                <User className="h-5 w-5" strokeWidth={1.5} />
              </button>
              <button
                className={`transition-colors hover:opacity-70 ${
                  isScrolled ? "text-pezreq-charcoal" : "text-background"
                }`}
              >
                <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>

            {/* Mobile Icons (Right) */}
            <div className="flex lg:hidden items-center space-x-4">
              <button
                className={`transition-colors hover:opacity-70 ${
                  isScrolled ? "text-pezreq-charcoal" : "text-background"
                }`}
              >
                <Search className="h-5 w-5" strokeWidth={1.5} />
              </button>
              <button
                className={`transition-colors hover:opacity-70 ${
                  isScrolled ? "text-pezreq-charcoal" : "text-background"
                }`}
              >
                <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-pezreq-charcoal/40 backdrop-blur-sm z-[60]"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 left-0 w-full max-w-sm bg-background z-[70] overflow-y-auto"
            >
              <div className="flex justify-between items-center p-6">
                <span className="font-serif text-xl tracking-widest text-pezreq-charcoal">PEZREQ</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-pezreq-charcoal hover:opacity-70"
                >
                  <X className="h-6 w-6" strokeWidth={1.5} />
                </button>
              </div>
              <div className="px-6 py-8 flex flex-col space-y-8">
                <Link
                  href="/shop"
                  className="text-2xl font-serif tracking-wide text-pezreq-charcoal"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Shop
                </Link>
                <Link
                  href="/collections"
                  className="text-2xl font-serif tracking-wide text-pezreq-charcoal"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Collections
                </Link>
                <Link
                  href="/about"
                  className="text-2xl font-serif tracking-wide text-pezreq-charcoal"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/journal"
                  className="text-2xl font-serif tracking-wide text-pezreq-charcoal"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Journal
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

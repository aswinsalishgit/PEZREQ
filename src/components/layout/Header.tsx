"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag, Menu, User, Heart } from "lucide-react";
import MegaMenu, { MegaMenuType } from "@/components/navigation/MegaMenu";
import MobileMenu from "@/components/navigation/MobileMenu";
import { useStore } from "@/lib/context/StoreContext";

export default function Header() {
  const { cart, setIsSearchOpen, setIsCartOpen } = useStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MegaMenuType>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard accessibility for Mega Menu
  const handleKeyDown = (e: React.KeyboardEvent, menu: MegaMenuType) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveMenu(activeMenu === menu ? null : menu);
    } else if (e.key === "Escape") {
      setActiveMenu(null);
    }
  };

  const navItems: { label: string; menu: MegaMenuType; href: string }[] = [
    { label: "SHOP", menu: "SHOP", href: "/shop" },
    { label: "COLLECTIONS", menu: "COLLECTIONS", href: "/collections" },
    { label: "JEWELLERY", menu: "JEWELLERY", href: "/shop" },
    { label: "ABOUT", menu: "ABOUT", href: "/about" },
    { label: "JOURNAL", menu: null, href: "/journal" },
  ];

  // Determine header appearance based on state
  const isSolid = isScrolled || activeMenu !== null;
  const headerClass = `fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${
    isSolid 
      ? "bg-pezreq-ivory/80 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] text-pezreq-charcoal" 
      : "bg-transparent text-pezreq-ivory"
  }`;

  return (
    <>
      <header className={headerClass} onMouseLeave={() => setActiveMenu(null)}>
        <div className="container-luxury transition-colors duration-500">
          
          <div className="flex justify-between items-center h-20">
            
            {/* Mobile Menu Trigger */}
            <div className="flex lg:hidden flex-1">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 -ml-2 focus:outline-none focus:ring-2 focus:ring-pezreq-muted"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" strokeWidth={1.2} />
              </button>
            </div>

            {/* Desktop Left Navigation */}
            <nav className="hidden lg:flex flex-1 items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className="text-nav hover:opacity-60 transition-opacity focus:outline-none py-6 block"
                    onMouseEnter={() => setActiveMenu(item.menu)}
                    onKeyDown={(e) => handleKeyDown(e, item.menu)}
                  >
                    {item.label}
                  </Link>
                  {/* Underline indicator */}
                  <span className={`absolute bottom-5 left-0 w-full h-[1px] bg-current transform origin-left transition-transform duration-300 ease-out ${
                    activeMenu === item.menu && item.menu !== null ? "scale-x-100" : "scale-x-0"
                  }`} />
                </div>
              ))}
            </nav>

            {/* Center Logo */}
            <div className="flex-shrink-0 flex items-center justify-center cursor-pointer">
              <Link href="/" className="focus:outline-none" aria-label="PEZREQ Home">
                <Image 
                  src="/pezreq logo.png" 
                  alt="PEZREQ" 
                  width={140} 
                  height={140}
                  className={`h-12 w-auto object-contain transition-all duration-500 ${
                    !isSolid ? "brightness-0 invert" : ""
                  }`}
                  priority
                />
              </Link>
            </div>

            {/* Right Utilities */}
            <div className="flex-1 flex justify-end items-center space-x-4 lg:space-x-6">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 hover:opacity-60 transition-opacity focus:outline-none" 
                aria-label="Search"
              >
                <Search className="h-5 w-5" strokeWidth={1.2} />
              </button>
              <Link href="/wishlist" className="hidden lg:block p-2 hover:opacity-60 transition-opacity focus:outline-none" aria-label="Wishlist">
                <Heart className="h-5 w-5" strokeWidth={1.2} />
              </Link>
              <Link href="/account" className="hidden lg:block p-2 hover:opacity-60 transition-opacity focus:outline-none" aria-label="Account">
                <User className="h-5 w-5" strokeWidth={1.2} />
              </Link>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="p-2 hover:opacity-60 transition-opacity focus:outline-none flex items-center gap-2" 
                aria-label="Cart"
              >
                <ShoppingBag className="h-5 w-5" strokeWidth={1.2} />
                <span className="text-nav hidden lg:inline">Cart{cart.length > 0 ? ` (${cart.length})` : ''}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <MegaMenu 
          activeMenu={activeMenu} 
          onMouseEnter={(menu) => setActiveMenu(menu)}
          onMouseLeave={() => setActiveMenu(null)}
        />
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}

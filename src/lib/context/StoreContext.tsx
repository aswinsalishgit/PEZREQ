"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
  cartItemId: string; // Unique ID for the specific configuration
}

interface StoreContextType {
  // Overlays
  isCartOpen: boolean;
  setIsCartOpen: (v: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (v: boolean) => void;
  
  // Cart
  cart: CartItem[];
  addToCart: (product: Product, quantity: number, size?: string) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  cartTotal: number;
  
  // Wishlist
  wishlist: string[]; // array of product IDs
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  
  // Load from local storage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("pezreq_cart");
      if (savedCart) setCart(JSON.parse(savedCart));
      
      const savedWishlist = localStorage.getItem("pezreq_wishlist");
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    } catch {
      console.warn("Could not load local storage data");
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem("pezreq_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("pezreq_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Cart Logic
  const addToCart = (product: Product, quantity: number, size?: string) => {
    setCart((prev) => {
      const cartItemId = `${product.id}-${size || "default"}`;
      const existing = prev.find((item) => item.cartItemId === cartItemId);
      if (existing) {
        return prev.map((item) => 
          item.cartItemId === cartItemId 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, size, cartItemId }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity < 1) return;
    setCart((prev) => 
      prev.map((item) => item.cartItemId === cartItemId ? { ...item, quantity } : item)
    );
  };

  const cartTotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  // Wishlist Logic
  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => 
      prev.includes(productId) 
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  // Prevent scroll when overlays open
  useEffect(() => {
    if (isCartOpen || isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isCartOpen, isSearchOpen]);

  return (
    <StoreContext.Provider value={{
      isCartOpen, setIsCartOpen,
      isSearchOpen, setIsSearchOpen,
      cart, addToCart, removeFromCart, updateQuantity, cartTotal,
      wishlist, toggleWishlist, isInWishlist
    }}>
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within StoreProvider");
  return context;
};

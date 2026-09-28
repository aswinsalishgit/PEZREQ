"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "@/lib/context/StoreContext";

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cart, cartTotal, updateQuantity, removeFromCart } = useStore();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-pezreq-charcoal/40 backdrop-blur-sm z-[100]"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white/40 backdrop-blur-3xl saturate-200 border-l border-white/50 shadow-[-10px_0_30px_rgba(0,0,0,0.1)] z-[110] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-glass-border">
              <h2 className="text-nav uppercase tracking-widest text-pezreq-charcoal">Your Bag</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 -mr-2 hover:opacity-50 transition-opacity focus:outline-none"
              >
                <X className="w-5 h-5 text-pezreq-charcoal" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto hide-scrollbar p-6 md:p-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-6">
                  <p className="text-body text-pezreq-charcoal/70">Your bag is currently empty.</p>
                  <Link 
                    href="/shop"
                    onClick={() => setIsCartOpen(false)}
                    className="text-nav uppercase tracking-widest border-b border-pezreq-charcoal pb-1 hover:text-pezreq-muted transition-colors"
                  >
                    Discover Collections
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col gap-8">
                  {cart.map((item) => (
                    <div key={item.cartItemId} className="flex gap-6">
                      <Link 
                        href={`/product/${item.product.slug}`}
                        onClick={() => setIsCartOpen(false)}
                        className="relative w-24 h-32 bg-pezreq-champagne shrink-0 block overflow-hidden"
                      >
                        <Image 
                          src={item.product.images[0]} 
                          alt={item.product.name} 
                          fill 
                          className="object-cover hover:scale-105 transition-transform duration-700" 
                        />
                      </Link>
                      
                      <div className="flex flex-col flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <Link 
                            href={`/product/${item.product.slug}`}
                            onClick={() => setIsCartOpen(false)}
                            className="text-nav text-pezreq-charcoal hover:text-pezreq-muted transition-colors"
                          >
                            {item.product.name}
                          </Link>
                          <button 
                            onClick={() => removeFromCart(item.cartItemId)}
                            className="text-meta text-pezreq-charcoal/50 hover:text-pezreq-charcoal underline underline-offset-4"
                          >
                            Remove
                          </button>
                        </div>
                        
                        <p className="text-meta text-pezreq-muted mb-4">
                          {item.product.materials[0]}
                          {item.size && ` | Size: ${item.size}`}
                        </p>
                        
                        <div className="mt-auto flex justify-between items-end">
                          <div className="flex items-center border border-glass-border">
                            <button 
                              onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                              className="p-2 hover:bg-pezreq-charcoal/5 transition-colors focus:outline-none"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-3 h-3 text-pezreq-charcoal" />
                            </button>
                            <span className="w-8 text-center text-meta text-pezreq-charcoal select-none">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                              className="p-2 hover:bg-pezreq-charcoal/5 transition-colors focus:outline-none"
                            >
                              <Plus className="w-3 h-3 text-pezreq-charcoal" />
                            </button>
                          </div>
                          <span className="text-body font-medium text-pezreq-charcoal">
                            {new Intl.NumberFormat("en-IN", { style: "currency", currency: item.product.currency, maximumFractionDigits: 0 }).format(item.product.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Related/Recommendations could go here */}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-glass-border p-6 md:p-8 bg-transparent">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-nav uppercase tracking-widest text-pezreq-charcoal">Subtotal</span>
                  <span className="text-xl font-light text-pezreq-charcoal">
                    {new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(cartTotal)}
                  </span>
                </div>
                <p className="text-meta text-pezreq-muted mb-6">
                  Shipping & taxes calculated at checkout.
                </p>
                <Link 
                  href="/cart"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full py-4 text-center liquid-glass-dark text-pezreq-ivory text-nav uppercase tracking-widest hover:bg-pezreq-near-black transition-colors"
                >
                  Proceed to Checkout
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

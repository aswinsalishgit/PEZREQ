"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useStore } from "@/lib/context/StoreContext";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartPage() {
  const { cart, cartTotal, updateQuantity, removeFromCart } = useStore();

  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-pezreq-charcoal selection:text-pezreq-ivory">
      <Header />
      
      <section className="pt-40 pb-24 md:pt-48 container-luxury max-w-5xl">
        <h1 className="text-display text-pezreq-charcoal mb-16 text-center">Your Bag</h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-24 border-y border-glass-border">
            <p className="text-body text-pezreq-charcoal/70 mb-8">Your bag is currently empty.</p>
            <Link 
              href="/shop"
              className="inline-block px-10 py-4 liquid-glass-dark text-pezreq-ivory text-nav uppercase tracking-widest hover:bg-pezreq-near-black transition-colors"
            >
              Explore Collections
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Items */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
              {cart.map((item) => (
                <div key={item.cartItemId} className="flex gap-6 md:gap-8 pb-8 border-b border-glass-border">
                  <Link 
                    href={`/product/${item.product.slug}`}
                    className="relative w-32 h-40 bg-pezreq-champagne shrink-0 block overflow-hidden"
                  >
                    <Image 
                      src={item.product.images[0]} 
                      alt={item.product.name} 
                      fill 
                      className="object-cover hover:scale-105 transition-transform duration-700" 
                    />
                  </Link>
                  
                  <div className="flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <Link 
                        href={`/product/${item.product.slug}`}
                        className="font-serif text-xl md:text-2xl text-pezreq-charcoal hover:text-pezreq-muted transition-colors"
                      >
                        {item.product.name}
                      </Link>
                    </div>
                    
                    <p className="text-meta text-pezreq-muted mb-6">
                      {item.product.materials[0]}
                      {item.size && ` | Size: ${item.size}`}
                    </p>
                    
                    <div className="mt-auto flex justify-between items-center">
                      <div className="flex items-center border border-glass-border">
                        <button 
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="p-3 hover:bg-pezreq-charcoal/5 transition-colors focus:outline-none"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3 h-3 text-pezreq-charcoal" />
                        </button>
                        <span className="w-10 text-center text-meta text-pezreq-charcoal select-none">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="p-3 hover:bg-pezreq-charcoal/5 transition-colors focus:outline-none"
                        >
                          <Plus className="w-3 h-3 text-pezreq-charcoal" />
                        </button>
                      </div>

                      <div className="flex items-center gap-6">
                        <button 
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-pezreq-charcoal/50 hover:text-pezreq-charcoal transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <span className="text-body font-medium text-pezreq-charcoal hidden sm:block">
                          {new Intl.NumberFormat("en-US", { style: "currency", currency: item.product.currency, maximumFractionDigits: 0 }).format(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-1/3">
              <div className="bg-pezreq-warm-white p-8 md:p-10 sticky top-32">
                <h2 className="text-nav uppercase tracking-widest text-pezreq-charcoal mb-8 border-b border-glass-border pb-4">Order Summary</h2>
                
                <div className="flex justify-between items-center mb-4 text-body text-pezreq-charcoal">
                  <span>Subtotal</span>
                  <span>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(cartTotal)}</span>
                </div>
                <div className="flex justify-between items-center mb-8 text-body text-pezreq-charcoal">
                  <span>Shipping</span>
                  <span className="text-meta">Calculated at checkout</span>
                </div>
                
                <div className="flex justify-between items-center mb-10 text-xl font-medium text-pezreq-charcoal border-t border-glass-border pt-6">
                  <span>Total</span>
                  <span>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(cartTotal)}</span>
                </div>
                
                <button className="w-full py-4 liquid-glass-dark text-pezreq-ivory text-nav uppercase tracking-widest hover:bg-pezreq-near-black transition-colors mb-4">
                  Proceed to Checkout
                </button>
                <p className="text-meta text-pezreq-muted text-center">
                  Secure encrypted payment.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}

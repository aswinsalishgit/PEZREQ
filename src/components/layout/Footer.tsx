import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-pezreq-charcoal text-background pt-24 pb-12 border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-3xl tracking-widest mb-6">PEZREQ</h2>
              <p className="text-background/70 max-w-sm text-sm leading-relaxed mb-8">
                A luxury jewellery house crafting architectural and timeless pieces for the modern aesthetic.
              </p>
            </div>
            
            <div className="max-w-md">
              <h3 className="text-xs tracking-widest uppercase mb-4 text-background/90">Join the Private World</h3>
              <form className="relative">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent border-b border-background/30 py-3 pl-0 pr-10 text-sm focus:outline-none focus:border-background transition-colors placeholder:text-background/40"
                  required
                />
                <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:opacity-70 transition-opacity">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-6 text-background/60">Explore</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/shop" className="text-sm text-background/80 hover:text-background transition-colors">All Jewellery</Link>
              </li>
              <li>
                <Link href="/collections" className="text-sm text-background/80 hover:text-background transition-colors">Collections</Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-background/80 hover:text-background transition-colors">Our Story</Link>
              </li>
              <li>
                <Link href="/journal" className="text-sm text-background/80 hover:text-background transition-colors">Journal</Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-6 text-background/60">Client Care</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/contact" className="text-sm text-background/80 hover:text-background transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-background/80 hover:text-background transition-colors">Bespoke Consultation</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-background/80 hover:text-background transition-colors">Shipping & Returns</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-background/80 hover:text-background transition-colors">Care Guide</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/50">
          <p>© {new Date().getFullYear()} PEZREQ. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-background transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-background transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

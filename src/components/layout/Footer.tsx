import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Footer() {
  return (
    <footer className="bg-pezreq-charcoal text-pezreq-ivory pt-24 pb-12 border-t border-glass-border">
      <div className="container-luxury">
        
        {/* TOP: Newsletter / Private Client Invitation */}
        <div className="mb-24 md:mb-32 max-w-3xl">
          <ScrollReveal>
            <h3 className="font-serif text-3xl md:text-5xl text-pezreq-ivory mb-6 leading-tight">
              An invitation to the <br className="hidden md:block" /> private client list.
            </h3>
            <p className="text-body text-pezreq-ivory/70 mb-10 max-w-md">
              Receive privileged access to new collections, bespoke commissions, and private editorial insights.
            </p>
            <form className="relative max-w-md flex items-end">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-pezreq-ivory/30 py-3 pl-0 pr-10 text-sm focus:outline-none focus:border-pezreq-ivory transition-colors placeholder:text-pezreq-ivory/40"
                required
              />
              <button type="submit" className="absolute right-0 bottom-3 p-2 hover:translate-x-1 transition-transform group">
                <ArrowRight className="h-5 w-5 text-pezreq-ivory/70 group-hover:text-pezreq-ivory transition-colors" />
              </button>
            </form>
          </ScrollReveal>
        </div>

        {/* MIDDLE: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 mb-24 md:mb-32">
          <ScrollReveal delay={0.1}>
            <h4 className="text-micro text-pezreq-ivory/50 mb-8">SHOP</h4>
            <ul className="space-y-4">
              {["Rings", "Necklaces", "Bracelets", "Earrings", "All Jewellery"].map((link) => (
                <li key={link}>
                  <Link 
                    href={link === "All Jewellery" ? "/shop" : `/shop/${link.toLowerCase()}`}
                    className="text-sm text-pezreq-ivory/80 hover:text-pezreq-ivory link-underline pb-1 transition-colors block w-fit"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h4 className="text-micro text-pezreq-ivory/50 mb-8">EXPLORE</h4>
            <ul className="space-y-4">
              {["Collections", "About", "Journal", "Contact"].map((link) => (
                <li key={link}>
                  <Link 
                    href={`/${link.toLowerCase()}`}
                    className="text-sm text-pezreq-ivory/80 hover:text-pezreq-ivory link-underline pb-1 transition-colors block w-fit"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <h4 className="text-micro text-pezreq-ivory/50 mb-8">SERVICES</h4>
            <ul className="space-y-4">
              {[
                { name: "Bespoke Consultation", href: "/contact" },
                { name: "Jewellery Care", href: "/care" },
                { name: "Shipping", href: "/shipping" },
                { name: "Returns", href: "/returns" },
                { name: "FAQs", href: "/faqs" }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-pezreq-ivory/80 hover:text-pezreq-ivory link-underline pb-1 transition-colors block w-fit"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <h4 className="text-micro text-pezreq-ivory/50 mb-8">FOLLOW</h4>
            <ul className="space-y-4">
              {[
                { name: "Instagram", href: "https://instagram.com" },
                { name: "Pinterest", href: "https://pinterest.com" },
                { name: "WhatsApp", href: "https://wa.me/" },
                { name: "Email", href: "mailto:concierge@pezreq.com" }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-pezreq-ivory/80 hover:text-pezreq-ivory link-underline pb-1 transition-colors block w-fit"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        {/* BOTTOM: Final Statement & Legal */}
        <ScrollReveal type="typography" delay={0.2}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t border-pezreq-ivory/20 pt-12">
            <div>
              <Link href="/" className="inline-block mb-8 relative h-12 w-48">
                <Image 
                  src="/pezreq-title.png" 
                  alt="PEZREQ" 
                  fill 
                  className="object-contain object-left invert opacity-90 hover:opacity-100 transition-opacity" 
                />
              </Link>
              <p className="text-body max-w-sm text-pezreq-ivory/60 italic font-serif">
                Shaping the void. Emboldening the form. <br />
                Crafted for those who understand restraint.
              </p>
            </div>

            <div className="flex flex-col md:items-end gap-6 text-xs text-pezreq-ivory/50">
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <Link href="/privacy" className="hover:text-pezreq-ivory transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-pezreq-ivory transition-colors">Terms of Service</Link>
                <Link href="/accessibility" className="hover:text-pezreq-ivory transition-colors">Accessibility</Link>
              </div>
              <p>© {new Date().getFullYear()} PEZREQ House. All rights reserved.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}

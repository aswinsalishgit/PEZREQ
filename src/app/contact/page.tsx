import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxImage from "@/components/ui/ParallaxImage";

export const metadata = {
  title: "Concierge | PEZREQ",
  description: "Contact the PEZREQ concierge for bespoke commissions, styling advice, and client care.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-pezreq-warm-white">
      <div className="container-luxury max-w-7xl mx-auto">
        
        {/* Concierge Heading */}
        <div className="mb-24 md:mb-32 max-w-3xl">
          <ScrollReveal type="typography">
            <h1 className="text-micro text-pezreq-muted mb-8 tracking-[0.3em]">PEZREQ CONCIERGE</h1>
            <h2 className="font-serif text-5xl md:text-7xl text-pezreq-charcoal mb-10 leading-[1.1]">
              Private services &<br />client care.
            </h2>
            <p className="text-body text-pezreq-charcoal/80 max-w-md leading-relaxed">
              Our dedicated concierge team is available to assist you with bespoke commissions, styling advice, and any enquiries regarding your PEZREQ pieces.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Direct Contact Methods */}
          <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col gap-12">
            <ScrollReveal delay={0.1}>
              <h3 className="font-serif text-2xl text-pezreq-charcoal mb-6">Direct Access</h3>
              <div className="space-y-8">
                
                <div>
                  <h4 className="text-micro text-pezreq-muted mb-2">WHATSAPP</h4>
                  <a href="https://wa.me/916282788268" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-nav link-underline pb-1 transition-colors w-fit">
                    Message the Atelier
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                <div>
                  <h4 className="text-micro text-pezreq-muted mb-2">EMAIL</h4>
                  <a href="mailto:pezreq@gmail.com" className="group flex items-center gap-4 text-nav link-underline pb-1 transition-colors w-fit">
                    concierge@pezreq.com
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                <div>
                  <h4 className="text-micro text-pezreq-muted mb-2">SOCIAL</h4>
                  <a href="https://www.instagram.com/pezreq/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-nav link-underline pb-1 transition-colors w-fit">
                    @pezreq_house
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2} type="image">
              <div className="mt-8 relative aspect-[4/5] w-full bg-pezreq-champagne overflow-hidden">
                <ParallaxImage 
                  src="/pezreq-banner.png" 
                  alt="PEZREQ Atelier" 
                  containerClassName="absolute inset-0 w-full h-full" 
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <ScrollReveal delay={0.3}>
              <div className="bg-background p-8 md:p-16 border border-glass-border shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
                <h3 className="font-serif text-3xl text-pezreq-charcoal mb-10">Send an Enquiry</h3>
                
                <form className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative">
                      <input 
                        type="text" 
                        id="firstName"
                        placeholder="First Name *"
                        className="w-full bg-transparent border-b border-pezreq-charcoal/30 py-3 px-0 text-sm focus:outline-none focus:border-pezreq-charcoal transition-colors placeholder:text-pezreq-charcoal/40"
                        required
                      />
                    </div>
                    <div className="relative">
                      <input 
                        type="text" 
                        id="lastName"
                        placeholder="Last Name *"
                        className="w-full bg-transparent border-b border-pezreq-charcoal/30 py-3 px-0 text-sm focus:outline-none focus:border-pezreq-charcoal transition-colors placeholder:text-pezreq-charcoal/40"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative">
                      <input 
                        type="email" 
                        id="email"
                        placeholder="Email Address *"
                        className="w-full bg-transparent border-b border-pezreq-charcoal/30 py-3 px-0 text-sm focus:outline-none focus:border-pezreq-charcoal transition-colors placeholder:text-pezreq-charcoal/40"
                        required
                      />
                    </div>
                    <div className="relative">
                      <input 
                        type="tel" 
                        id="phone"
                        placeholder="Phone Number (Optional)"
                        className="w-full bg-transparent border-b border-pezreq-charcoal/30 py-3 px-0 text-sm focus:outline-none focus:border-pezreq-charcoal transition-colors placeholder:text-pezreq-charcoal/40"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <select 
                      id="enquiryType"
                      className="w-full bg-transparent border-b border-pezreq-charcoal/30 py-3 px-0 text-sm focus:outline-none focus:border-pezreq-charcoal transition-colors text-pezreq-charcoal/80 appearance-none rounded-none"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled hidden>Subject of Enquiry *</option>
                      <option value="bespoke">Bespoke Commission</option>
                      <option value="styling">Styling Advice</option>
                      <option value="order">Existing Order</option>
                      <option value="care">Repairs & Care</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="relative">
                    <textarea 
                      id="message"
                      rows={4}
                      placeholder="Your Message *"
                      className="w-full bg-transparent border-b border-pezreq-charcoal/30 py-3 px-0 text-sm focus:outline-none focus:border-pezreq-charcoal transition-colors placeholder:text-pezreq-charcoal/40 resize-none"
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full md:w-auto px-12 py-4 liquid-glass-dark text-pezreq-ivory text-nav hover:bg-pezreq-near-black transition-colors"
                  >
                    Submit Enquiry
                  </button>
                  
                  <p className="text-xs text-pezreq-muted mt-6 max-w-sm">
                    By submitting this form, you agree to our <Link href="/privacy" className="underline hover:text-pezreq-charcoal">Privacy Policy</Link>. Our concierge aims to respond within 24 hours.
                  </p>
                </form>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </div>
  );
}

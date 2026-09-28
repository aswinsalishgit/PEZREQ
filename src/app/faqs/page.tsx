import React from "react";

export const metadata = {
  title: "FAQs | PEZREQ",
};

export default function FaqsPage() {
  return (
    <main className="min-h-screen bg-pezreq-ivory text-pezreq-charcoal pt-40 pb-32">
      <div className="container-luxury max-w-4xl">
        <h1 className="font-serif text-5xl mb-12">Frequently Asked Questions</h1>
        <div className="text-body text-pezreq-charcoal/80 space-y-12">
          
          <div>
            <h2 className="font-serif text-2xl text-pezreq-charcoal mb-4">Do you offer bespoke commissions?</h2>
            <p>Yes. Our bespoke process involves a private consultation to understand your vision, followed by iterative sketches and prototyping. Please contact our concierge to schedule an appointment.</p>
          </div>
          
          <div>
            <h2 className="font-serif text-2xl text-pezreq-charcoal mb-4">Are your materials ethically sourced?</h2>
            <p>Absolutely. We are committed to using only conflict-free diamonds and ethically sourced 18k solid gold and platinum. Sustainability and transparency are core to our house.</p>
          </div>
          
          <div>
            <h2 className="font-serif text-2xl text-pezreq-charcoal mb-4">How do I find my ring size?</h2>
            <p>We recommend visiting a local jeweller for professional sizing. Alternatively, you may contact our concierge, and we will send a complimentary ring sizing kit to your home.</p>
          </div>
          
          <div>
            <h2 className="font-serif text-2xl text-pezreq-charcoal mb-4">How long does shipping take?</h2>
            <p>In-stock items are dispatched within 2 business days and typically arrive within 3-5 days via secure overnight courier globally. Made-to-order pieces require 4-6 weeks.</p>
          </div>

        </div>
      </div>
    </main>
  );
}

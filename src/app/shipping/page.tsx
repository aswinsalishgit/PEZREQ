import React from "react";

export const metadata = {
  title: "Shipping | PEZREQ",
};

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-pezreq-ivory text-pezreq-charcoal pt-40 pb-32">
      <div className="container-luxury max-w-4xl">
        <h1 className="font-serif text-5xl mb-12">Shipping & Delivery</h1>
        <div className="text-body text-pezreq-charcoal/80 space-y-6">
          <p>We are pleased to offer complimentary secure global shipping on all PEZREQ orders.</p>
          <h2 className="font-serif text-2xl text-pezreq-charcoal mt-12 mb-4">Delivery Timeframes</h2>
          <p>In-stock items are typically dispatched within 2 business days. Bespoke commissions and made-to-order pieces require 4-6 weeks for meticulous crafting before dispatch.</p>
          <h2 className="font-serif text-2xl text-pezreq-charcoal mt-12 mb-4">Secure Transport</h2>
          <p>All shipments are fully insured and require an adult signature upon delivery. Your order will arrive in our signature discreet outer packaging to ensure complete security during transit.</p>
        </div>
      </div>
    </main>
  );
}

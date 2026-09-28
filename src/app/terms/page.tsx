import React from "react";

export const metadata = {
  title: "Terms of Service | PEZREQ",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-pezreq-charcoal text-pezreq-ivory pt-40 pb-32">
      <div className="container-luxury max-w-4xl">
        <h1 className="font-serif text-5xl mb-12">Terms of Service</h1>
        <div className="text-body text-pezreq-ivory/80 space-y-6">
          <p>These terms govern your use of the PEZREQ website and services. By accessing or purchasing from PEZREQ, you agree to these conditions.</p>
          <h2 className="font-serif text-2xl text-pezreq-ivory mt-12 mb-4">1. Intellectual Property</h2>
          <p>All designs, imagery, and content on this website are the exclusive property of PEZREQ House and are protected by international copyright and intellectual property laws.</p>
          <h2 className="font-serif text-2xl text-pezreq-ivory mt-12 mb-4">2. Purchases & Commissions</h2>
          <p>All purchases are subject to availability. For bespoke commissions, a separate agreement detailing timelines, materials, and payment schedules will be provided.</p>
        </div>
      </div>
    </main>
  );
}

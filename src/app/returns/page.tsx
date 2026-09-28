import React from "react";

export const metadata = {
  title: "Returns | PEZREQ",
};

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-pezreq-ivory text-pezreq-charcoal pt-40 pb-32">
      <div className="container-luxury max-w-4xl">
        <h1 className="font-serif text-5xl mb-12">Returns & Exchanges</h1>
        <div className="text-body text-pezreq-charcoal/80 space-y-6">
          <p>If your PEZREQ piece does not meet your expectations, we accept returns for refund or exchange within 14 days of delivery.</p>
          <h2 className="font-serif text-2xl text-pezreq-charcoal mt-12 mb-4">Conditions of Return</h2>
          <p>Items must be returned in their original, unworn condition with all tags and original packaging intact. Bespoke commissions, engraved pieces, and custom-sized rings are final sale and cannot be returned.</p>
          <h2 className="font-serif text-2xl text-pezreq-charcoal mt-12 mb-4">Initiating a Return</h2>
          <p>Please contact our concierge to initiate a return. We will provide you with a secure, prepaid shipping label and instructions for safely returning the piece to our atelier.</p>
        </div>
      </div>
    </main>
  );
}

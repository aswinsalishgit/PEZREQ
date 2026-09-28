import React from "react";

export const metadata = {
  title: "Jewellery Care | PEZREQ",
};

export default function CarePage() {
  return (
    <main className="min-h-screen bg-pezreq-ivory text-pezreq-charcoal pt-40 pb-32">
      <div className="container-luxury max-w-4xl">
        <h1 className="font-serif text-5xl mb-12">Jewellery Care</h1>
        <div className="text-body text-pezreq-charcoal/80 space-y-6">
          <p>Every PEZREQ piece is engineered to last lifetimes, but precious metals and stones require proper care to maintain their original perfection.</p>
          <h2 className="font-serif text-2xl text-pezreq-charcoal mt-12 mb-4">18k Solid Gold & Platinum</h2>
          <p>While highly durable, solid gold and platinum can scratch upon impact with harder surfaces. We recommend removing your jewellery during heavy physical activity. Clean with a soft, lint-free cloth and warm soapy water.</p>
          <h2 className="font-serif text-2xl text-pezreq-charcoal mt-12 mb-4">Diamonds & Gemstones</h2>
          <p>Diamonds are the hardest known material, but they can still chip if struck at a precise angle. To maintain their brilliance, clean gently with a soft toothbrush and a mild degreasing solution.</p>
          <h2 className="font-serif text-2xl text-pezreq-charcoal mt-12 mb-4">Complimentary Maintenance</h2>
          <p>We offer lifetime complimentary cleaning and prong inspection for all PEZREQ pieces. Contact our concierge to arrange a service appointment.</p>
        </div>
      </div>
    </main>
  );
}

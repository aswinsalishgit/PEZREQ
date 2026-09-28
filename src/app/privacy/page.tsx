import React from "react";

export const metadata = {
  title: "Privacy Policy | PEZREQ",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-pezreq-charcoal text-pezreq-ivory pt-40 pb-32">
      <div className="container-luxury max-w-4xl">
        <h1 className="font-serif text-5xl mb-12">Privacy Policy</h1>
        <div className="text-body text-pezreq-ivory/80 space-y-6">
          <p>At PEZREQ House, we understand that discretion and privacy are of the utmost importance to our clients. This Privacy Policy outlines how we collect, use, and protect your personal information.</p>
          <h2 className="font-serif text-2xl text-pezreq-ivory mt-12 mb-4">1. Information Collection</h2>
          <p>We collect information that you provide directly to us when making a purchase, subscribing to our private client list, or contacting our concierge service.</p>
          <h2 className="font-serif text-2xl text-pezreq-ivory mt-12 mb-4">2. Use of Information</h2>
          <p>Your information is used strictly to provide you with the services you request, process transactions securely, and maintain our bespoke relationship with you. We do not sell your personal data.</p>
          <h2 className="font-serif text-2xl text-pezreq-ivory mt-12 mb-4">3. Security</h2>
          <p>We implement rigorous security measures to protect your personal information from unauthorized access, adhering to industry-leading encryption and data protection standards.</p>
        </div>
      </div>
    </main>
  );
}

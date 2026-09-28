import React from "react";

export const metadata = {
  title: "Accessibility | PEZREQ",
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-pezreq-charcoal text-pezreq-ivory pt-40 pb-32">
      <div className="container-luxury max-w-4xl">
        <h1 className="font-serif text-5xl mb-12">Accessibility</h1>
        <div className="text-body text-pezreq-ivory/80 space-y-6">
          <p>PEZREQ is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>
          <p>If you experience any difficulty accessing our website or require assistance with any part of our site, please contact our concierge service, and we will be happy to assist you.</p>
        </div>
      </div>
    </main>
  );
}

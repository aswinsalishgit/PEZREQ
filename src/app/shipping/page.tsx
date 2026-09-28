import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ShippingPage() {
  return (
    <div className="pt-32 pb-24 container-luxury min-h-[70vh]">
      <ScrollReveal>
        <h1 className="text-4xl md:text-5xl font-serif text-pezreq-charcoal mb-8">Shipping Information</h1>
        <div className="prose max-w-3xl text-pezreq-charcoal/80">
          <p className="mb-6">PEZREQ offers complimentary express shipping globally on all orders.</p>
          <h3 className="text-xl font-serif mb-4 mt-8">Delivery Times</h3>
          <p className="mb-6">All pieces are crafted with meticulous attention to detail. In-stock items will be dispatched within 2-3 business days. Bespoke or made-to-order pieces require 4-6 weeks for production before dispatch.</p>
          <h3 className="text-xl font-serif mb-4 mt-8">Secure Packaging</h3>
          <p className="mb-6">Your order will arrive in our signature PEZREQ packaging, shipped discreetly via secure courier to ensure safe delivery.</p>
          <h3 className="text-xl font-serif mb-4 mt-8">Taxes & Duties</h3>
          <p className="mb-6">For international orders, all duties and taxes are calculated and included at checkout, ensuring a seamless delivery experience.</p>
        </div>
      </ScrollReveal>
    </div>
  );
}

import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";

export default function ReturnsPage() {
  return (
    <div className="pt-32 pb-24 container-luxury min-h-[70vh]">
      <ScrollReveal>
        <h1 className="text-4xl md:text-5xl font-serif text-pezreq-charcoal mb-8">Returns & Exchanges</h1>
        <div className="prose max-w-3xl text-pezreq-charcoal/80">
          <p className="mb-6">We want you to be completely satisfied with your PEZREQ purchase.</p>
          <h3 className="text-xl font-serif mb-4 mt-8">Our Policy</h3>
          <p className="mb-6">We accept returns or exchanges within 14 days of delivery, provided the piece is returned in its original, unworn condition with all packaging and tags intact.</p>
          <h3 className="text-xl font-serif mb-4 mt-8">Bespoke Pieces</h3>
          <p className="mb-6">Please note that bespoke, engraved, or customized pieces are final sale and cannot be returned or exchanged.</p>
          <h3 className="text-xl font-serif mb-4 mt-8">How to Return</h3>
          <p className="mb-6">To initiate a return, please contact our concierge team at <Link href="/contact" className="underline">our contact page</Link>. We will arrange a secure courier pickup for your convenience.</p>
        </div>
      </ScrollReveal>
    </div>
  );
}

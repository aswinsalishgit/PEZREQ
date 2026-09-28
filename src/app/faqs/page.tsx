import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FAQsPage() {
  return (
    <div className="pt-32 pb-24 container-luxury min-h-[70vh]">
      <ScrollReveal>
        <h1 className="text-4xl md:text-5xl font-serif text-pezreq-charcoal mb-8">Frequently Asked Questions</h1>
        <div className="prose max-w-3xl text-pezreq-charcoal/80">
          <h3 className="text-xl font-serif mb-2 mt-8">What materials do you use?</h3>
          <p className="mb-6">We exclusively use solid 18k recycled gold and ethically sourced diamonds and gemstones. We do not use plating or vermeil.</p>
          <h3 className="text-xl font-serif mb-2 mt-8">How do I find my ring size?</h3>
          <p className="mb-6">We recommend visiting a local jeweller for an accurate measurement. Alternatively, you can contact our concierge to request a complimentary sizing kit.</p>
          <h3 className="text-xl font-serif mb-2 mt-8">Do you offer bespoke services?</h3>
          <p className="mb-6">Yes, we take on a limited number of bespoke commissions each year. Please visit our contact page to submit an inquiry.</p>
        </div>
      </ScrollReveal>
    </div>
  );
}

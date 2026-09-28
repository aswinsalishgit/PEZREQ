import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AccessibilityPage() {
  return (
    <div className="pt-32 pb-24 container-luxury min-h-[70vh]">
      <ScrollReveal>
        <h1 className="text-4xl md:text-5xl font-serif text-pezreq-charcoal mb-8">Accessibility Statement</h1>
        <div className="prose max-w-3xl text-pezreq-charcoal/80">
          <p className="mb-6">PEZREQ is committed to making our website content accessible and user friendly to everyone.</p>
          <p className="mb-6">If you are having difficulty viewing or navigating the content on this website, or notice any content, feature, or functionality that you believe is not fully accessible to people with disabilities, please contact our concierge.</p>
          <p className="mb-6">We take your feedback seriously and will consider it as we evaluate ways to accommodate all of our customers and our overall accessibility policies.</p>
        </div>
      </ScrollReveal>
    </div>
  );
}

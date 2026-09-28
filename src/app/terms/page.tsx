import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 container-luxury min-h-[70vh]">
      <ScrollReveal>
        <h1 className="text-4xl md:text-5xl font-serif text-pezreq-charcoal mb-8">Terms of Service</h1>
        <div className="prose max-w-3xl text-pezreq-charcoal/80">
          <p className="mb-6">Welcome to PEZREQ. By accessing or using our website, you agree to be bound by these Terms of Service.</p>
          <h3 className="text-xl font-serif mb-4 mt-8">Purchases</h3>
          <p className="mb-6">All purchases through our site are subject to product availability. We may limit or cancel quantities offered on our site or direct to you.</p>
          <h3 className="text-xl font-serif mb-4 mt-8">Intellectual Property</h3>
          <p className="mb-6">All content on this site, including designs, text, graphics, and logos, is the exclusive property of PEZREQ and protected by international copyright laws.</p>
          <h3 className="text-xl font-serif mb-4 mt-8">Governing Law</h3>
          <p className="mb-6">These terms shall be governed by and construed in accordance with the laws applicable to our primary place of business, without regard to its conflict of law provisions.</p>
        </div>
      </ScrollReveal>
    </div>
  );
}

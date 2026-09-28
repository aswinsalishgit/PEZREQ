import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 container-luxury min-h-[70vh]">
      <ScrollReveal>
        <h1 className="text-4xl md:text-5xl font-serif text-pezreq-charcoal mb-8">Privacy Policy</h1>
        <div className="prose max-w-3xl text-pezreq-charcoal/80">
          <p className="mb-6">At PEZREQ, we are committed to protecting your privacy and ensuring the security of your personal data.</p>
          <h3 className="text-xl font-serif mb-4 mt-8">Information We Collect</h3>
          <p className="mb-6">We collect information that you provide directly to us, such as when you create an account, make a purchase, subscribe to our newsletter, or contact our concierge.</p>
          <h3 className="text-xl font-serif mb-4 mt-8">How We Use Your Information</h3>
          <p className="mb-6">We use the information we collect to process transactions, communicate with you about your orders, and provide a personalized luxury experience.</p>
          <h3 className="text-xl font-serif mb-4 mt-8">Data Security</h3>
          <p className="mb-6">We employ industry-standard security measures to protect your personal information from unauthorized access or disclosure.</p>
        </div>
      </ScrollReveal>
    </div>
  );
}

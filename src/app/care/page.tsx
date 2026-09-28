import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CarePage() {
  return (
    <div className="pt-32 pb-24 container-luxury min-h-[70vh]">
      <ScrollReveal>
        <h1 className="text-4xl md:text-5xl font-serif text-pezreq-charcoal mb-8">Jewellery Care</h1>
        <div className="prose max-w-3xl text-pezreq-charcoal/80">
          <p className="mb-6">At PEZREQ, our pieces are crafted from the finest materials to ensure longevity. However, proper care is essential to maintain their brilliance.</p>
          <h3 className="text-xl font-serif mb-4 mt-8">Daily Wear</h3>
          <p className="mb-6">We recommend removing your jewellery when engaging in activities that may subject it to physical impact or abrasion, such as exercising or heavy lifting.</p>
          <h3 className="text-xl font-serif mb-4 mt-8">Cleaning</h3>
          <p className="mb-6">Clean your pieces regularly using a soft, lint-free cloth. Avoid harsh chemicals, perfumes, and prolonged exposure to water to preserve the finish.</p>
          <h3 className="text-xl font-serif mb-4 mt-8">Storage</h3>
          <p className="mb-6">When not being worn, store your jewellery in the provided PEZREQ pouch or a lined box to prevent scratching and tangling.</p>
        </div>
      </ScrollReveal>
    </div>
  );
}

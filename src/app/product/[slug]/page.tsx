import { notFound } from "next/navigation";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductClient from "@/components/product/ProductClient";
import ProductCarousel from "@/components/product/ProductCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { products } from "@/data/products";
import Image from "next/image";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Product Not Found | PEZREQ",
    };
  }

  return {
    title: `${product.name} | PEZREQ Jewellery`,
    description: product.description,
    openGraph: {
      title: `${product.name} | PEZREQ`,
      description: product.description,
      images: [product.images[0]],
    },
  };
}

export default async function ProductPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  // Get related products (same category or collection, excluding current)
  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.collection === product.collection))
    .slice(0, 4);

  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-pezreq-charcoal selection:text-pezreq-ivory">
      <Header />
      
      {/* Product Detail Interactive Shell */}
      <ProductClient product={product} />

      {/* Complete The Look */}
      {relatedProducts.length > 0 && (
        <section className="py-24 md:py-32 bg-pezreq-warm-white border-t border-glass-border">
          <div className="container-luxury mb-12">
            <ScrollReveal>
              <h3 className="font-serif text-3xl md:text-4xl text-pezreq-charcoal">Complete the Look</h3>
            </ScrollReveal>
          </div>
          <ProductCarousel products={relatedProducts} />
        </section>
      )}

      {/* Editorial Storytelling Block */}
      <section className="py-32 container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <ScrollReveal direction="right">
            <div className="relative aspect-square w-full bg-pezreq-champagne overflow-hidden">
               <Image 
                 src="/placeholder-collection.jpg" 
                 alt="Editorial" 
                 fill 
                 className="object-cover"
               />
            </div>
          </ScrollReveal>
          <div className="flex flex-col items-start">
            <ScrollReveal direction="left">
              <span className="text-micro text-pezreq-muted tracking-[0.2em] uppercase mb-6 block">
                The Origin
              </span>
              <h3 className="font-serif text-3xl md:text-5xl text-pezreq-charcoal mb-8 leading-tight">
                Sculpted from <br/> a single vision.
              </h3>
              <p className="text-body text-pezreq-charcoal/80 mb-10 max-w-md font-light leading-relaxed">
                The {product.collection} collection represents a distillation of our core aesthetic. Each piece is designed not just to be worn, but to interact with the architecture of the human form. We strip away the unnecessary until only pure structural beauty remains.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

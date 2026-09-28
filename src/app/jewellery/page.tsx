import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Fine Jewellery - PEZREQ",
  description: "Discover PEZREQ fine jewellery. Uncompromising materials and design.",
};

export default function JewelleryPage() {
  const materials = [
    {
      id: "gold",
      title: "18k Solid Gold",
      description: "Our signature medium. Warm, enduring, and sculptural. We work exclusively with ethically sourced 18k yellow, white, and rose gold.",
      image: "/aureliaring.jpg",
      href: "/shop?material=gold",
    },
    {
      id: "silver",
      title: "Sterling Silver",
      description: "Heavy, architectural, and highly polished. Our silver pieces are designed to make a statement.",
      image: "/formacuff.jpg",
      href: "/shop?material=silver",
    },
    {
      id: "diamond",
      title: "Diamonds & Gemstones",
      description: "Precision-cut stones set in tension and micro-pavé. We select only the highest grade stones for our fine jewellery.",
      image: "/noircurvering.jpg",
      href: "/shop?material=diamond",
    },
  ];

  return (
    <main className="min-h-screen bg-pezreq-ivory text-pezreq-charcoal pt-32 pb-24">
      <div className="container-luxury">
        <header className="mb-20 text-center max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Fine Jewellery</h1>
          <p className="text-body text-pezreq-charcoal/70">
            A dedication to material and form. We sculpt light, space, and metal into timeless architecture for the body, using only the finest precious metals and stones.
          </p>
        </header>

        <div className="space-y-24 md:space-y-32">
          {materials.map((material, index) => (
            <div key={material.id} className={`flex flex-col gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}>
              <div className="flex-1 w-full relative aspect-square md:aspect-[4/3] bg-pezreq-muted/20">
                <Image
                  src={material.image}
                  alt={material.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex-1 w-full flex flex-col justify-center px-4 md:px-12">
                <h2 className="font-serif text-3xl md:text-5xl mb-6">{material.title}</h2>
                <p className="text-body text-pezreq-charcoal/70 mb-10 max-w-lg">
                  {material.description}
                </p>
                <Link href={material.href} className="text-nav flex items-center gap-4 link-underline pb-1 w-fit transition-colors">
                  Explore {material.title} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  collection: string;
  materials: string[];
  images: string[];
  hoverImage?: string;
  badge?: "NEW" | "SIGNATURE" | "LIMITED";
  sizes: string[];
  featured: boolean;
  newArrival: boolean;
  bestSeller: boolean;
};

export const products: Product[] = [
  {
    id: "p1",
    slug: "architectural-gold-ring",
    name: "Architectural Gold Ring",
    description: "A bold, structural piece crafted in 18k solid gold. Inspired by modern architecture, this ring features clean lines and a substantial weight, making it a perfect statement for everyday wear.",
    price: 1250,
    currency: "USD",
    category: "Rings",
    collection: "Signature",
    materials: ["18k Yellow Gold"],
    images: ["/placeholder.jpg", "/placeholder-hover.jpg"],
    hoverImage: "/placeholder-hover.jpg",
    badge: "SIGNATURE",
    sizes: ["5", "6", "7", "8"],
    featured: true,
    newArrival: false,
    bestSeller: true,
  },
  {
    id: "p2",
    slug: "diamond-pavé-necklace",
    name: "Diamond Pavé Necklace",
    description: "Delicate and brilliant, this necklace features a continuous line of micro-pavé diamonds set in platinum. Designed to sit perfectly on the collarbone.",
    price: 3400,
    currency: "USD",
    category: "Necklaces",
    collection: "Everyday",
    materials: ["Platinum", "Diamonds (1.2ct)"],
    images: ["/placeholder.jpg", "/placeholder-hover.jpg"],
    hoverImage: "/placeholder-hover.jpg",
    sizes: ["16 inch", "18 inch"],
    featured: true,
    newArrival: true,
    bestSeller: false,
  },
  {
    id: "p3",
    slug: "sculptural-silver-cuff",
    name: "Sculptural Silver Cuff",
    description: "A fluid, organic form sculpted in polished sterling silver. This cuff wraps elegantly around the wrist, catching light from every angle.",
    price: 850,
    currency: "USD",
    category: "Bracelets",
    collection: "Featured",
    materials: ["Sterling Silver"],
    images: ["/placeholder.jpg"],
    sizes: ["S", "M", "L"],
    featured: true,
    newArrival: false,
    bestSeller: true,
  },
  {
    id: "p4",
    slug: "emerald-drop-earrings",
    name: "Emerald Drop Earrings",
    description: "Vibrant Zambian emeralds suspended from geometric gold settings. These earrings move beautifully, offering a striking contrast of color and structure.",
    price: 4200,
    currency: "USD",
    category: "Earrings",
    collection: "Occasion",
    materials: ["18k Yellow Gold", "Emeralds (2.5ct)"],
    images: ["/placeholder.jpg"],
    badge: "LIMITED",
    sizes: ["One Size"],
    featured: true,
    newArrival: true,
    bestSeller: false,
  }
];

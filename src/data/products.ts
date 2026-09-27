export type BadgeType = "NEW" | "SIGNATURE" | "LIMITED" | "ARCHIVE";

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  category: string; // matches category slug
  subcategory?: string;
  collection: string; // matches collection slug
  materials: string[];
  images: string[];
  hoverImage?: string;
  badge?: BadgeType;
  sizes: string[];
  featured: boolean;
  newArrival: boolean;
  bestSeller: boolean;
};

export const products: Product[] = [
  {
    id: "p_aurelia_ring",
    slug: "aurelia-ring",
    name: "Aurelia Ring",
    description: "A bold, structural piece crafted in 18k solid gold. Inspired by modern architecture, this ring features clean lines and a substantial weight, making it a perfect statement for everyday wear.",
    price: 1450,
    currency: "USD",
    category: "rings",
    collection: "signature",
    materials: ["18k Yellow Gold"],
    images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop", "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop"],
    hoverImage: "https://images.unsplash.com/photo-1599643478514-4a4e09f52f5e?q=80&w=1000&auto=format&fit=crop",
    badge: "SIGNATURE",
    sizes: ["4", "5", "6", "7", "8", "9"],
    featured: true,
    newArrival: false,
    bestSeller: true,
  },
  {
    id: "p_noir_curve_ring",
    slug: "noir-curve-ring",
    name: "Noir Curve Ring",
    description: "A masterclass in tension. Black rhodium plating over 18k white gold, featuring an asymmetrical pavé diamond inset.",
    price: 2100,
    currency: "USD",
    category: "rings",
    collection: "noir",
    materials: ["18k White Gold", "Black Rhodium", "Diamonds (0.4ct)"],
    images: ["https://images.unsplash.com/photo-1605100804763-247f66150ce8?q=80&w=1000&auto=format&fit=crop", "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1000&auto=format&fit=crop"],
    hoverImage: "https://images.unsplash.com/photo-1573408301145-b98c4af010a1?q=80&w=1000&auto=format&fit=crop",
    sizes: ["5", "6", "7", "8"],
    featured: true,
    newArrival: true,
    bestSeller: false,
  },
  {
    id: "p_linea_pendant",
    slug: "linea-pendant",
    name: "Linea Pendant",
    description: "A continuous line of micro-pavé diamonds suspended perfectly on a fine platinum chain. An essential piece for the modern neckline.",
    price: 3200,
    currency: "USD",
    category: "necklaces",
    collection: "everyday",
    materials: ["Platinum", "Diamonds (0.8ct)"],
    images: ["https://images.unsplash.com/photo-1602751584552-8ba73aad10ee?q=80&w=1000&auto=format&fit=crop", "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop"],
    hoverImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
    sizes: ["16 inch", "18 inch"],
    featured: false,
    newArrival: false,
    bestSeller: true,
  },
  {
    id: "p_serein_bracelet",
    slug: "serein-bracelet",
    name: "Serein Bracelet",
    description: "Fluid and seamless. The Serein Bracelet wraps the wrist with a mirror-polished 18k rose gold finish.",
    price: 4800,
    currency: "USD",
    category: "bracelets",
    collection: "contour",
    materials: ["18k Rose Gold"],
    images: ["https://images.unsplash.com/photo-1599643478514-4a4e09f52f5e?q=80&w=1000&auto=format&fit=crop"],
    badge: "NEW",
    sizes: ["S", "M", "L"],
    featured: true,
    newArrival: true,
    bestSeller: false,
  },
  {
    id: "p_elan_stud_earrings",
    slug: "elan-stud-earrings",
    name: "Élan Stud Earrings",
    description: "Vibrant emerald-cut sapphires encased in an architectural bezel setting. A structural approach to classic studs.",
    price: 1850,
    currency: "USD",
    category: "earrings",
    collection: "everyday",
    materials: ["18k Yellow Gold", "Sapphires (1.2ct)"],
    images: ["https://images.unsplash.com/photo-1605100804763-247f66150ce8?q=80&w=1000&auto=format&fit=crop", "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1000&auto=format&fit=crop"],
    hoverImage: "https://images.unsplash.com/photo-1573408301145-b98c4af010a1?q=80&w=1000&auto=format&fit=crop",
    sizes: ["One Size"],
    featured: false,
    newArrival: false,
    bestSeller: true,
  },
  {
    id: "p_forma_cuff",
    slug: "forma-cuff",
    name: "Forma Cuff",
    description: "An exaggerated sculptural statement cuff in sterling silver. Heavily weighted and hand-polished to absolute perfection.",
    price: 950,
    currency: "USD",
    category: "bracelets",
    collection: "signature",
    materials: ["Sterling Silver"],
    images: ["https://images.unsplash.com/photo-1602751584552-8ba73aad10ee?q=80&w=1000&auto=format&fit=crop", "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop"],
    hoverImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
    badge: "SIGNATURE",
    sizes: ["One Size"],
    featured: true,
    newArrival: false,
    bestSeller: true,
  },
  {
    id: "p_solis_choker",
    slug: "solis-choker",
    name: "Solis Choker",
    description: "A rigid, perfectly circular collar in 18k yellow gold. Designed to rest beautifully on the clavicle.",
    price: 6400,
    currency: "USD",
    category: "necklaces",
    collection: "signature",
    materials: ["18k Yellow Gold"],
    images: ["https://images.unsplash.com/photo-1599643478514-4a4e09f52f5e?q=80&w=1000&auto=format&fit=crop"],
    badge: "LIMITED",
    sizes: ["Standard"],
    featured: true,
    newArrival: true,
    bestSeller: false,
  },
  {
    id: "p_valance_drop_earrings",
    slug: "valance-drop-earrings",
    name: "Valance Drop Earrings",
    description: "Kinetic design in motion. These earrings feature three articulated gold links that move gracefully with the wearer.",
    price: 2600,
    currency: "USD",
    category: "earrings",
    collection: "contour",
    materials: ["18k Yellow Gold"],
    images: ["https://images.unsplash.com/photo-1605100804763-247f66150ce8?q=80&w=1000&auto=format&fit=crop"],
    sizes: ["One Size"],
    featured: false,
    newArrival: false,
    bestSeller: false,
  }
];

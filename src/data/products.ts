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
    price: 120350,
    currency: "INR",
    category: "rings",
    collection: "signature",
    materials: ["18k Yellow Gold"],
    images: ["/aureliaring.jpg"],
    hoverImage: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=1000&auto=format&fit=crop",
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
    price: 174300,
    currency: "INR",
    category: "rings",
    collection: "noir",
    materials: ["18k White Gold", "Black Rhodium", "Diamonds (0.4ct)"],
    images: ["/noircurvering.jpg"],
    hoverImage: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=1000&auto=format&fit=crop",
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
    price: 265600,
    currency: "INR",
    category: "necklaces",
    collection: "everyday",
    materials: ["Platinum", "Diamonds (0.8ct)"],
    images: ["/lineapendant.jpg"],
    hoverImage: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000&auto=format&fit=crop",
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
    price: 398400,
    currency: "INR",
    category: "bracelets",
    collection: "contour",
    materials: ["18k Rose Gold"],
    images: ["/sereinbracelet.jpg"],
    hoverImage: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1000&auto=format&fit=crop",
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
    price: 78850,
    currency: "INR",
    category: "bracelets",
    collection: "signature",
    materials: ["Sterling Silver"],
    images: ["/formacuff.jpg"],
    hoverImage: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1000&auto=format&fit=crop",
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
    price: 531200,
    currency: "INR",
    category: "necklaces",
    collection: "signature",
    materials: ["18k Yellow Gold"],
    images: ["/solischoker.jpg"],
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
    price: 215800,
    currency: "INR",
    category: "earrings",
    collection: "contour",
    materials: ["18k Yellow Gold"],
    images: ["https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop"],
    sizes: ["One Size"],
    featured: false,
    newArrival: false,
    bestSeller: false,
  }
];

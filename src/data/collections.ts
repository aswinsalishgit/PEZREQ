export type Collection = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
};

export const collections: Collection[] = [
  {
    id: "col_signature",
    slug: "signature",
    name: "Signature",
    description: "Our defining aesthetic. Bold, architectural, and timeless pieces designed to be the foundation of your collection.",
    image: "/placeholder-collection.jpg",
  },
  {
    id: "col_contour",
    slug: "contour",
    name: "Contour",
    description: "A study in fluidity. Sculpted to trace the natural lines of the body.",
    image: "/placeholder-collection.jpg",
  },
  {
    id: "col_noir",
    slug: "noir",
    name: "Noir",
    description: "The interplay of light and shadow, featuring black rhodium and diamonds.",
    image: "/placeholder-collection.jpg",
  },
  {
    id: "col_everyday",
    slug: "everyday",
    name: "Everyday Edition",
    description: "Refined essentials crafted for daily wear. Subtle luxury that seamlessly integrates into your life.",
    image: "/placeholder-collection.jpg",
  }
];

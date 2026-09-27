export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    id: "cat_rings",
    slug: "rings",
    name: "Rings",
    description: "Architectural rings crafted to trace the contours of the hand.",
    image: "/placeholder-collection.jpg",
  },
  {
    id: "cat_necklaces",
    slug: "necklaces",
    name: "Necklaces",
    description: "Structural elegance designed to sit perfectly on the collarbone.",
    image: "/placeholder-collection.jpg",
  },
  {
    id: "cat_bracelets",
    slug: "bracelets",
    name: "Bracelets",
    description: "Cuffs and bracelets that balance solid form with fluid movement.",
    image: "/placeholder-collection.jpg",
  },
  {
    id: "cat_earrings",
    slug: "earrings",
    name: "Earrings",
    description: "Sculptural expressions of light and space.",
    image: "/placeholder-collection.jpg",
  }
];

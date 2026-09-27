export type Collection = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
};

export const collections: Collection[] = [
  {
    id: "c1",
    slug: "signature",
    name: "Signature",
    description: "Our defining aesthetic. Bold, architectural, and timeless pieces designed to be the foundation of your collection.",
    image: "/placeholder-collection.jpg",
  },
  {
    id: "c2",
    slug: "new-arrivals",
    name: "New Arrivals",
    description: "The latest expressions of our design philosophy, featuring new forms and unexpected material combinations.",
    image: "/placeholder-collection.jpg",
  },
  {
    id: "c3",
    slug: "everyday",
    name: "Everyday Essentials",
    description: "Refined pieces crafted for daily wear. Subtle luxury that seamlessly integrates into your life.",
    image: "/placeholder-collection.jpg",
  },
  {
    id: "c4",
    slug: "occasion",
    name: "Special Occasion",
    description: "Extraordinary designs and rare gemstones for life's most memorable moments.",
    image: "/placeholder-collection.jpg",
  }
];

export type JournalEntry = {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[]; // array of paragraphs for simplicity
  images: string[];
};

export const journalEntries: JournalEntry[] = [
  {
    id: "j_language_of_form",
    slug: "the-language-of-form",
    title: "The Language of Form",
    category: "Design",
    date: "September 12, 2026",
    readTime: "4 MIN READ",
    excerpt: "Exploring the tension between solid architecture and human fluidity in modern jewellery design.",
    content: [
      "At PEZREQ, we view jewellery not merely as adornment, but as architecture for the body. Every piece we create begins with a fundamental question: how does form interact with the human silhouette?",
      "The language of form is inherently silent, yet it speaks volumes through weight, tension, and light. A ring is not just a circle of gold; it is a boundary, a definition of space. When we design the Contour collection, we are not sketching jewellery; we are drafting structural elements designed to withstand the test of time and trend.",
      "Restraint is our most vital tool. In an era of visual noise, there is profound power in stripping an object down to its most essential geometric truth. It takes more confidence to leave a surface unembellished than it does to cover it in diamonds. We rely on the absolute perfection of the polish, the exactness of the bevel, and the honesty of the material to convey luxury.",
      "The result is a collection that does not demand attention, but commands it. It is design that serves the wearer, creating a dialogue between the rigid geometry of the object and the fluid motion of the human form."
    ],
    images: ["https://images.unsplash.com/photo-1599643478524-fb5244098775?q=80&w=2000&auto=format&fit=crop", "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=2000&auto=format&fit=crop"],
  },
  {
    id: "j_gold_light_shadow",
    slug: "gold-light-and-shadow",
    title: "Gold, Light and Shadow",
    category: "Materials",
    date: "August 24, 2026",
    readTime: "3 MIN READ",
    excerpt: "Why the manipulation of light is just as important as the manipulation of metal.",
    content: [
      "If gold is our medium, then light is our subject. The true artistry of a goldsmith is not found in the melting or casting, but in the final stages of polishing, where the surface is taught how to interact with its environment.",
      "A mirror polish creates a surface that reflects the world around it, camouflaging the metal while drawing attention to its brilliance. A satin finish, conversely, absorbs light, forcing the eye to appreciate the volume and mass of the piece itself. At PEZREQ, we utilize both to create contrast and tension within a single object.",
      "Consider the Noir collection. By pairing 18k white gold with black rhodium plating, we create deliberate shadows that make the interspersed diamonds appear to float in a void. We are not just setting stones; we are orchestrating how light enters and exits the piece.",
      "Light is the only element of our jewellery that we cannot physically control, yet it is the element that brings the architecture to life. Understanding this relationship is the difference between making an object and crafting an experience."
    ],
    images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2000&auto=format&fit=crop"],
  },
  {
    id: "j_designing_everyday_ritual",
    slug: "designing-jewellery-for-everyday-ritual",
    title: "Designing Jewellery for Everyday Ritual",
    category: "Philosophy",
    date: "August 10, 2026",
    readTime: "5 MIN READ",
    excerpt: "How we create pieces that transcend special occasions to become integral to daily life.",
    content: [
      "The concept of 'fine jewellery' has long been relegated to velvet boxes, only to see the light of day on special occasions. PEZREQ was founded on the rejection of this premise. We believe that true luxury should be lived in, not stored away.",
      "This philosophy fundamentally alters how we design. A piece intended for daily wear must possess an inherent structural integrity. It must be comfortable. It must integrate seamlessly with a wardrobe, rather than overpowering it. It becomes a ritual—the final thing you put on in the morning, and the last thing you take off at night.",
      "When we developed the Everyday Edition, we focused on ergonomics. How does a cuff rest against a laptop? Does a pendant interfere with the collar of a shirt? These micro-interactions dictate the success of a design far more than its initial visual impact.",
      "By elevating these daily essentials with uncompromising materials and Swiss precision, we transform the mundane act of dressing into a private moment of luxury."
    ],
    images: ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2000&auto=format&fit=crop"],
  },
  {
    id: "j_art_of_restraint",
    slug: "the-art-of-restraint",
    title: "The Art of Restraint",
    category: "Design",
    date: "July 28, 2026",
    readTime: "3 MIN READ",
    excerpt: "Why what we choose not to do defines us as much as what we create.",
    content: [
      "In design, addition is easy. It is simple to add another stone, another flourish, another detail to mask a structural flaw. Subtraction is difficult. When a piece is reduced to its absolute minimum, there is nowhere to hide.",
      "The art of restraint is the core tenet of the PEZREQ aesthetic. We constantly ask ourselves: what can be removed without losing the essence of the design? This rigorous editing process often results in hundreds of discarded iterations before a final form is achieved.",
      "This minimalist approach requires flawless execution. When the eye is not distracted by ornate details, it immediately notices the quality of the craftsmanship. A perfectly straight line, a flawless curve, an invisible setting—these are the hallmarks of a confident design language.",
      "Restraint is not the absence of design; it is the ultimate expression of it."
    ],
    images: ["https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2000&auto=format&fit=crop"],
  },
  {
    id: "j_inside_pezreq_studio",
    slug: "inside-the-pezreq-studio",
    title: "Inside the PEZREQ Studio",
    category: "Atelier",
    date: "July 05, 2026",
    readTime: "4 MIN READ",
    excerpt: "A look into the environment where traditional craftsmanship meets modern engineering.",
    content: [
      "The PEZREQ studio is a space of deliberate contrast. On one side, traditional goldsmithing benches worn smooth by years of use, housing hand tools that have not changed in centuries. On the other, advanced CNC machines and precision lasers capable of tolerances measured in microns.",
      "We believe that the future of high jewellery lies in the intersection of these two worlds. We use technology not to replace the artisan, but to augment their capabilities. A 3D printer allows us to rapidly prototype ergonomic curves, but it is the hand of the master polisher that imparts the final, flawless finish.",
      "Our atelier is quiet, focused, and immaculate. The environment reflects the work. Each artisan is given the time and space required to execute perfection. We do not rush. We do not compromise.",
      "This meticulous environment is the birthplace of every PEZREQ piece, ensuring that the physical object perfectly matches the uncompromising vision of the design."
    ],
    images: ["/atelier.jpg"],
  }
];

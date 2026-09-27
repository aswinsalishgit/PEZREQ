"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full border-t border-glass-border mt-12">
      {items.map((item, index) => (
        <div key={index} className="border-b border-glass-border">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center py-6 focus:outline-none hover:opacity-70 transition-opacity group"
            aria-expanded={openIndex === index}
          >
            <span className="text-nav uppercase tracking-widest text-pezreq-charcoal">{item.title}</span>
            <div className="text-pezreq-charcoal/50 group-hover:text-pezreq-charcoal transition-colors">
              {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            </div>
          </button>
          
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="pb-8 text-body text-pezreq-charcoal/80 leading-relaxed font-light">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

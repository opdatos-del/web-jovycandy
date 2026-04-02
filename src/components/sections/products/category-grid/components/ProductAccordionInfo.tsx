import { AnimatePresence, motion } from 'motion/react';
import { Minus, Plus } from 'lucide-react';

import type { CatalogInfoItem } from '../types/catalog.types';

type ProductAccordionInfoProps = {
  items: CatalogInfoItem[];
  activeInfoIndex: number | null;
  onInfoToggle: (index: number) => void;
};

export const ProductAccordionInfo = ({ items, activeInfoIndex, onInfoToggle }: ProductAccordionInfoProps) => (
  <div className="space-y-1">
    {items.map((item, index) => (
      <div key={`${item.title}-${index}`} className="border-b border-stone-200">
        <button onClick={() => onInfoToggle(index)} className="flex w-full items-center justify-between py-2 text-left group">
          <span className="pr-3 text-xs font-bold uppercase tracking-[0.18em] text-stone-700 transition-colors group-hover:text-stone-900 sm:tracking-widest">
            {item.title}
          </span>
          <span className="text-stone-400 group-hover:text-stone-600 transition-colors">
            {activeInfoIndex === index ? <Minus size={12} /> : <Plus size={12} />}
          </span>
        </button>
        <AnimatePresence>
          {activeInfoIndex === index && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="pb-3 text-stone-600 text-xs font-medium leading-relaxed">{item.content}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    ))}
  </div>
);

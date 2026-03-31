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
        <button onClick={() => onInfoToggle(index)} className="w-full py-2 flex justify-between items-center text-left group">
          <span className="text-xs uppercase tracking-widest font-bold text-stone-700 group-hover:text-stone-900 transition-colors">
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

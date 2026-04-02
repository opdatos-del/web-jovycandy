import { CATEGORY_GRID_EMPTY_STATE } from '../constants/catalog.constants';
import { ScrollReveal } from '../../../../ui/ScrollReveal';

export const EmptyState = () => (
  <ScrollReveal className="w-full lg:w-4/5" direction="right" distance={30} delay={0.12}>
    <div className="flex min-h-[400px] items-center justify-center rounded-xl border border-stone-200 bg-[#faf5f0] opacity-95">
      <p className="text-stone-500 uppercase tracking-widest font-mono text-sm">{CATEGORY_GRID_EMPTY_STATE}</p>
    </div>
  </ScrollReveal>
);

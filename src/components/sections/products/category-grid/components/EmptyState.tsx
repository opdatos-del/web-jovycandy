import { CATEGORY_GRID_EMPTY_STATE } from '../constants/catalog.constants';
import { ScrollReveal } from '../../../../ui/ScrollReveal';

export const EmptyState = () => (
  <ScrollReveal className="w-full min-w-0 xl:flex-1" direction="right" distance={30} delay={0.12}>
    <div className="flex min-h-[260px] items-center justify-center rounded-xl border border-stone-200 bg-[#faf5f0] p-6 opacity-95 sm:min-h-[320px] lg:min-h-[400px]">
      <p className="text-center font-mono text-sm uppercase tracking-[0.18em] text-stone-500 sm:tracking-widest">
        {CATEGORY_GRID_EMPTY_STATE}
      </p>
    </div>
  </ScrollReveal>
);

import { CATEGORY_GRID_EMPTY_STATE } from '../constants/catalog.constants';

export const EmptyState = () => (
  <div className="w-full lg:w-4/5 flex items-center justify-center opacity-95 min-h-[400px] border border-stone-200 rounded-xl bg-[#faf5f0]">
    <p className="text-stone-500 uppercase tracking-widest font-mono text-sm">{CATEGORY_GRID_EMPTY_STATE}</p>
  </div>
);

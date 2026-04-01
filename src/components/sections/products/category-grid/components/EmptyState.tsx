import { CATEGORY_GRID_EMPTY_STATE } from '../constants/catalog.constants';

export const EmptyState = () => (
  <div className="w-full lg:w-4/5 flex items-center justify-center opacity-85 min-h-[400px] border border-white/20 rounded-xl bg-white/10">
    <p className="text-white/80 uppercase tracking-widest font-mono text-sm">{CATEGORY_GRID_EMPTY_STATE}</p>
  </div>
);

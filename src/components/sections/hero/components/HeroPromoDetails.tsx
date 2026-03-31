import type { HeroPromo, HeroSceneRefs } from '../types/hero.types';

type HeroPromoDetailsProps = Pick<HeroSceneRefs, 'detailRef'> & {
  promo: HeroPromo;
};

export const HeroPromoDetails = ({ detailRef, promo }: HeroPromoDetailsProps) => (
  <div
    ref={detailRef}
    className="absolute bottom-20 left-1/2 flex w-[min(90vw,34rem)] -translate-x-1/2 flex-col items-center text-center md:bottom-24"
  >
    <div className="rounded-full border border-white/45 bg-white/20 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white backdrop-blur-xl md:text-[11px]">
      {promo.label}
    </div>
    <p className="mt-3 max-w-lg text-xs font-medium leading-relaxed text-white/88 md:text-sm">
      {promo.note}
    </p>
  </div>
);

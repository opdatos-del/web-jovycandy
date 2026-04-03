import type { HeroPromo, HeroSceneRefs } from '../types/hero.types';

type HeroPromoDetailsProps = Pick<HeroSceneRefs, 'detailRef'> & {
  promo: HeroPromo;
};

export const HeroPromoDetails = ({ detailRef, promo }: HeroPromoDetailsProps) => (
  <div
    ref={detailRef}
    className="hero-promo-details absolute left-1/2 flex -translate-x-1/2 flex-col items-center text-center"
  >
    <div className="rounded-full border border-white/45 bg-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-xl sm:text-sm sm:tracking-[0.24em]">
      {promo.label}
    </div>
    <p className="mt-3 max-w-[22rem] text-sm font-medium leading-relaxed text-white/88 sm:max-w-lg sm:text-base">
      {promo.note}
    </p>
  </div>
);

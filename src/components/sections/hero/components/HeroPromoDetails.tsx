import type { HeroPromo, HeroSceneRefs } from '../types/hero.types';

type HeroPromoDetailsProps = Pick<HeroSceneRefs, 'detailRef'> & {
  promo: HeroPromo;
};

export const HeroPromoDetails = ({ detailRef, promo }: HeroPromoDetailsProps) => (
  <div
    ref={detailRef}
    className="hero-promo-details absolute left-1/2 flex -translate-x-1/2 flex-col items-center text-center"
  >
    <div className="rounded-full border border-white/45 bg-white/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-xl sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em] lg:text-sm lg:tracking-[0.24em]">
      {promo.label}
    </div>
    <p className="mt-2 sm:mt-3 max-w-[20rem] text-xs sm:text-sm font-medium leading-relaxed text-white/88 sm:max-w-lg md:max-w-2xl lg:text-base xl:text-lg">
      {promo.note}
    </p>
  </div>
);

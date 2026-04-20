import type { HeroPromo, HeroSceneRefs } from '../types/hero.types';

type HeroPromoDetailsProps = Pick<HeroSceneRefs, 'detailRef'> & {
  promo: HeroPromo;
};

export const HeroPromoDetails = ({ detailRef, promo }: HeroPromoDetailsProps) => (
  <div
    ref={detailRef}
    className="hero-promo-details absolute left-1/2 flex -translate-x-1/2 flex-col items-center text-center"
  >
    <div className="hero-promo-chip rounded-full border border-white/45 bg-white/20 font-bold uppercase text-white backdrop-blur-xl">
      {promo.label}
    </div>
    <p className="hero-promo-note font-medium text-white/88">
      {promo.note}
    </p>
  </div>
);

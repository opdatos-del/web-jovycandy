import type { HeroPromo, HeroSceneRefs } from '../types/hero.types';

type HeroPromoDetailsProps = Pick<HeroSceneRefs, 'detailRef'> & {
  promo: HeroPromo;
};

export const HeroPromoDetails = ({ detailRef, promo }: HeroPromoDetailsProps) => (
  <div
    ref={detailRef}
    className="hero-promo-details relative z-20 flex w-full flex-col items-center text-center md:absolute md:left-1/2 md:-translate-x-1/2"
  >
    <div className="hero-promo-chip rounded-full border border-white/45 bg-white/20 font-bold uppercase text-white backdrop-blur-xl">
      {promo.label}
    </div>
    <div className="hero-promo-note-shell">
      <p className="hero-promo-note font-medium text-white/92">
        {promo.note}
      </p>
    </div>
  </div>
);

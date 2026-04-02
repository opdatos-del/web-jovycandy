import { getHeroPromoStyle } from '../utils/getHeroPromoStyle';
import type { HeroPromo, HeroSceneRefs, SetHeroImageRef } from '../types/hero.types';

type HeroPromoStageProps = {
  activePromo: HeroPromo;
  promos: HeroPromo[];
  raysRef: HeroSceneRefs['raysRef'];
  setImageRef: SetHeroImageRef;
};

const promoStageItemClassName =
  'pointer-events-none absolute left-1/2 top-[var(--promo-top-mobile)] w-[var(--promo-width-mobile)] -translate-x-1/2 -translate-y-1/2 md:top-[var(--promo-top-desktop)] md:w-[var(--promo-width-desktop)]';

const raysStyle = {
  backgroundImage:
    'repeating-conic-gradient(from 0deg, rgba(255,255,255,0.75) 0deg 5deg, rgba(255,255,255,0) 5deg 20deg)',
  WebkitMaskImage:
    'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 16%, rgba(0,0,0,0) 80%)',
  maskImage:
    'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 16%, rgba(0,0,0,0) 80%)',
} as const;

export const HeroPromoStage = ({ activePromo, promos, raysRef, setImageRef }: HeroPromoStageProps) => (
  <div className="hero-promo-stage relative z-10 mx-auto w-full max-w-5xl">
    <div className={`${promoStageItemClassName} z-0`} style={getHeroPromoStyle(activePromo)} aria-hidden="true">
      <div className="relative aspect-square w-full translate-y-[var(--promo-offset-mobile)] md:translate-y-[var(--promo-offset-desktop)]">
        <div
          ref={raysRef}
          className="hero-promo-rays absolute left-1/2 top-[var(--promo-rays-anchor-top-mobile)] md:top-[var(--promo-rays-anchor-top-desktop)] -translate-x-1/2 -translate-y-1/2"
          style={raysStyle}
        />
      </div>
    </div>

    {promos.map((promo, index) => (
      <div key={promo.id} className={`${promoStageItemClassName} z-10`} style={getHeroPromoStyle(promo)}>
        <div className="translate-y-[var(--promo-offset-mobile)] md:translate-y-[var(--promo-offset-desktop)]">
          <img
            ref={setImageRef(index)}
            src={promo.src}
            alt={promo.alt}
            loading={index === 0 ? 'eager' : 'lazy'}
            className="block h-auto w-full object-contain drop-shadow-[0_30px_50px_rgba(76,46,14,0.22)]"
          />
        </div>
      </div>
    ))}
  </div>
);

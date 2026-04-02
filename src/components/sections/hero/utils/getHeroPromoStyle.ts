import type { HeroPromo, HeroPromoStyle } from '../types/hero.types';

export const getHeroPromoStyle = (promo: HeroPromo): HeroPromoStyle => ({
  '--promo-top-mobile': promo.imageTop.mobile,
  '--promo-top-desktop': promo.imageTop.desktop,
  '--promo-width-mobile': promo.imageWidth.mobile,
  '--promo-width-desktop': promo.imageWidth.desktop,
  '--promo-offset-mobile': promo.imageOffset.mobile,
  '--promo-offset-desktop': promo.imageOffset.desktop,
  '--promo-rays-anchor-top-mobile': promo.raysAnchorTop.mobile,
  '--promo-rays-anchor-top-desktop': promo.raysAnchorTop.desktop,
});

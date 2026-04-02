import type { CSSProperties, MutableRefObject, RefObject } from 'react';

export type HeroResponsiveValue = {
  mobile: string;
  desktop: string;
};

export type HeroPromo = {
  id: string;
  src: string;
  alt: string;
  label: string;
  note: string;
  accent: string;
  secondary: string;
  shadow: string;
  imageTop: HeroResponsiveValue;
  imageWidth: HeroResponsiveValue;
  imageOffset: HeroResponsiveValue;
  raysAnchorTop: HeroResponsiveValue;
};

export type HeroBackgroundRow = {
  id: number;
  offsetClass: string;
};

export type HeroPromoStyle = CSSProperties & {
  '--promo-top-mobile': string;
  '--promo-top-desktop': string;
  '--promo-width-mobile': string;
  '--promo-width-desktop': string;
  '--promo-offset-mobile': string;
  '--promo-offset-desktop': string;
  '--promo-rays-anchor-top-mobile': string;
  '--promo-rays-anchor-top-desktop': string;
};

export type HeroSceneRefs = {
  sectionRef: RefObject<HTMLElement | null>;
  stageRef: RefObject<HTMLDivElement | null>;
  shellRef: RefObject<HTMLDivElement | null>;
  backgroundRef: RefObject<HTMLDivElement | null>;
  headlineRef: RefObject<HTMLHeadingElement | null>;
  detailRef: RefObject<HTMLDivElement | null>;
  haloRef: RefObject<HTMLDivElement | null>;
  glowRef: RefObject<HTMLDivElement | null>;
  raysRef: RefObject<HTMLDivElement | null>;
  imageRefs: MutableRefObject<Array<HTMLImageElement | null>>;
};

export type SetHeroImageRef = (index: number) => (element: HTMLImageElement | null) => void;

export type UseHeroResult = {
  activeIndex: number;
  activePromo: HeroPromo;
  promos: HeroPromo[];
  refs: HeroSceneRefs;
  setImageRef: SetHeroImageRef;
};

import type { HeroSceneRefs } from '../types/hero.types';

type HeroHeadingProps = Pick<HeroSceneRefs, 'headlineRef'>;

export const HeroHeading = ({ headlineRef }: HeroHeadingProps) => (
  <h1
    ref={headlineRef}
    className="pointer-events-none relative -top-16 z-0 mt-12 w-full max-w-[1120px] select-none text-center font-black uppercase leading-[0.86] tracking-[-0.08em] text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)] md:-top-24 md:mt-16"
    style={{ fontSize: 'clamp(3.25rem, 8.8vw, 7.4rem)' }}
  >
    <span className="block md:inline">NUEVOS</span>{' '}
    <span className="block md:inline">PRODUCTOS</span>
  </h1>
);

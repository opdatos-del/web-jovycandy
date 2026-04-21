import type { HeroSceneRefs } from '../types/hero.types';

type HeroHeadingProps = Pick<HeroSceneRefs, 'headlineRef'> & {
  title: string;
};

export const HeroHeading = ({ headlineRef, title }: HeroHeadingProps) => (
  <h1
    ref={headlineRef}
    className="hero-heading pointer-events-none relative z-0 mx-auto w-full max-w-[min(96vw,calc(var(--hero-max-width)*var(--display-scale)))] select-none px-2 text-center font-black uppercase leading-[0.86] tracking-[-0.08em] text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)] sm:px-4"
    style={{ fontSize: 'clamp(2.55rem, calc(9.25vw * var(--display-scale)), 12rem)' }}
  >
    {title}
  </h1>
);

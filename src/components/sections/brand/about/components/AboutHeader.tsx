import type { AboutContent } from '../types/about.types';

type AboutHeaderProps = {
  content: AboutContent;
};

export const AboutHeader = ({ content }: AboutHeaderProps) => (
  <>
    <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-stone-400">
      {content.eyebrow}
    </p>

    <h2 className="mt-6 text-5xl font-light uppercase leading-none tracking-tighter text-stone-900 md:text-7xl">
      {content.titleLines[0]}
      <br />
      {content.titleLines[1]}
    </h2>

    <p className="mt-6 max-w-lg text-lg font-light leading-relaxed text-stone-600 md:text-[1.15rem]">
      {content.description}
    </p>
  </>
);

import type { AboutContent } from '../types/about.types';

type AboutHeaderProps = {
  content: AboutContent;
};

export const AboutHeader = ({ content }: AboutHeaderProps) => (
  <>
    <div className="flex items-center gap-4">
      <span className="h-px w-12 bg-stone-300" />
      <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-stone-400">
        {content.eyebrow}
      </p>
    </div>

    <h2 className="mt-8 max-w-[8ch] text-5xl font-light uppercase leading-[0.92] tracking-[-0.06em] text-stone-900 md:text-6xl xl:text-7xl">
      {content.titleLines[0]}
      <br />
      {content.titleLines[1]}
    </h2>

    <p className="mt-6 max-w-[34rem] text-base font-light leading-relaxed text-stone-600 md:text-[1.05rem] xl:text-[1.12rem]">
      {content.description}
    </p>
  </>
);

import type { AboutContent } from '../types/about.types';

type AboutHeaderProps = {
  content: AboutContent;
};

export const AboutHeader = ({ content }: AboutHeaderProps) => (
  <>
    <div className="flex items-center gap-3 sm:gap-4">
      <span className="h-px w-10 bg-stone-300 sm:w-12" />
      <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-stone-400 sm:tracking-[0.5em]">
        {content.eyebrow}
      </p>
    </div>

    <h2 className="mt-6 max-w-[10ch] text-4xl font-light uppercase leading-[0.92] tracking-[-0.06em] text-stone-900 sm:mt-8 sm:max-w-[8ch] sm:text-5xl lg:text-6xl xl:text-7xl">
      {content.titleLines[0]}
      <br />
      {content.titleLines[1]}
    </h2>

    <p className="mt-5 max-w-[34rem] text-[0.98rem] font-light leading-relaxed text-stone-600 sm:mt-6 md:text-[1.05rem] xl:text-[1.12rem]">
      {content.description}
    </p>
  </>
);

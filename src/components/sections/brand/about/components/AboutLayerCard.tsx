import type { AboutLayer } from '../types/about.types';

type AboutLayerCardProps = {
  item: AboutLayer;
};

export const AboutLayerCard = ({ item }: AboutLayerCardProps) => (
  <article className="relative min-h-[13.5rem] overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-[0_24px_60px_-50px_rgba(28,25,23,0.22)] lg:p-7">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-36">
      <div
        className="mx-auto h-full w-[75%] rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${item.tone} 0%, rgba(255,255,255,0) 72%)`,
        }}
      />
    </div>

    <div className="relative flex items-start justify-between gap-6">
      <div>
        <p className="text-[10px] font-mono uppercase tracking-[0.45em] text-stone-400">
          {item.kicker}
        </p>
        <h3 className="mt-5 max-w-[13ch] text-[1.9rem] font-light leading-tight tracking-tight text-stone-900">
          {item.title}
        </h3>
      </div>

      <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-stone-50 md:flex">
        <div className="h-5 w-5 rounded-full bg-stone-200" />
      </div>
    </div>

    <div className="relative mt-5">
      <p className="max-w-lg text-[0.96rem] font-light leading-relaxed text-stone-600">
        {item.body}
      </p>

      <div className="mt-6 flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.35em] text-stone-500">
        <span className="h-px w-10 bg-stone-300" />
        <span>{item.detail}</span>
      </div>
    </div>
  </article>
);

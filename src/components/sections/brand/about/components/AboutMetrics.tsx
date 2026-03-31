import type { AboutMetric } from '../types/about.types';

type AboutMetricsProps = {
  metrics: AboutMetric[];
};

export const AboutMetrics = ({ metrics }: AboutMetricsProps) => (
  <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 xl:gap-4">
    {metrics.map((metric) => (
      <div
        key={metric.label}
        className="rounded-[1.2rem] border border-stone-200 bg-white/80 px-4 py-4 shadow-[0_18px_45px_-40px_rgba(28,25,23,0.28)] backdrop-blur"
      >
        <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-stone-400">
          {metric.label}
        </p>
        <p className="mt-3 text-xs font-light uppercase tracking-[0.22em] text-stone-700 sm:text-sm">
          {metric.value}
        </p>
      </div>
    ))}
  </div>
);

import type { AboutMetric } from '../types/about.types';

type AboutMetricsProps = {
  metrics: AboutMetric[];
};

export const AboutMetrics = ({ metrics }: AboutMetricsProps) => (
  <div className="mt-8 grid max-w-xl grid-cols-2 gap-3">
    {metrics.map((metric) => (
      <div key={metric.label} className="border-t border-stone-200 pt-4">
        <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-stone-400">
          {metric.label}
        </p>
        <p className="mt-3 text-sm font-light uppercase tracking-[0.22em] text-stone-700">
          {metric.value}
        </p>
      </div>
    ))}
  </div>
);

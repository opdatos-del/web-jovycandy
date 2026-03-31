import type { RefObject } from 'react';

import type { AboutLayer } from '../types/about.types';
import { AboutLayerCard } from './AboutLayerCard';

type AboutLayersProps = {
  layers: AboutLayer[];
  viewportRef: RefObject<HTMLDivElement | null>;
  trackRef: RefObject<HTMLDivElement | null>;
};

export const AboutLayers = ({ layers, viewportRef, trackRef }: AboutLayersProps) => (
  <div className="relative lg:border-l lg:border-black lg:pl-10">
    <div
      ref={viewportRef}
      className="relative lg:h-[calc(100vh-10rem)] lg:overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-8 z-10 hidden h-36 bg-gradient-to-b from-white via-white/95 via-white/80 to-transparent lg:block" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-8 z-10 hidden h-36 bg-gradient-to-t from-white via-white/95 via-white/80 to-transparent lg:block" />

      <div ref={trackRef} className="flex flex-col gap-5 lg:gap-6 lg:py-24">
        {layers.map((item) => (
          <AboutLayerCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  </div>
);

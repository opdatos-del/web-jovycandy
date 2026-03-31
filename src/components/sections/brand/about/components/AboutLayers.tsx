import type { RefObject } from 'react';

import type { AboutLayer } from '../types/about.types';
import { AboutLayerCard } from './AboutLayerCard';

type AboutLayersProps = {
  layers: AboutLayer[];
  layersRef: RefObject<HTMLDivElement | null>;
};

export const AboutLayers = ({ layers, layersRef }: AboutLayersProps) => (
  <div className="relative">
    <div className="relative rounded-[2rem] border border-stone-200/80 bg-stone-50/65 p-4 shadow-[0_28px_80px_-65px_rgba(28,25,23,0.28)] backdrop-blur-sm sm:p-5 lg:p-6">
      <div ref={layersRef} className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
        {layers.map((item) => (
          <AboutLayerCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  </div>
);

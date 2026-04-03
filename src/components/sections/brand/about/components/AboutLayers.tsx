import type { RefObject } from 'react';

import type { AboutLayer } from '../types/about.types';
import { AboutLayerCard } from './AboutLayerCard';

type AboutLayersProps = {
  layers: AboutLayer[];
  layersRef: RefObject<HTMLDivElement | null>;
};

export const AboutLayers = ({ layers, layersRef }: AboutLayersProps) => (
  <div className="relative">
    <div className="relative rounded-[1.5rem] border border-[#e2d6cc] bg-white/78 p-3 shadow-[0_28px_80px_-65px_rgba(28,25,23,0.24)] backdrop-blur-sm sm:rounded-[2rem] sm:p-5 lg:p-6">
      <div ref={layersRef} className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
        {layers.map((item) => (
          <AboutLayerCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  </div>
);

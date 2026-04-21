import type { RefObject } from 'react';

import type { AboutLayer } from '../types/about.types';
import { AboutLayerCard } from './AboutLayerCard';

type AboutLayersProps = {
  layers: AboutLayer[];
  layersRef: RefObject<HTMLDivElement | null>;
};

export const AboutLayers = ({ layers, layersRef }: AboutLayersProps) => (
  <div className="relative">
    <div className="relative rounded-lg sm:rounded-xl lg:rounded-[1.5rem] border border-[#e2d6cc] bg-white/78 p-2.5 sm:p-4 lg:p-5 xl:p-6 shadow-[0_28px_80px_-65px_rgba(28,25,23,0.24)] backdrop-blur-sm">
      <div ref={layersRef} className="grid grid-cols-1 gap-2 sm:gap-2.5 lg:grid-cols-2 lg:gap-3 xl:gap-4">
        {layers.map((item) => (
          <AboutLayerCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  </div>
);

import { useState } from 'react';
import type { MouseEvent } from 'react';

import type { CatalogProduct, TooltipState } from '../types/catalog.types';

export const useTooltipPosition = () => {
  const [tooltipState, setTooltipState] = useState<TooltipState>({
    hoveredProduct: null,
    mousePosition: { x: 0, y: 0 },
  });

  const handleProductHoverStart = (product: CatalogProduct) => {
    setTooltipState((currentState) => ({
      ...currentState,
      hoveredProduct: product,
    }));
  };

  const handleProductHoverEnd = () => {
    setTooltipState((currentState) => ({
      ...currentState,
      hoveredProduct: null,
    }));
  };

  const handleTooltipMouseMove = (event: MouseEvent<HTMLElement>) => {
    setTooltipState((currentState) => ({
      ...currentState,
      mousePosition: {
        x: event.clientX,
        y: event.clientY,
      },
    }));
  };

  return {
    hoveredProduct: tooltipState.hoveredProduct,
    mousePosition: tooltipState.mousePosition,
    handleProductHoverStart,
    handleProductHoverEnd,
    handleTooltipMouseMove,
  };
};

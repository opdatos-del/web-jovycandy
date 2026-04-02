import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';

import type { CatalogProduct, TooltipState } from '../types/catalog.types';

export const useTooltipPosition = () => {
  const [isHoverEnabled, setIsHoverEnabled] = useState(() =>
    typeof window === 'undefined'
      ? false
      : window.matchMedia('(hover: hover) and (pointer: fine)').matches
  );
  const [tooltipState, setTooltipState] = useState<TooltipState>({
    hoveredProduct: null,
    mousePosition: { x: 0, y: 0 },
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const updateHoverState = (event?: MediaQueryListEvent) => {
      const matches = event?.matches ?? mediaQuery.matches;
      setIsHoverEnabled(matches);

      if (!matches) {
        setTooltipState((currentState) => ({
          ...currentState,
          hoveredProduct: null,
        }));
      }
    };

    updateHoverState();
    mediaQuery.addEventListener('change', updateHoverState);

    return () => {
      mediaQuery.removeEventListener('change', updateHoverState);
    };
  }, []);

  const handleProductHoverStart = (product: CatalogProduct) => {
    if (!isHoverEnabled) {
      return;
    }

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
    if (!isHoverEnabled) {
      return;
    }

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

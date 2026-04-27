import { useMemo, useState } from 'react';

import {
  buildCatalogPanelState,
  getCatalogCategories,
  getNextLogoState,
} from '../services/catalog-panel.service';
import type { CatalogCategoryId, CatalogPanelState } from '../types/catalog.types';

const INITIAL_PANEL_STATE: CatalogPanelState = {
  isOpen: false,
  categoryId: null,
  categoryTitle: '',
  products: [],
  originalProducts: [],
  accentColor: '',
  logoSrc: '',
  logoAlt: '',
  currentLogoIndex: 0,
  availableLogos: [],
};

export const useCatalogFacade = () => {
  const [panelState, setPanelState] = useState<CatalogPanelState>(INITIAL_PANEL_STATE);
  const categories = useMemo(() => getCatalogCategories(), []);

  const handleCategoryClick = (categoryId: CatalogCategoryId) => {
    setPanelState((currentState) => buildCatalogPanelState(currentState, categoryId));
  };

  const handleLogoNavigation = (direction: 'prev' | 'next') => {
    setPanelState((currentState) => {
      const nextLogoState = getNextLogoState(currentState, direction);

      if (!nextLogoState) {
        return currentState;
      }

      return {
        ...currentState,
        ...nextLogoState,
      };
    });
  };

  return {
    categories,
    panelState,
    handleCategoryClick,
    handleLogoNavigation,
  };
};

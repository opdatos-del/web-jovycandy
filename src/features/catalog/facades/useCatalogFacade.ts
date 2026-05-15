/**
 * useCatalogFacade — Custom hook owning catalog panel state.
 *
 * Acts as a facade/hook API around the pure service functions in catalog-panel.service.ts.
 * This separates state ownership from business logic:
 * - Service functions (catalog-panel.service.ts): pure, stateless, no React dependencies
 * - This hook: owns state via useState, computes derived values, provides handlers
 *
 * State managed here:
 * - panelState: the full current state of the category panel (open/closed, category, products, logo)
 * - categories: cached list of all category cards (computed once via useMemo)
 *
 * Handlers:
 * - handleCategoryClick: updates panel to open/close a category (via buildCatalogPanelState)
 * - handleLogoNavigation: updates logo (prev/next) within an open category (via getNextLogoState)
 *
 * This pattern avoids CategoryGrid needing to know about service internals.
 * CategoryGrid just calls handleCategoryClick(id) and reads panelState.
 */
import { useEffect, useMemo, useState } from 'react';

import {
  buildCatalogPanelState,
  getCatalogCategories,
  getNextLogoState,
} from '../services/catalog-panel.service';
import type { CatalogCategoryId, CatalogPanelState } from '../types/catalog.types';
import { fetchCatalogSource } from '../services/catalog-api.service';
import { STATIC_CATALOG_SOURCE, type CatalogSource } from '../data/catalogData';

/** Default/initial state for the panel — all fields empty/null, panel closed */
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
  /** The current panel state — driving the ProductCarouselCentered display */
  const [panelState, setPanelState] = useState<CatalogPanelState>(INITIAL_PANEL_STATE);
  const [catalogSource, setCatalogSource] = useState<CatalogSource>(STATIC_CATALOG_SOURCE);

  /**
   * Categories list — computed once and cached.
   * getCatalogCategories() is a pure function, but we wrap in useMemo so it's
   * not re-run on every render (the array is stable after mount).
   */
  const categories = useMemo(() => getCatalogCategories(catalogSource), [catalogSource]);

  useEffect(() => {
    const controller = new AbortController();

    fetchCatalogSource(controller.signal)
      .then((source) => {
        setCatalogSource(source);
      })
      .catch((error) => {
        if (controller.signal.aborted) return;
        console.warn('[catalog] Falling back to static catalog data:', error);
      });

    return () => controller.abort();
  }, []);

  useEffect(() => {
    setPanelState((currentState) => {
      if (!currentState.isOpen || !currentState.categoryId) {
        return currentState;
      }

      return {
        ...buildCatalogPanelState(
          {
            ...currentState,
            isOpen: false,
          },
          currentState.categoryId,
          catalogSource
        ),
        isOpen: true,
      };
    });
  }, [catalogSource]);

  /**
   * Handles category card click — opens the panel for that category, or closes if already open.
   * Delegates to buildCatalogPanelState for the new state.
   *
   * @param categoryId - ID of the category being selected
   */
  const handleCategoryClick = (categoryId: CatalogCategoryId) => {
    setPanelState((currentState) => buildCatalogPanelState(currentState, categoryId, catalogSource));
  };

  /**
   * Handles logo prev/next navigation within an open category panel.
   * Uses getNextLogoState to compute the next logo + filtered product list.
   * Performs a partial state update (only logo-related fields change).
   *
   * @param direction - 'prev' | 'next'
   */
  const handleLogoNavigation = (direction: 'prev' | 'next') => {
    setPanelState((currentState) => {
      const nextLogoState = getNextLogoState(currentState, direction, catalogSource);

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
    /** All 6 category cards for rendering the grid */
    categories,
    /** Current panel state — passed to ProductCarouselCentered and used for conditional rendering */
    panelState,
    /** Opens/closes/toggles the panel for a given category */
    handleCategoryClick,
    /** Navigates to prev/next logo within an open category */
    handleLogoNavigation,
  };
};

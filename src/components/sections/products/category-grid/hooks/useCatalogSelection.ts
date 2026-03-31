import { useMemo, useState } from 'react';

import { DEFAULT_ACTIVE_INFO_INDEX } from '../constants/catalog.constants';
import type { CatalogCategoryId, CatalogModel, CatalogProductId, CatalogState } from '../types/catalog.types';
import {
  getBranchByKey,
  getCategoryNodeById,
  getCurrentCategory,
  getFirstSubcategoryBranch,
  getProductById,
  getRelatedProducts,
  hasOpenSubcategory,
} from '../utils/catalogSelectors';
import { formatCatalogPathLabel } from '../utils/catalogFormatters';

type UseCatalogSelectionResult = {
  state: CatalogState;
  selectedBranch: ReturnType<typeof getBranchByKey>;
  selectedProduct: ReturnType<typeof getProductById>;
  currentCategory: ReturnType<typeof getCurrentCategory>;
  currentPathLabel: string;
  relatedProducts: ReturnType<typeof getRelatedProducts>;
  handleCategoryToggle: (categoryId: CatalogCategoryId) => void;
  handleSubcategoryToggle: (branchKey: string) => void;
  handleProductSelect: (productId: CatalogProductId, branchKey: string) => void;
  handleInfoToggle: (index: number) => void;
};

export const useCatalogSelection = (catalogModel: CatalogModel): UseCatalogSelectionResult => {
  const { catalogTree, branchIndex, productIndex, categoryIndex, defaults } = catalogModel;

  const [state, setState] = useState<CatalogState>({
    openCategoryId: defaults.defaultCategory?.id ?? null,
    selectedBranchKey: defaults.defaultBranch?.key ?? null,
    selectedProductId: defaults.defaultProduct?.id ?? null,
    openSubcategories: defaults.defaultOpenSubcategories,
    activeInfoIndex: DEFAULT_ACTIVE_INFO_INDEX,
  });

  const selectedBranch = useMemo(
    () => getBranchByKey(branchIndex, state.selectedBranchKey),
    [branchIndex, state.selectedBranchKey]
  );

  const selectedProduct = useMemo(
    () => getProductById(productIndex, state.selectedProductId),
    [productIndex, state.selectedProductId]
  );

  const currentCategory = useMemo(
    () => getCurrentCategory(categoryIndex, selectedBranch),
    [categoryIndex, selectedBranch]
  );

  const currentPathLabel = useMemo(
    () => formatCatalogPathLabel(currentCategory?.title, selectedBranch?.title),
    [currentCategory?.title, selectedBranch?.title]
  );

  const relatedProducts = useMemo(
    () => getRelatedProducts(selectedBranch, selectedProduct?.id ?? null),
    [selectedBranch, selectedProduct?.id]
  );

  const handleCategoryToggle = (categoryId: CatalogCategoryId) => {
    setState((currentState) => {
      const nextOpenCategoryId = currentState.openCategoryId === categoryId ? null : categoryId;

      if (!nextOpenCategoryId) {
        return {
          ...currentState,
          openCategoryId: null,
        };
      }

      const category = getCategoryNodeById(catalogTree, categoryId);
      const firstSubcategory = getFirstSubcategoryBranch(category);

      if (!firstSubcategory || hasOpenSubcategory(category, currentState.openSubcategories)) {
        return {
          ...currentState,
          openCategoryId: nextOpenCategoryId,
        };
      }

      return {
        ...currentState,
        openCategoryId: nextOpenCategoryId,
        openSubcategories: {
          ...currentState.openSubcategories,
          [firstSubcategory.key]: true,
        },
      };
    });
  };

  const handleSubcategoryToggle = (branchKey: string) => {
    setState((currentState) => ({
      ...currentState,
      openSubcategories: {
        ...currentState.openSubcategories,
        [branchKey]: !currentState.openSubcategories[branchKey],
      },
    }));
  };

  const handleProductSelect = (productId: CatalogProductId, branchKey: string) => {
    const branch = getBranchByKey(branchIndex, branchKey);

    if (!branch) {
      return;
    }

    setState((currentState) => ({
      ...currentState,
      selectedProductId: productId,
      selectedBranchKey: branch.key,
      openCategoryId: branch.categoryId,
      openSubcategories: branch.subcategoryId
        ? {
            ...currentState.openSubcategories,
            [branch.key]: true,
          }
        : currentState.openSubcategories,
      activeInfoIndex: DEFAULT_ACTIVE_INFO_INDEX,
    }));
  };

  const handleInfoToggle = (index: number) => {
    setState((currentState) => ({
      ...currentState,
      activeInfoIndex: currentState.activeInfoIndex === index ? null : index,
    }));
  };

  return {
    state,
    selectedBranch,
    selectedProduct,
    currentCategory,
    currentPathLabel,
    relatedProducts,
    handleCategoryToggle,
    handleSubcategoryToggle,
    handleProductSelect,
    handleInfoToggle,
  };
};

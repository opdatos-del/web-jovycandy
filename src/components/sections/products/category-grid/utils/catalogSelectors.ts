import type {
  CatalogBranch,
  CatalogBranchIndex,
  CatalogCategory,
  CatalogCategoryNode,
  CatalogData,
  CatalogProduct,
  CatalogProductId,
  CatalogProductIndex,
  OpenSubcategoryState,
} from '../types/catalog.types';

export const getCategoryNodeById = (
  catalogTree: CatalogCategoryNode[],
  categoryId: CatalogCategoryNode['id']
): CatalogCategoryNode | null => catalogTree.find((category) => category.id === categoryId) ?? null;

export const getBranchByKey = (branchIndex: CatalogBranchIndex, branchKey: string | null): CatalogBranch | null =>
  (branchKey ? branchIndex[branchKey] : null) ?? null;

export const getProductById = (
  productIndex: CatalogProductIndex,
  productId: CatalogProductId | null
): CatalogProduct | null => (productId ? productIndex[productId] : null) ?? null;

export const getCurrentCategory = (
  catalog: CatalogData,
  branch: CatalogBranch | null
): CatalogCategory | null => (branch ? catalog[branch.categoryId] : null) ?? null;

export const getFirstSubcategoryBranch = (category: CatalogCategoryNode | null): CatalogBranch | null =>
  category?.branches.find((branch) => branch.subcategoryId !== null) ?? null;

export const hasOpenSubcategory = (
  category: CatalogCategoryNode | null,
  openSubcategories: OpenSubcategoryState
): boolean => category?.branches.some((branch) => openSubcategories[branch.key]) ?? false;

export const getRelatedProducts = (
  branch: CatalogBranch | null,
  selectedProductId: CatalogProductId | null
): CatalogProduct[] => branch?.products.filter((product) => product.id !== selectedProductId) ?? [];

import {
  CATEGORY_GRID_MORE_IN_PREFIX,
  CATEGORY_GRID_RELATED_FALLBACK_LABEL,
  CERTIFICATION_LABELS,
} from '../constants/catalog.constants';
import type { CatalogBranch, CatalogCertification } from '../types/catalog.types';

export const formatCertificationLabel = (certification: CatalogCertification): string =>
  CERTIFICATION_LABELS[certification];

export const formatCatalogPathLabel = (
  categoryTitle: string | undefined,
  branchTitle: string | null | undefined
): string => [categoryTitle, branchTitle].filter(Boolean).join(' / ');

export const formatRelatedProductsTitle = (branch: CatalogBranch | null): string =>
  branch?.title ? `${CATEGORY_GRID_MORE_IN_PREFIX} ${branch.title}` : CATEGORY_GRID_RELATED_FALLBACK_LABEL;

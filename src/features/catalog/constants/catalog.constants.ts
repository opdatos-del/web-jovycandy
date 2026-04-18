import type { CatalogCertification } from '../types/catalog.types';

export const CATEGORY_GRID_SECTION_TITLE = 'Catálogo de Productos';
export const CATEGORY_GRID_EMPTY_STATE = 'Selecciona un producto';
export const CATEGORY_GRID_GENERAL_LABEL = 'General';
export const CATEGORY_GRID_SPECS_LABEL = 'Specs';
export const CATEGORY_GRID_DOWNLOAD_LABEL = 'Download Specs';
export const CATEGORY_GRID_VIEW_DETAILS_LABEL = 'View Details';
export const CATEGORY_GRID_RELATED_FALLBACK_LABEL = 'Related Products';
export const CATEGORY_GRID_MORE_IN_PREFIX = 'More in';

export const DEFAULT_ACCENT_COLOR = '#1C1917';
export const DEFAULT_MUTED_COLOR = '#78716C';
export const DEFAULT_ACTIVE_INFO_INDEX = 0;
export const TOOLTIP_OFFSET = 20;

export const CERTIFICATION_LABELS: Record<CatalogCertification, string> = {
  SGS: 'SGS',
  'OU Kosher': 'KOSHER',
  Halal: 'HALAL',
};

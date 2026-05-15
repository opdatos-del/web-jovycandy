/**
 * catalog.constants.ts — Central constants for the catalog feature.
 *
 * Grouped by purpose:
 * - Labels: UI strings for the category grid and product drawer
 * - Colors: Default accent and muted colors
 * - Layout: index offsets, tooltip distance
 * - Badges: coming soon badge text
 * - Certification: label maps for SGS/Kosher/Halal certifications
 */

import type { CatalogCertification } from '../types/catalog.types';

/** Section title shown above the category grid */
export const CATEGORY_GRID_SECTION_TITLE = 'Catálogo de Productos';

/** Empty state prompt when no product is selected */
export const CATEGORY_GRID_EMPTY_STATE = 'Selecciona un producto';

/** Label for general product info tab */
export const CATEGORY_GRID_GENERAL_LABEL = 'General';

/** Label for specs tab in product drawer */
export const CATEGORY_GRID_SPECS_LABEL = 'Specs';

/** Button label for downloading specs */
export const CATEGORY_GRID_DOWNLOAD_LABEL = 'Download Specs';

/** Button label for viewing product details */
export const CATEGORY_GRID_VIEW_DETAILS_LABEL = 'View Details';

/** Fallback label when no related products are found */
export const CATEGORY_GRID_RELATED_FALLBACK_LABEL = 'Related Products';

/** Prefix for "More in {category}" navigation links */
export const CATEGORY_GRID_MORE_IN_PREFIX = 'More in';

/** Default background color for cards (stone-900) */
export const DEFAULT_ACCENT_COLOR = '#1C1917';

/** Default muted text color (stone-500) */
export const DEFAULT_MUTED_COLOR = '#78716C';

/** Default tab index for product info (0 = first tab active) */
export const DEFAULT_ACTIVE_INFO_INDEX = 0;

/** Tooltip offset in pixels from trigger element */
export const TOOLTIP_OFFSET = 20;

/** Badge shown on categories that are not yet available */
export const COMING_SOON_BADGE = 'Proximamente...';

/**
 * Opacity value for the color overlay on CategoryCard.
 * 0.42 = 42% opacity, gives a visible tint without obscuring the background image.
 * Extracted to a constant so it can be reused and adjusted in one place.
 */
export const OVERLAY_OPACITY = 0.42;

/** Maps certification type enum values to their display labels */
export const CERTIFICATION_LABELS: Record<CatalogCertification, string> = {
  SGS: 'SGS',
  'OU Kosher': 'KOSHER',
  Halal: 'HALAL',
};

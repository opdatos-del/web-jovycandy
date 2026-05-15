/**
 * catalog.config.ts
 *
 * Single source of truth for all catalog category configuration.
 *
 * To add a NEW category:
 *   1. Add an entry here in CATALOG_CATEGORY_CONFIG.
 *   2. Create a folder under data/catalogs/{id}/ with products.ts, logos.ts, and index.ts.
 *   3. Register the module in data/registry.ts.
 *
 * To mark a category as "coming soon" set `upcoming: true`.
 * To change display order, edit CATALOG_DISPLAY_ORDER.
 */

export type CategoryConfig = {
  /** Display name shown to the user (Spanish) */
  title: string;
  /** Accent color used throughout the UI for this category */
  accent: string;
  /** When true, the category card is disabled and shows a "coming soon" badge */
  upcoming?: boolean;
};

export const CATALOG_CATEGORY_CONFIG = {
  sazonador: {
    title: 'Sazonador',
    accent: '#FF6B9D',
    upcoming: true,
  },
  chamoy: {
    title: 'Chamoy',
    accent: '#C8102E',
  },
  gomitas_almidon: {
    title: 'Gomitas Almidón',
    accent: '#FF4757',
  },
  dulces_paletas: {
    title: 'Dulces y Paletas',
    accent: '#FFB84D',
    upcoming: true,
  },
  pinatero: {
    title: 'Piñatero',
    accent: '#FD3B1F',
  },
  gomitas_grenetina: {
    title: 'Gomitas Grenetina',
    accent: '#00AFAA',
  },
} as const satisfies Record<string, CategoryConfig>;

/** All valid category IDs — derived from the config, no duplication. */
export type CatalogCategoryId = keyof typeof CATALOG_CATEGORY_CONFIG;

/**
 * Order in which categories appear in the grid.
 * Changing this array is the only step needed to reorder the display.
 */
export const CATALOG_DISPLAY_ORDER: CatalogCategoryId[] = [
  'sazonador',
  'chamoy',
  'gomitas_almidon',
  'dulces_paletas',
  'pinatero',
  'gomitas_grenetina',
];

/** Text shown on disabled category cards */
export const COMING_SOON_BADGE = 'Proximamente...';

import type { CatalogCategoryId } from '@/features/catalog/types/catalog.types';

const splitSegments = (value: string) =>
  value
    .split('/')
    .map((segment) => segment.trim())
    .filter(Boolean);

const slugifySegment = (value: string) => {
  const extensionMatch = value.match(/(\.[^.]+)$/);
  const extension = extensionMatch ? extensionMatch[1].toLowerCase() : '';
  const basename = extension ? value.slice(0, -extension.length) : value;

  const slug = basename
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-')
    .toLowerCase();

  return `${slug}${extension}`;
};

const buildAssetPath = (...segments: string[]) =>
  `/${segments.flatMap(splitSegments).map(slugifySegment).join('/')}`;

export const BRAND_LOGO_PATH = buildAssetPath('assets', 'brand', 'logo', 'jovy-logo.png');
export const BRAND_BACKGROUND_ABOUT_PATH = buildAssetPath(
  'assets',
  'marketing',
  'about',
  'background-about-us.webp'
);

export const buildBrandIsotypePath = (filename: string) =>
  buildAssetPath('assets', 'brand', 'isotypes', filename);

export const buildBrandMarkPath = (filename: string) =>
  buildAssetPath('assets', 'brand', 'marks', filename);

export const buildCatalogBackgroundPath = (categoryId: CatalogCategoryId, state: 'primary' | 'hover') =>
  buildAssetPath('assets', 'catalog', 'backgrounds', 'category-cards', categoryId, `${state}.webp`);

export const buildCatalogProductPath = (
  flavor: 'sweet' | 'spicy',
  ...segments: string[]
) => buildAssetPath('assets', 'catalog', 'products', flavor, ...segments);

export const buildCatalogLogoPath = (
  flavor: 'sweet' | 'spicy',
  ...segments: string[]
) =>
  buildAssetPath(
    'assets',
    'catalog',
    'logos',
    flavor,
    ...segments.filter((segment) => slugifySegment(segment) !== 'logos')
  );

export const buildCatalogCarouselPath = (...segments: string[]) =>
  buildAssetPath('assets', 'catalog', 'carousels', ...segments);

export const buildCatalogTechnicalSheetPath = (...segments: string[]) =>
  buildAssetPath('assets', 'catalog', 'technical-sheets', ...segments);

export const buildCatalogBowlPath = (filename: string) =>
  buildAssetPath('assets', 'catalog', 'bowls', filename);

export const buildMarketingHeroPath = (filename: string) =>
  buildAssetPath('assets', 'marketing', 'hero', filename);

export const buildMarketingEventPath = (filename: string) =>
  buildAssetPath('assets', 'marketing', 'events', filename);

export const buildMarketingFramePath = (filename: string) =>
  buildAssetPath('assets', 'marketing', 'frames', 'logo', filename);

export const buildSocialInstagramPath = (filename: string) =>
  buildAssetPath('assets', 'social', 'instagram', filename);

export const buildCertificationAssetPath = (filename: string) =>
  buildAssetPath('assets', 'certifications', filename);

export const CATEGORY_CARD_IMAGE_PATHS: Record<CatalogCategoryId, string> = {
  sazonador: buildBrandIsotypePath('ISOTIPOS-N-01.webp'),
  chamoy: buildBrandIsotypePath('ISOTIPO-CHAMOY.webp'),
  gomitas_almidon: buildBrandIsotypePath('ISOTIPOS-N-05.webp'),
  dulces_paletas: buildBrandIsotypePath('ISOTIPOS-N-04.webp'),
  pinatero: buildBrandIsotypePath('ISOTIPOS-N-03.webp'),
  gomitas_grenetina: buildBrandIsotypePath('ISOTIPO-GOMITAS-GRENETINA.webp'),
};

export const CATEGORY_BACKGROUND_PATHS: Record<
  CatalogCategoryId,
  { primary: string; hover: string }
> = {
  sazonador: {
    primary: buildCatalogBackgroundPath('sazonador', 'primary'),
    hover: buildCatalogBackgroundPath('sazonador', 'hover'),
  },
  chamoy: {
    primary: buildCatalogBackgroundPath('chamoy', 'primary'),
    hover: buildCatalogBackgroundPath('chamoy', 'hover'),
  },
  gomitas_almidon: {
    primary: buildCatalogBackgroundPath('gomitas_almidon', 'primary'),
    hover: buildCatalogBackgroundPath('gomitas_almidon', 'hover'),
  },
  dulces_paletas: {
    primary: buildCatalogBackgroundPath('dulces_paletas', 'primary'),
    hover: buildCatalogBackgroundPath('dulces_paletas', 'hover'),
  },
  pinatero: {
    primary: buildCatalogBackgroundPath('pinatero', 'primary'),
    hover: buildCatalogBackgroundPath('pinatero', 'hover'),
  },
  gomitas_grenetina: {
    primary: buildCatalogBackgroundPath('gomitas_grenetina', 'primary'),
    hover: buildCatalogBackgroundPath('gomitas_grenetina', 'hover'),
  },
};

export const INSTAGRAM_POST_PATHS = Array.from({ length: 6 }, (_, index) =>
  buildSocialInstagramPath(`post${index + 1}.jpg`)
);

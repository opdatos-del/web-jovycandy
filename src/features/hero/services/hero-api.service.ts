import { HERO_PROMOS } from '../data/heroPromos';
import type { HeroPromo } from '../types/hero.types';

type ApiHeroProduct = {
  id: number | string;
  title?: string | null;
  description?: string | null;
  background_color?: string | null;
  image_override?: string | null;
  product?: {
    id: number | string;
    name?: string | null;
    image?: string | null;
    bowl_image?: string | null;
  } | null;
};

type ApiHeroSettings = {
  background_color?: string | null;
};

const DEFAULT_HERO_PRODUCTS_API_URL = 'http://localhost:3001/api/hero-products/active';
const DEFAULT_HERO_SETTINGS_API_URL = 'http://localhost:3001/api/hero-settings/public';
const RAW_API_BASE_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, '') || null;
const API_BASE_URL = RAW_API_BASE_URL?.endsWith('/api')
  ? RAW_API_BASE_URL
  : RAW_API_BASE_URL
    ? `${RAW_API_BASE_URL}/api`
    : null;
const API_ORIGIN = API_BASE_URL ? API_BASE_URL.replace(/\/api$/, '') : null;
const HERO_PRODUCTS_API_URL = API_BASE_URL
  ? `${API_BASE_URL}/hero-products/active`
  : DEFAULT_HERO_PRODUCTS_API_URL;
const HERO_SETTINGS_API_URL = API_BASE_URL
  ? `${API_BASE_URL}/hero-settings/public`
  : DEFAULT_HERO_SETTINGS_API_URL;
const DEFAULT_HERO_BACKGROUND_COLOR = HERO_PROMOS[0]?.backgroundColor || '#00AFAA';
const NORMALIZED_HERO_PROMO_LAYOUT = {
  imageTop: {
    mobile: '52%',
    desktop: '54%',
    xl: '53%',
    '2xl': '52%',
  },
  imageWidth: {
    mobile: 'clamp(15.75rem, 72vw, 21rem)',
    desktop: 'min(calc(42vw * var(--display-scale)), calc(31rem * var(--display-scale)))',
    xl: 'min(calc(40vw * var(--display-scale)), calc(34rem * var(--display-scale)))',
    '2xl': 'min(calc(42vw * var(--display-scale)), calc(37rem * var(--display-scale)))',
  },
  imageOffset: {
    mobile: '0rem',
    desktop: '0rem',
  },
  raysAnchorTop: {
    mobile: '48%',
    desktop: '47%',
  },
} as const;

const resolveHeroMediaUrl = (url: string | null | undefined): string => {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  if (url.startsWith('/uploads/')) {
    return API_ORIGIN ? `${API_ORIGIN}${url}` : url;
  }
  return url;
};

const pickString = (value: unknown): string | null => (typeof value === 'string' && value.trim() ? value.trim() : null);

const applyGlobalColorToFallbackPromos = (backgroundColor: string | null): HeroPromo[] => {
  if (!backgroundColor) return HERO_PROMOS;

  return HERO_PROMOS.map((promo) => ({
    ...promo,
    backgroundColor,
  }));
};

export type HeroContentResult = {
  promos: HeroPromo[];
  backgroundColor: string;
};

const mapApiHeroProduct = (
  item: ApiHeroProduct,
  index: number,
  globalBackgroundColor: string | null
): HeroPromo | null => {
  const preset = HERO_PROMOS[index % HERO_PROMOS.length] ?? HERO_PROMOS[0];
  if (!preset) return null;

  const src = resolveHeroMediaUrl(item.image_override || item.product?.bowl_image || item.product?.image || '');
  if (!src) return null;

  const title = pickString(item.title) || pickString(item.product?.name) || preset.label;
  const description = pickString(item.description) || preset.note;

  return {
    ...preset,
    id: String(item.id),
    src,
    alt: title,
    label: title,
    note: description,
    backgroundColor: globalBackgroundColor || pickString(item.background_color) || preset.backgroundColor,
    imageTop: NORMALIZED_HERO_PROMO_LAYOUT.imageTop,
    imageWidth: NORMALIZED_HERO_PROMO_LAYOUT.imageWidth,
    imageOffset: NORMALIZED_HERO_PROMO_LAYOUT.imageOffset,
    raysAnchorTop: NORMALIZED_HERO_PROMO_LAYOUT.raysAnchorTop,
  };
};

export async function fetchPublishedHeroContent(signal?: AbortSignal): Promise<HeroContentResult> {
  try {
    const [productsResponse, settingsResponse] = await Promise.all([
      fetch(HERO_PRODUCTS_API_URL, { signal }),
      fetch(HERO_SETTINGS_API_URL, { signal }),
    ]);

    if (!productsResponse.ok) {
      throw new Error(`Hero products API request failed with status ${productsResponse.status}`);
    }

    const data = await productsResponse.json();
    const settingsData = settingsResponse.ok
      ? (await settingsResponse.json() as ApiHeroSettings)
      : null;
    const globalBackgroundColor = pickString(settingsData?.background_color) || DEFAULT_HERO_BACKGROUND_COLOR;

    if (!Array.isArray(data)) {
      return {
        promos: applyGlobalColorToFallbackPromos(globalBackgroundColor),
        backgroundColor: globalBackgroundColor,
      };
    }

    const promos = data
      .map((item, index) => mapApiHeroProduct(item as ApiHeroProduct, index, globalBackgroundColor))
      .filter((promo): promo is HeroPromo => Boolean(promo));

    return {
      promos,
      backgroundColor: globalBackgroundColor,
    };
  } catch (error) {
    console.warn('[hero-api] Failed to fetch hero products from API, using static fallback:', error);
    return {
      promos: HERO_PROMOS,
      backgroundColor: DEFAULT_HERO_BACKGROUND_COLOR,
    };
  }
}

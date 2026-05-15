import type {
  CatalogCategoryId,
  CatalogCategoryModule,
  CatalogCertification,
  CatalogInfoItem,
  CatalogProduct,
  CatalogSpec,
  CatalogLogoGroup,
} from '../types/catalog.types';
import { buildCatalogSource, STATIC_CATALOG_SOURCE, type CatalogSource } from '../data/catalogData';
import { CATALOG_MODULE_REGISTRY } from '../data/registry';

type ApiCategory = {
  id: number;
  category_key: CatalogCategoryId;
  name: string;
};

type ApiCatalogProduct = {
  id: number;
  category_id: number | null;
  family_id: string | null;
  product_family: string | null;
  name: string;
  slug: string;
  description: string | null;
  image: string | null;
  bowl_image: string | null;
  certifications: unknown;
  specs: unknown;
  gramaje: string | null;
  status: 'draft' | 'published' | 'archived';
  category: ApiCategory | null;
};

const DEFAULT_CATALOG_API_URL = 'http://localhost:3001/api/products/published';
const DEFAULT_LOGOS_API_URL = 'http://localhost:3001/api/logos?active=true';
const RAW_API_BASE_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, '') || null;
const API_BASE_URL = RAW_API_BASE_URL?.endsWith('/api')
  ? RAW_API_BASE_URL
  : RAW_API_BASE_URL
    ? `${RAW_API_BASE_URL}/api`
    : null;
const API_ORIGIN = API_BASE_URL ? API_BASE_URL.replace(/\/api$/, '') : null;
const CATALOG_API_URL = import.meta.env.VITE_CATALOG_API_URL
  || (API_BASE_URL ? `${API_BASE_URL}/products/published` : DEFAULT_CATALOG_API_URL);
const LOGOS_API_URL = API_BASE_URL
  ? `${API_BASE_URL}/logos?active=true`
  : DEFAULT_LOGOS_API_URL;

type ApiLogo = {
  id: number;
  slug: string;
  name: string;
  src: string;
  alt: string | null;
  families: string[] | string | null;
  active: boolean;
  position: number;
};

const resolveLogoImageUrl = (url: string): string => {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  if (url.startsWith('/uploads/')) {
    const base = API_ORIGIN || '';
    return base ? `${base}${url}` : url;
  }
  return url;
};

const resolveImageUrl = (url: string | null | undefined): string => {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  if (url.startsWith('/uploads/')) {
    const base = API_ORIGIN || '';
    return base ? `${base}${url}` : url;
  }
  return url;
};

const normalizeLogoFamilies = (families: ApiLogo['families']): string[] => {
  if (Array.isArray(families)) {
    return families
      .map((family) => normalizeMatcherKey(family))
      .filter((family): family is string => Boolean(family));
  }

  const normalized = normalizeText(families);
  if (!normalized) return [];

  try {
    const parsed = JSON.parse(normalized);
    if (Array.isArray(parsed)) {
      return parsed
        .map((family) => normalizeMatcherKey(family))
        .filter((family): family is string => Boolean(family));
    }
  } catch {}

  return [normalizeMatcherKey(normalized)];
};

const STATIC_CATEGORY_REGISTRY = CATALOG_MODULE_REGISTRY as Record<
  CatalogCategoryId,
  CatalogCategoryModule<CatalogProduct>
>;

const normalizeText = (value: unknown): string | null => {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  return trimmed ? trimmed : null;
};

const normalizeMatcherKey = (value: unknown): string => {
  const normalized = normalizeText(value);
  return normalized ? normalized.toLowerCase().replace(/[^a-z0-9]+/g, '') : '';
};

const normalizeImagePath = (value: unknown): string | null => {
  const normalized = normalizeText(value);
  return normalized || null;
};

const normalizeCertifications = (value: unknown, fallback: CatalogCertification[]): CatalogCertification[] => {
  if (!Array.isArray(value)) return fallback;

  return value.filter((item): item is CatalogCertification => item === 'SGS' || item === 'OU Kosher' || item === 'Halal');
};

const normalizeSpecs = (value: unknown, fallback: CatalogSpec[]): CatalogSpec[] => {
  if (!Array.isArray(value)) return fallback;

  const specs = value.flatMap((item) => {
    if (!item || typeof item !== 'object') return [];

    const label = normalizeText((item as { label?: unknown }).label);
    const specValue = normalizeText((item as { value?: unknown }).value);

    return label && specValue ? [{ label, value: specValue }] : [];
  });

  return specs.length > 0 ? specs : fallback;
};

const buildFallbackSubtitle = (product: ApiCatalogProduct, staticProduct?: CatalogProduct) => {
  if (staticProduct?.subtitle) return staticProduct.subtitle;

  return [product.product_family, product.gramaje]
    .map((value) => normalizeText(value))
    .filter(Boolean)
    .join('\n');
};

const buildFallbackInfo = (staticProduct?: CatalogProduct): CatalogInfoItem[] =>
  staticProduct?.collapsibleInfo ?? [];

const normalizeKey = (value: string | null | undefined) => value?.trim().toLowerCase() ?? '';

const findStaticProductMatch = (
  categoryId: CatalogCategoryId,
  apiProduct: ApiCatalogProduct
): CatalogProduct | undefined => {
  const staticProducts = STATIC_CATEGORY_REGISTRY[categoryId]?.category.products ?? [];
  const familyKey = normalizeKey(apiProduct.family_id);
  const gramajeKey = normalizeKey(apiProduct.gramaje);
  const nameKey = normalizeKey(apiProduct.name);

  return staticProducts.find((product) =>
    normalizeKey(product.familyId) === familyKey
    && normalizeKey(product.gramaje) === gramajeKey
    && normalizeKey(product.name) === nameKey
  );
};

const mapApiProductToCatalogProduct = (
  categoryId: CatalogCategoryId,
  apiProduct: ApiCatalogProduct
): CatalogProduct => {
  const staticProduct = findStaticProductMatch(categoryId, apiProduct);
  const image = resolveImageUrl(normalizeImagePath(apiProduct.image)) || staticProduct?.image || '';
  const bowlImage = resolveImageUrl(normalizeImagePath(apiProduct.bowl_image)) || staticProduct?.bowlImage;
  const familyId = normalizeText(apiProduct.family_id) ?? staticProduct?.familyId ?? undefined;
  const productFamily = normalizeText(apiProduct.product_family) ?? staticProduct?.productFamily ?? undefined;

  return {
    id: String(apiProduct.id),
    familyId,
    name: normalizeText(apiProduct.name) ?? staticProduct?.name ?? `Producto ${apiProduct.id}`,
    subtitle: buildFallbackSubtitle(apiProduct, staticProduct),
    description: normalizeText(apiProduct.description) ?? staticProduct?.description ?? '',
    image,
    sampleImage: staticProduct?.sampleImage ?? image,
    secondaryImage: staticProduct?.secondaryImage ?? image,
    carouselImage: image,
    bowlImage: bowlImage ?? undefined,
    certifications: normalizeCertifications(apiProduct.certifications, staticProduct?.certifications ?? []),
    specs: normalizeSpecs(apiProduct.specs, staticProduct?.specs ?? []),
    collapsibleInfo: buildFallbackInfo(staticProduct),
    gramaje: normalizeText(apiProduct.gramaje) ?? staticProduct?.gramaje,
    productFamily,
    bowlFamilyKey: staticProduct?.bowlFamilyKey,
  };
};

const buildRuntimeRegistry = (apiProducts: ApiCatalogProduct[], apiLogos: ApiLogo[] = []) => {
  const groupedProducts = new Map<CatalogCategoryId, CatalogProduct[]>();

  apiProducts.forEach((product) => {
    const categoryId = product.category?.category_key;
    if (!categoryId) return;

    const normalizedProduct = mapApiProductToCatalogProduct(categoryId, product);
    const categoryProducts = groupedProducts.get(categoryId) ?? [];
    categoryProducts.push(normalizedProduct);
    groupedProducts.set(categoryId, categoryProducts);
  });

  const transformApiLogoToCatalogLogoGroup = (logo: ApiLogo): CatalogLogoGroup => ({
    src: resolveLogoImageUrl(logo.src),
    alt: logo.alt || logo.name,
    families: normalizeLogoFamilies(logo.families),
  });

  const getCategoryLogosFromApi = (products: CatalogProduct[]): CatalogLogoGroup[] => {
    if (apiLogos.length === 0) return [];

    const productFamilies = new Set(
      products
        .map((p) => normalizeMatcherKey(p.familyId))
        .filter(Boolean)
    );

    return apiLogos
      .map(transformApiLogoToCatalogLogoGroup)
      .filter((logo) => {
        if (!logo.families || logo.families.length === 0) return true;
        return logo.families.some((family) => productFamilies.has(family));
      });
  };

  const runtimeRegistry = Object.fromEntries(
    (Object.keys(STATIC_CATEGORY_REGISTRY) as CatalogCategoryId[]).map((categoryId) => {
      const staticModule = STATIC_CATEGORY_REGISTRY[categoryId];
      const runtimeProducts = groupedProducts.get(categoryId);

      const apiLogosForCategory = runtimeProducts && apiLogos.length > 0
        ? getCategoryLogosFromApi(runtimeProducts)
        : [];

      const logos = apiLogosForCategory.length > 0
        ? apiLogosForCategory
        : [];

      return [
        categoryId,
        {
          ...staticModule,
          category: {
            ...staticModule.category,
            products: runtimeProducts && runtimeProducts.length > 0
              ? runtimeProducts
              : staticModule.category.products,
          },
          logos,
        } satisfies CatalogCategoryModule<CatalogProduct>,
      ];
    })
  ) as Record<CatalogCategoryId, CatalogCategoryModule<CatalogProduct>>;

  return buildCatalogSource(runtimeRegistry);
};

const fetchLogos = async (signal?: AbortSignal): Promise<ApiLogo[]> => {
  try {
    const response = await fetch(LOGOS_API_URL, { signal });
    if (!response.ok) {
      console.warn('[catalog-api] Failed to fetch logos:', response.status);
      return [];
    }
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.warn('[catalog-api] Error fetching logos:', error);
    return [];
  }
};

export async function fetchCatalogSource(signal?: AbortSignal): Promise<CatalogSource> {
  const [productsResponse, logosData] = await Promise.all([
    fetch(CATALOG_API_URL, { signal }),
    fetchLogos(signal),
  ]);

  if (!productsResponse.ok) {
    throw new Error(`Catalog API request failed with status ${productsResponse.status}`);
  }

  const data = (await productsResponse.json()) as ApiCatalogProduct[];
  if (!Array.isArray(data) || data.length === 0) {
    return STATIC_CATALOG_SOURCE;
  }

  return buildRuntimeRegistry(data, logosData);
}

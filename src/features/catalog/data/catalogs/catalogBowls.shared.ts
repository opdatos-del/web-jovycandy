import { buildCatalogBowlPath } from '@/shared/assets/publicAssets';
import type {
  CatalogCategory,
  CatalogCategoryId,
  CatalogData,
  CatalogProduct,
} from '../../types/catalog.types';

export type BowlResolutionSource = 'explicit' | 'family' | 'none';

export type CatalogBowlResolution = {
  source: BowlResolutionSource;
  bowlImage?: string;
  familyKey?: string;
  explicitBowlImage?: string;
  hadInvalidExplicit: boolean;
};

export type CatalogBowlAuditRow = {
  categoryId: CatalogCategoryId;
  productId: string;
  productName: string;
  source: BowlResolutionSource;
  familyKey?: string;
  explicitBowlImage?: string;
  resolvedBowlImage?: string;
  hadInvalidExplicit: boolean;
};

const normalizeBowlKey = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');

const isCatalogBowlAssetPath = (value?: string) =>
  Boolean(value?.startsWith('/assets/catalog/bowls/'));

const categoryBowlFamilyRegistry: Partial<
  Record<CatalogCategoryId, Record<string, string>>
> = {
  chamoy: {
    [normalizeBowlKey('Chilirokas')]: buildCatalogBowlPath('chamoy/chilirokas-assorted.png'),
    [normalizeBowlKey('Chilirokas Mango')]: buildCatalogBowlPath(
      'chamoy/chilirokas-mango-assorted.webp'
    ),
    [normalizeBowlKey('Chilirokas Tamarind')]: buildCatalogBowlPath(
      'chamoy/chilirokas-tamarindo-assorted.webp'
    ),
    [normalizeBowlKey('Chilirokas Watermelon')]: buildCatalogBowlPath(
      'chamoy/chilirokas-watermelon-assorted.webp'
    ),
    [normalizeBowlKey('Revolcaditas')]: buildCatalogBowlPath(
      'chamoy/revolcaditas-assorted.webp'
    ),
    [normalizeBowlKey('Tamaros')]: buildCatalogBowlPath('chamoy/tamaros-assorted.webp'),
    [normalizeBowlKey('Vallenito')]: buildCatalogBowlPath('chamoy/vallenito-assorted.webp'),
    [normalizeBowlKey('Vallenito Mango')]: buildCatalogBowlPath(
      'chamoy/vallenito-mango-assorted.webp'
    ),
    [normalizeBowlKey('Vallenito Watermelon')]: buildCatalogBowlPath(
      'chamoy/vallenito-watermelon-assorted.webp'
    ),
  },
  gomitas_almidon: {
    [normalizeBowlKey('Enchilokas')]: buildCatalogBowlPath('chamoy/enchilokas-assorted.webp'),
  },
  gomitas_grenetina: {
    [normalizeBowlKey('Chamoy Bears')]: buildCatalogBowlPath(
      'chamoy/chamoy-bears-assorted.webp'
    ),
    [normalizeBowlKey('Chamoy Worms')]: buildCatalogBowlPath(
      'chamoy/chamoy-worms-assorted.webp'
    ),
    [normalizeBowlKey('Chamoy Rings Watermelon')]: buildCatalogBowlPath(
      'chamoy/chamoy-rings-watermelon-assorted.webp'
    ),
    [normalizeBowlKey('Chamoy Rings Peach')]: buildCatalogBowlPath(
      'chamoy/chamoy-rings-peach-assorted.webp'
    ),
  },
  pinatero: {
    [normalizeBowlKey('Happy Mix')]: buildCatalogBowlPath('pinatero/happy-mix-assorted.webp'),
    [normalizeBowlKey('Revolcados Mix')]: buildCatalogBowlPath(
      'pinatero/revolcados-mix-assorted.webp'
    ),
  },
};

const getProductBowlFamilyKeys = (product: CatalogProduct) =>
  [product.bowlFamilyKey, product.productFamily]
    .filter((value): value is string => Boolean(value))
    .map(normalizeBowlKey);

export const getCatalogBowlResolution = (
  categoryId: CatalogCategoryId,
  product: CatalogProduct
): CatalogBowlResolution => {
  const explicitBowlImage = product.bowlImage;

  if (isCatalogBowlAssetPath(explicitBowlImage)) {
    return {
      source: 'explicit',
      bowlImage: explicitBowlImage,
      explicitBowlImage,
      hadInvalidExplicit: false,
    };
  }

  const bowlFamilyRegistry = categoryBowlFamilyRegistry[categoryId] ?? {};

  for (const familyKey of getProductBowlFamilyKeys(product)) {
    const familyBowlImage = bowlFamilyRegistry[familyKey];

    if (familyBowlImage) {
      return {
        source: 'family',
        bowlImage: familyBowlImage,
        familyKey,
        explicitBowlImage,
        hadInvalidExplicit: Boolean(explicitBowlImage),
      };
    }
  }

  return {
    source: 'none',
    explicitBowlImage,
    hadInvalidExplicit: Boolean(explicitBowlImage),
  };
};

export const resolveCatalogCategoryBowls = (
  category: CatalogCategory
): CatalogCategory => ({
  ...category,
  products: category.products.map((product) => {
    const resolution = getCatalogBowlResolution(category.id, product);

    if (product.bowlImage === resolution.bowlImage) {
      return product;
    }

    return {
      ...product,
      bowlImage: resolution.bowlImage,
    };
  }),
});

export const resolveCatalogDataBowls = (catalogData: CatalogData): CatalogData => ({
  sazonador: resolveCatalogCategoryBowls(catalogData.sazonador),
  gomitas_almidon: resolveCatalogCategoryBowls(catalogData.gomitas_almidon),
  chamoy: resolveCatalogCategoryBowls(catalogData.chamoy),
  dulces_paletas: resolveCatalogCategoryBowls(catalogData.dulces_paletas),
  pinatero: resolveCatalogCategoryBowls(catalogData.pinatero),
  gomitas_grenetina: resolveCatalogCategoryBowls(catalogData.gomitas_grenetina),
});

export const buildCatalogBowlAuditRows = (
  catalogData: CatalogData
): CatalogBowlAuditRow[] =>
  (Object.values(catalogData) as CatalogCategory[]).flatMap((category) =>
    category.products.map((product) => {
      const resolution = getCatalogBowlResolution(category.id, product);

      return {
        categoryId: category.id,
        productId: product.id,
        productName: product.name,
        source: resolution.source,
        familyKey: resolution.familyKey,
        explicitBowlImage: resolution.explicitBowlImage,
        resolvedBowlImage: resolution.bowlImage,
        hadInvalidExplicit: resolution.hadInvalidExplicit,
      };
    })
  );

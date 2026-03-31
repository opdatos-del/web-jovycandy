import type {
  CatalogBranch,
  CatalogBranchIndex,
  CatalogCategoryNode,
  CatalogData,
  CatalogDefaults,
  CatalogModel,
  CatalogNavigation,
  CatalogProduct,
  CatalogProductIndex,
  OpenSubcategoryState,
} from '../types/catalog.types';

export const buildProductIndex = (catalog: CatalogData): CatalogProductIndex =>
  Object.values(catalog).reduce<CatalogProductIndex>((index, category) => {
    category.products.forEach((product) => {
      index[product.id] = product;
    });

    return index;
  }, {});

const buildBranchProducts = (productIds: string[], productIndex: CatalogProductIndex): CatalogProduct[] =>
  productIds.map((productId) => productIndex[productId]).filter(Boolean);

export const buildCatalogTree = (
  catalog: CatalogData,
  navigation: CatalogNavigation,
  productIndex: CatalogProductIndex
): CatalogCategoryNode[] =>
  Object.values(catalog).map((category) => {
    const categoryNavigation = navigation[category.id];
    const branches: CatalogBranch[] = [];

    if (categoryNavigation?.productIds?.length) {
      branches.push({
        key: `${category.id}::root`,
        categoryId: category.id,
        subcategoryId: null,
        title: null,
        logo: null,
        productIds: categoryNavigation.productIds,
        products: [],
      });
    }

    if (categoryNavigation?.subcategories?.length) {
      categoryNavigation.subcategories.forEach((subcategory) => {
        branches.push({
          key: `${category.id}::${subcategory.id}`,
          categoryId: category.id,
          subcategoryId: subcategory.id,
          title: subcategory.title,
          logo: subcategory.logo ?? null,
          productIds: subcategory.productIds,
          products: [],
        });
      });
    }

    if (branches.length === 0) {
      branches.push({
        key: `${category.id}::root`,
        categoryId: category.id,
        subcategoryId: null,
        title: null,
        logo: null,
        productIds: category.products.map((product) => product.id),
        products: [],
      });
    }

    return {
      id: category.id,
      title: category.title,
      accent: category.accent,
      branches: branches
        .map((branch) => ({
          ...branch,
          products: buildBranchProducts(branch.productIds, productIndex),
        }))
        .filter((branch) => branch.products.length > 0),
    };
  });

export const buildBranchIndex = (catalogTree: CatalogCategoryNode[]): CatalogBranchIndex =>
  catalogTree.reduce<CatalogBranchIndex>((index, category) => {
    category.branches.forEach((branch) => {
      index[branch.key] = branch;
    });

    return index;
  }, {});

export const getDefaultCategory = (catalogTree: CatalogCategoryNode[]): CatalogCategoryNode | null => catalogTree[0] ?? null;

export const getDefaultBranch = (catalogTree: CatalogCategoryNode[]): CatalogBranch | null =>
  getDefaultCategory(catalogTree)?.branches[0] ?? null;

export const getDefaultProduct = (defaultBranch: CatalogBranch | null) => defaultBranch?.products[0] ?? null;

export const getDefaultOpenSubcategories = (
  catalogTree: CatalogCategoryNode[],
  defaultBranch: CatalogBranch | null
): OpenSubcategoryState =>
  catalogTree.reduce<OpenSubcategoryState>((openSubcategories, category) => {
    category.branches.forEach((branch) => {
      if (branch.subcategoryId) {
        openSubcategories[branch.key] = branch.key === defaultBranch?.key;
      }
    });

    return openSubcategories;
  }, {});

export const buildCatalogDefaults = (catalogTree: CatalogCategoryNode[]): CatalogDefaults => {
  const defaultCategory = getDefaultCategory(catalogTree);
  const defaultBranch = getDefaultBranch(catalogTree);
  const defaultProduct = getDefaultProduct(defaultBranch);

  return {
    defaultCategory,
    defaultBranch,
    defaultProduct,
    defaultOpenSubcategories: getDefaultOpenSubcategories(catalogTree, defaultBranch),
  };
};

export const buildCatalogModel = (catalog: CatalogData, navigation: CatalogNavigation): CatalogModel => {
  const productIndex = buildProductIndex(catalog);
  const catalogTree = buildCatalogTree(catalog, navigation, productIndex);

  return {
    categoryIndex: catalog,
    productIndex,
    branchIndex: buildBranchIndex(catalogTree),
    catalogTree,
    defaults: buildCatalogDefaults(catalogTree),
  };
};

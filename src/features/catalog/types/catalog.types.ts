import type { MouseEvent } from 'react';

export type CatalogCategoryId = 'polvos' | 'jellies' | 'dulces' | 'paletas' | 'pinatero' | 'gomitas';

export type CatalogProductId = string;

export type CatalogCertification = 'SGS' | 'OU Kosher' | 'Halal';

export type ProductType = 'Dulce' | 'Picante';

export type CatalogSpec = {
  label: string;
  value: string;
};

export type CatalogInfoItem = {
  title: string;
  content: string;
};

export type CatalogLogo = {
  src: string;
  alt: string;
};

export type CatalogLogoOption = CatalogLogo;

export type CatalogProduct = {
  id: CatalogProductId;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  carouselImage?: string;
  sampleImage?: string;
  secondaryImage: string;
  certifications: CatalogCertification[];
  specs: CatalogSpec[];
  collapsibleInfo: CatalogInfoItem[];
  gramaje?: string;
  productFamily?: string;
  type: ProductType;
};

export type CatalogCategory = {
  id: CatalogCategoryId;
  title: string;
  accent: string;
  products: CatalogProduct[];
};

export type CatalogCategoryCard = {
  id: CatalogCategoryId;
  title: string;
  accent: string;
  productCount: number;
  image: string;
  hoverImage?: string;
  disabled?: boolean;
  badge?: string;
};

export type CatalogPanelState = {
  isOpen: boolean;
  categoryId: CatalogCategoryId | null;
  categoryTitle: string;
  products: CatalogProduct[];
  originalProducts: CatalogProduct[];
  accentColor: string;
  logoSrc: string;
  logoAlt: string;
  currentLogoIndex: number;
  availableLogos: CatalogLogoOption[];
};

export type CatalogData = Record<CatalogCategoryId, CatalogCategory>;

export type CatalogSubcategory = {
  id: string;
  title: string;
  productIds: CatalogProductId[];
  logo?: CatalogLogo;
};

export type CatalogNavigationEntry = {
  productIds?: CatalogProductId[];
  subcategories?: CatalogSubcategory[];
};

export type CatalogNavigation = Record<CatalogCategoryId, CatalogNavigationEntry>;

export type CatalogBranch = {
  key: string;
  categoryId: CatalogCategoryId;
  subcategoryId: string | null;
  title: string | null;
  logo: CatalogLogo | null;
  productIds: CatalogProductId[];
  products: CatalogProduct[];
};

export type CatalogCategoryNode = {
  id: CatalogCategoryId;
  title: string;
  accent: string;
  branches: CatalogBranch[];
};

export type CatalogProductIndex = Record<CatalogProductId, CatalogProduct>;

export type CatalogBranchIndex = Record<string, CatalogBranch>;

export type OpenSubcategoryState = Record<string, boolean>;

export type CatalogDefaults = {
  defaultCategory: CatalogCategoryNode | null;
  defaultBranch: CatalogBranch | null;
  defaultProduct: CatalogProduct | null;
  defaultOpenSubcategories: OpenSubcategoryState;
};

export type CatalogModel = {
  categoryIndex: CatalogData;
  productIndex: CatalogProductIndex;
  branchIndex: CatalogBranchIndex;
  catalogTree: CatalogCategoryNode[];
  defaults: CatalogDefaults;
};

export type CatalogState = {
  openCategoryId: CatalogCategoryId | null;
  selectedBranchKey: string | null;
  selectedProductId: CatalogProductId | null;
  openSubcategories: OpenSubcategoryState;
  activeInfoIndex: number | null;
};

export type TooltipPosition = {
  x: number;
  y: number;
};

export type TooltipState = {
  hoveredProduct: CatalogProduct | null;
  mousePosition: TooltipPosition;
};

export type CatalogSelectionHandlers = {
  onCategoryToggle: (categoryId: CatalogCategoryId) => void;
  onSubcategoryToggle: (branchKey: string) => void;
  onProductSelect: (productId: CatalogProductId, branchKey: string) => void;
  onInfoToggle: (index: number) => void;
};

export type TooltipHandlers = {
  onProductHoverStart: (product: CatalogProduct) => void;
  onProductHoverEnd: () => void;
  onTooltipMouseMove: (event: MouseEvent<HTMLElement>) => void;
};

import type { CatalogProduct, CatalogSpec } from '../../types/catalog.types';

const updateBagWeight = (specs: CatalogSpec[], bagWeight: string) =>
  specs.map((spec) =>
    spec.label === 'Weight per bag' ? { ...spec, value: `Net Wt. ${bagWeight}` } : spec
  );

export type ProductTemplate = Omit<
  CatalogProduct,
  'sampleImage' | 'secondaryImage' | 'gramaje' | 'carouselImage'
> & {
  productFamily: string;
};

export type VariantConfig = {
  id: string;
  familyId?: string;
  gramaje: string;
  bagWeight?: string;
  carouselImage: string;
  image?: string;
  bowlImage?: string;
};

export const createVariant = (
  template: ProductTemplate,
  variant: VariantConfig
): CatalogProduct => {
  const fallbackImage = variant.image ?? template.image;

  return {
    ...template,
    id: variant.id,
    familyId: variant.familyId ?? template.familyId,
    image: fallbackImage,
    sampleImage: fallbackImage,
    secondaryImage: fallbackImage,
    carouselImage: variant.carouselImage,
    bowlImage: variant.bowlImage ?? template.bowlImage,
    gramaje: variant.gramaje,
    specs: updateBagWeight(template.specs, variant.bagWeight ?? variant.gramaje),
  };
};

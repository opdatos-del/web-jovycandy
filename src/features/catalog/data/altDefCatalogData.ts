import type { CatalogLogoOption, CatalogProduct, CatalogSpec } from '../types/catalog.types';

const ALT_DEF_ROOT = '/imagenes-alt-def';

const buildAltDefAssetPath = (...segments: string[]) =>
  `${ALT_DEF_ROOT}/${segments.join('/')}`;

const updateBagWeight = (specs: CatalogSpec[], bagWeight: string) =>
  specs.map((spec) =>
    spec.label === 'Weight per bag' ? { ...spec, value: `Net Wt. ${bagWeight}` } : spec
  );

type ProductTemplate = Omit<
  CatalogProduct,
  'sampleImage' | 'secondaryImage' | 'gramaje' | 'carouselImage'
> & {
  productFamily: string;
};

type VariantConfig = {
  id: string;
  gramaje: string;
  bagWeight?: string;
  carouselImage: string;
  image?: string;
};

const createVariant = (template: ProductTemplate, variant: VariantConfig): CatalogProduct => {
  const fallbackImage = variant.image ?? template.image;

  return {
    ...template,
    id: variant.id,
    image: fallbackImage,
    sampleImage: fallbackImage,
    secondaryImage: fallbackImage,
    carouselImage: variant.carouselImage,
    gramaje: variant.gramaje,
    specs: updateBagWeight(template.specs, variant.bagWeight ?? variant.gramaje),
  };
};

const brandLogo = buildAltDefAssetPath('BRAND JOVY.webp');

const ringsWatermelonTemplate: ProductTemplate = {
  id: 'rings-watermelon-template',
  name: 'Rings Watermelon',
  productFamily: 'Rings Watermelon',
  subtitle: 'Gummy candy\nFlavor: Watermelon',
  description: 'Deliciosas gomitas en forma de aro con un intenso y refrescante sabor a sandia.',
  image: '/WEBP PRODUCTOS/SWEET/GUMMIES/RINGS/JOVY-SWEET-GUMMIES-Rings-Watermelon-5-lb-1-300x300.webp',
  certifications: ['SGS', 'OU Kosher', 'Halal'],
  specs: [
    { label: 'Weight per piece', value: 'Net Wt. 0.3 oz (8g)' },
    { label: 'Pieces per bag', value: '21 aprox' },
    { label: 'Weight per bag', value: 'Net Wt. 170 g' },
    { label: 'Bags per Box', value: '24' },
    { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
  ],
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Azucar, jarabe de maiz, grenetina, acido citrico, saborizantes y colorantes.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 110. Azucares: 20g.',
    },
  ],
  type: 'Dulce',
};

const ringsNeonTemplate: ProductTemplate = {
  id: 'rings-neon-template',
  name: 'Rings Neon',
  productFamily: 'Rings Neon',
  subtitle: 'Gummy candy\nNeon Colors',
  description: 'Aros de gomita en tonos neon con perfil dulce y textura suave.',
  image: '/WEBP PRODUCTOS/SWEET/GUMMIES/RINGS/JOVY-SWEET-GUMMIES-Rings-Neon-5-lb-300x300.webp',
  certifications: ['SGS', 'Halal'],
  specs: [
    { label: 'Weight per piece', value: 'Net Wt. 0.3 oz (8g)' },
    { label: 'Pieces per bag', value: '21 aprox' },
    { label: 'Weight per bag', value: 'Net Wt. 170 g' },
    { label: 'Bags per Box', value: '24' },
    { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
  ],
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Azucar, jarabe de maiz, pectina, concentrado de fruta y acido citrico.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 105. Azucares: 18g.',
    },
  ],
  type: 'Dulce',
};

const ringsPeachTemplate: ProductTemplate = {
  id: 'rings-peach-template',
  name: 'Gummies Peach',
  productFamily: 'Gummies Peach',
  subtitle: 'Gummy candy\nFlavor: Peach',
  description: 'Aros de gomita con un dulce y jugoso sabor a durazno.',
  image: '/WEBP PRODUCTOS/SWEET/GUMMIES/RINGS/JOVY-SWEET-GUMMIES-Rings-Peach-5-lb-1-300x300.webp',
  certifications: ['SGS', 'OU Kosher'],
  specs: [
    { label: 'Weight per piece', value: 'Net Wt. 0.3 oz (8g)' },
    { label: 'Pieces per bag', value: '21 aprox' },
    { label: 'Weight per bag', value: 'Net Wt. 170 g' },
    { label: 'Bags per Box', value: '24' },
    { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
  ],
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Azucar, jarabe de maiz, grenetina, acido citrico y saborizante de durazno.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 110. Azucares: 20g.',
    },
  ],
  type: 'Dulce',
};

const ringsGreenAppleTemplate: ProductTemplate = {
  id: 'rings-green-apple-template',
  name: 'Rings Green Apple',
  productFamily: 'Rings Green Apple',
  subtitle: 'Gummy candy\nFlavor: Green Apple',
  description: 'Aros de gomita con perfil frutal y un toque fresco de manzana verde.',
  image: '/WEBP PRODUCTOS/SWEET/GUMMIES/RINGS/JOVY-SWEET-GUMMIES-Rings-Green-Apple-5-lb-1-300x300.webp',
  certifications: ['SGS'],
  specs: [
    { label: 'Weight per piece', value: 'Net Wt. 0.3 oz (8g)' },
    { label: 'Pieces per bag', value: '21 aprox' },
    { label: 'Weight per bag', value: 'Net Wt. 170 g' },
    { label: 'Bags per Box', value: '24' },
    { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
  ],
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Azucar, jarabe de maiz, grenetina, acido citrico y saborizante de manzana.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.',
    },
  ],
  type: 'Dulce',
};

const wormsOriginalTemplate: ProductTemplate = {
  id: 'worms-original-template',
  name: 'Worms Original',
  productFamily: 'Worms Original',
  subtitle: 'Gummy candy\nFruit Mix',
  description: 'Gomitas tipo worm con una mezcla clasica de sabores frutales.',
  image: '/WEBP PRODUCTOS/SWEET/GUMMIES/WORMS/JOVY-SWEET-GUMMIES-Worms-5-lb-1-300x300.webp',
  certifications: ['SGS', 'Halal'],
  specs: [
    { label: 'Weight per piece', value: 'Net Wt. 0.3 oz (8g)' },
    { label: 'Pieces per bag', value: '21 aprox' },
    { label: 'Weight per bag', value: 'Net Wt. 170 g' },
    { label: 'Bags per Box', value: '24' },
    { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
  ],
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Azucar, jarabe de maiz, grenetina, acido citrico y saborizantes.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.',
    },
  ],
  type: 'Dulce',
};

const wormsNeonTemplate: ProductTemplate = {
  id: 'worms-neon-template',
  name: 'Worms Neon',
  productFamily: 'Worms Neon',
  subtitle: 'Gummy candy\nNeon Fruit Mix',
  description: 'Gomitas tipo worm en combinaciones neon con perfil frutal mas intenso.',
  image: '/WEBP PRODUCTOS/SWEET/GUMMIES/WORMS/JOVY-SWEET-GUMMIES-Worms-Neon-5-lb-1-300x300.webp',
  certifications: ['SGS', 'Halal'],
  specs: [
    { label: 'Weight per piece', value: 'Net Wt. 0.3 oz (8g)' },
    { label: 'Pieces per bag', value: '21 aprox' },
    { label: 'Weight per bag', value: 'Net Wt. 170 g' },
    { label: 'Bags per Box', value: '24' },
    { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
  ],
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Azucar, jarabe de maiz, grenetina, acido citrico y saborizantes frutales.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 109. Azucares: 19g.',
    },
  ],
  type: 'Dulce',
};

const bearsClassicTemplate: ProductTemplate = {
  id: 'bears-classic-template',
  name: 'Bears Classic',
  productFamily: 'Bears Classic',
  subtitle: 'Gummy candy\n12 Flavors',
  description: 'Ositos de gomita con perfil dulce tradicional y colores surtidos.',
  image: '/WEBP PRODUCTOS/SWEET/GUMMIES/BEARS/JOVY-SWEET-GUMMIES-Bears-12-Flavors-5-lb-300x300.webp',
  certifications: ['SGS', 'OU Kosher', 'Halal'],
  specs: [
    { label: 'Weight per piece', value: 'Net Wt. 0.25 oz (7g)' },
    { label: 'Pieces per bag', value: '24 aprox' },
    { label: 'Weight per bag', value: 'Net Wt. 170 g' },
    { label: 'Bags per Box', value: '24' },
    { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
  ],
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Azucar, jarabe de maiz, grenetina, acido citrico y saborizantes naturales.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 106. Azucares: 18g.',
    },
  ],
  type: 'Dulce',
};

const bearsNeonTemplate: ProductTemplate = {
  id: 'bears-neon-template',
  name: 'Bears Neon',
  productFamily: 'Bears Neon',
  subtitle: 'Gummy candy\nNeon Mix',
  description: 'Ositos de gomita en colores neon con perfil dulce y frutal.',
  image: '/WEBP PRODUCTOS/SWEET/GUMMIES/BEARS/JOVY-SWEET-GUMMIES-Bears-Neon-5-lb-1-300x300.webp',
  certifications: ['SGS', 'Halal'],
  specs: [
    { label: 'Weight per piece', value: 'Net Wt. 0.25 oz (7g)' },
    { label: 'Pieces per bag', value: '24 aprox' },
    { label: 'Weight per bag', value: 'Net Wt. 170 g' },
    { label: 'Bags per Box', value: '24' },
    { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
  ],
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Azucar, jarabe de maiz, grenetina, acido citrico y saborizantes.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 107. Azucares: 18g.',
    },
  ],
  type: 'Dulce',
};

const watermelonSlicesTemplate: ProductTemplate = {
  id: 'watermelon-slices-template',
  name: 'Watermelon Slices',
  productFamily: 'Watermelon Slices',
  subtitle: 'Gummy candy\nFlavor: Watermelon',
  description: 'Rebanadas de sandia con textura suave y un perfil dulce refrescante.',
  image: '/WEBP PRODUCTOS/SWEET/GUMMIES/WATERMELON SLICES/JOVY-SWEET-GUMMIES-Watermelon-Slices-5-lb-300x300.webp',
  certifications: ['SGS', 'Halal'],
  specs: [
    { label: 'Weight per piece', value: 'Net Wt. 0.3 oz (8g)' },
    { label: 'Pieces per bag', value: '21 aprox' },
    { label: 'Weight per bag', value: 'Net Wt. 170 g' },
    { label: 'Bags per Box', value: '24' },
    { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
  ],
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Azucar, jarabe de maiz, grenetina, acido citrico y saborizantes.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.',
    },
  ],
  type: 'Dulce',
};

const frutastikaTemplate: ProductTemplate = {
  id: 'frutastika-template',
  name: 'Frutastika',
  productFamily: 'Frutastika',
  subtitle: 'Gummy candy\nFruit Mix',
  description: 'Mezcla surtida de gomitas con enfoque frutal para presentaciones individuales.',
  image: buildAltDefAssetPath('100g', 'Mockup Frutastika MX 100g.webp'),
  certifications: ['SGS'],
  specs: [
    { label: 'Weight per piece', value: 'Net Wt. 0.25 oz (7g)' },
    { label: 'Pieces per bag', value: '24 aprox' },
    { label: 'Weight per bag', value: 'Net Wt. 100 g' },
    { label: 'Bags per Box', value: '12' },
    { label: 'Box Weight', value: 'Net Wt. 1.2 kg' },
  ],
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Azucar, jarabe de maiz, grenetina, acido citrico y saborizantes.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.',
    },
  ],
  type: 'Dulce',
};

const blueSharksTemplate: ProductTemplate = {
  id: 'blue-sharks-template',
  name: 'Blue Sharks',
  productFamily: 'Blue Sharks',
  subtitle: 'Gummy candy\nOcean Mix',
  description: 'Gomitas tipo tiburon con acabado brillante y perfil frutal.',
  image: buildAltDefAssetPath('100g', 'Mockup Blue Sharks Mx 100g.webp'),
  certifications: ['SGS'],
  specs: [
    { label: 'Weight per piece', value: 'Net Wt. 0.25 oz (7g)' },
    { label: 'Pieces per bag', value: '24 aprox' },
    { label: 'Weight per bag', value: 'Net Wt. 100 g' },
    { label: 'Bags per Box', value: '12' },
    { label: 'Box Weight', value: 'Net Wt. 1.2 kg' },
  ],
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Azucar, jarabe de maiz, grenetina, acido citrico y saborizantes.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 107. Azucares: 18g.',
    },
  ],
  type: 'Dulce',
};

const sharksMixTemplate: ProductTemplate = {
  id: 'sharks-mix-template',
  name: 'Sharks Mix',
  productFamily: 'Sharks Mix',
  subtitle: 'Gummy candy\nAssorted Sharks',
  description: 'Surtido de tiburones de gomita en una presentacion de alto gramaje.',
  image: buildAltDefAssetPath('1kg', 'Jovy-Gomitas-Grenetina-Sharks Mix -1kg-MX.webp'),
  certifications: ['SGS'],
  specs: [
    { label: 'Weight per piece', value: 'Net Wt. 0.25 oz (7g)' },
    { label: 'Pieces per bag', value: '24 aprox' },
    { label: 'Weight per bag', value: 'Net Wt. 1 kg' },
    { label: 'Bags per Box', value: '10' },
    { label: 'Box Weight', value: 'Net Wt. 10 kg' },
  ],
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Azucar, jarabe de maiz, grenetina, acido citrico y saborizantes.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.',
    },
  ],
  type: 'Dulce',
};

const chamoyBearsTemplate: ProductTemplate = {
  id: 'chamoy-bears-template',
  name: 'Chamoy Bears',
  productFamily: 'Chamoy Bears',
  subtitle: 'Gummy candy\nChamoy Coated',
  description: 'Ositos enchilados con recubrimiento de chamoy y perfil agridulce.',
  image: buildAltDefAssetPath('100g', 'Mockup Chamoy Bears MX 100g.webp'),
  certifications: ['SGS'],
  specs: [
    { label: 'Weight per piece', value: 'Net Wt. 0.25 oz (7g)' },
    { label: 'Pieces per bag', value: '24 aprox' },
    { label: 'Weight per bag', value: 'Net Wt. 100 g' },
    { label: 'Bags per Box', value: '12' },
    { label: 'Box Weight', value: 'Net Wt. 1.2 kg' },
  ],
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Azucar, jarabe de maiz, grenetina, chile, sal y acido citrico.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 110. Azucares: 20g.',
    },
  ],
  type: 'Picante',
};

const chamoyWormsTemplate: ProductTemplate = {
  id: 'chamoy-worms-template',
  name: 'Chamoy Worms',
  productFamily: 'Chamoy Worms',
  subtitle: 'Gummy candy\nChamoy Coated',
  description: 'Worms enchilados con capa de chamoy para un perfil mas intenso.',
  image: buildAltDefAssetPath('100g', 'Mockup Chamoy Worms MX 100g.webp'),
  certifications: ['SGS'],
  specs: [
    { label: 'Weight per piece', value: 'Net Wt. 0.3 oz (8g)' },
    { label: 'Pieces per bag', value: '21 aprox' },
    { label: 'Weight per bag', value: 'Net Wt. 100 g' },
    { label: 'Bags per Box', value: '12' },
    { label: 'Box Weight', value: 'Net Wt. 1.2 kg' },
  ],
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Azucar, jarabe de maiz, grenetina, chile, sal y acido citrico.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 110. Azucares: 20g.',
    },
  ],
  type: 'Picante',
};

const chamoyRingsWatermelonTemplate: ProductTemplate = {
  id: 'chamoy-rings-watermelon-template',
  name: 'Chamoy Rings Watermelon',
  productFamily: 'Chamoy Rings Watermelon',
  subtitle: 'Gummy candy\nChamoy Watermelon',
  description: 'Aros de sandia cubiertos con chamoy para un perfil dulce y picante.',
  image: buildAltDefAssetPath('1kg', 'Mckup Chamoy Rings Sandia MX 1 kg_Mayo 24.webp'),
  certifications: ['SGS'],
  specs: [
    { label: 'Weight per piece', value: 'Net Wt. 0.3 oz (8g)' },
    { label: 'Pieces per bag', value: '21 aprox' },
    { label: 'Weight per bag', value: 'Net Wt. 1 kg' },
    { label: 'Bags per Box', value: '10' },
    { label: 'Box Weight', value: 'Net Wt. 10 kg' },
  ],
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Azucar, jarabe de maiz, grenetina, chile, sal y acido citrico.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 110. Azucares: 20g.',
    },
  ],
  type: 'Picante',
};

const chamoyRingsPeachTemplate: ProductTemplate = {
  id: 'chamoy-rings-peach-template',
  name: 'Chamoy Rings Peach',
  productFamily: 'Chamoy Rings Peach',
  subtitle: 'Gummy candy\nChamoy Peach',
  description: 'Aros de durazno cubiertos con chamoy para un perfil dulce y picante.',
  image: buildAltDefAssetPath('1kg', 'Mckup Chamoy Rings Durazno MX 1 kg_Mayo 24.webp'),
  certifications: ['SGS'],
  specs: [
    { label: 'Weight per piece', value: 'Net Wt. 0.3 oz (8g)' },
    { label: 'Pieces per bag', value: '21 aprox' },
    { label: 'Weight per bag', value: 'Net Wt. 1 kg' },
    { label: 'Bags per Box', value: '10' },
    { label: 'Box Weight', value: 'Net Wt. 10 kg' },
  ],
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Azucar, jarabe de maiz, grenetina, chile, sal y acido citrico.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 110. Azucares: 20g.',
    },
  ],
  type: 'Picante',
};

const happyMixTemplate: ProductTemplate = {
  id: 'happy-mix-template',
  name: 'Happy Mix',
  productFamily: 'Happy Mix',
  subtitle: 'Assorted Mix\nMulti Flavor',
  description: 'Surtido de dulces variados con las nuevas presentaciones de alta definicion.',
  image: '/WEBP PRODUCTOS/SPICY/PIÑATERO/HAPPY MIX/JOVY-PINATEROS-Happy-Mix-5-lb-300x300.webp',
  certifications: ['SGS'],
  specs: [
    { label: 'Weight per piece', value: 'Net Wt. 0.5 oz (14g)' },
    { label: 'Pieces per bag', value: '12 aprox' },
    { label: 'Weight per bag', value: 'Net Wt. 2.26 kg' },
    { label: 'Bags per Box', value: '1' },
    { label: 'Box Weight', value: 'Net Wt. 5 kg' },
  ],
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Mezcla de caramelos con azucar, jarabe de maiz y saborizantes variados.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 115. Azucares: 21g.',
    },
  ],
  type: 'Dulce',
};

const revolcadosMixTemplate: ProductTemplate = {
  id: 'revolcados-mix-template',
  name: 'Revolcados Mix',
  productFamily: 'Revolcados Mix',
  subtitle: 'Sweet & Spicy Mix\nBalanced Heat',
  description: 'Mix especial de dulces y picantes para piñateros tradicionales.',
  image: '/WEBP PRODUCTOS/SPICY/PIÑATERO/REVOLCADOS MIX/JOVY-PINATEROS-Revolcados-Mix-5-lb-300x300.webp',
  certifications: ['SGS', 'Halal'],
  specs: [
    { label: 'Weight per piece', value: 'Net Wt. 0.5 oz (14g)' },
    { label: 'Pieces per bag', value: '12 aprox' },
    { label: 'Weight per bag', value: 'Net Wt. 2.26 kg' },
    { label: 'Bags per Box', value: '1' },
    { label: 'Box Weight', value: 'Net Wt. 5 kg' },
  ],
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Mezcla de caramelos dulces y picantes con saborizantes naturales.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 110. Azucares: 20g.',
    },
  ],
  type: 'Picante',
};

const premiumMixTemplate: ProductTemplate = {
  id: 'premium-mix-template',
  name: 'Premium Mix',
  productFamily: 'Premium Mix',
  subtitle: 'Assorted Mix\nPremium Selection',
  description: 'Presentacion premium de piñatero para surtido de alto gramaje.',
  image: buildAltDefAssetPath('Piñateros', 'Jovy-Piñateros-Premium-5-kg-MX.webp'),
  certifications: ['SGS'],
  specs: [
    { label: 'Weight per piece', value: 'Net Wt. 0.5 oz (14g)' },
    { label: 'Pieces per bag', value: '12 aprox' },
    { label: 'Weight per bag', value: 'Net Wt. 5 kg' },
    { label: 'Bags per Box', value: '1' },
    { label: 'Box Weight', value: 'Net Wt. 5 kg' },
  ],
  collapsibleInfo: [
    {
      title: 'Ingredientes',
      content: 'Mezcla surtida de dulces con saborizantes y colores variados.',
    },
    {
      title: 'Informacion Nutrimental',
      content: 'Tamano de la porcion: 30g. Calorias: 112. Azucares: 20g.',
    },
  ],
  type: 'Dulce',
};

export const gomitasGrenetinaAltDefProducts: CatalogProduct[] = [
  createVariant(ringsWatermelonTemplate, {
    id: 'g-rings-watermelon-100g',
    gramaje: '100 g',
    carouselImage: buildAltDefAssetPath('100g', 'Mockup Rings Sandia MX 100g.webp'),
  }),
  createVariant(ringsWatermelonTemplate, {
    id: 'g-rings-watermelon-141g',
    gramaje: '141 g',
    carouselImage: buildAltDefAssetPath('141g', 'Jovy-Gomitas-Grenetina-Rings-Sandia-MX-141g.webp'),
  }),
  createVariant(ringsWatermelonTemplate, {
    id: 'g-rings-watermelon-1kg',
    gramaje: '1 kg',
    carouselImage: buildAltDefAssetPath('1kg', 'Jovy-Gomitas-Grenetina-Rings-Sandia-1-kg-MX-1kg-20.webp'),
  }),
  createVariant(ringsPeachTemplate, {
    id: 'g-rings-peach-100g',
    gramaje: '100 g',
    carouselImage: buildAltDefAssetPath('100g', 'Mockup Rings Durazno MX 100g.webp'),
  }),
  createVariant(ringsPeachTemplate, {
    id: 'g-rings-peach-141g',
    gramaje: '141 g',
    carouselImage: buildAltDefAssetPath('141g', 'Jovy-Gomitas-Grenetina-Rings-Durazno-MX-141g.webp'),
  }),
  createVariant(ringsPeachTemplate, {
    id: 'g-rings-peach-1kg',
    gramaje: '1 kg',
    carouselImage: buildAltDefAssetPath(
      '1kg',
      'Jovy-Gomitas-Grenetina-Rings-Durazno-1-kg-MX-1kg-20.webp'
    ),
  }),
  createVariant(ringsNeonTemplate, {
    id: 'g-rings-neon-1kg',
    gramaje: '1 kg',
    carouselImage: buildAltDefAssetPath('1kg', 'Jovy-Gomitas-Grenetina-Rings Sour Neon-1kg-MX.webp'),
  }),
  createVariant(ringsGreenAppleTemplate, {
    id: 'g-rings-green-apple-1kg',
    gramaje: '1 kg',
    carouselImage: buildAltDefAssetPath('1kg', 'Jovy-Gomitas-Grenetina-Rings-Manzana-1kg-20.webp'),
  }),
  createVariant(wormsOriginalTemplate, {
    id: 'g-worms-original-100g',
    gramaje: '100 g',
    carouselImage: buildAltDefAssetPath('100g', 'Mockup Worms MX 100g.webp'),
  }),
  createVariant(wormsOriginalTemplate, {
    id: 'g-worms-original-1kg',
    gramaje: '1 kg',
    carouselImage: buildAltDefAssetPath('1kg', 'Jovy-Gomitas-Grenetina-Worms-1kg-MX.webp'),
  }),
  createVariant(wormsNeonTemplate, {
    id: 'g-worms-neon-50g',
    gramaje: '50 g',
    carouselImage: buildAltDefAssetPath('50g', 'Mockup Worms Neon MX 50g.webp'),
  }),
  createVariant(wormsNeonTemplate, {
    id: 'g-worms-neon-100g',
    gramaje: '100 g',
    carouselImage: buildAltDefAssetPath('100g', 'Mockup Worms Neon MX 100g.webp'),
  }),
  createVariant(wormsNeonTemplate, {
    id: 'g-worms-neon-141g',
    gramaje: '141 g',
    carouselImage: buildAltDefAssetPath('141g', 'Jovy-Gomitas-Grenetina-Worms-Neon-MX-141g.webp'),
  }),
  createVariant(wormsNeonTemplate, {
    id: 'g-worms-neon-1kg',
    gramaje: '1 kg',
    carouselImage: buildAltDefAssetPath('1kg', 'Jovy-Gomitas-Grenetina-Worms-Neon-1kg-MX.webp'),
  }),
  createVariant(bearsClassicTemplate, {
    id: 'g-bears-classic-50g',
    gramaje: '50 g',
    carouselImage: buildAltDefAssetPath('50g', 'Mockup Bears 12 Sabores MX 50g.webp'),
  }),
  createVariant(bearsClassicTemplate, {
    id: 'g-bears-classic-100g',
    gramaje: '100 g',
    carouselImage: buildAltDefAssetPath('100g', 'Mockup Bears 12 Sabores MX 100g.webp'),
  }),
  createVariant(bearsClassicTemplate, {
    id: 'g-bears-classic-141g',
    gramaje: '141 g',
    carouselImage: buildAltDefAssetPath('141g', 'Mockup Bears 12 SABORES 141g.webp'),
  }),
  createVariant(bearsClassicTemplate, {
    id: 'g-bears-classic-1kg',
    gramaje: '1 kg',
    carouselImage: buildAltDefAssetPath('1kg', 'Mkup Bears 12 Sabores 1kg MX.webp'),
  }),
  createVariant(bearsNeonTemplate, {
    id: 'g-bears-neon-50g',
    gramaje: '50 g',
    carouselImage: buildAltDefAssetPath('50g', 'Mockup Bears Neon MX 50g.webp'),
  }),
  createVariant(bearsNeonTemplate, {
    id: 'g-bears-neon-100g',
    gramaje: '100 g',
    carouselImage: buildAltDefAssetPath('100g', 'Mockup Bears Neon MX 100g.webp'),
  }),
  createVariant(bearsNeonTemplate, {
    id: 'g-bears-neon-1kg',
    gramaje: '1 kg',
    carouselImage: buildAltDefAssetPath('1kg', 'Jovy-Gomitas-Grenetina-Bears-Neon-1-kg-MX-1kg-20.webp'),
  }),
  createVariant(watermelonSlicesTemplate, {
    id: 'g-watermelon-slices-50g',
    gramaje: '50 g',
    carouselImage: buildAltDefAssetPath('50g', 'Mockup Watermelon Slices MX 50g.webp'),
  }),
  createVariant(watermelonSlicesTemplate, {
    id: 'g-watermelon-slices-100g',
    gramaje: '100 g',
    carouselImage: buildAltDefAssetPath('100g', 'Mockup Watermelon Slices MX 100g.webp'),
  }),
  createVariant(watermelonSlicesTemplate, {
    id: 'g-watermelon-slices-141g',
    gramaje: '141 g',
    carouselImage: buildAltDefAssetPath(
      '141g',
      'Jovy-Gomitas-Grenetina-Watermelon-Slices-MX-141g.webp'
    ),
  }),
  createVariant(watermelonSlicesTemplate, {
    id: 'g-watermelon-slices-1kg',
    gramaje: '1 kg',
    carouselImage: buildAltDefAssetPath('1kg', 'Jovy-Gomitas-Grenetina-Watermelon-Slices-1-kg-Pouch Bag.webp'),
  }),
  createVariant(frutastikaTemplate, {
    id: 'g-frutastika-50g',
    gramaje: '50 g',
    carouselImage: buildAltDefAssetPath('50g', 'Mockup Frutastika MX 50g.webp'),
  }),
  createVariant(frutastikaTemplate, {
    id: 'g-frutastika-100g',
    gramaje: '100 g',
    carouselImage: buildAltDefAssetPath('100g', 'Mockup Frutastika MX 100g.webp'),
  }),
  createVariant(frutastikaTemplate, {
    id: 'g-frutastika-141g',
    gramaje: '141 g',
    carouselImage: buildAltDefAssetPath('141g', 'Jovy-Gomitas-Grenetina-Frutastika-MX-141g.webp'),
  }),
  createVariant(frutastikaTemplate, {
    id: 'g-frutastika-1kg',
    gramaje: '1 kg',
    carouselImage: buildAltDefAssetPath('1kg', 'Jovy-Gomitas-Grenetina-Frutastika-Gummies-1kg.webp'),
  }),
  createVariant(blueSharksTemplate, {
    id: 'g-blue-sharks-100g',
    gramaje: '100 g',
    carouselImage: buildAltDefAssetPath('100g', 'Mockup Blue Sharks Mx 100g.webp'),
  }),
  createVariant(blueSharksTemplate, {
    id: 'g-blue-sharks-1kg',
    gramaje: '1 kg',
    carouselImage: buildAltDefAssetPath('1kg', 'Jovy-Gomitas-Grenetina-Blue Sharks -Sabores-1kg-MX.webp'),
  }),
  createVariant(sharksMixTemplate, {
    id: 'g-sharks-mix-1kg',
    gramaje: '1 kg',
    carouselImage: buildAltDefAssetPath('1kg', 'Jovy-Gomitas-Grenetina-Sharks Mix -1kg-MX.webp'),
  }),
  createVariant(chamoyBearsTemplate, {
    id: 'g-chamoy-bears-100g',
    gramaje: '100 g',
    carouselImage: buildAltDefAssetPath('100g', 'Mockup Chamoy Bears MX 100g.webp'),
  }),
  createVariant(chamoyBearsTemplate, {
    id: 'g-chamoy-bears-1kg',
    gramaje: '1 kg',
    carouselImage: buildAltDefAssetPath('1kg', 'Mckup Chamoy Bears MX 1 kg_Mayo 24.webp'),
  }),
  createVariant(chamoyWormsTemplate, {
    id: 'g-chamoy-worms-100g',
    gramaje: '100 g',
    carouselImage: buildAltDefAssetPath('100g', 'Mockup Chamoy Worms MX 100g.webp'),
  }),
  createVariant(chamoyWormsTemplate, {
    id: 'g-chamoy-worms-1kg',
    gramaje: '1 kg',
    carouselImage: buildAltDefAssetPath('1kg', 'Mckup Chamoy worms MX 1 kg_Mayo 24.webp'),
  }),
  createVariant(chamoyRingsWatermelonTemplate, {
    id: 'g-chamoy-rings-watermelon-1kg',
    gramaje: '1 kg',
    carouselImage: buildAltDefAssetPath('1kg', 'Mckup Chamoy Rings Sandia MX 1 kg_Mayo 24.webp'),
  }),
  createVariant(chamoyRingsPeachTemplate, {
    id: 'g-chamoy-rings-peach-1kg',
    gramaje: '1 kg',
    carouselImage: buildAltDefAssetPath('1kg', 'Mckup Chamoy Rings Durazno MX 1 kg_Mayo 24.webp'),
  }),
];

export const gomitasGrenetinaAltDefLogos: CatalogLogoOption[] = [
  { src: '/WEBP PRODUCTOS/SWEET/GUMMIES/LOGOS/Rings-300x300.webp', alt: 'Gomitas Rings' },
  { src: '/WEBP PRODUCTOS/SWEET/GUMMIES/LOGOS/Worms-300x300.webp', alt: 'Gomitas Worms' },
  { src: '/WEBP PRODUCTOS/SWEET/GUMMIES/LOGOS/Bears-300x300.webp', alt: 'Gomitas Bears' },
  {
    src: '/WEBP PRODUCTOS/SWEET/GUMMIES/LOGOS/watermelon_slices-300x300.webp',
    alt: 'Gomitas Watermelon Slices',
  },
  { src: brandLogo, alt: 'Gomitas surtidas' },
  {
    src: '/WEBP PRODUCTOS/SPICY/GUMMIES/LOGOS/Rings-Revolcado-300x300.webp',
    alt: 'Gomitas Rings Revolcado',
  },
  {
    src: '/WEBP PRODUCTOS/SPICY/GUMMIES/LOGOS/Worms-Revolcado-1-300x300.webp',
    alt: 'Gomitas Worms Revolcado',
  },
  {
    src: '/WEBP PRODUCTOS/SPICY/GUMMIES/LOGOS/Bears_Revolcado-1-300x300.webp',
    alt: 'Gomitas Bears Revolcado',
  },
];

export const gomitasGrenetinaAltDefLogoProductsMap: Record<string, string[]> = {
  '/WEBP PRODUCTOS/SWEET/GUMMIES/LOGOS/Rings-300x300.webp': [
    'Rings Watermelon',
    'Rings Neon',
    'Gummies Peach',
    'Rings Green Apple',
  ],
  '/WEBP PRODUCTOS/SWEET/GUMMIES/LOGOS/Worms-300x300.webp': ['Worms Original', 'Worms Neon'],
  '/WEBP PRODUCTOS/SWEET/GUMMIES/LOGOS/Bears-300x300.webp': ['Bears Classic', 'Bears Neon'],
  '/WEBP PRODUCTOS/SWEET/GUMMIES/LOGOS/watermelon_slices-300x300.webp': ['Watermelon Slices'],
  [brandLogo]: ['Frutastika', 'Blue Sharks', 'Sharks Mix'],
  '/WEBP PRODUCTOS/SPICY/GUMMIES/LOGOS/Rings-Revolcado-300x300.webp': [
    'Chamoy Rings Watermelon',
    'Chamoy Rings Peach',
  ],
  '/WEBP PRODUCTOS/SPICY/GUMMIES/LOGOS/Worms-Revolcado-1-300x300.webp': ['Chamoy Worms'],
  '/WEBP PRODUCTOS/SPICY/GUMMIES/LOGOS/Bears_Revolcado-1-300x300.webp': ['Chamoy Bears'],
};

export const pinateroAltDefProducts: CatalogProduct[] = [
  createVariant(happyMixTemplate, {
    id: 'pi-happy-mix-2-26kg',
    gramaje: '2.26 kg',
    carouselImage: buildAltDefAssetPath('Piñateros', 'Jovy-Piñateros-Happy Mix-2.26-kg-MX.webp'),
  }),
  createVariant(happyMixTemplate, {
    id: 'pi-happy-mix-5kg',
    gramaje: '5 kg',
    carouselImage: buildAltDefAssetPath('Piñateros', 'Jovy-Piñateros-Happy Mix-5-kg-MX.webp'),
  }),
  createVariant(revolcadosMixTemplate, {
    id: 'pi-revolcados-mix-2-26kg',
    gramaje: '2.26 kg',
    carouselImage: buildAltDefAssetPath('Piñateros', 'Jovy-Piñateros-Revolcados Mix-2.26-kg-MX.webp'),
  }),
  createVariant(revolcadosMixTemplate, {
    id: 'pi-revolcados-mix-5kg',
    gramaje: '5 kg',
    carouselImage: buildAltDefAssetPath('Piñateros', 'Jovy-Piñateros-Revolcados Mix-5-kg-MX.webp'),
  }),
  createVariant(premiumMixTemplate, {
    id: 'pi-premium-mix-5kg',
    gramaje: '5 kg',
    carouselImage: buildAltDefAssetPath('Piñateros', 'Jovy-Piñateros-Premium-5-kg-MX.webp'),
  }),
];

export const pinateroAltDefLogos: CatalogLogoOption[] = [
  { src: '/WEBP PRODUCTOS/SPICY/PIÑATERO/LOGOS/happy-mix-300x300.webp', alt: 'Piñatero Happy Mix' },
  {
    src: '/WEBP PRODUCTOS/SPICY/PIÑATERO/LOGOS/Revolcados-mix-300x300.webp',
    alt: 'Piñatero Revolcados',
  },
  { src: brandLogo, alt: 'Piñatero Premium' },
];

export const pinateroAltDefLogoProductsMap: Record<string, string[]> = {
  '/WEBP PRODUCTOS/SPICY/PIÑATERO/LOGOS/happy-mix-300x300.webp': ['Happy Mix'],
  '/WEBP PRODUCTOS/SPICY/PIÑATERO/LOGOS/Revolcados-mix-300x300.webp': ['Revolcados Mix'],
  [brandLogo]: ['Premium Mix'],
};

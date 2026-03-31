import type { CatalogData } from '../types/catalog.types';

export const catalogData: CatalogData = {
  gummies: {
    id: 'gummies',
    title: 'Gomitas',
    accent: '#D4AF37',
    products: [
      {
        id: 'g1',
        name: 'Rings Watermelon',
        subtitle: 'Gummy candy\nFlavor: Watermelon',
        description: 'Deliciosas gomitas en forma de aro con un intenso y refrescante sabor a sandía.',
        image: '/products/img/rings/rings-watermelon.webp',
        sampleImage: '/products/img/rings/samples/muestra-watermelon-rings.webp',
        secondaryImage: '/products/img/rings/rings-watermelon-alone.webp',
        certifications: ['SGS', 'OU Kosher', 'Halal'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.3 oz (8g)' },
          { label: 'Pieces per bag', value: '21 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content:
              'Azúcar, jarabe de maíz, grenetina, ácido cítrico, saborizantes artificiales y colorantes (Rojo 40, Amarillo 5 y Azul 1).',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 30g. Calorías: 110. Azúcares: 20g. Sodio: 15mg.',
          },
        ],
      },
      {
        id: 'g2',
        name: 'Rings Neon',
        subtitle: 'Gummy candy',
        description: 'Aros de gomita en tonos neón con perfil dulce, textura suave y presentación llamativa.',
        image: '/products/img/rings/JOVY-SWEET-GUMMIES-Rings-Neon-6-oz-1.webp',
        sampleImage: '/products/img/rings/samples/muestra-neon-rings.webp',
        secondaryImage: '/products/img/rings/Jovy-Sweet-Gummies-Rings-Neon-Granel.webp',
        certifications: ['SGS', 'Halal'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.3 oz (8g)' },
          { label: 'Pieces per bag', value: '21 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.8 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azúcar, jarabe de maíz, pectina, jugo de mango deshidratado y ácido cítrico.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 30g. Calorías: 105. Azúcares: 18g. Sodio: 10mg.',
          },
        ],
      },
      {
        id: 'g3',
        name: 'Rings Peach',
        subtitle: 'Gummy candy\nFlavor: Peach',
        description: 'Aros de gomita con un dulce y jugoso sabor a durazno.',
        image: '/products/img/rings/JOVY-SWEET-GUMMIES-Rings-Peach-6-oz-1.webp',
        sampleImage: '/products/img/rings/samples/muestra-peach-rings.webp',
        secondaryImage: '/products/img/rings/Jovy-Sweet-Gummies-Rings-Peach-Granel.webp',
        certifications: ['SGS', 'OU Kosher'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.3 oz (8g)' },
          { label: 'Pieces per bag', value: '21 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azúcar, jarabe de maíz, grenetina, ácido cítrico y saborizantes artificiales.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 30g. Calorías: 110. Azúcares: 20g.',
          },
        ],
      },
      {
        id: 'g4',
        name: 'Rings Cherry',
        subtitle: 'Gummy candy\nFlavor: Cherry',
        description: 'Aros de gomita espolvoreados con un intenso sabor a cereza.',
        image: '/products/img/rings/JOVY-SWEET-GUMMIES-Rings-Cherry-5-lb-1.webp',
        sampleImage: '/products/img/rings/samples/muestra-cherry-rings.webp',
        secondaryImage: '/products/img/rings/Jovy-Sweet-Gummies-Rings-Cherry-Granel.webp',
        certifications: ['SGS'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.3 oz (8g)' },
          { label: 'Pieces per bag', value: '21 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azúcar, jarabe de maíz, grenetina, ácido láctico y ácido cítrico.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 30g. Calorías: 110. Azúcares: 21g.',
          },
        ],
      },
      {
        id: 'g5',
        name: 'Worms Original',
        subtitle: 'Gummy candy\nFlavor: Fruit Mix',
        description: 'Gomitas tipo worm con una mezcla clásica de sabores frutales.',
        image: 'https://picsum.photos/seed/gummy-worms-original/600/800',
        secondaryImage: 'https://picsum.photos/seed/gummy-worms-original-detail/600/300',
        certifications: ['SGS', 'Halal'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.3 oz (8g)' },
          { label: 'Pieces per bag', value: '21 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azúcar, jarabe de maíz, grenetina, ácido cítrico y saborizantes artificiales.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 30g. Calorías: 108. Azúcares: 19g.',
          },
        ],
      },
      {
        id: 'g6',
        name: 'Worms Sour Blast',
        subtitle: 'Gummy candy\nFlavor: Sour Fruit',
        description: 'Versión acidita de los worms con recubrimiento sour y acabado brillante.',
        image: 'https://picsum.photos/seed/gummy-worms-sour/600/800',
        secondaryImage: 'https://picsum.photos/seed/gummy-worms-sour-detail/600/300',
        certifications: ['SGS', 'OU Kosher'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.3 oz (8g)' },
          { label: 'Pieces per bag', value: '21 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azúcar, jarabe de maíz, grenetina, ácido málico, ácido cítrico y colorantes.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 30g. Calorías: 112. Azúcares: 20g.',
          },
        ],
      },
      {
        id: 'g7',
        name: 'Bears Classic',
        subtitle: 'Gummy candy\nFlavor: Assorted Fruit',
        description: 'Ositos de gomita con perfil dulce tradicional y colores surtidos.',
        image: 'https://picsum.photos/seed/gummy-bears-classic/600/800',
        secondaryImage: 'https://picsum.photos/seed/gummy-bears-classic-detail/600/300',
        certifications: ['SGS', 'OU Kosher', 'Halal'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.25 oz (7g)' },
          { label: 'Pieces per bag', value: '24 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azúcar, jarabe de maíz, grenetina, ácido cítrico y saborizantes naturales.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 30g. Calorías: 106. Azúcares: 18g.',
          },
        ],
      },
      {
        id: 'g8',
        name: 'Bears Tropical',
        subtitle: 'Gummy candy\nFlavor: Tropical Mix',
        description: 'Ositos de gomita inspirados en sabores tropicales con colorido más vivo.',
        image: 'https://picsum.photos/seed/gummy-bears-tropical/600/800',
        secondaryImage: 'https://picsum.photos/seed/gummy-bears-tropical-detail/600/300',
        certifications: ['SGS', 'Halal'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.25 oz (7g)' },
          { label: 'Pieces per bag', value: '24 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azúcar, jarabe de maíz, grenetina, ácido cítrico y concentrados de fruta.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 30g. Calorías: 109. Azúcares: 19g.',
          },
        ],
      },
    ],
  },
  hard: {
    id: 'hard',
    title: 'Dulces Duros',
    accent: '#C8102E',
    products: [
      {
        id: 'h1',
        name: 'Cherry Drops',
        subtitle: 'Hard candy\nFlavor: Cherry',
        description: 'Caramelos macizos con un toque ácido y dulce sabor a cereza.',
        image: 'https://picsum.photos/seed/bag-cherry/600/800',
        secondaryImage: 'https://picsum.photos/seed/hard-cherry/600/300',
        certifications: ['SGS', 'OU Kosher'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.15 oz (4g)' },
          { label: 'Pieces per bag', value: '40 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azúcar, jarabe de maíz, ácido málico, saborizante artificial a cereza y Rojo 40.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 15g. Calorías: 60. Azúcares: 12g.',
          },
        ],
      },
      {
        id: 'h2',
        name: 'Lemon Drops',
        subtitle: 'Hard candy\nFlavor: Lemon',
        description: 'Caramelos macizos con un refrescante sabor a limón natural.',
        image: 'https://picsum.photos/seed/bag-lemon/600/800',
        secondaryImage: 'https://picsum.photos/seed/hard-lemon/600/300',
        certifications: ['SGS', 'OU Kosher', 'Halal'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.15 oz (4g)' },
          { label: 'Pieces per bag', value: '40 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azúcar, jarabe de maíz, ácido cítrico y aceite esencial de limón.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 15g. Calorías: 60. Azúcares: 12g.',
          },
        ],
      },
      {
        id: 'h3',
        name: 'Mint Starlights',
        subtitle: 'Hard candy\nFlavor: Peppermint',
        description: 'Clásicos caramelos de menta con diseño de estrella.',
        image: 'https://picsum.photos/seed/bag-mint/600/800',
        secondaryImage: 'https://picsum.photos/seed/hard-mint/600/300',
        certifications: ['SGS', 'OU Kosher'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.15 oz (4g)' },
          { label: 'Pieces per bag', value: '40 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azúcar, jarabe de maíz, aceite de menta piperita y colorante.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 15g. Calorías: 60. Azúcares: 12g.',
          },
        ],
      },
      {
        id: 'h4',
        name: 'Spearmint Starlights',
        subtitle: 'Hard candy\nFlavor: Spearmint',
        description: 'Caramelos de menta verde con acabado fresco y perfil más herbal.',
        image: 'https://picsum.photos/seed/bag-spearmint/600/800',
        secondaryImage: 'https://picsum.photos/seed/hard-spearmint/600/300',
        certifications: ['SGS', 'OU Kosher'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.15 oz (4g)' },
          { label: 'Pieces per bag', value: '40 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azúcar, jarabe de maíz, aceite natural de hierbabuena y colorantes.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 15g. Calorías: 61. Azúcares: 12g.',
          },
        ],
      },
    ],
  },
  chili: {
    id: 'chili',
    title: 'Con Chile',
    accent: '#C05621',
    products: [
      {
        id: 'c1',
        name: 'Fuego Tamarindo',
        subtitle: 'Spicy candy\nFlavor: Tamarind',
        description: 'Dulce enchilado con el balance perfecto entre tamarindo y picante.',
        image: 'https://picsum.photos/seed/bag-tamarind/600/800',
        secondaryImage: 'https://picsum.photos/seed/spicy-tamarind/600/300',
        certifications: ['SGS'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.5 oz (14g)' },
          { label: 'Pieces per bag', value: '12 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azúcar, pulpa de tamarindo, chile en polvo, sal yodada y ácido cítrico.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 28g. Calorías: 90. Sodio: 210mg.',
          },
        ],
      },
      {
        id: 'c2',
        name: 'Mango Fuego',
        subtitle: 'Spicy candy\nFlavor: Mango Chili',
        description: 'Gomitas de mango cubiertas con nuestra mezcla especial de chile.',
        image: 'https://picsum.photos/seed/bag-mangofuego/600/800',
        secondaryImage: 'https://picsum.photos/seed/spicy-mangofuego/600/300',
        certifications: ['SGS', 'Halal'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.5 oz (14g)' },
          { label: 'Pieces per bag', value: '12 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azúcar, jarabe de maíz, chile en polvo, sal y saborizante artificial a mango.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 28g. Calorías: 95. Sodio: 200mg.',
          },
        ],
      },
      {
        id: 'c3',
        name: 'Sandía Loca',
        subtitle: 'Spicy candy\nFlavor: Watermelon Chili',
        description: 'Aros de sandía con un toque picosito irresistible.',
        image: 'https://picsum.photos/seed/bag-sandialoca/600/800',
        secondaryImage: 'https://picsum.photos/seed/spicy-sandialoca/600/300',
        certifications: ['SGS'],
        specs: [
          { label: 'Weight per piece', value: 'Net Wt. 0.5 oz (14g)' },
          { label: 'Pieces per bag', value: '12 aprox' },
          { label: 'Weight per bag', value: 'Net Wt. 6 oz (170g)' },
          { label: 'Bags per Box', value: '24' },
          { label: 'Box Weight', value: 'Net Wt. 8 lb 13 oz (4.08 kg)' },
        ],
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azúcar, jarabe de maíz, chile en polvo, sal y saborizante artificial a sandía.',
          },
          {
            title: 'Información Nutrimental',
            content: 'Tamaño de la porción: 28g. Calorías: 95. Sodio: 200mg.',
          },
        ],
      },
    ],
  },
};

import type { AboutContent, AboutLayer } from '../types/about.types';

export const ABOUT_CONTENT: AboutContent = {
  eyebrow: '',
  titleLines: ['Nuestra', 'esencia'],
  description:
    'La sección condensa lo que sostiene a la marca: una misión clara, una visión ambiciosa, valores operativos y una filosofía que entiende al dulce como experiencia de diseño.',
};

export const ABOUT_LAYERS: AboutLayer[] = [
  {
    id: 'mission',
    kicker: 'Misión',
    title: 'Elevar el dulce a una categoría de lujo.',
    body:
      'Creamos gomas, caramelos y productos frutales llenos de sabor y calidad, hechos con compromiso, seguridad y responsabilidad, para brindar bienestar y una experiencia deliciosa en cada bite.',
    detail: 'experiencia y sofisticación',
    tone: 'rgba(41, 37, 36, 0.08)',
    iconType: 'target',
  },
  {
    id: 'vision',
    kicker: 'Visión',
    title: 'Construir un atelier de confitería sin límites.',
    body:
      'Ser la marca líder nacional e internacional en gomas, caramelos y productos frutales, reconocida por su innovación, calidad y compromiso; inspirando confianza y bienestar en cada cliente, destacando por nuestro sabor y experiencia sensorial.',
    detail: 'referencia global',
    tone: 'rgba(120, 113, 108, 0.11)',
    iconType: 'rocket',
  },
  {
    id: 'values',
    kicker: 'Valores',
    title: 'Rigor, detalle y sensibilidad en cada decisión.',
    body:
      '',
    detail: 'coherencia y excelencia',
    tone: 'rgba(168, 162, 158, 0.14)',
    iconType: 'heart',
    values: [
      {
        title: 'Confianza',
        description:
          'Base de nuestras relaciones; actuamos con transparencia, cumplimiento y coherencia.',
      },
      {
        title: 'Integridad',
        description:
          'Mantenemos un comportamiento ético y honesto en cada decisión.',
      },
      {
        title: 'Responsabilidad',
        description:
          'Cumplimos con calidad, seguridad e inocuidad, asegurando el bienestar del consumidor.',
      },
      {
        title: 'Innovación',
        description:
          'Impulsamos la creatividad, la mejora continua y la búsqueda de nuevas soluciones que fortalezcan nuestros productos y procesos.',
      },
      {
        title: 'Fiabilidad',
        description:
          'Generamos seguridad y consistencia en nuestras operaciones y relaciones.',
      },
      {
        title: 'Generosidad',
        description:
          'Promovemos la colaboración, el respeto y el apoyo mutuo dentro y fuera de la empresa.',
      },
    ],
  },
  // {
  //   id: 'philosophy',
  //   kicker: 'Filosofía',
  //   title: 'El sabor también puede ser diseño.',
  //   body:
  //     'Creemos que cada dulce es una oportunidad para expresar una visión estética única. El sabor no es separable del contexto visual, emocional y sensorial que lo envuelve.',
  //   detail: 'diseño y experiencia',
  //   tone: 'rgba(100, 116, 139, 0.12)',
  //   iconType: 'sparkles',
  // },
];

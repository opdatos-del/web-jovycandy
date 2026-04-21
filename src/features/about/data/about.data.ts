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
      'Transformamos el consumo en una experiencia de diseño y sofisticación, donde cada pieza debe sentirse tan pensada como deseable.',
    detail: 'experiencia y sofisticación',
    tone: 'rgba(41, 37, 36, 0.08)',
    iconType: 'target',
  },
  {
    id: 'vision',
    kicker: 'Visión',
    title: 'Construir un atelier de confitería sin límites.',
    body:
      'Queremos ser un referente contemporáneo donde innovación, sabor y lenguaje visual convivan como una misma firma de marca.',
    detail: 'referencia global',
    tone: 'rgba(120, 113, 108, 0.11)',
    iconType: 'rocket',
  },
  {
    id: 'values',
    kicker: 'Valores',
    title: 'Rigor, detalle y sensibilidad en cada decisión.',
    body:
      'Trabajamos con calidad sin concesiones, coherencia estética y una atención obsesiva por la experiencia del usuario en cada punto de contacto.',
    detail: 'coherencia y excelencia',
    tone: 'rgba(168, 162, 158, 0.14)',
    iconType: 'heart',
  },
  {
    id: 'philosophy',
    kicker: 'Filosofía',
    title: 'El sabor también puede ser diseño.',
    body:
      'Creemos que cada dulce es una oportunidad para expresar una visión estética única. El sabor no es separable del contexto visual, emocional y sensorial que lo envuelve.',
    detail: 'diseño y experiencia',
    tone: 'rgba(100, 116, 139, 0.12)',
    iconType: 'sparkles',
  },
];

import type { CatalogSpec } from '../types/catalog.types';

const SPEC_LABELS_ES: Record<string, string> = {
  'Weight per piece': 'Peso por pieza',
  'Pieces per bag': 'Piezas por bolsa',
  'Weight per bag': 'Peso por bolsa',
  'Bags per Box': 'Bolsas por caja',
  'Box Weight': 'Peso de la caja',
};

export const getCatalogSpecLabelEs = (label: string) => SPEC_LABELS_ES[label] ?? label;

export const getCatalogSpecValueEs = (value: string) =>
  value
    .replace(/^Net Wt\.\s*/i, 'Peso neto ')
    .replace(/\baprox\b/i, 'aprox.');

export const getCatalogSpecEs = (spec: CatalogSpec) => ({
  label: getCatalogSpecLabelEs(spec.label),
  value: getCatalogSpecValueEs(spec.value),
});

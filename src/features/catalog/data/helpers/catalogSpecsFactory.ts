import type { CatalogSpec } from '../../types/catalog.types';

/**
 * Configuration for creating standard product specifications
 */
export type StandardSpecsConfig = {
  weightPerPiece?: string;
  piecesPerBag: number;
  bagWeight: string;
  bagsPerBox?: number;
  boxWeight?: string;
};

/**
 * Factory to create standard product specifications
 * Eliminates repetitive spec definitions across catalog categories
 *
 * @example
 * specs: createStandardSpecs({
 *   piecesPerBag: 12,
 *   bagWeight: '170g',
 *   weightPerPiece: 'Net Wt. 0.5 oz (14g)',
 *   bagsPerBox: 24,
 *   boxWeight: 'Net Wt. 8 lb 13 oz (4.08 kg)',
 * })
 */
export const createStandardSpecs = (config: StandardSpecsConfig): CatalogSpec[] => {
  const specs: CatalogSpec[] = [];

  if (config.weightPerPiece) {
    specs.push({
      label: 'Weight per piece',
      value: config.weightPerPiece,
    });
  }

  specs.push(
    {
      label: 'Pieces per bag',
      value: `${config.piecesPerBag} aprox`,
    },
    {
      label: 'Weight per bag',
      value: `Net Wt. ${config.bagWeight}`,
    }
  );

  if (config.bagsPerBox || config.boxWeight) {
    specs.push({
      label: 'Bags per Box',
      value: String(config.bagsPerBox ?? 24),
    });
  }

  if (config.boxWeight) {
    specs.push({
      label: 'Box Weight',
      value: `Net Wt. ${config.boxWeight}`,
    });
  }

  return specs;
};

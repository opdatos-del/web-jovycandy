import { useMemo } from 'react';

import { catalogData } from '../data/catalogData';
import { categoryNavigation } from '../data/categoryNavigation';
import { buildCatalogModel } from '../utils/buildCatalogTree';
import { useCatalogSelection } from './useCatalogSelection';

export const useCatalogState = () => {
  const catalogModel = useMemo(() => buildCatalogModel(catalogData, categoryNavigation), []);
  const selection = useCatalogSelection(catalogModel);

  return {
    catalogTree: catalogModel.catalogTree,
    ...selection,
  };
};

import { CATEGORY_GRID_SPECS_LABEL } from '../constants/catalog.constants';
import type { CatalogSpec } from '../types/catalog.types';
import { ProductDownloadButton } from './ProductDownloadButton';

type ProductSpecsProps = {
  specs: CatalogSpec[];
  accentColor: string;
};

export const ProductSpecs = ({ specs, accentColor }: ProductSpecsProps) => (
  <div className="flex flex-col">
    <h3 className="text-sm font-bold uppercase tracking-widest mb-3 text-stone-700">{CATEGORY_GRID_SPECS_LABEL}</h3>
    <div className="space-y-2 text-xs font-medium text-stone-600 mb-6">
      {specs.map((spec) => (
        <div key={`${spec.label}-${spec.value}`} className="flex justify-between border-b border-stone-100 pb-1">
          <span className="text-stone-500">{spec.label}</span>
          <span className="text-right">{spec.value}</span>
        </div>
      ))}
    </div>

    <div className="mt-auto pt-4 hidden md:block">
      <ProductDownloadButton accentColor={accentColor} />
    </div>
  </div>
);

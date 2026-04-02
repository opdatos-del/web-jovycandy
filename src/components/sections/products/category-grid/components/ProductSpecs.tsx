import { CATEGORY_GRID_SPECS_LABEL } from '../constants/catalog.constants';
import type { CatalogSpec } from '../types/catalog.types';
import { ProductDownloadButton } from './ProductDownloadButton';

type ProductSpecsProps = {
  specs: CatalogSpec[];
  accentColor: string;
};

export const ProductSpecs = ({ specs, accentColor }: ProductSpecsProps) => (
  <div className="flex flex-col">
    <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-stone-700">{CATEGORY_GRID_SPECS_LABEL}</h3>
    <div className="mb-6 space-y-2 text-xs font-medium text-stone-600">
      {specs.map((spec) => (
        <div
          key={`${spec.label}-${spec.value}`}
          className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 border-b border-stone-100 pb-1"
        >
          <span className="min-w-0 text-stone-500">{spec.label}</span>
          <span className="text-right leading-relaxed">{spec.value}</span>
        </div>
      ))}
    </div>

    <div className="mt-auto hidden pt-4 xl:block">
      <ProductDownloadButton accentColor={accentColor} />
    </div>
  </div>
);

import { formatCertificationLabel } from '../utils/catalogFormatters';
import type { CatalogLogo, CatalogProduct } from '../types/catalog.types';

type ProductHeaderProps = {
  product: CatalogProduct;
  branchLogo: CatalogLogo | null;
  accentColor: string;
  currentPathLabel: string;
};

export const ProductHeader = ({ product, branchLogo, accentColor, currentPathLabel }: ProductHeaderProps) => {
  const certificationBadges = product.certifications.map((certification) => (
    <span
      key={certification}
      className="text-[9px] md:text-[10px] uppercase tracking-widest font-mono px-2 py-1 rounded-sm bg-stone-100 text-stone-600 border border-stone-200 whitespace-nowrap"
      title={certification}
    >
      {formatCertificationLabel(certification)}
    </span>
  ));

  return (
    <div className="relative mb-6 flex flex-col gap-4 border-b border-stone-200 pb-4 md:min-h-[11rem]">
      <div className="md:pr-56 lg:pr-64">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight mb-1 transition-colors duration-500"
          style={{ color: accentColor }}
        >
          {product.name}
        </h2>
        <p className="text-stone-500 text-xs md:text-sm whitespace-pre-line font-medium">{product.subtitle}</p>
        {currentPathLabel && (
          <p className="mt-3 text-[10px] uppercase tracking-[0.35em] text-stone-400 font-mono">{currentPathLabel}</p>
        )}

        {product.certifications.length > 0 && (
          <div className="mt-4 flex max-w-[26rem] flex-wrap gap-2">
            {certificationBadges}
          </div>
        )}
      </div>

      {branchLogo && (
        <div className="flex w-full flex-col items-start gap-4 md:absolute md:right-0 md:top-0 md:w-[13rem] md:items-end md:gap-5">
          {branchLogo && (
            <img
              src={branchLogo.src}
              alt={branchLogo.alt}
              className="h-auto w-auto max-w-[11rem] object-contain drop-shadow-[0_10px_18px_rgba(28,25,23,0.14)]"
            />
          )}
        </div>
      )}
    </div>
  );
};

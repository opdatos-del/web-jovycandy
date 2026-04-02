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
      className="rounded-sm border border-stone-200 bg-stone-100 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] whitespace-nowrap text-stone-600 sm:tracking-widest md:text-[10px]"
      title={certification}
    >
      {formatCertificationLabel(certification)}
    </span>
  ));

  return (
    <div className="relative mb-6 flex flex-col gap-4 border-b border-stone-200 pb-4 lg:min-h-[11rem]">
      <div className="lg:pr-56 xl:pr-64">
        <h2
          className="mb-1 text-2xl font-bold uppercase tracking-tight transition-colors duration-500 sm:text-3xl lg:text-4xl"
          style={{ color: accentColor }}
        >
          {product.name}
        </h2>
        <p className="whitespace-pre-line text-xs font-medium text-stone-500 sm:text-sm">{product.subtitle}</p>
        {currentPathLabel && (
          <p className="mt-3 break-words font-mono text-[10px] uppercase tracking-[0.18em] text-stone-400 sm:tracking-[0.35em]">{currentPathLabel}</p>
        )}

        {product.certifications.length > 0 && (
          <div className="mt-4 flex max-w-full flex-wrap gap-2 lg:max-w-[26rem]">
            {certificationBadges}
          </div>
        )}
      </div>

      {branchLogo && (
        <div className="flex w-full flex-col items-start gap-4 lg:absolute lg:right-0 lg:top-0 lg:w-[13rem] lg:items-end lg:gap-5">
          {branchLogo && (
            <img
              src={branchLogo.src}
              alt={branchLogo.alt}
              className="h-auto w-auto max-w-[10rem] object-contain drop-shadow-[0_10px_18px_rgba(28,25,23,0.14)] sm:max-w-[11rem]"
            />
          )}
        </div>
      )}
    </div>
  );
};

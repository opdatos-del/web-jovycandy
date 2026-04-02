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
      className="product-header-badge rounded-sm border border-stone-200 bg-stone-100 px-2 py-1 font-mono text-[9px] uppercase whitespace-nowrap text-stone-600"
      title={certification}
    >
      {formatCertificationLabel(certification)}
    </span>
  ));

  return (
    <div className="product-header relative mb-6 flex flex-col gap-4 border-b border-stone-200 pb-4">
      <div className="product-header-main">
        <h2
          className="mb-1 text-2xl font-bold uppercase tracking-tight transition-colors duration-500 sm:text-3xl lg:text-4xl"
          style={{ color: accentColor }}
        >
          {product.name}
        </h2>
        <p className="whitespace-pre-line text-xs font-medium text-stone-500 sm:text-sm">{product.subtitle}</p>
        {currentPathLabel && (
          <p className="product-header-path mt-3 break-words font-mono text-[10px] uppercase text-stone-400">{currentPathLabel}</p>
        )}

        {product.certifications.length > 0 && (
          <div className="mt-4 flex max-w-full flex-wrap gap-2 lg:max-w-[26rem]">
            {certificationBadges}
          </div>
        )}
      </div>

      {branchLogo && (
        <div className="product-header-brand flex flex-col items-start">
          {branchLogo && (
            <img
              src={branchLogo.src}
              alt={branchLogo.alt}
              className="product-header-logo h-auto w-auto object-contain drop-shadow-[0_10px_18px_rgba(28,25,23,0.14)]"
            />
          )}
        </div>
      )}
    </div>
  );
};

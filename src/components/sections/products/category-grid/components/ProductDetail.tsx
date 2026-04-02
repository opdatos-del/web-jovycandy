import { motion } from 'motion/react';

import type { CatalogBranch, CatalogCategory, CatalogProduct } from '../types/catalog.types';
import { ScrollReveal } from '../../../../ui/ScrollReveal';
import { ProductAccordionInfo } from './ProductAccordionInfo';
import { ProductDownloadButton } from './ProductDownloadButton';
import { ProductHeader } from './ProductHeader';
import { ProductMedia } from './ProductMedia';
import { ProductSpecs } from './ProductSpecs';
import { RelatedProducts } from './RelatedProducts';

type ProductDetailProps = {
  product: CatalogProduct;
  branch: CatalogBranch;
  category: CatalogCategory;
  currentPathLabel: string;
  activeInfoIndex: number | null;
  relatedProducts: CatalogProduct[];
  onInfoToggle: (index: number) => void;
  onProductSelect: (productId: string, branchKey: string) => void;
};

export const ProductDetail = ({
  product,
  branch,
  category,
  currentPathLabel,
  activeInfoIndex,
  relatedProducts,
  onInfoToggle,
  onProductSelect,
}: ProductDetailProps) => (
  <ScrollReveal className="w-full min-w-0 xl:flex-1" direction="right" distance={34} delay={0.12}>
    <div className="flex min-w-0 flex-col">
      <div className="product-detail-card flex overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xl">
        <div className="product-detail-media-panel relative flex items-center justify-center bg-gradient-to-br from-stone-50 to-white">
          <ProductMedia
            variant="primary"
            src={product.image}
            sampleImage={product.sampleImage}
            alt={product.name}
            mediaKey={`img-${product.id}-${branch.key}`}
          />
        </div>

        <div className="product-detail-content-panel flex flex-col bg-white text-stone-900 transition-colors duration-500">
          <motion.div
            key={`details-${product.id}-${branch.key}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="flex h-full flex-col"
          >
            <ProductHeader
              product={product}
              branchLogo={branch.logo}
              accentColor={category.accent}
              currentPathLabel={currentPathLabel}
            />

            <div className="product-detail-grid grid flex-grow">
              <ProductSpecs specs={product.specs} accentColor={category.accent} />

              <div className="flex flex-col">
                <div className="product-detail-secondary-media mb-4 w-full shrink-0 overflow-hidden rounded-sm border border-stone-200 shadow-sm">
                  <ProductMedia variant="secondary" src={product.secondaryImage} alt={`${product.name} detail`} />
                </div>

                <ProductAccordionInfo
                  items={product.collapsibleInfo}
                  activeInfoIndex={activeInfoIndex}
                  onInfoToggle={onInfoToggle}
                />

                <div className="mt-6 xl:hidden">
                  <ProductDownloadButton accentColor={category.accent} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <RelatedProducts
        branch={branch}
        products={relatedProducts}
        accentColor={category.accent}
        onProductSelect={onProductSelect}
      />
    </div>
  </ScrollReveal>
);

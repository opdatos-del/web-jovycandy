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
  <ScrollReveal className="w-full lg:w-4/5" direction="right" distance={34} delay={0.12}>
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-xl border border-stone-200">
        <div className="w-full md:w-2/5 bg-gradient-to-br from-stone-50 to-white p-6 md:p-8 flex items-center justify-center relative border-b md:border-b-0 md:border-r border-stone-200">
          <ProductMedia
            variant="primary"
            src={product.image}
            sampleImage={product.sampleImage}
            alt={product.name}
            mediaKey={`img-${product.id}-${branch.key}`}
          />
        </div>

        <div className="w-full md:w-3/5 bg-white p-6 md:p-8 flex flex-col text-stone-900 transition-colors duration-500">
          <motion.div
            key={`details-${product.id}-${branch.key}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="flex flex-col h-full"
          >
            <ProductHeader
              product={product}
              branchLogo={branch.logo}
              accentColor={category.accent}
              currentPathLabel={currentPathLabel}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 flex-grow">
              <ProductSpecs specs={product.specs} accentColor={category.accent} />

              <div className="flex flex-col">
                <div className="mb-4 w-full h-24 md:h-32 border border-stone-200 rounded-sm overflow-hidden shadow-sm shrink-0">
                  <ProductMedia variant="secondary" src={product.secondaryImage} alt={`${product.name} detail`} />
                </div>

                <ProductAccordionInfo
                  items={product.collapsibleInfo}
                  activeInfoIndex={activeInfoIndex}
                  onInfoToggle={onInfoToggle}
                />

                <div className="mt-6 md:hidden">
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

import type { CatalogData, CatalogProduct, CatalogCategoryId } from '../../types/catalog.types';
import { catalogData, categoryLogosMap, categoryLogoProductsMap } from '../catalogData';

export interface CatalogValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Validate catalog integrity
 * Checks for:
 * - Products with missing images
 * - Logos without associated products
 * - Products without valid category
 * - Product names that don't match any logo filter
 */
export function validateCatalog(
  data: CatalogData = catalogData
): CatalogValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // 1. Validate all products have images
  (Object.entries(data) as Array<[CatalogCategoryId, any]>).forEach(([categoryId, category]) => {
    category.products.forEach((product: CatalogProduct) => {
      if (!product.image || product.image.trim() === '') {
        errors.push(`[${categoryId}] Product "${product.name}" has no image`);
      }
    });
  });

  // 2. Validate logo-product mappings exist and are consistent
  Object.entries(categoryLogoProductsMap).forEach(([categoryId, logoMap]) => {
    const logos = categoryLogosMap[categoryId] || [];

    // Check that all logos have product matches
    logos.forEach(({ src, alt }) => {
      const products = logoMap[src];
      if (!products || products.length === 0) {
        warnings.push(`[${categoryId}] Logo "${alt}" (${src}) has no product mappings`);
      }
    });

    // Check that product mappings reference valid products
    const categoryProducts = data[categoryId as CatalogCategoryId];
    if (categoryProducts) {
      const validProductNames = new Set(categoryProducts.products.map((p: CatalogProduct) => p.name));

      Object.entries(logoMap).forEach(([logoSrc, productNames]) => {
        productNames.forEach((productName) => {
          if (!validProductNames.has(productName)) {
            errors.push(
              `[${categoryId}] Logo mapping references unknown product "${productName}"`
            );
          }
        });
      });
    }
  });

  // 3. Validate all specs have required fields
  (Object.entries(data) as Array<[CatalogCategoryId, any]>).forEach(([categoryId, category]) => {
    category.products.forEach((product: CatalogProduct) => {
      if (product.specs && Array.isArray(product.specs)) {
        product.specs.forEach((spec: any, idx: number) => {
          if (!spec.label || !spec.value) {
            warnings.push(
              `[${categoryId}] Product "${product.name}" spec #${idx} is incomplete`
            );
          }
        });
      }
    });
  });

  // 4. Validate certifications are valid
  const VALID_CERTIFICATIONS = ['SGS', 'Halal', 'OU Kosher', 'Vegano', 'FSSC 22000'];
  (Object.entries(data) as Array<[CatalogCategoryId, any]>).forEach(([categoryId, category]) => {
    category.products.forEach((product: CatalogProduct) => {
      if (product.certifications && Array.isArray(product.certifications)) {
        product.certifications.forEach((cert) => {
          if (!VALID_CERTIFICATIONS.includes(cert)) {
            warnings.push(
              `[${categoryId}] Product "${product.name}" has unknown certification: "${cert}"`
            );
          }
        });
      }
    });
  });

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Format validation results for console output
 */
export function formatValidationResults(result: CatalogValidationResult): string {
  const lines: string[] = [];

  if (result.valid && result.warnings.length === 0) {
    lines.push('✅ Catalog validation PASSED - all checks successful');
    return lines.join('\n');
  }

  if (!result.valid) {
    lines.push('❌ VALIDATION ERRORS:');
    result.errors.forEach((error) => lines.push(`  - ${error}`));
  }

  if (result.warnings.length > 0) {
    lines.push('⚠️  VALIDATION WARNINGS:');
    result.warnings.forEach((warning) => lines.push(`  - ${warning}`));
  }

  lines.push(`\nSummary: ${result.errors.length} errors, ${result.warnings.length} warnings`);
  return lines.join('\n');
}

/**
 * Throw if validation fails (for use in build scripts)
 */
export function assertCatalogValid(data: CatalogData = catalogData): void {
  const result = validateCatalog(data);
  if (!result.valid) {
    const message = formatValidationResults(result);
    throw new Error(`Catalog validation failed:\n${message}`);
  }
}

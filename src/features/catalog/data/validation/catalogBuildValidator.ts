import type { CatalogData, CatalogProduct, CatalogCategoryId } from '../../types/catalog.types';
import { catalogData, categoryModulesMap } from '../catalogData.ts';

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

  Object.entries(categoryModulesMap).forEach(([categoryId, categoryModule]) => {
    const familyIds = new Set(
      categoryModule.category.products
        .map((product) => product.familyId)
        .filter((familyId): familyId is string => Boolean(familyId))
    );
    const mappedFamilies = new Set<string>();

    categoryModule.category.products.forEach((product) => {
      if (!product.familyId) {
        errors.push(`[${categoryId}] Product "${product.name}" has no familyId`);
      }

      if (!product.carouselImage) {
        errors.push(`[${categoryId}] Product "${product.name}" has no carouselImage`);
      }

      if (!product.bowlImage) {
        errors.push(`[${categoryId}] Product "${product.name}" has no bowlImage`);
      }
    });

    categoryModule.logos.forEach(({ alt, families }) => {
      if (!families.length) {
        warnings.push(`[${categoryId}] Logo "${alt}" has no families mapped`);
      }

      families.forEach((familyId) => {
        mappedFamilies.add(familyId);

        if (!familyIds.has(familyId)) {
          errors.push(
            `[${categoryId}] Logo mapping references unknown family "${familyId}"`
          );
        }
      });
    });

    categoryModule.category.products.forEach((product) => {
      if (product.familyId && !mappedFamilies.has(product.familyId)) {
        errors.push(
          `[${categoryId}] Product "${product.name}" family "${product.familyId}" is not mapped to any logo`
        );
      }
    });
  });

  // 2. Validate all specs have required fields
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

  // 3. Validate certifications are valid
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

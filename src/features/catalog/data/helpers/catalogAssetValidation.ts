import type { CatalogCategoryId } from '../../types/catalog.types';

/**
 * Contract that all asset files must export
 * Used for runtime validation and type checking
 */
export type AssetFileExport<CategoryId extends string = string> = {
  readonly productImageMap?: Record<string, string>;
  readonly logos: Array<{ src: string; alt: string }>;
  readonly logoProductsMap: Record<string, string[]>;
};

/**
 * Result of asset file validation
 */
export type ValidationResult = {
  isValid: boolean;
  errors: ValidationError[];
  warnings: ValidationWarning[];
};

export type ValidationError = {
  type: 'missing_export' | 'invalid_structure' | 'empty_logos' | 'orphaned_products';
  message: string;
  category?: CatalogCategoryId;
  details?: Record<string, unknown>;
};

export type ValidationWarning = {
  type: 'empty_logos' | 'product_without_image' | 'logo_without_products' | 'unused_image';
  message: string;
  category?: CatalogCategoryId;
  details?: Record<string, unknown>;
};

/**
 * Validates that an asset file export meets the required contract
 * Runs in development to catch structural issues early
 */
export const validateAssetFile = (
  exports: Record<string, unknown>,
  categoryId: CatalogCategoryId
): ValidationResult => {
  const errors: ValidationError[] = [];
  const warnings: ValidationWarning[] = [];

  // Check required exports
  if (!('logos' in exports) || !Array.isArray(exports.logos)) {
    errors.push({
      type: 'missing_export',
      message: `Asset file for ${categoryId} must export 'logos' as array`,
      category: categoryId,
    });
  }

  if (!('logoProductsMap' in exports) || typeof exports.logoProductsMap !== 'object') {
    errors.push({
      type: 'missing_export',
      message: `Asset file for ${categoryId} must export 'logoProductsMap' as object`,
      category: categoryId,
    });
  }

  // Check structure
  const logos = exports.logos as Array<{ src?: string; alt?: string }>;
  if (Array.isArray(logos) && logos.length === 0) {
    warnings.push({
      type: 'empty_logos',
      message: `Category ${categoryId} has no logos defined`,
      category: categoryId,
    });
  }

  // Validate logos have required properties
  logos?.forEach((logo, index) => {
    if (!logo.src || !logo.alt) {
      errors.push({
        type: 'invalid_structure',
        message: `Logo ${index} in ${categoryId} missing 'src' or 'alt'`,
        category: categoryId,
        details: { logoIndex: index, logo },
      });
    }
  });

  // Validate logoProductsMap references exist products
  const logoProductsMap = exports.logoProductsMap as Record<string, string[]>;
  if (logoProductsMap && typeof logoProductsMap === 'object') {
    Object.entries(logoProductsMap).forEach(([logoPath, productNames]) => {
      if (!Array.isArray(productNames) || productNames.length === 0) {
        warnings.push({
          type: 'logo_without_products',
          message: `Logo '${logoPath}' in ${categoryId} has no products mapped`,
          category: categoryId,
          details: { logoPath },
        });
      }
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
};

/**
 * Generates a human-readable report of validation issues
 */
export const reportAssetIssues = (result: ValidationResult, categoryId: CatalogCategoryId): string => {
  if (result.isValid && result.warnings.length === 0) {
    return `✅ ${categoryId} asset file is valid`;
  }

  const lines: string[] = [];

  if (result.errors.length > 0) {
    lines.push(`❌ ${categoryId} has ${result.errors.length} error(s):`);
    result.errors.forEach((error) => {
      lines.push(`  - [${error.type}] ${error.message}`);
      if (error.details) {
        lines.push(`    Details: ${JSON.stringify(error.details)}`);
      }
    });
  }

  if (result.warnings.length > 0) {
    lines.push(`⚠️  ${categoryId} has ${result.warnings.length} warning(s):`);
    result.warnings.forEach((warning) => {
      lines.push(`  - [${warning.type}] ${warning.message}`);
      if (warning.details) {
        lines.push(`    Details: ${JSON.stringify(warning.details)}`);
      }
    });
  }

  return lines.join('\n');
};

/**
 * Check if all products in a category have images defined
 * Called during validation phase
 */
export const validateProductImages = (
  categoryId: CatalogCategoryId,
  productNames: string[],
  imageMap: Record<string, string> | undefined
): ValidationWarning[] => {
  const warnings: ValidationWarning[] = [];

  if (!imageMap) {
    return warnings;
  }

  productNames.forEach((productName) => {
    if (!(productName in imageMap)) {
      warnings.push({
        type: 'product_without_image',
        message: `Product '${productName}' in ${categoryId} has no image mapped`,
        category: categoryId,
        details: { productName },
      });
    }
  });

  return warnings;
};

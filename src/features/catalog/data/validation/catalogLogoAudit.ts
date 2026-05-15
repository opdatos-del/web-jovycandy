import type { CatalogCategoryId } from '../../types/catalog.types';
import { catalogData, categoryModulesMap } from '../catalogData.ts';

export interface LogoAuditResult {
  categoryId: CatalogCategoryId;
  logoCount: number;
  productCount: number;
  expectedPatternMatch: boolean;
  issues: string[];
  recommendations: string[];
}

/**
 * Audit logo-to-product mappings across all categories
 * Checks for:
 * - Orphaned logos (no products)
 * - Unmapped products (not in any logo group)
 * - Logo count vs product count mismatch
 * - Consistency across categories
 */
export function auditLogomappings(): LogoAuditResult[] {
  const results: LogoAuditResult[] = [];

  (Object.keys(catalogData) as CatalogCategoryId[]).forEach((categoryId) => {
    const products = catalogData[categoryId]?.products || [];
    const categoryModule = categoryModulesMap[categoryId];
    const logos = categoryModule.logos;
    const logoProducts = Object.fromEntries(
      categoryModule.logos.map((logo) => [logo.src, logo.families])
    );

    const issues: string[] = [];
    const recommendations: string[] = [];

    // Check for orphaned logos (no products)
    logos.forEach(({ src, alt }) => {
      const mapped = logoProducts[src] || [];
      if (mapped.length === 0) {
        issues.push(`Logo "${alt}" has no products mapped`);
      }
    });

    // Check for unmapped products
    const mappedProductNames = new Set<string>();
    Object.values(logoProducts).forEach((productList) => {
      productList.forEach((name) => mappedProductNames.add(name));
    });

    products.forEach((product) => {
      const matcher = product.familyId ?? product.name;
      if (!mappedProductNames.has(matcher)) {
        issues.push(`Product "${product.name}" not mapped to any logo`);
      }
    });

    // Pattern recommendations
    const expectedPattern = identifyMappingPattern(categoryId, products, logos);
    if (!expectedPattern) {
      recommendations.push('Review and standardize logo grouping strategy');
    }

    results.push({
      categoryId,
      logoCount: logos.length,
      productCount: products.length,
      expectedPatternMatch: !!expectedPattern,
      issues,
      recommendations,
    });
  });

  return results;
}

/**
 * Identify the mapping pattern for a category
 * Returns pattern name or null if inconsistent
 */
function identifyMappingPattern(
  _categoryId: CatalogCategoryId,
  products: any[],
  logos: any[]
): string | null {
  if (logos.length === products.length) {
    return 'ONE_TO_ONE'; // Each product has unique logo (e.g., gomitas_almidon)
  }

  if (logos.length < products.length) {
    return 'FAMILY_GROUPING'; // Multiple products per logo (e.g., chamoy, gomitas_grenetina)
  }

  return null; // Orphaned logos
}

/**
 * Format audit results for console output
 */
export function formatAuditResults(results: LogoAuditResult[]): string {
  const lines: string[] = ['📋 LOGO MAPPING AUDIT REPORT\n'];

  let hasIssues = false;
  results.forEach((result) => {
    lines.push(`\n[${result.categoryId}]`);
    lines.push(`  Logos: ${result.logoCount} | Products: ${result.productCount}`);
    lines.push(
      `  Pattern: ${result.expectedPatternMatch ? '✅ Valid' : '⚠️  Inconsistent'}`
    );

    if (result.issues.length > 0) {
      hasIssues = true;
      lines.push(`  ❌ Issues:`);
      result.issues.forEach((issue) => lines.push(`     - ${issue}`));
    }

    if (result.recommendations.length > 0) {
      lines.push(`  💡 Recommendations:`);
      result.recommendations.forEach((rec) => lines.push(`     - ${rec}`));
    }
  });

  if (!hasIssues) {
    lines.unshift('✅ All categories have valid logo mappings\n');
  } else {
    lines.unshift('⚠️  Some categories need attention\n');
  }

  return lines.join('\n');
}

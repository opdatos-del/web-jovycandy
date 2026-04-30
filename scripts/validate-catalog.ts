#!/usr/bin/env node

/**
 * CLI script to validate catalog integrity
 * Usage: npx ts-node scripts/validate-catalog.ts
 * Or add to package.json: "validate-catalog": "ts-node scripts/validate-catalog.ts"
 */

import { validateCatalog, formatValidationResults } from '../src/features/catalog/data/validation/catalogBuildValidator.ts';

async function main() {
  console.log('🔍 Validating catalog...\n');

  try {
    // Run validation
    const result = validateCatalog();
    console.log(formatValidationResults(result));

    // Exit with appropriate code
    process.exit(result.valid ? 0 : 1);
  } catch (error) {
    console.error('❌ Validation script failed:', error);
    process.exit(1);
  }
}

main();

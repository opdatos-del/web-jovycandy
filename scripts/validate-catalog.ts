#!/usr/bin/env node

/**
 * validate-catalog.ts
 *
 * CLI script to validate catalog integrity against the new registry-based structure.
 *
 * Usage:
 *   npm run validate-catalog
 */

import { validateCatalog, formatValidationResults } from '../src/features/catalog/data/validation/catalogBuildValidator.ts';

async function main() {
  console.log('Validating catalog...\n');

  try {
    const result = validateCatalog();
    console.log(formatValidationResults(result));
    process.exit(result.valid ? 0 : 1);
  } catch (error) {
    console.error('Validation script failed:', error);
    process.exit(1);
  }
}

main();

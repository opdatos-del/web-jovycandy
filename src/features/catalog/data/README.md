# Catalog Maintenance Guide

## Current model

Each catalog category is now a self-contained module under `src/features/catalog/data/catalogs/`.

A category module exports:

- `category`
- `logos`

Each product should define directly:

- `id`
- `familyId`
- `name`
- `productFamily`
- `image`
- `carouselImage`
- `bowlImage`
- `certifications`
- `specs`
- `collapsibleInfo`

`catalogData.ts` only assembles category modules. It is no longer the place to register parallel image maps, logo maps, or bowl fallbacks.

## Source of truth

- `src/features/catalog/data/catalogs/*.ts`
  Each file owns its category data and logo grouping.

- `src/features/catalog/data/catalogData.ts`
  Central registry of category modules.

- `src/shared/assets/publicAssets.ts`
  Public asset path builders.

- `public/assets/catalog/`
  Physical files.

## Logo filtering

Each category defines `logos` like this:

```ts
{
  src: '...',
  alt: '...',
  families: ['family-a', 'family-b'],
}
```

The panel filters products by `familyId`.

## Rules for new products

When adding a new product:

1. Upload the physical assets.
2. Edit only the category file.
3. Define a stable `familyId`.
4. Set `image`.
5. Set `carouselImage`.
6. Set `bowlImage`.
7. Add or update the corresponding `logos` entry in the same file.

## Asset rules

- `carouselImage` is required.
- `bowlImage` is required.
- If a dedicated carousel mockup does not exist yet, the category may explicitly reuse `image`.
- If a dedicated bowl asset does not exist yet, the category must still define `bowlImage` explicitly instead of relying on hidden global fallback logic.

## Validation

Run:

```bash
cmd /c npm run lint
cmd /c npm run build
cmd /c npm run validate-catalog
```

The validator checks:

- missing `familyId`
- missing `image`
- missing `carouselImage`
- missing `bowlImage`
- logo families that do not exist
- products not mapped by any logo

## Migration status

The catalog now uses the modular category model across:

- `gomitas_grenetina`
- `pinatero`
- `chamoy`
- `gomitas_almidon`
- `sazonador`
- `dulces_paletas`

Legacy parallel maps and the old global bowl resolver were removed.

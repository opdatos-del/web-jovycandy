# Guía de assets

Todos los archivos nuevos deben vivir dentro de `public/assets`.

## Regla de nombres

Usar siempre:

- minúsculas
- guiones medios `-`
- sin espacios
- sin acentos
- sin caracteres especiales

Ejemplos correctos:

- `frutastika-blues.webp`
- `jovy-logo.png`
- `ficha-pegbag-rings-sand-100g-12-bolsas.webp`

Ejemplos incorrectos:

- `FRUTASTIKA BLUES.webp`
- `FICHA TÉCNICA 100g.webp`
- `logo final.png`

## Estructura de carpetas

### Catalogo

- `catalog/products/sweet/...`
- `catalog/products/spicy/...`
- `catalog/logos/sweet/...`
- `catalog/logos/spicy/...`
- `catalog/backgrounds/category-cards/<categoria>/primary.webp`
- `catalog/backgrounds/category-cards/<categoria>/hover.webp`
- `catalog/carousels/<peso>/...`
- `catalog/technical-sheets/<peso>/...`
- `catalog/bowls/...`

### Marca

- `brand/logo/...`
- `brand/isotypes/...`
- `brand/marks/...`

### Marketing

- `marketing/hero/...`
- `marketing/events/...`
- `marketing/frames/logo/...`
- `marketing/about/...`

### Social y certificaciones

- `social/instagram/...`
- `certifications/...`

## Como agregar una imagen nueva

1. Guardar la imagen dentro de la carpeta correcta en `public/assets`.
2. Renombrarla siguiendo la regla de nombres.
3. Si esa imagen se usa desde código, agrega o reutiliza su ruta desde `src/shared/assets/publicAssets.ts`.
4. Usar el helper o constante en lugar de escribir la ruta manualmente.
5. Corre `npm run build`.
6. Si fue una limpieza o migración, ejecuta también `npm run audit:assets`.

## Regla importante

No agregar imágenes nuevas fuera de `public/assets`.

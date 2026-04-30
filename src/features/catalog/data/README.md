# Catalog Maintenance Guide

Este documento explica cómo funciona el catálogo de productos y cómo agregar nuevos productos, imágenes, logos, bowls y validaciones sin romper el flujo actual.

## Resumen rápido

El catálogo se construye en 4 capas:

1. `src/features/catalog/data/catalogs/*.ts`
Cada categoría define sus productos base.

2. `src/features/catalog/data/catalogData.ts`
Ensambla todas las categorías, registra logos, mapea productos a logos y resuelve imágenes de producto cuando una categoría usa un helper común.

3. `src/features/catalog/data/catalogs/catalogBowls.shared.ts`
Resuelve bowls por prioridad:
   - bowl explícito del producto
   - fallback por `productFamily` o `bowlFamilyKey`
   - sin bowl

4. `src/features/catalog/services/catalog-panel.service.ts`
Filtra qué productos se muestran por categoría y por logo en el carrusel.

## Estructura importante

- `src/features/catalog/data/catalogs/`
Aquí vive la data por categoría.

- `src/features/catalog/data/catalogData.ts`
Aquí se conectan categorías, logos y mapeos de imágenes.

- `src/shared/assets/publicAssets.ts`
Aquí están los builders de rutas públicas para productos, logos, carousels, bowls y fichas técnicas.

- `public/assets/catalog/`
Aquí deben existir los archivos físicos.

- `scripts/audit-bowls.mjs`
Audita cobertura real de bowls.

## Tipos clave

La estructura de producto está en [catalog.types.ts](/abs/c:/Users/opdatos/Documents/github/web-jovycandy/src/features/catalog/types/catalog.types.ts).

Campos relevantes:

- `id`: identificador único del producto.
- `name`: nombre visible.
- `productFamily`: familia usada para agrupar variantes, filtrar por logo y resolver bowls.
- `bowlFamilyKey`: override opcional si el bowl no debe resolverse por `productFamily`.
- `image`: imagen principal del producto.
- `sampleImage`: imagen usada en algunos puntos de apoyo.
- `secondaryImage`: imagen secundaria.
- `carouselImage`: imagen del carrusel, útil para variantes por gramaje.
- `bowlImage`: bowl explícito. Si se omite, el sistema intenta fallback por familia.
- `gramaje`: variante visible en filtros del carrusel.
- `type`: `'Dulce'` o `'Picante'`.

## Cómo agregar un producto nuevo

### 1. Identifica la categoría correcta

Edita uno de estos archivos según la categoría:

- `chamoy.ts`
- `gomitas_almidon.ts`
- `gomitas_grenetina.ts`
- `pinatero.ts`
- `sazonador.ts`
- `dulces_paletas.ts`

### 2. Define el producto

Tienes dos patrones posibles:

- Producto directo:
Úsalo cuando no haya variantes por gramaje o presentación.

- Producto por template + variantes:
Úsalo cuando varias presentaciones compartan la misma información base. En ese caso reutiliza `createVariant()` desde [catalogVariant.shared.ts](/abs/c:/Users/opdatos/Documents/github/web-jovycandy/src/features/catalog/data/catalogs/catalogVariant.shared.ts).

### 3. Llena la información mínima

Cada producto debe tener como mínimo:

- `id`
- `name`
- `subtitle`
- `description`
- `image`
- `secondaryImage`
- `certifications`
- `specs`
- `collapsibleInfo`
- `type`

Si el producto tiene variantes, también conviene definir:

- `productFamily`
- `gramaje`
- `carouselImage`

### 4. Si el producto comparte familia con otros

Define `productFamily` con un valor consistente. Esto afecta 3 cosas:

- filtrado por logo en el carrusel
- agrupación lógica del catálogo
- fallback de bowl

Ejemplo: todas las variantes de `Happy Mix` deben usar exactamente `productFamily: 'Happy Mix'`.

## Cómo agregar imágenes de producto

### Regla general

Los archivos físicos deben existir en `public/assets/catalog/...` y las rutas en código deben construirse con helpers de [publicAssets.ts](/abs/c:/Users/opdatos/Documents/github/web-jovycandy/src/shared/assets/publicAssets.ts).

Helpers principales:

- `buildCatalogProductPath()`
- `buildCatalogLogoPath()`
- `buildCatalogCarouselPath()`
- `buildCatalogBowlPath()`
- `buildCatalogTechnicalSheetPath()`

### Productos con path directo

Si la categoría define su propia imagen de producto, usa `buildCatalogProductPath()` dentro del archivo de categoría.

### Productos que dependen de `catalogData.ts`

Algunas categorías usan `getProductImagePath()` para resolver `image`, `sampleImage` y `secondaryImage`. Si agregas un producto de este grupo, debes registrar su imagen en `productImageMap` dentro de [catalogData.ts](/abs/c:/Users/opdatos/Documents/github/web-jovycandy/src/features/catalog/data/catalogData.ts).

Actualmente esto aplica especialmente a:

- `gomitas_almidon`
- `sazonador`
- `dulces_paletas`
- algunos productos legacy de `gomitas_grenetina`

Si no registras el producto ahí, caerá a `BRAND_LOGO_PATH` y verás el logo de Jovy en lugar de la bolsa real.

### Cuándo usar `carouselImage`

Usa `carouselImage` cuando:

- la imagen del carrusel sea distinta a la imagen de producto
- cada gramaje tenga un mockup específico
- estés construyendo variantes con `createVariant()`

## Cómo agregar un logo de sublínea o familia

Los logos visibles del carrusel se controlan desde [catalogData.ts](/abs/c:/Users/opdatos/Documents/github/web-jovycandy/src/features/catalog/data/catalogData.ts).

Debes tocar dos estructuras:

### 1. `categoryLogosMap`

Aquí agregas el logo visible:

- `src`
- `alt`

### 2. `categoryLogoProductsMap`

Aquí defines qué productos pertenecen a ese logo.

La coincidencia usa:

- `product.productFamily` si existe
- si no existe, `product.name`

Por eso es importante que los nombres del mapeo coincidan exactamente con `productFamily` o `name`.

### Ejemplo mental

Si agregas un logo `Tropimix` para `pinatero`, debes:

- tener el asset del logo en `public/assets/catalog/logos/...`
- agregarlo a `categoryLogosMap.pinatero`
- agregar su relación en `categoryLogoProductsMap.pinatero`
- asegurarte de que los productos tengan `productFamily: 'Tropimix'`

## Cómo agregar bowls

La resolución de bowls está centralizada en [catalogBowls.shared.ts](/abs/c:/Users/opdatos/Documents/github/web-jovycandy/src/features/catalog/data/catalogs/catalogBowls.shared.ts).

### Prioridad de resolución

1. `product.bowlImage` explícito
2. registro de familia en `categoryBowlFamilyRegistry`
3. sin bowl

### Recomendación

No asignes bowls manualmente a cada variante si todas comparten la misma presentación.

Mejor opción:

- define `productFamily`
- registra esa familia en `categoryBowlFamilyRegistry`

### Cuándo usar `bowlFamilyKey`

Usa `bowlFamilyKey` sólo si:

- el producto necesita un bowl compartido
- pero `productFamily` no coincide con la clave visual correcta

### Dónde poner el asset físico

Los bowls deben vivir en:

- `public/assets/catalog/bowls/chamoy/`
- `public/assets/catalog/bowls/pinatero/`
- o la carpeta equivalente que mantenga orden por sublínea

Y la ruta debe construirse con `buildCatalogBowlPath()`.

### Importante

No uses logos como bowls.

Si el asset apunta a `/assets/catalog/logos/...`, no cuenta como bowl válido y la auditoría lo tratará como faltante o inválido.

## Cómo agregar variantes por gramaje

Si un producto tiene varias presentaciones, el patrón recomendado es:

1. crear un `ProductTemplate`
2. usar `createVariant()` por cada gramaje

Esto evita repetir:

- descripción
- certificaciones
- specs base
- imágenes base
- `productFamily`

`createVariant()` actualiza automáticamente `Weight per bag` si pasas `gramaje` o `bagWeight`.

## Cómo agregar fichas técnicas

Las fichas técnicas usan `buildCatalogTechnicalSheetPath()` y deben vivir bajo:

- `public/assets/catalog/technical-sheets/`

Si una ficha técnica no está conectada aún, sigue la misma lógica de asset builder que el resto del catálogo.

## Cómo validar que todo quedó bien

### Validación mínima obligatoria

Ejecuta:

```bash
cmd /c npm run lint
cmd /c npm run build
cmd /c npm run audit:bowls
```

### Qué revisar manualmente

1. Abre la categoría afectada.
2. Cambia entre logos.
3. Verifica que el carrusel muestre la bolsa correcta, no el logo de Jovy.
4. Abre la ficha técnica.
5. Verifica si el bloque de bowl:
   - aparece cuando existe bowl
   - no aparece cuando no existe
   - usa el bowl correcto para la familia

## Cómo interpretar `npm run audit:bowls`

El script reporta por categoría:

- `explicit`: productos con bowl explícito válido
- `family`: productos resueltos por fallback de familia
- `missing`: productos sin bowl
- `broken`: rutas a bowls inexistentes
- `invalidExplicit`: el producto traía un `bowlImage`, pero no apuntaba a un bowl válido

### Objetivo ideal

- `broken = 0`
- `invalidExplicit = 0`

No pasa nada si `missing > 0` mientras el asset todavía no exista. Lo importante es que quede visible como deuda real, no escondida.

## Checklist para alta de un producto nuevo

Antes de cerrar un alta, confirma esto:

- El producto está en la categoría correcta.
- `id` es único.
- `name` está bien escrito.
- `productFamily` es consistente con sus variantes.
- `image`, `sampleImage` y `secondaryImage` no caen en `BRAND_LOGO_PATH` por error.
- `carouselImage` existe si el carrusel usa mockup específico.
- El logo de familia está agregado si aplica.
- `categoryLogoProductsMap` coincide con `productFamily` o `name`.
- El bowl está explícito o resuelto por familia si existe asset.
- `npm run lint` pasa.
- `npm run build` pasa.
- `npm run audit:bowls` no reporta rutas rotas.

## Errores comunes

### 1. El carrusel muestra el logo de Jovy

Causa usual:

- faltó registrar el producto en `productImageMap`

### 2. El logo no filtra los productos correctos

Causa usual:

- el string en `categoryLogoProductsMap` no coincide con `productFamily` o `name`

### 3. El bowl no aparece

Causas usuales:

- no existe `bowlImage`
- la familia no está registrada en `categoryBowlFamilyRegistry`
- la ruta del bowl apunta a un archivo inexistente
- se usó una ruta de logo en vez de una ruta de bowl

### 4. Un gramaje se mezcla con otra familia

Causa usual:

- `productFamily` mal copiado entre variantes

## Recomendación de mantenimiento

Cuando agregues una sublínea nueva, sigue este orden:

1. Subir assets físicos a `public/assets/catalog/...`
2. Crear o actualizar la data de productos
3. Registrar imágenes en `catalogData.ts` si la categoría usa `getProductImagePath()`
4. Registrar logos y mapeos de logo
5. Registrar bowl por familia si existe
6. Correr auditorías y build

Si una categoría empieza a crecer demasiado, conviene migrarla al patrón modular que ya usan `gomitas_grenetina` y `pinatero`: datos propios por archivo, helpers compartidos y menos dependencia del ensamblado legacy.

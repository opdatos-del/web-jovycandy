# Guía de Catálogo - JovyCandy

Documentación para agregar nuevos productos, familias y categorías al catálogo.

---

## Estructura de Archivos

```
src/features/catalog/data/
├── config/
│   └── catalog.config.ts        ← Configuración centralizada
├── catalogs/
│   ├── chamoy/
│   │   ├── products.ts       ← Productos de la familia
│   │   ├── logos.ts          ← Logotipos
│   │   └── index.ts         ← Ensamblador del módulo
│   ├── gomitas_almidon/
│   ├── gomitas_grenetina/
│   ├── pinatero/
│   ├── sazonador/
│   └── dulces_paletas/
├── helpers/
│   └── catalogSpecsFactory.ts ← Factory para especificaciones estándar
├── registry.ts               ← Registro central de módulos
└── catalogData.ts          ← Datos derivados del registry
```

---

## Agregar un Nuevo Producto

### Pasos:

1. **Editar el archivo `products.ts`** de la categoría correspondiente.
2. **Agregar la imagen** en `public/assets/catalog/products/`.

### Ejemplo:

```typescript
// En catalogs/gomitas_almidon/products.ts

jelly({
  id: 'nuevo-producto',           // ID único en toda la app
  familyId: 'mi-familia',           // Familia para el logo
  name: 'MI PRODUCTO 5LB',          // Nombre comercial
  subtitle: 'Descripción\nlínea 2', // Subtitle (usa \n para línea nueva)
  description: 'Descripción completa del producto',
  image: jellyPath('mi-familia', 'imagen.webp'),
  certifications: ['SGS', 'Halal'], // Certificaciones
  specs: createStandardSpecs({      // Especificaciones
    weightPerPiece: 'Net Wt. 0.5 oz (14g)',
    piecesPerBag: 12,
    bagWeight: '170 g',
    bagsPerBox: 24,
    boxWeight: '8 lb 13 oz (4.08 kg)',
  }),
  collapsibleInfo: [
    { title: 'Ingredientes', content: '...' },
    { title: 'Info Nutrimental', content: '...' },
  ],
  gramaje: '170 g',
}),
```

### Funciones auxiliares disponibles:

| Función | Uso | Cuándo usarla |
|--------|-----|--------------|
| `jelly()` | Productos sin carousel/bowl dedicado | Gomitas almidón, sazonadores |
| `createVariant()` | Variantes de un template (ej: diferentes tamaños) | Productos con many sizes |
| `createStandardSpecs()` | Especificaciones estándar | Productos Empaque |

### Rutas de imágenes:

```
public/assets/catalog/
├── products/{spicy|sweet}/{familia}/{archivo}.webp
├── bowls/{familia}/{archivo}.webp
├── logos/{spicy|sweet}/{familia}/{archivo}.webp
├── carousels/{familia}/{archivo}.webp
```

---

## Agregar una Nueva Familia de Productos

Una *familia* es un grupo de productos bajo un mismo logo (ej: "Cherry Slices").

### Pasos:

1. **En `products.ts`** — Agregar productos con el mismo `familyId`.

```typescript
// Nuevo producto con familia existente
jelly({
  id: 'nuevo-producto',
  familyId: 'cherry-slices',  ← Misma familia existente
  name: 'CHERRY SLICES 170G',
  ...
}),
```

2. **En `logos.ts`** — Si es nueva familia, agregar entrada al array.

```typescript
// En catalogs/xxx/logos.ts
export const xxxLogos: CatalogLogoGroup[] = [
  {
    src: buildCatalogLogoPath('sweet', 'FAMILIA', 'LOGO', 'mi-logo-300x300.webp'),
    alt: 'Mi Nuevo Logo',
    families: ['mi-familia-nueva'],  ← familyId del producto
  },
];
```

---

## Agregar una Nueva Categoría

Nueva *categoría* = nueva sección del catálogo (ej: "Gomitas Grenetina").

### Pasos:

1. **Agregar en `config/catalog.config.ts`**:

```typescript
// En CATALOG_CATEGORY_CONFIG
export const CATALOG_CATEGORY_CONFIG = {
  // ... existente ...
  nueva_categoria: {
    title: 'Nombre Mostrado',    // Español
    accent: '#FF0000',           // Color hex
    upcoming: false,             // true = "Próximamente"
  },
} as const;

// Agregar a DISPLAY_ORDER
export const CATALOG_DISPLAY_ORDER: CatalogCategoryId[] = [
  // ... existente ...
  'nueva_categoria',
];
```

2. **Crear carpeta** `data/catalogs/nueva_categoria/`:

```
catalogs/nueva_categoria/
├── products.ts   ← Definición de productos
├── logos.ts      ← Definición de logos
└── index.ts     ← Ensamblador (exporta module)
```

3. **Registrar en `registry.ts`**:

```typescript
// En registry.ts
import { nuevaCategoriaModule } from './catalogs/nueva_categoria';

export const CATALOG_MODULE_REGISTRY = {
  // ... existente ...
  nueva_categoria: nuevaCategoriaModule,
};
```

### Template para `index.ts`:

```typescript
import type { CatalogCategoryModule, CatalogModuleProduct } from '../../../types/catalog.types';
import { CATALOG_CATEGORY_CONFIG } from '../../config/catalog.config';
import { nuevaCategoriaProducts } from './products';
import { nuevaCategoriaLogos } from './logos';

export const nuevaCategoriaModule: CatalogCategoryModule<CatalogModuleProduct> = {
  category: {
    id: 'nueva_categoria',
    title: CATALOG_CATEGORY_CONFIG.nueva_categoria.title,
    accent: CATALOG_CATEGORY_CONFIG.nueva_categoria.accent,
    products: nuevaCategoriaProducts,
  },
  logos: nuevaCategoriaLogos,
};
```

---

## Certificaciones Disponibles

Usar solo estas certificaciones:

```typescript
type CatalogCertification = 'SGS' | 'OU Kosher' | 'Halal';
```

---

## Validar el Catálogo

```bash
npm run validate-catalog
```

Esto verifica:
- Productos con imagen faltante
- Productos sin `familyId`
- Logos sin productos asociados
- Referencias de familia a logos inválidas

---

## Errores comunes

| Error | Causa | Solución |
|-------|------|---------|
| `Product "X" has no image` | `image` vacío o no existe | Verificar ruta en `jellyPath()` |
| `Product "X" has no familyId` | Falta `familyId` | Agregar `familyId` al producto |
| Logo mapping references unknown family | `families` en logo no coincide con ningún `familyId` | Verificar `familyId` en productos y logos |
| Product family not mapped to any logo | Producto tiene `familyId` pero no hay logo con esa familia | Agregar familia al array `families` en logos.ts |

---

## Tips

1. **Mantén los archivos pequeños** — Si una categoría tiene 20+ productos, considera separar en múltiples archivos y exportarlos en un `index.ts`.

2. **Reutiliza templates** — Si varios productos comparten características (misma familia, diferentes tamaños), usa `createVariant()` para no duplicar código.

3. **Nombra las imágenes consistentemente** — Seguimos el patrón: `jovy-{categoria}-{producto}-{peso}.webp`.
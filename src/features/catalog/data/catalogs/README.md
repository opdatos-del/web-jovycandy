# Catálogos de Productos

Cada carpeta representa una categoría del catálogo.

```
catalogs/
├── chamoy/           ← Productos Chamoy
├── gomitas_almidon/  ← Gomitas de almidón
├── gomitas_grenetina/← Gomitas de grenetina
├── pinatero/        ← Piñateros
├── sazonador/       ← Sazonadores
└── dulces_paletas/  ← Dulces y paletas
```

## Estructura interna de cada categoría

```
{categoria}/
├── products.ts   ← Productos (editar aquí)
├── logos.ts      ← Logotipos de familia
└── index.ts     ← Módulo exportado (NO editar directamente)
```

## ¿Cómo agregar productos?

Ver `../docs/CATALOG_GUIDE.md` para instrucciones detalladas.

## Resumen rápido

### Productos simples (sin variaciones de tamaño)

```typescript
// En products.ts
jelly({                        // o powder(), o dulce()
  id: 'mi-producto-id',
  familyId: 'mi-familia',
  name: 'MI PRODUCTO 5LB',
  subtitle: 'Descripción\nlínea 2',
  description: 'Descripción larga',
  image: buildCatalogProductPath('sweet', 'FAM', 'nombre.webp'),
  certifications: ['SGS'],
  specs: createStandardSpecs({...}),
  collapsibleInfo: [...],
  gramaje: '5 lb',
}),
```

### Productos con variaciones (tamaños múltiples)

```typescript
// Definir template
const miTemplate: ProductTemplate = {
  id: 'template',
  familyId: 'mi-familia',
  name: 'Mi Producto',
  ...specs,
};

// Usar createVariant
createVariant(miTemplate, {
  id: 'mi-producto-100g',
  gramaje: '100 g',
  carouselImage: buildCatalogCarouselPath('100g', 'mockup.webp'),
}),
createVariant(miTemplate, {
  id: 'mi-producto-1kg',
  gramaje: '1 kg',
  carouselImage: buildCatalogCarouselPath('1kg', 'mockup.webp'),
}),
```
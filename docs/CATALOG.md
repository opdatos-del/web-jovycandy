# JovyCandy - Guía de Catálogo

Consulta la guía completa en:

```
src/features/catalog/data/docs/CATALOG_GUIDE.md
```

## Comandos útiles

```bash
# Desarrollo
npm run dev

# Build producción
npm run build

# Validar catálogo
npm run validate-catalog

# Verificar tipos
npm run lint
```

## Estructura del catálogo

- **Categoría**: Sección principal (ej: "Gomitas Almidón")
- **Familia**: Grupo de productos bajo un mismo logo (ej: "Cherry Slices")
- **Producto**: Artículo individual con tamaño específico

## Agregar productos

1. Editar `src/features/catalog/data/catalogs/{categoria}/products.ts`
2. Agregar imagen en `public/assets/catalog/products/`
3. Validar: `npm run validate-catalog`
import type {
  CatalogCategory,
  CatalogCategoryModule,
  CatalogLogoGroup,
  CatalogModuleProduct,
} from '../../types/catalog.types';
import {
  buildCatalogBowlPath,
  buildCatalogCarouselPath,
  buildCatalogLogoPath,
  buildCatalogProductPath,
} from '../../../../shared/assets/publicAssets.ts';
import { createStandardSpecs } from '../helpers/catalogSpecsFactory.ts';

export function buildChamoy(): CatalogCategory {
  const chilirokasBowlImage = buildCatalogBowlPath('chamoy/Chilirokas-Assorted.png');
  const chilirokasmangoBowlImage = buildCatalogBowlPath('chamoy/chilirokas-mango-assorted.webp');
  const chilirokastamarindoBowlImage = buildCatalogBowlPath('chamoy/chilirokas-tamarindo-assorted.webp');
  const chilirokawatermelonBowlImage = buildCatalogBowlPath('chamoy/chilirokas-watermelon-assorted.webp');
  const enchilokasBowlImage = buildCatalogBowlPath('chamoy/enchilokas-assorted.webp');
  const chamoyBearsBowlImage = buildCatalogBowlPath('chamoy/chamoy-bears-assorted.webp');
  const chamoyRingsPeachBowlImage = buildCatalogBowlPath('chamoy/chamoy-rings-peach-assorted.webp');
  const chamoyRingsWatermelonBowlImage = buildCatalogBowlPath(
    'chamoy/chamoy-rings-watermelon-assorted.webp'
  );
  const chamoyWormsBowlImage = buildCatalogBowlPath('chamoy/chamoy-worms-assorted.webp');
  const revolcaditasBowlImage = buildCatalogBowlPath('chamoy/revolcaditas-assorted.webp');
  const tamarosBowlImage = buildCatalogBowlPath('chamoy/tamaros-assorted.webp');
  const vallenitomangoBowlImage = buildCatalogBowlPath('chamoy/vallenito-mango-assorted.webp');
  const vallenitoBowlImage = buildCatalogBowlPath('chamoy/vallenito-assorted.webp');
  const vallenitowatermelonBowlImage = buildCatalogBowlPath('chamoy/vallenito-watermelon-assorted.webp');

  return {
    id: 'chamoy',
    title: 'Chamoy',
    accent: '#C8102E',
    products: [
      {
        id: 'd1',
        name: 'ENCHILOKAS WATERMELON 150G',
        productFamily: 'Enchilokas',
        subtitle: 'Watermelon Jelly\nSpicy & Fruity',
        description: 'Jelly enchilado sabor sandia con cubierta picante.',
        image: buildCatalogProductPath(
          'spicy',
          'JELLIES',
          'JOVY-JELLIES-Enchilokas-Watermelon-5.29-oz-300x300.webp'
        ),
        bowlImage: enchilokasBowlImage,
        certifications: ['SGS'],
        specs: [{ label: 'Weight per bag', value: 'Net Wt. 5.29 oz (150g)' }],
        collapsibleInfo: [
          {
            title: 'Presentacion',
            content: 'Bolsa enchilada sabor sandia.',
          },
        ],
        gramaje: '150 g',
      },
      {
        id: 'd2',
        name: 'ENCHILOKAS WATERMELON 482G',
        productFamily: 'Enchilokas',
        subtitle: 'Watermelon Jelly\nSpicy & Fruity',
        description: 'Jelly enchilado sabor sandia en presentacion grande.',
        image: buildCatalogProductPath(
          'spicy',
          'JELLIES',
          'JOVY-JELLIES-Enchilokas-Watermelon-1-lb-1-oz-300x300.webp'
        ),
        bowlImage: enchilokasBowlImage,
        certifications: ['SGS'],
        specs: [{ label: 'Weight per bag', value: 'Net Wt. 1 lb 1 oz (482g)' }],
        collapsibleInfo: [
          {
            title: 'Presentacion',
            content: 'Bolsa enchilada sabor sandia.',
          },
        ],
        gramaje: '482 g',
      },
      {
        id: 'd3',
        name: 'ENCHILOKAS PINEAPPLE 150G',
        productFamily: 'Enchilokas',
        subtitle: 'Pineapple Jelly\nSpicy & Tangy',
        description: 'Jelly enchilado sabor pina con perfil acidito y picante.',
        image: buildCatalogProductPath(
          'spicy',
          'JELLIES',
          'JOVY-JELLIES-Enchilokas-Pineapple-5.29-oz-300x300.webp'
        ),
        bowlImage: enchilokasBowlImage,
        certifications: ['SGS'],
        specs: [],
        collapsibleInfo: [
          {
            title: 'Presentacion',
            content: 'Bolsa enchilada sabor pina.',
          },
        ],
        gramaje: '150 g',
      },
      {
        id: 'd4',
        name: 'ENCHILOKAS PINEAPPLE 482G',
        productFamily: 'Enchilokas',
        subtitle: 'Pineapple Jelly\nSpicy & Tangy',
        description: 'Jelly enchilado sabor pina en presentacion grande.',
        image: buildCatalogProductPath(
          'spicy',
          'JELLIES',
          'JOVY-JELLIES-Enchilokas-Pineapple-1-lb-1-oz-300x300.webp'
        ),
        bowlImage: enchilokasBowlImage,
        certifications: ['SGS'],
        specs: [],
        collapsibleInfo: [
          {
            title: 'Presentacion',
            content: 'Bolsa enchilada sabor pina.',
          },
        ],
        gramaje: '482 g',
      },
      {
        id: 'd5',
        name: 'ENCHILOKAS MANGO 150G',
        productFamily: 'Enchilokas',
        subtitle: 'Mango Jelly\nSpicy & Tropical',
        description: 'Jelly enchilado sabor mango con acabado picante.',
        image: buildCatalogProductPath(
          'spicy',
          'JELLIES',
          'JOVY-JELLIES-Enchilokas-Mango-5.29-oz-300x300.webp'
        ),
        bowlImage: enchilokasBowlImage,
        certifications: ['SGS'],
        specs: [],
        collapsibleInfo: [
          {
            title: 'Presentacion',
            content: 'Bolsa enchilada sabor mango.',
          },
        ],
        gramaje: '150 g',
      },
      {
        id: 'd6',
        name: 'ENCHILOKAS MANGO 482G',
        productFamily: 'Enchilokas',
        subtitle: 'Mango Jelly\nSpicy & Tropical',
        description: 'Jelly enchilado sabor mango en presentacion grande.',
        image: buildCatalogProductPath(
          'spicy',
          'JELLIES',
          'JOVY-JELLIES-Enchilokas-Mango-1-lb-1-oz-300x300.webp'
        ),
        bowlImage: enchilokasBowlImage,
        certifications: ['SGS'],
        specs: [],
        collapsibleInfo: [
          {
            title: 'Presentacion',
            content: 'Bolsa enchilada sabor mango.',
          },
        ],
        gramaje: '482 g',
      },
      {
        id: 'g-chamoy-bears-100g',
        name: 'CHAMOY BEARS 100G',
        productFamily: 'Chamoy Bears',
        subtitle: 'Chamoy Bears\nSpicy & Fruity',
        description: 'Ositos de gomita con chamoy y chile en presentacion individual.',
        image: buildCatalogProductPath(
          'spicy',
          'GUMMIES',
          'BEARS REVOLCADOS',
          'JOVY-GUMMIES-Bears-Revolcado-5-lb-300x300.webp'
        ),
        bowlImage: chamoyBearsBowlImage,
        certifications: ['SGS'],
        specs: createStandardSpecs({
          weightPerPiece: 'Net Wt. 0.25 oz (7g)',
          piecesPerBag: 24,
          bagWeight: '100 g',
          bagsPerBox: 12,
          boxWeight: '1.2 kg',
        }),
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, grenetina, chamoy, chile y acido citrico.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.',
          },
        ],
        gramaje: '100 g',
      },
      {
        id: 'g-chamoy-bears-1kg',
        name: 'CHAMOY BEARS 1KG',
        productFamily: 'Chamoy Bears',
        subtitle: 'Chamoy Bears\nSpicy & Fruity',
        description: 'Ositos de gomita con chamoy y chile en presentacion familiar.',
        image: buildCatalogProductPath(
          'spicy',
          'GUMMIES',
          'BEARS REVOLCADOS',
          'JOVY-GUMMIES-Bears-Revolcado-5-lb-300x300.webp'
        ),
        bowlImage: chamoyBearsBowlImage,
        certifications: ['SGS'],
        specs: createStandardSpecs({
          weightPerPiece: 'Net Wt. 0.25 oz (7g)',
          piecesPerBag: 24,
          bagWeight: '1 kg',
          bagsPerBox: 10,
          boxWeight: '10 kg',
        }),
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, grenetina, chamoy, chile y acido citrico.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.',
          },
        ],
        gramaje: '1 kg',
      },
      {
        id: 'g-chamoy-worms-100g',
        name: 'CHAMOY WORMS 100G',
        productFamily: 'Chamoy Worms',
        subtitle: 'Chamoy Worms\nSpicy & Fruity',
        description: 'Gomitas tipo worm con recubrimiento de chamoy y chile.',
        image: buildCatalogProductPath(
          'spicy',
          'GUMMIES',
          'WORMS REVOLCADOS',
          'JOVY-GUMMIES-Worms-Revolcado-5-lb-300x300.webp'
        ),
        bowlImage: chamoyWormsBowlImage,
        certifications: ['SGS'],
        specs: createStandardSpecs({
          weightPerPiece: 'Net Wt. 0.3 oz (8g)',
          piecesPerBag: 21,
          bagWeight: '100 g',
          bagsPerBox: 12,
          boxWeight: '1.2 kg',
        }),
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, grenetina, chamoy, chile y saborizantes.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 30g. Calorias: 109. Azucares: 19g.',
          },
        ],
        gramaje: '100 g',
      },
      {
        id: 'g-chamoy-worms-1kg',
        name: 'CHAMOY WORMS 1KG',
        productFamily: 'Chamoy Worms',
        subtitle: 'Chamoy Worms\nSpicy & Fruity',
        description: 'Gomitas tipo worm con recubrimiento de chamoy y chile en formato grande.',
        image: buildCatalogProductPath(
          'spicy',
          'GUMMIES',
          'WORMS REVOLCADOS',
          'JOVY-GUMMIES-Worms-Revolcado-5-lb-300x300.webp'
        ),
        bowlImage: chamoyWormsBowlImage,
        certifications: ['SGS'],
        specs: createStandardSpecs({
          weightPerPiece: 'Net Wt. 0.3 oz (8g)',
          piecesPerBag: 21,
          bagWeight: '1 kg',
          bagsPerBox: 10,
          boxWeight: '10 kg',
        }),
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, grenetina, chamoy, chile y saborizantes.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 30g. Calorias: 109. Azucares: 19g.',
          },
        ],
        gramaje: '1 kg',
      },
      {
        id: 'g-chamoy-rings-watermelon-1kg',
        name: 'CHAMOY RINGS WATERMELON 1KG',
        productFamily: 'Chamoy Rings Watermelon',
        subtitle: 'Chamoy Rings\nWatermelon',
        description: 'Aros de gomita sabor sandia con chamoy y chile.',
        image: buildCatalogProductPath(
          'spicy',
          'GUMMIES',
          'RINGS REVOLCADO',
          'JOVY-GUMMIES-Rings-Watermelon-Revolcado-5-lb-300x300.webp'
        ),
        bowlImage: chamoyRingsWatermelonBowlImage,
        certifications: ['SGS'],
        specs: createStandardSpecs({
          weightPerPiece: 'Net Wt. 0.3 oz (8g)',
          piecesPerBag: 21,
          bagWeight: '1 kg',
          bagsPerBox: 10,
          boxWeight: '10 kg',
        }),
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, grenetina, chamoy, chile y sabor sandia.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.',
          },
        ],
        gramaje: '1 kg',
      },
      {
        id: 'g-chamoy-rings-peach-1kg',
        name: 'CHAMOY RINGS PEACH 1KG',
        productFamily: 'Chamoy Rings Peach',
        subtitle: 'Chamoy Rings\nPeach',
        description: 'Aros de gomita sabor durazno con chamoy y chile.',
        image: buildCatalogProductPath(
          'spicy',
          'GUMMIES',
          'RINGS REVOLCADO',
          'JOVY-GUMMIES-Rings-Peach-Revolcado-5-lb-300x300.webp'
        ),
        bowlImage: chamoyRingsPeachBowlImage,
        certifications: ['SGS'],
        specs: createStandardSpecs({
          weightPerPiece: 'Net Wt. 0.3 oz (8g)',
          piecesPerBag: 21,
          bagWeight: '1 kg',
          bagsPerBox: 10,
          boxWeight: '10 kg',
        }),
        collapsibleInfo: [
          {
            title: 'Ingredientes',
            content: 'Azucar, jarabe de maiz, grenetina, chamoy, chile y sabor durazno.',
          },
          {
            title: 'Informacion Nutrimental',
            content: 'Tamano de la porcion: 30g. Calorias: 108. Azucares: 19g.',
          },
        ],
        gramaje: '1 kg',
      },
      {
        id: 'd7',
        name: 'Chilirokas Assorted 1 lb 3 oz',
        productFamily: 'Chilirokas',
        subtitle: 'Assorted Hard Candy\n1 lb 3 oz',
        description: 'Presentacion surtida de Chilirokas en bolsa de 1 lb 3 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Assorted-1-lb-3-oz-300x300.webp'),
        bowlImage: chilirokasBowlImage,
        certifications: ['SGS'],
        specs: createStandardSpecs({
          weightPerPiece: 'Net Wt. 0.15 oz (4g)',
          piecesPerBag: 80,
          bagWeight: '1 lb 3 oz',
          bagsPerBox: 24,
          boxWeight: 'Net Wt. 18 lb',
        }),
        collapsibleInfo: [
          { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, acido citrico, sal y chile en polvo.' },
          { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.' },
        ],
        gramaje: '1 lb 3 oz',
      },
      {
        id: 'd8',
        name: 'Chilirokas Assorted 5.29 oz',
        productFamily: 'Chilirokas',
        subtitle: 'Assorted Hard Candy\n5.29 oz',
        description: 'Presentacion surtida de Chilirokas en bolsa de 5.29 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Assorted-5.29-oz-300x300.webp'),
        bowlImage: chilirokasBowlImage,
        certifications: ['SGS'],
        specs: createStandardSpecs({
          weightPerPiece: 'Net Wt. 0.15 oz (4g)',
          piecesPerBag: 35,
          bagWeight: '5.29 oz',
          bagsPerBox: 24,
          boxWeight: 'Net Wt. 7 lb 15 oz',
        }),
        collapsibleInfo: [
          { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, acido citrico, sal y chile en polvo.' },
          { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.' },
        ],
        gramaje: '5.29 oz',
      },
      {
        id: 'd9',
        name: 'Chilirokas Assorted 6 oz',
        productFamily: 'Chilirokas',
        subtitle: 'Assorted Hard Candy\n6 oz',
        description: 'Presentacion surtida de Chilirokas en bolsa de 6 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Assorted-6-oz-300x300.webp'),
        bowlImage: chilirokasBowlImage,
        certifications: ['SGS'],
        specs: createStandardSpecs({
          weightPerPiece: 'Net Wt. 0.15 oz (4g)',
          piecesPerBag: 40,
          bagWeight: '6 oz (170g)',
          bagsPerBox: 24,
          boxWeight: 'Net Wt. 8 lb 13 oz (4.08 kg)',
        }),
        collapsibleInfo: [
          { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, acido citrico, sal, chile y saborizantes artificiales.' },
          { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.' },
        ],
        gramaje: '170 g',
      },
      {
        id: 'd10',
        name: 'Chilirokas Mango 1 lb 3 oz',
        productFamily: 'Chilirokas',
        subtitle: 'Mango Hard Candy\n1 lb 3 oz',
        description: 'Chilirokas sabor mango en presentacion de 1 lb 3 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Mango-1-lb-3-oz-300x300.webp'),
        bowlImage: chilirokasmangoBowlImage,
        certifications: ['SGS'],
        specs: createStandardSpecs({
          weightPerPiece: 'Net Wt. 0.15 oz (4g)',
          piecesPerBag: 80,
          bagWeight: '1 lb 3 oz',
          bagsPerBox: 24,
          boxWeight: 'Net Wt. 18 lb',
        }),
        collapsibleInfo: [
          { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, acido citrico, sabor mango, sal y chile.' },
          { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.' },
        ],
        gramaje: '1 lb 3 oz',
      },
      {
        id: 'd11',
        name: 'Chilirokas Mango 6 oz',
        productFamily: 'Chilirokas',
        subtitle: 'Mango Hard Candy\n6 oz',
        description: 'Chilirokas sabor mango en presentacion de 6 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Mango-6-oz-300x300.webp'),
        bowlImage: chilirokasmangoBowlImage,
        certifications: ['SGS'],
        specs: createStandardSpecs({
          weightPerPiece: 'Net Wt. 0.15 oz (4g)',
          piecesPerBag: 40,
          bagWeight: '6 oz (170g)',
          bagsPerBox: 24,
          boxWeight: 'Net Wt. 8 lb 13 oz (4.08 kg)',
        }),
        collapsibleInfo: [
          { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, acido citrico, sal, chile y saborizantes artificiales.' },
          { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.' },
        ],
        gramaje: '170 g',
      },
      {
        id: 'd12',
        name: 'Chilirokas Tamarind 1 lb 3 oz',
        productFamily: 'Chilirokas',
        subtitle: 'Tamarind Hard Candy\n1 lb 3 oz',
        description: 'Chilirokas sabor tamarindo en presentacion de 1 lb 3 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Tamarind-1-lb-3-oz-300x300.webp'),
        bowlImage: chilirokastamarindoBowlImage,
        certifications: ['SGS'],
        specs: createStandardSpecs({
          weightPerPiece: 'Net Wt. 0.15 oz (4g)',
          piecesPerBag: 80,
          bagWeight: '1 lb 3 oz',
          bagsPerBox: 24,
          boxWeight: 'Net Wt. 18 lb',
        }),
        collapsibleInfo: [
          { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, tamarindo, acido citrico, sal y chile.' },
          { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.' },
        ],
        gramaje: '1 lb 3 oz',
      },
      {
        id: 'd13',
        name: 'Chilirokas Tamarind 6 oz',
        productFamily: 'Chilirokas',
        subtitle: 'Tamarind Hard Candy\n6 oz',
        description: 'Chilirokas sabor tamarindo en presentacion de 6 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Tamarind-6-oz-300x300.webp'),
        bowlImage: chilirokastamarindoBowlImage,
        certifications: ['SGS'],
        specs: createStandardSpecs({
          weightPerPiece: 'Net Wt. 0.15 oz (4g)',
          piecesPerBag: 40,
          bagWeight: '6 oz (170g)',
          bagsPerBox: 24,
          boxWeight: 'Net Wt. 8 lb 13 oz (4.08 kg)',
        }),
        collapsibleInfo: [
          { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, tamarindo, acido citrico, sal y chile.' },
          { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.' },
        ],
        gramaje: '170 g',
      },
      {
        id: 'd14',
        name: 'Chilirokas Watermelon 1 lb 3 oz',
        productFamily: 'ChiliROKAS',
        subtitle: 'Watermelon Hard Candy\n1 lb 3 oz',
        description: 'Chilirokas sabor sandia en presentacion de 1 lb 3 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Watermelon-1-lb-3-oz-300x300.webp'),
        bowlImage: chilirokawatermelonBowlImage,
        certifications: ['SGS'],
        specs: createStandardSpecs({
          weightPerPiece: 'Net Wt. 0.15 oz (4g)',
          piecesPerBag: 80,
          bagWeight: '1 lb 3 oz',
          bagsPerBox: 24,
          boxWeight: 'Net Wt. 18 lb',
        }),
        collapsibleInfo: [
          { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, acido citrico, sabor sandia, sal y chile.' },
          { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.' },
        ],
        gramaje: '1 lb 3 oz',
      },
      {
        id: 'd15',
        name: 'Chilirokas Watermelon 6 oz',
        productFamily: 'ChiliROKAS',
        subtitle: 'Watermelon Hard Candy\n6 oz',
        description: 'Chilirokas sabor sandia en presentacion de 6 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'CHILIROKAS', 'JOVY-HARD-CANDY-Chilirokas-Watermelon-6-oz-300x300.webp'),
        bowlImage: chilirokawatermelonBowlImage,
        certifications: ['SGS'],
        specs: createStandardSpecs({
          weightPerPiece: 'Net Wt. 0.15 oz (4g)',
          piecesPerBag: 40,
          bagWeight: '6 oz (170g)',
          bagsPerBox: 24,
          boxWeight: 'Net Wt. 8 lb 13 oz (4.08 kg)',
        }),
        collapsibleInfo: [
          { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, acido citrico, sabor sandia, sal y chile.' },
          { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.' },
        ],
        gramaje: '170 g',
      },
      {
        id: 'd16',
        name: 'Revolcaditas Assorted 6 oz',
        productFamily: 'Revolcaditas',
        subtitle: 'Assorted Hard Candy\n6 oz',
        description: 'Revolcaditas surtidas en presentacion de 6 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Assorted-6-oz-300x300.webp'),
        bowlImage: revolcaditasBowlImage,
        certifications: ['SGS'],
        specs: createStandardSpecs({
          weightPerPiece: 'Net Wt. 0.15 oz (4g)',
          piecesPerBag: 40,
          bagWeight: '6 oz (170g)',
          bagsPerBox: 24,
          boxWeight: 'Net Wt. 8 lb 13 oz (4.08 kg)',
        }),
        collapsibleInfo: [
          { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, acido citrico, sal, chile y saborizantes artificiales.' },
          { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.' },
        ],
        gramaje: '170 g',
      },
      {
        id: 'd17',
        name: 'Revolcaditas Mango 1 lb 5 16 oz',
        productFamily: 'Revolcaditas',
        subtitle: 'Mango Hard Candy\n1 lb 5 16 oz',
        description: 'Revolcaditas sabor mango en presentacion de 1 lb 5 16 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Mango-1-lb-5-16-oz-300x300.webp'),
        bowlImage: revolcaditasBowlImage,
        certifications: ['SGS'],
        specs: createStandardSpecs({
          weightPerPiece: 'Net Wt. 0.15 oz (4g)',
          piecesPerBag: 96,
          bagWeight: '1 lb 5 16 oz',
          bagsPerBox: 24,
          boxWeight: 'Net Wt. 21 lb',
        }),
        collapsibleInfo: [
          { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, acido citrico, sabor mango, sal y chile.' },
          { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.' },
        ],
        gramaje: '1 lb 5 16 oz',
      },
      {
        id: 'd18',
        name: 'Revolcaditas Mango 6 oz',
        productFamily: 'Revolcaditas',
        subtitle: 'Mango Hard Candy\n6 oz',
        description: 'Revolcaditas sabor mango en presentacion de 6 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Mango-6-oz-300x300.webp'),
        bowlImage: revolcaditasBowlImage,
        certifications: ['SGS'],
        specs: createStandardSpecs({
          weightPerPiece: 'Net Wt. 0.15 oz (4g)',
          piecesPerBag: 40,
          bagWeight: '6 oz (170g)',
          bagsPerBox: 24,
          boxWeight: 'Net Wt. 8 lb 13 oz (4.08 kg)',
        }),
        collapsibleInfo: [
          { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, acido citrico, sabor mango, sal y chile.' },
          { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.' },
        ],
        gramaje: '170 g',
      },
      {
        id: 'd19',
        name: 'Revolcaditas Watermelon 1 lb 5 16 oz',
        productFamily: 'Revolcaditas',
        subtitle: 'Watermelon Hard Candy\n1 lb 5 16 oz',
        description: 'Revolcaditas sabor sandia en presentacion de 1 lb 5 16 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Watermelon-1-lb-5-16-oz-300x300.webp'),
        bowlImage: revolcaditasBowlImage,
        certifications: ['SGS'],
        specs: createStandardSpecs({
          weightPerPiece: 'Net Wt. 0.15 oz (4g)',
          piecesPerBag: 96,
          bagWeight: '1 lb 5 16 oz',
          bagsPerBox: 24,
          boxWeight: 'Net Wt. 21 lb',
        }),
        collapsibleInfo: [
          { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, acido citrico, sabor sandia, sal y chile.' },
          { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.' },
        ],
        gramaje: '1 lb 5 16 oz',
      },
      {
        id: 'd20',
        name: 'Revolcaditas Watermelon 6 oz',
        productFamily: 'Revolcaditas',
        subtitle: 'Watermelon Hard Candy\n6 oz',
        description: 'Revolcaditas sabor sandia en presentacion de 6 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'REVOLCADITAS', 'JOVY-HARD-CANDY-Revolcaditas-Watermelon-6-oz-300x300.webp'),
        bowlImage: revolcaditasBowlImage,
        certifications: ['SGS'],
        specs: createStandardSpecs({
          weightPerPiece: 'Net Wt. 0.15 oz (4g)',
          piecesPerBag: 40,
          bagWeight: '6 oz (170g)',
          bagsPerBox: 24,
          boxWeight: 'Net Wt. 8 lb 13 oz (4.08 kg)',
        }),
        collapsibleInfo: [
          { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, acido citrico, sabor sandia, sal y chile.' },
          { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.' },
        ],
        gramaje: '170 g',
      },
      {
        id: 'd21',
        name: 'Tamaros 1 lb 7 oz',
        productFamily: 'Tamaros',
        subtitle: 'Tamarind Hard Candy\n1 lb 7 oz',
        description: 'Tamaros en presentacion de 1 lb 7 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'TÁMAROS', 'JOVY-HARD-CANDY-Tamaros-1-lb-7-oz-300x300.webp'),
        bowlImage: tamarosBowlImage,
        certifications: ['SGS'],
        specs: createStandardSpecs({
          weightPerPiece: 'Net Wt. 0.15 oz (4g)',
          piecesPerBag: 100,
          bagWeight: '1 lb 7 oz',
          bagsPerBox: 24,
          boxWeight: 'Net Wt. 22 lb 8 oz',
        }),
        collapsibleInfo: [
          { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, tamarindo, acido citrico, sal y chile.' },
          { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.' },
        ],
        gramaje: '1 lb 7 oz',
      },
      {
        id: 'd22',
        name: 'Tamaros 4.9 oz',
        productFamily: 'Tamaros',
        subtitle: 'Tamarind Hard Candy\n4.9 oz',
        description: 'Tamaros en presentacion de 4.9 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'TÁMAROS', 'JOVY-HARD-CANDY-Tamaros-4.9-oz-300x300.webp'),
        bowlImage: tamarosBowlImage,
        certifications: ['SGS'],
        specs: createStandardSpecs({
          weightPerPiece: 'Net Wt. 0.15 oz (4g)',
          piecesPerBag: 32,
          bagWeight: '4.9 oz',
          bagsPerBox: 24,
          boxWeight: 'Net Wt. 7 lb 6 oz',
        }),
        collapsibleInfo: [
          { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, tamarindo, acido citrico, sal y chile.' },
          { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.' },
        ],
        gramaje: '4.9 oz',
      },
      {
        id: 'd23',
        name: 'Tamaros 6 oz',
        productFamily: 'Tamaros',
        subtitle: 'Tamarind Hard Candy\n6 oz',
        description: 'Tamaros en presentacion de 6 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'TÁMAROS', 'JOVY-HARD-CANDY-Tamaros-6-oz-300x300.webp'),
        bowlImage: tamarosBowlImage,
        certifications: ['SGS'],
        specs: createStandardSpecs({
          weightPerPiece: 'Net Wt. 0.15 oz (4g)',
          piecesPerBag: 40,
          bagWeight: '6 oz (170g)',
          bagsPerBox: 24,
          boxWeight: 'Net Wt. 8 lb 13 oz (4.08 kg)',
        }),
        collapsibleInfo: [
          { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, tamarindo, acido citrico, sal y chile.' },
          { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.' },
        ],
        gramaje: '170 g',
      },
      {
        id: 'd24',
        name: 'Vallenito Assorted 1 lb 7 oz',
        productFamily: 'Vallenito',
        subtitle: 'Assorted Hard Candy\n1 lb 7 oz',
        description: 'Vallenito surtido en presentacion de 1 lb 7 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'VALLENITO', 'JOVY-HARD-CANDY-Vallenito-Assorted-1-lb-7-oz-300x300.webp'),
        bowlImage: vallenitoBowlImage,
        certifications: ['SGS'],
        specs: createStandardSpecs({
          weightPerPiece: 'Net Wt. 0.15 oz (4g)',
          piecesPerBag: 100,
          bagWeight: '1 lb 7 oz',
          bagsPerBox: 24,
          boxWeight: 'Net Wt. 22 lb 8 oz',
        }),
        collapsibleInfo: [
          { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, acido citrico, sal, chile y saborizantes artificiales.' },
          { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.' },
        ],
        gramaje: '1 lb 7 oz',
      },
      {
        id: 'd25',
        name: 'Vallenito Assorted 6 oz',
        productFamily: 'Vallenito',
        subtitle: 'Assorted Hard Candy\n6 oz',
        description: 'Vallenito surtido en presentacion de 6 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'VALLENITO', 'JOVY-HARD-CANDY-Vallenito-Assorted-6-oz-300x300.webp'),
        bowlImage: vallenitoBowlImage,
        certifications: ['SGS'],
        specs: createStandardSpecs({
          weightPerPiece: 'Net Wt. 0.15 oz (4g)',
          piecesPerBag: 40,
          bagWeight: '6 oz (170g)',
          bagsPerBox: 24,
          boxWeight: 'Net Wt. 8 lb 13 oz (4.08 kg)',
        }),
        collapsibleInfo: [
          { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, acido citrico, sal, chile y saborizantes artificiales.' },
          { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.' },
        ],
        gramaje: '170 g',
      },
      {
        id: 'd26',
        name: 'Vallenito Mango 6 oz',
        productFamily: 'Vallenito',
        subtitle: 'Mango Hard Candy\n6 oz',
        description: 'Vallenito sabor mango en presentacion de 6 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'VALLENITO', 'JOVY-HARD-CANDY-Vallenito-Mango-6-oz-300x300.webp'),
        bowlImage: vallenitomangoBowlImage,
        certifications: ['SGS'],
        specs: createStandardSpecs({
          weightPerPiece: 'Net Wt. 0.15 oz (4g)',
          piecesPerBag: 40,
          bagWeight: '6 oz (170g)',
          bagsPerBox: 24,
          boxWeight: 'Net Wt. 8 lb 13 oz (4.08 kg)',
        }),
        collapsibleInfo: [
          { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, acido citrico, sabor mango, sal y chile.' },
          { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.' },
        ],
        gramaje: '170 g',
      },
      {
        id: 'd27',
        name: 'Vallenito Watermelon 6 oz',
        productFamily: 'Vallenito',
        subtitle: 'Watermelon Hard Candy\n6 oz',
        description: 'Vallenito sabor sandia en presentacion de 6 oz.',
        image: buildCatalogProductPath('spicy', 'HARD CANDY', 'VALLENITO', 'JOVY-HARD-CANDY-Vallenito-Watermelon-6-oz-300x300.webp'),
        bowlImage: vallenitowatermelonBowlImage,
        certifications: ['SGS'],
        specs: createStandardSpecs({
          weightPerPiece: 'Net Wt. 0.15 oz (4g)',
          piecesPerBag: 40,
          bagWeight: '6 oz (170g)',
          bagsPerBox: 24,
          boxWeight: 'Net Wt. 8 lb 13 oz (4.08 kg)',
        }),
        collapsibleInfo: [
          { title: 'Ingredientes', content: 'Azucar, jarabe de maiz, acido citrico, sabor sandia, sal y chile.' },
          { title: 'Informacion Nutrimental', content: 'Tamano de la porcion: 15g. Calorias: 60. Azucares: 12g.' },
        ],
        gramaje: '170 g',
      },
    ],
  };
}

const chamoyFamilyIdMap: Record<string, string> = {
  enchilokas: 'enchilokas',
  chilirokas: 'chilirokas',
  chilirokaswatermelon: 'chilirokas',
  revolcaditas: 'revolcaditas',
  tamaros: 'tamaros',
  vallenito: 'vallenito',
};

const normalizeFamilyKey = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '');

export const chamoyProducts = buildChamoy().products.map((product) => ({
  ...product,
  familyId:
    chamoyFamilyIdMap[normalizeFamilyKey(product.productFamily ?? product.name)] ??
    normalizeFamilyKey(product.productFamily ?? product.name),
  carouselImage:
    product.id === 'g-chamoy-bears-100g'
      ? buildCatalogCarouselPath('100g', 'Mockup Chamoy Bears MX 100g.webp')
      : product.id === 'g-chamoy-bears-1kg'
        ? buildCatalogCarouselPath('1kg', 'Mckup Chamoy Bears MX 1 kg_Mayo 24.webp')
        : product.id === 'g-chamoy-worms-100g'
          ? buildCatalogCarouselPath('100g', 'Mockup Chamoy Worms MX 100g.webp')
          : product.id === 'g-chamoy-worms-1kg'
            ? buildCatalogCarouselPath('1kg', 'Mckup Chamoy worms MX 1 kg_Mayo 24.webp')
            : product.id === 'g-chamoy-rings-watermelon-1kg'
              ? buildCatalogCarouselPath('1kg', 'Mckup Chamoy Rings Sandia MX 1 kg_Mayo 24.webp')
              : product.id === 'g-chamoy-rings-peach-1kg'
                ? buildCatalogCarouselPath('1kg', 'Mckup Chamoy Rings Durazno MX 1 kg_Mayo 24.webp')
                : product.image,
  bowlImage: product.bowlImage ?? product.image,
})) as CatalogModuleProduct[];

export const chamoyLogoGroups: CatalogLogoGroup[] = [
  {
    src: buildCatalogLogoPath('spicy', 'HARD CANDY', 'LOGOS', 'chillirokas-300x300.webp'),
    alt: 'Dulces Chilirokas',
    families: ['chilirokas'],
  },
  {
    src: buildCatalogLogoPath('spicy', 'HARD CANDY', 'LOGOS', 'Revolcaditas-300x300.webp'),
    alt: 'Dulces Revolcaditas',
    families: ['revolcaditas'],
  },
  {
    src: buildCatalogLogoPath('spicy', 'HARD CANDY', 'LOGOS', 'Tamaros-300x300.webp'),
    alt: 'Dulces Tamaros',
    families: ['tamaros'],
  },
  {
    src: buildCatalogLogoPath('spicy', 'HARD CANDY', 'LOGOS', 'Vallenito-300x300.webp'),
    alt: 'Dulces Vallenito',
    families: ['vallenito'],
  },
  {
    src: buildCatalogLogoPath('spicy', 'JELLIES', 'LOGOS', 'enchilokas-300x300.webp'),
    alt: 'Chamoy Enchilokas',
    families: ['enchilokas'],
  },
  {
    src: buildCatalogLogoPath('spicy', 'GUMMIES', 'LOGOS', 'Rings-Revolcado-300x300.webp'),
    alt: 'Chamoy Rings',
    families: ['chamoyringswatermelon', 'chamoyringspeach'],
  },
  {
    src: buildCatalogLogoPath('spicy', 'GUMMIES', 'LOGOS', 'Worms-Revolcado-1-300x300.webp'),
    alt: 'Chamoy Worms',
    families: ['chamoyworms'],
  },
  {
    src: buildCatalogLogoPath('spicy', 'GUMMIES', 'LOGOS', 'Bears_Revolcado-1-300x300.webp'),
    alt: 'Chamoy Bears',
    families: ['chamoybears'],
  },
];

export const chamoyModule: CatalogCategoryModule<CatalogModuleProduct> = {
  category: {
    id: 'chamoy',
    title: 'Chamoy',
    accent: '#C8102E',
    products: chamoyProducts,
  },
  logos: chamoyLogoGroups,
};


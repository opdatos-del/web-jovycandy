import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { ExternalLink, FileText, X } from 'lucide-react';

import { getProductTechnicalSheet } from '../data/technicalSheets';
import type { CatalogProduct } from '../types/catalog.types';
import { getCatalogSpecEs } from '../utils/specFormatters';

type ProductTechnicalSheetDrawerProps = {
  product: CatalogProduct | null;
  accentColor: string;
  onClose: () => void;
};

export const ProductTechnicalSheetDrawer = ({
  product,
  accentColor,
  onClose,
}: ProductTechnicalSheetDrawerProps) => {
  const [mounted, setMounted] = useState(false);
  const technicalSheet = product ? getProductTechnicalSheet(product) : null;

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!product) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [product]);

  useEffect(() => {
    if (!product) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {product ? (
        <motion.div
          className="fixed inset-0 z-[130] flex justify-end bg-stone-950/45 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label={`Ficha tecnica de ${product.name}`}
            className="flex h-full w-full max-w-[min(42rem,100vw)] flex-col overflow-hidden border-l border-white/12 bg-[#f7f3ee] text-stone-900 shadow-[-24px_0_80px_rgba(28,25,23,0.28)]"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div
              className="relative overflow-hidden px-5 py-5 text-white sm:px-6"
              style={{ backgroundColor: accentColor }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_38%)]" />
              <div className="relative flex items-start gap-4">
                <div className="flex min-w-0 flex-1 items-start gap-4">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/12 p-2 backdrop-blur">
                    <img
                      src={product.carouselImage ?? product.image}
                      alt={product.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/72">
                      Ficha tecnica
                    </p>
                    <h2 className="mt-2 text-2xl font-black uppercase leading-tight tracking-[-0.02em]">
                      {product.name}
                    </h2>
                    {product.gramaje ? (
                      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-white/76">
                        {product.gramaje}
                      </p>
                    ) : null}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-black/15 text-white transition-colors hover:bg-black/25"
                  aria-label="Cerrar ficha tecnica"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="flex flex-1 flex-col overflow-y-auto">
              <div className="grid gap-4 border-b border-stone-200 bg-white px-5 py-5 sm:px-6">
                <p className="text-sm leading-6 text-stone-600">{product.description}</p>

                <div className="flex flex-wrap gap-2">
                  {product.certifications.map((certification) => (
                    <span
                      key={certification}
                      className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-600"
                    >
                      {certification}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {product.specs.map((spec) => {
                    const localizedSpec = getCatalogSpecEs(spec);

                    return (
                      <div key={spec.label} className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">
                          {localizedSpec.label}
                        </p>
                        <p className="mt-2 text-sm font-semibold text-stone-800">
                          {localizedSpec.value}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex-1 px-5 py-5 sm:px-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                      Documento
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-stone-900">
                      {technicalSheet ? 'Vista previa de ficha tecnica' : 'Ficha tecnica no disponible'}
                    </h3>
                  </div>

                  {technicalSheet ? (
                    <a
                      href={technicalSheet.src}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex shrink-0 items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-700 transition-colors hover:bg-stone-100"
                    >
                      <ExternalLink size={16} />
                      Abrir
                    </a>
                  ) : null}
                </div>

                {technicalSheet ? (
                  technicalSheet.type === 'pdf' ? (
                    <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_24px_60px_rgba(28,25,23,0.08)]">
                      <iframe
                        title={technicalSheet.title ?? `Ficha tecnica de ${product.name}`}
                        src={technicalSheet.src}
                        className="h-[70vh] w-full bg-white"
                      />
                    </div>
                  ) : (
                    <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-3 shadow-[0_24px_60px_rgba(28,25,23,0.08)]">
                      <img
                        src={technicalSheet.src}
                        alt={technicalSheet.title ?? `Ficha tecnica de ${product.name}`}
                        className="h-auto w-full rounded-[1.4rem] object-contain"
                      />
                    </div>
                  )
                ) : (
                  <div className="flex min-h-[16rem] flex-col items-center justify-center rounded-[2rem] border border-dashed border-stone-300 bg-white px-6 py-8 text-center shadow-[0_24px_60px_rgba(28,25,23,0.05)]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-stone-100 text-stone-500">
                      <FileText size={22} />
                    </div>
                    <p className="mt-4 text-base font-semibold text-stone-900">
                      La ficha tecnica de esta presentacion estara disponible muy pronto.
                    </p>
                    <p className="mt-2 max-w-md text-sm leading-6 text-stone-600">
                      Mientras tanto, puedes explorar las demas presentaciones del producto o
                      contactarnos para recibir mas informacion.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
};

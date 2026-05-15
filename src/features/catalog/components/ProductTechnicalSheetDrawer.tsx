import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';

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
  const [activeBowlImage, setActiveBowlImage] = useState<{ src: string; alt: string } | null>(null);

  const closeBowlPreview = () => setActiveBowlImage(null);

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
      setActiveBowlImage(null);
    }
  }, [product]);

  useEffect(() => {
    if (!product) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (activeBowlImage) {
          closeBowlPreview();
          return;
        }

        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeBowlImage, product, onClose]);

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
            className="flex h-full w-full max-w-[min(42rem,100vw)] flex-col overflow-hidden border-l border-white/12 bg-[#f7f3ee] text-stone-900 shadow-[-24px_0_80px_rgba(28,25,23,0.28)] overscroll-contain"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div
              className="relative overflow-hidden px-4 py-4 text-white sm:px-6 sm:py-5"
              style={{ backgroundColor: accentColor }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_38%)]" />
              <div className="relative flex items-start gap-3 sm:gap-4">
                <div className="flex min-w-0 flex-1 items-start gap-3 sm:gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/12 p-2 backdrop-blur sm:h-20 sm:w-20">
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
                    <h2 className="mt-2 text-xl font-black uppercase leading-tight tracking-[-0.02em] sm:text-2xl">
                      {product.name}
                    </h2>
                    {product.gramaje ? (
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/76 sm:text-sm sm:tracking-[0.22em]">
                        {product.gramaje}
                      </p>
                    ) : null}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-black/15 text-white transition-colors hover:bg-black/25 sm:h-11 sm:w-11"
                  aria-label="Cerrar ficha tecnica"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="flex flex-1 flex-col overflow-y-auto">
              <div className="grid gap-4 bg-white px-4 py-4 sm:px-6 sm:py-5">
                <p className="text-sm leading-6 text-stone-600 sm:text-[0.95rem]">{product.description}</p>

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
                      <div key={spec.label} className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 sm:px-4">
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

                {product.bowlImage ? (
                  <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white">
                    <div className="border-b border-stone-200 px-4 py-3 sm:px-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">
                        Presentacion en bowl
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 px-4 py-5 sm:px-6 sm:py-6">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveBowlImage({
                            src: product.bowlImage!,
                            alt: `Bowl de ${product.name}`,
                          })
                        }
                        className="w-full rounded-2xl transition-transform duration-300 hover:scale-[1.01]"
                        aria-label={`Ver bowl de ${product.name} en pantalla completa`}
                      >
                        <img
                          src={product.bowlImage}
                          alt={`Bowl de ${product.name}`}
                          className="max-h-[18rem] w-full object-contain"
                          draggable={false}
                        />
                      </button>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-400">
                        Clic para ampliar
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </motion.aside>

          <AnimatePresence>
            {activeBowlImage ? (
              <motion.div
                className="fixed inset-0 z-[140] flex items-center justify-center bg-stone-950/82 p-4 backdrop-blur-sm sm:p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                onMouseDown={(event) => {
                  if (event.target === event.currentTarget) {
                    closeBowlPreview();
                  }
                }}
                aria-label={activeBowlImage.alt}
                role="dialog"
              >
                <motion.img
                  src={activeBowlImage.src}
                  alt={activeBowlImage.alt}
                  className="max-h-[92vh] max-w-[92vw] object-contain"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  draggable={false}
                />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
};

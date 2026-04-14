import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { CatalogProduct } from '../types/catalog.types';

interface ProductCarouselModalProps {
  isOpen: boolean;
  categoryTitle: string;
  products: CatalogProduct[];
  accentColor: string;
  logoSrc: string;
  logoAlt: string;
  onClose: () => void;
}

export const ProductCarouselModal: React.FC<ProductCarouselModalProps> = ({
  isOpen,
  categoryTitle,
  products,
  accentColor,
  logoSrc,
  logoAlt,
  onClose,
}) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const dragStateRef = useRef({ isDown: false, startX: 0, scrollLeft: 0 });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!isOpen || !scrollerRef.current) {
      return;
    }

    scrollerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
  }, [isOpen, categoryTitle]);

  const scrollByAmount = (direction: 1 | -1) => {
    if (!scrollerRef.current) {
      return;
    }

    const amount = Math.max(240, Math.floor(scrollerRef.current.clientWidth * 0.72));
    scrollerRef.current.scrollBy({ left: amount * direction, behavior: 'smooth' });
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollerRef.current) {
      return;
    }

    dragStateRef.current = {
      isDown: true,
      startX: event.clientX,
      scrollLeft: scrollerRef.current.scrollLeft,
    };

    setIsDragging(true);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollerRef.current || !dragStateRef.current.isDown) {
      return;
    }

    const walk = event.clientX - dragStateRef.current.startX;
    scrollerRef.current.scrollLeft = dragStateRef.current.scrollLeft - walk;
  };

  const stopDragging = () => {
    dragStateRef.current.isDown = false;
    setIsDragging(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          className="relative overflow-hidden rounded-none p-4 text-white sm:p-6 lg:px-8 lg:py-7"
          style={{ backgroundColor: accentColor }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_42%,rgba(255,255,255,0.12),transparent_40%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/35" />

          <button
            onClick={onClose}
            className="absolute right-3 top-3 z-10 rounded-lg border border-white/25 bg-black/45 p-2 text-white/90 backdrop-blur transition-all hover:bg-black/65 hover:text-white sm:right-5 sm:top-5"
            aria-label="Cerrar carrusel"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-6">
            <div className="flex shrink-0 flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between lg:w-[17.5rem] lg:flex-col lg:items-start lg:justify-center">
              <h3 className="text-base font-semibold uppercase tracking-[0.22em] text-white/90 sm:text-lg">
                {categoryTitle}
              </h3>
              {logoSrc ? (
                <img
                  src={logoSrc}
                  alt={logoAlt}
                  className="h-auto w-[9rem] max-w-full object-contain sm:w-[10.5rem] lg:w-[12.5rem]"
                  draggable={false}
                />
              ) : null}
            </div>

            <div className="relative min-w-0 flex-1">
              <button
                onClick={() => scrollByAmount(-1)}
                className="absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/30 bg-black/20 p-2 text-white/90 backdrop-blur transition-all hover:bg-black/35 hover:text-white"
                aria-label="Producto anterior"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>

              <div
                ref={scrollerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={stopDragging}
                onMouseLeave={stopDragging}
                className={`flex snap-x snap-mandatory gap-3 overflow-x-auto px-9 pb-2 pt-1 scrollbar-none sm:gap-4 sm:px-10 ${
                  isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'
                }`}
              >
                {products.map((product) => (
                  <article
                    key={product.id}
                    className="flex w-[10.5rem] shrink-0 snap-start flex-col items-center text-center sm:w-[12rem] lg:w-[13rem]"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-[10.5rem] w-full object-contain sm:h-[11.75rem] lg:h-[13rem]"
                      draggable={false}
                    />
                    <h4 className="mt-2 text-lg font-extrabold uppercase leading-tight sm:text-xl">
                      {product.name}
                    </h4>
                    <p className="mt-1 whitespace-pre-line text-lg font-semibold leading-tight text-white/92 sm:text-xl">
                      {product.specs.slice(2, 3)[0]?.value ?? product.subtitle}
                    </p>
                  </article>
                ))}
              </div>

              <button
                onClick={() => scrollByAmount(1)}
                className="absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/30 bg-black/20 p-2 text-white/90 backdrop-blur transition-all hover:bg-black/35 hover:text-white"
                aria-label="Siguiente producto"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

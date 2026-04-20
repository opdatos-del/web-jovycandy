import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react';

import type { CatalogProduct } from '../types/catalog.types';

interface ProductCarouselCenteredProps {
  logoSrc: string;
  logoAlt: string;
  categoryTitle: string;
  products: CatalogProduct[];
  accentColor: string;
  onLogoChange?: (direction: 'prev' | 'next') => void;
}

interface FilterState {
  gramaje: string | null;
}

export const ProductCarouselCentered: React.FC<ProductCarouselCenteredProps> = ({
  logoSrc,
  logoAlt,
  categoryTitle,
  products,
  accentColor,
  onLogoChange,
}) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const dragStateRef = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    velocity: 0,
    lastX: 0,
    lastTime: 0,
  });
  const animationRef = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [filters, setFilters] = useState<FilterState>({ gramaje: null });

  const gramajes = Array.from(new Set(products.map((product) => product.gramaje).filter(Boolean))) as string[];

  const filteredProducts = products.filter((product) => {
    if (filters.gramaje && product.gramaje !== filters.gramaje) {
      return false;
    }

    return true;
  });

  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [filteredProducts]);

  useEffect(() => {
    if (filters.gramaje && !gramajes.includes(filters.gramaje)) {
      setFilters({ gramaje: null });
    }
  }, [filters.gramaje, gramajes]);

  const applyMomentum = () => {
    if (!scrollerRef.current) {
      return;
    }

    let velocity = dragStateRef.current.velocity;
    const friction = 0.92;

    const momentum = () => {
      if (Math.abs(velocity) < 0.5) {
        animationRef.current = null;
        return;
      }

      scrollerRef.current!.scrollLeft += velocity;
      velocity *= friction;
      animationRef.current = requestAnimationFrame(momentum);
    };

    animationRef.current = requestAnimationFrame(momentum);
  };

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

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    dragStateRef.current = {
      isDown: true,
      startX: event.clientX,
      scrollLeft: scrollerRef.current.scrollLeft,
      velocity: 0,
      lastX: event.clientX,
      lastTime: Date.now(),
    };
    setIsDragging(true);

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!scrollerRef.current || !dragStateRef.current.isDown) {
        return;
      }

      const walk = moveEvent.clientX - dragStateRef.current.startX;
      scrollerRef.current.scrollLeft = dragStateRef.current.scrollLeft - walk;

      const currentTime = Date.now();
      const timeDelta = Math.max(1, currentTime - dragStateRef.current.lastTime);

      if (timeDelta > 0) {
        const distance = moveEvent.clientX - dragStateRef.current.lastX;
        dragStateRef.current.velocity = -(distance / timeDelta) * 25;
      }

      dragStateRef.current.lastX = moveEvent.clientX;
      dragStateRef.current.lastTime = currentTime;
    };

    const handleMouseUp = () => {
      dragStateRef.current.isDown = false;
      setIsDragging(false);
      applyMomentum();

      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const toggleFilter = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      gramaje: prev.gramaje === value ? null : value,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      className="catalog-carousel-shell relative rounded-none text-white"
      style={{ backgroundColor: accentColor }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_42%,rgba(255,255,255,0.12),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/35" />

      <div className="relative">
        <div className="mb-6">
          <h3 className="catalog-carousel-title font-semibold uppercase text-white/90">
            {categoryTitle}
          </h3>
        </div>

        <div className="catalog-carousel-layout grid grid-cols-1">
          <div className="catalog-carousel-logo-column flex flex-col items-center justify-center">
            <button
              onClick={() => onLogoChange?.('prev')}
              className="catalog-carousel-logo-button rounded-full border border-white/30 bg-black/20 p-2 text-white/90 backdrop-blur transition-all hover:bg-black/35 hover:text-white"
              aria-label="Logo anterior"
            >
              <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            {logoSrc ? (
              <img
                src={logoSrc}
                alt={logoAlt}
                className="catalog-carousel-logo h-auto max-w-full object-contain"
                draggable={false}
              />
            ) : null}

            <button
              onClick={() => onLogoChange?.('next')}
              className="catalog-carousel-logo-button rounded-full border border-white/30 bg-black/20 p-2 text-white/90 backdrop-blur transition-all hover:bg-black/35 hover:text-white"
              aria-label="Logo siguiente"
            >
              <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>

          <div className="flex flex-col gap-4 overflow-hidden">
            <div className="catalog-carousel-filters flex flex-col">
              {gramajes.length > 0 ? (
                <div className="flex flex-col gap-2">
                  <label className="catalog-carousel-filter-label font-semibold uppercase tracking-wider text-white/80">
                    Gramaje
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {gramajes.map((gramaje) => (
                      <button
                        key={gramaje}
                        onClick={() => toggleFilter(gramaje)}
                        className={`catalog-carousel-filter-chip rounded-full font-semibold uppercase tracking-wider transition-all ${
                          filters.gramaje === gramaje
                            ? 'bg-white text-black'
                            : 'bg-white/15 text-white/90 hover:bg-white/25'
                        }`}
                      >
                        {gramaje}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <div className="relative">
              <button
                onClick={() => scrollByAmount(-1)}
                className="catalog-carousel-nav-button absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/30 bg-black/20 p-2 text-white/90 backdrop-blur transition-all hover:bg-black/35 hover:text-white"
                aria-label="Producto anterior"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>

              <div
                ref={scrollerRef}
                onMouseDown={handleMouseDown}
                className={`catalog-carousel-scroller flex overflow-x-auto pb-2 pt-1 scrollbar-none ${
                  isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'
                }`}
              >
                <AnimatePresence>
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <motion.article
                        key={product.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="catalog-carousel-item flex shrink-0 flex-col items-center text-center"
                      >
                        <img
                          src={product.carouselImage ?? product.image}
                          alt={product.name}
                          className="catalog-carousel-image w-full object-contain"
                          draggable={false}
                        />
                        <h4 className="catalog-carousel-name mt-2 font-extrabold uppercase leading-tight">
                          {product.name}
                        </h4>
                        {product.gramaje ? (
                          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/72">
                            {product.gramaje}
                          </p>
                        ) : null}
                        <p className="catalog-carousel-spec mt-1 whitespace-pre-line font-semibold leading-tight text-white/92">
                          {product.specs.slice(2, 3)[0]?.value ?? product.subtitle}
                        </p>
                      </motion.article>
                    ))
                  ) : (
                    <div className="flex w-full items-center justify-center py-8">
                      <p className="text-white/70">No hay productos que coincidan con los filtros</p>
                    </div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => scrollByAmount(1)}
                className="catalog-carousel-nav-button absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/30 bg-black/20 p-2 text-white/90 backdrop-blur transition-all hover:bg-black/35 hover:text-white"
                aria-label="Proximo producto"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

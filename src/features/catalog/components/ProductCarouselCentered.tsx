import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react';
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

  // Obtener opciones únicas para los filtros
  const gramajes = Array.from(new Set(products.map(p => p.gramaje).filter(Boolean))) as string[];

  // Filtrar productos basado en los filtros seleccionados
  const filteredProducts = products.filter(product => {
    if (filters.gramaje && product.gramaje !== filters.gramaje) return false;
    return true;
  });

  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [filteredProducts]);

  const applyMomentum = () => {
    if (!scrollerRef.current) return;

    let velocity = dragStateRef.current.velocity;
    const friction = 0.92; // Reduce en 8% cada frame para salida más rápida

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
    if (!scrollerRef.current) return;
    const amount = Math.max(240, Math.floor(scrollerRef.current.clientWidth * 0.72));
    scrollerRef.current.scrollBy({ left: amount * direction, behavior: 'smooth' });
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollerRef.current) return;
    
    // Cancel any ongoing momentum animation
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
      if (!scrollerRef.current || !dragStateRef.current.isDown) return;
      
      const walk = moveEvent.clientX - dragStateRef.current.startX;
      scrollerRef.current.scrollLeft = dragStateRef.current.scrollLeft - walk;

      // Calculate velocity for momentum
      const currentTime = Date.now();
      const timeDelta = Math.max(1, currentTime - dragStateRef.current.lastTime);
      
      if (timeDelta > 0) {
        const distance = moveEvent.clientX - dragStateRef.current.lastX;
        dragStateRef.current.velocity = -(distance / timeDelta) * 25; // Increased multiplier for better sensitivity
      }

      dragStateRef.current.lastX = moveEvent.clientX;
      dragStateRef.current.lastTime = currentTime;
    };

    const handleMouseUp = () => {
      dragStateRef.current.isDown = false;
      setIsDragging(false);
      
      // Apply momentum scrolling
      applyMomentum();
      
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const toggleFilter = (value: string) => {
    setFilters(prev => ({
      ...prev,
      gramaje: prev.gramaje === value ? null : value,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      className="relative rounded-none p-4 text-white sm:p-6 lg:px-8 lg:py-7"
      style={{ backgroundColor: accentColor }}
    >
      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_42%,rgba(255,255,255,0.12),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/35" />

      <div className="relative">
        {/* Header with title */}
        <div className="mb-6">
          <h3 className="text-base font-semibold uppercase tracking-[0.22em] text-white/90 sm:text-lg">
            {categoryTitle}
          </h3>
        </div>

        {/* Main Grid Layout: Logo (left) + Carousel (right) */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[auto_1fr]">
          {/* Left Column: Logo with Navigation */}
          <div className="flex flex-col items-center justify-center gap-3">
            {/* Logo Up Arrow */}
            <button
              onClick={() => onLogoChange?.('prev')}
              className="rounded-full border border-white/30 bg-black/20 p-2 text-white/90 backdrop-blur transition-all hover:bg-black/35 hover:text-white"
              aria-label="Logo anterior"
            >
              <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            {/* Logo */}
            {logoSrc && (
              <img
                src={logoSrc}
                alt={logoAlt}
                className="h-auto w-[9rem] max-w-full object-contain sm:w-[10.5rem] lg:w-[12.5rem]"
                draggable={false}
              />
            )}
            
            {/* Logo Down Arrow */}
            <button
              onClick={() => onLogoChange?.('next')}
              className="rounded-full border border-white/30 bg-black/20 p-2 text-white/90 backdrop-blur transition-all hover:bg-black/35 hover:text-white"
              aria-label="Logo siguiente"
            >
              <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>

          {/* Right Column: Filters + Carousel */}
          <div className="flex flex-col gap-4 overflow-hidden">
            {/* Filters - Horizontal Layout */}
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
              {/* Weight Filter */}
              {gramajes.length > 0 && (
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-white/80">
                    Gramaje
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {gramajes.map(gramaje => (
                      <button
                        key={gramaje}
                        onClick={() => toggleFilter(gramaje)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
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
              )}
            </div>

            {/* Products Carousel */}
            <div className="relative">
              <button
                onClick={() => scrollByAmount(-1)}
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/30 bg-black/20 p-2 text-white/90 backdrop-blur transition-all hover:bg-black/35 hover:text-white"
                aria-label="Producto anterior"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>

              <div
                ref={scrollerRef}
                onMouseDown={handleMouseDown}
                className={`flex gap-3 overflow-x-auto px-9 pb-2 pt-1 scrollbar-none sm:gap-4 sm:px-10 ${
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
                        className="flex w-[10.5rem] shrink-0 flex-col items-center text-center sm:w-[12rem] lg:w-[13rem]"
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
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/30 bg-black/20 p-2 text-white/90 backdrop-blur transition-all hover:bg-black/35 hover:text-white"
                aria-label="Próximo producto"
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

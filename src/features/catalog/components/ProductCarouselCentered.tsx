/**
 * ProductCarouselCentered — Horizontal product carousel with drag-to-scroll and gramaje filter.
 *
 * Features:
 * - Drag-to-scroll with momentum/inertia after mouse release
 * - Gramaje (weight/size) filter chips to narrow products
 * - Logo navigation (prev/next) to switch between product families
 * - Mobile and desktop layouts (different logo orientation)
 * - Entrance/exit animations via motion/react
 *
 * Performance notes:
 * - `gramajes` uses useMemo to avoid recomputing on every render
 * - `filteredProducts` uses useMemo to avoid recomputing when gramaje filter changes
 * - `scrollByAmount`, `handleMouseDown`, `toggleFilter` wrapped in useCallback
 * - `animationRef` cleanup via useEffect return to prevent memory leaks
 *
 * Drag mechanics:
 * - mousedown on scroller starts drag if not clicking a product button
 * - mousemove tracks velocity (px/ms) for momentum calculation
 * - mouseup applies friction-based momentum animation (0.92 decay per frame)
 * - animationRef is cancelled on new mousedown to prevent stale animations
 *
 * Memory leak fix:
 * - The component cleans up animationRef on unmount via useEffect return
 * - dragStateRef only keeps isDown/startX/scrollLeft (velocity removed — computed locally in handlers)
 */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react';

import type { CatalogProduct } from '../types/catalog.types';
import { getCatalogSpecValueEs } from '../utils/specFormatters';

/** Props for ProductCarouselCentered */
interface ProductCarouselCenteredProps {
  /** Current logo image source */
  logoSrc: string;
  /** Logo alt text */
  logoAlt: string;
  /** Category title displayed in carousel header */
  categoryTitle: string;
  /** Products to display in the carousel */
  products: CatalogProduct[];
  /** Background accent color for the carousel shell */
  accentColor: string;
  /** Called when user navigates to prev/next logo */
  onLogoChange?: (direction: 'prev' | 'next') => void;
  /** Called when user clicks a product */
  onProductSelect?: (product: CatalogProduct) => void;
}

/** Internal filter state — currently only gramaje filter is supported */
interface FilterState {
  gramaje: string | null;
}

const normalizeGramajeKey = (value: string | null | undefined) =>
  value?.trim().toLowerCase().replace(/\s+/g, '') ?? '';

export const ProductCarouselCentered: React.FC<ProductCarouselCenteredProps> = ({
  logoSrc,
  logoAlt,
  categoryTitle,
  products,
  accentColor,
  onLogoChange,
  onProductSelect,
}) => {
  /** Reference to the scrollable container div */
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  /**
   * Drag state — lightweight ref that persists across renders without causing re-renders.
   * Only tracks: isDown (dragging?), startX (initial mouse X), scrollLeft (scroll position at drag start).
   * Note: velocity/lastX/lastTime are computed locally inside mouse handlers since they
   * don't need to persist across renders.
   */
  const dragStateRef = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  });

  /**
   * Holds the current requestAnimationFrame ID for momentum animation.
   * Cleaned up on unmount to prevent memory leaks.
   */
  const animationRef = useRef<number | null>(null);

  /** Tracks whether user is currently dragging (controls cursor style) */
  const [isDragging, setIsDragging] = useState(false);

  /** Gramaje filter state */
  const [filters, setFilters] = useState<FilterState>({ gramaje: null });

  /**
   * Unique gramaje values extracted from products.
   * memoized because Array.from + Set + filter is O(n) over all products.
   */
  const gramajes = useMemo(() => {
    const uniqueGramajes = new Map<string, string>();

    products.forEach((product) => {
      const label = product.gramaje?.trim();
      const key = normalizeGramajeKey(label);
      if (!label || !key || uniqueGramajes.has(key)) return;
      uniqueGramajes.set(key, label.toUpperCase());
    });

    return Array.from(uniqueGramajes.entries()).map(([key, label]) => ({ key, label }));
  }, [products]);

  /**
   * Products filtered by selected gramaje.
   * Returns all products if no filter is active.
   */
  const filteredProducts = useMemo(() => {
    if (!filters.gramaje) return products;
    return products.filter((product) => normalizeGramajeKey(product.gramaje) === filters.gramaje);
  }, [products, filters.gramaje]);

  /**
   * Reset scroll position when gramaje filter changes.
   * Ensures user sees first filtered product rather than staying scrolled to previous position.
   */
  useEffect(() => {
    if (scrollerRef.current && filters.gramaje) {
      scrollerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [filters.gramaje]);

  /**
   * If currently selected gramaje is removed from available gramajes (e.g., category changed),
   * automatically clear the filter.
   */
  useEffect(() => {
    if (filters.gramaje && !gramajes.some((gramaje) => gramaje.key === filters.gramaje)) {
      setFilters({ gramaje: null });
    }
  }, [filters.gramaje, gramajes]);

  /**
   * Cleanup: cancel any pending momentum animation on unmount.
   * Without this, setState after unmount would cause "Can't update on unmounted component" warnings.
   */
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, []);

  /**
   * Scrolls the scroller by a calculated amount in the given direction.
   * Amount is 72% of container width, minimum 240px.
   *
   * @param direction  1 = scroll right (next), -1 = scroll left (prev)
   */
  const scrollByAmount = useCallback((direction: 1 | -1) => {
    if (!scrollerRef.current) {
      return;
    }

    const amount = Math.max(240, Math.floor(scrollerRef.current.clientWidth * 0.72));
    scrollerRef.current.scrollBy({ left: amount * direction, behavior: 'smooth' });
  }, []);

  /**
   * Handles mousedown on the scroller — initiates drag-to-scroll.
   *
   * Guards:
   * - Ignores clicks on product buttons (user intends to select product, not scroll)
   * - Cancels any existing momentum animation before starting new drag
   *
   * Momentum is computed locally inside the handler (not stored in dragStateRef) because:
   * - velocity only matters during active drag and momentum phases
   * - storing it in the ref would cause stale closures in the momentum loop
   *
   * The momentum loop runs inside handleMouseUp and uses local variables (currentVelocity, friction)
   * to avoid closure issues with the requestAnimationFrame loop.
   */
  const handleMouseDown = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;

    // Ignore mousedown if it's on a product button (child element)
    if (target !== scrollerRef.current && scrollerRef.current?.contains(target)) {
      const button = target.closest('button');
      if (button && scrollerRef.current.contains(button)) {
        return;
      }
    }

    if (!scrollerRef.current) {
      return;
    }

    // Cancel any running momentum animation before starting new drag
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    // Local variables for velocity tracking — computed during mousemove
    let lastX = event.clientX;
    let lastTime = Date.now();
    let velocity = 0;

    dragStateRef.current = {
      isDown: true,
      startX: event.clientX,
      scrollLeft: scrollerRef.current.scrollLeft,
    };
    setIsDragging(true);

    /**
     * mousemove handler — calculates velocity for momentum.
     * velocity = -(distance / timeDelta) * 25  gives a usable pixels-per-second-like value.
     */
    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!scrollerRef.current || !dragStateRef.current.isDown) {
        return;
      }

      const walk = moveEvent.clientX - dragStateRef.current.startX;
      scrollerRef.current.scrollLeft = dragStateRef.current.scrollLeft - walk;

      const currentTime = Date.now();
      const timeDelta = Math.max(1, currentTime - lastTime);

      if (timeDelta > 0) {
        const distance = moveEvent.clientX - lastX;
        velocity = -(distance / timeDelta) * 25;
      }

      lastX = moveEvent.clientX;
      lastTime = currentTime;
    };

    /**
     * mouseup handler — stops drag and applies momentum.
     * Momentum loop: velocity *= 0.92 each frame (friction), stops when |velocity| < 0.5.
     * Uses local variables (currentVelocity, friction) inside the closure to avoid stale refs.
     */
    const handleMouseUp = () => {
      dragStateRef.current.isDown = false;
      setIsDragging(false);

      let currentVelocity = velocity;
      const friction = 0.92;
      const momentum = () => {
        if (Math.abs(currentVelocity) < 0.5) {
          animationRef.current = null;
          return;
        }
        if (scrollerRef.current) {
          scrollerRef.current.scrollLeft += currentVelocity;
        }
        currentVelocity *= friction;
        animationRef.current = requestAnimationFrame(momentum);
      };
      animationRef.current = requestAnimationFrame(momentum);

      // Clean up listeners after use
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, []);

  /** Clears active gramaje filter. */
  const clearFilter = useCallback(() => {
    setFilters((prev) => ({
      ...prev,
      gramaje: null,
    }));
  }, []);

  /**
   * Toggles the gramaje filter on/off.
   * If the clicked gramaje is already selected, clears the filter.
   */
  const toggleFilter = useCallback((value: string) => {
    setFilters((prev) => ({
      ...prev,
      gramaje: prev.gramaje === value ? null : value,
    }));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      className="catalog-carousel-shell relative rounded-none text-white"
      style={{ backgroundColor: accentColor }}
    >
      {/* Radial highlight overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_42%,rgba(255,255,255,0.12),transparent_40%)]" />
      {/* Top border line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/35" />

      <div className="relative">
        <div className="mb-6">
          <h3 className="catalog-carousel-title font-semibold uppercase text-white/90">
            {categoryTitle}
          </h3>
        </div>

        <div className="catalog-carousel-layout grid grid-cols-1 md:grid-cols-[auto_1fr] gap-0 md:gap-6">
          {/* Mobile Logo Section — horizontal layout below the filter row */}
          <div className="md:hidden flex items-center justify-center gap-3 mb-4">
            <button
              onClick={() => onLogoChange?.('prev')}
              className="catalog-carousel-logo-button group relative flex items-center justify-center rounded-full bg-gradient-to-br from-white/20 to-white/5 p-2.5 backdrop-blur-sm transition-all duration-300 hover:from-white/35 hover:to-white/15 hover:shadow-lg"
              aria-label="Logo anterior"
            >
              <ChevronLeft className="h-5 w-5 text-white transition-all duration-300 group-hover:scale-125" />
              <div className="absolute inset-0 rounded-full border border-white/0 group-hover:border-white/40 transition-all duration-300" />
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
              className="catalog-carousel-logo-button group relative flex items-center justify-center rounded-full bg-gradient-to-br from-white/20 to-white/5 p-2.5 backdrop-blur-sm transition-all duration-300 hover:from-white/35 hover:to-white/15 hover:shadow-lg"
              aria-label="Logo siguiente"
            >
              <ChevronRight className="h-5 w-5 text-white transition-all duration-300 group-hover:scale-125" />
              <div className="absolute inset-0 rounded-full border border-white/0 group-hover:border-white/40 transition-all duration-300" />
            </button>
          </div>

          {/* Desktop Logo Section — vertical layout beside the product scroller */}
          <div className="hidden md:flex md:flex-col items-center justify-center gap-4">
            <button
              onClick={() => onLogoChange?.('prev')}
              className="catalog-carousel-logo-button group relative flex items-center justify-center rounded-full bg-gradient-to-br from-white/20 to-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:from-white/35 hover:to-white/15 hover:shadow-lg sm:p-3.5"
              aria-label="Logo anterior"
            >
              <ChevronUp className="h-5 w-5 text-white transition-all duration-300 group-hover:scale-125 sm:h-6 sm:w-6" />
              <div className="absolute inset-0 rounded-full border border-white/0 group-hover:border-white/40 transition-all duration-300" />
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
              className="catalog-carousel-logo-button group relative flex items-center justify-center rounded-full bg-gradient-to-br from-white/20 to-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:from-white/35 hover:to-white/15 hover:shadow-lg sm:p-3.5"
              aria-label="Logo siguiente"
            >
              <ChevronDown className="h-5 w-5 text-white transition-all duration-300 group-hover:scale-125 sm:h-6 sm:w-6" />
              <div className="absolute inset-0 rounded-full border border-white/0 group-hover:border-white/40 transition-all duration-300" />
            </button>
          </div>

          <div className="flex flex-col gap-4 overflow-hidden">
            {/* Gramaje filter chips */}
            <div className="catalog-carousel-filters flex flex-col">
              {gramajes.length > 0 ? (
                <div className="flex flex-col gap-2">
                   <label className="catalog-carousel-filter-label font-semibold uppercase tracking-wider text-white/80">
                     Gramaje
                   </label>
                   <div className="flex flex-wrap gap-2">
                     <button
                       onClick={clearFilter}
                       className={`catalog-carousel-filter-chip rounded-full font-semibold uppercase tracking-wider transition-all ${
                         filters.gramaje === null
                           ? 'bg-white text-black'
                           : 'bg-white/15 text-white/90 hover:bg-white/25'
                       }`}
                     >
                       Todos
                     </button>
                     {gramajes.map((gramaje) => (
                       <button
                         key={gramaje.key}
                         onClick={() => toggleFilter(gramaje.key)}
                        className={`catalog-carousel-filter-chip rounded-full font-semibold uppercase tracking-wider transition-all ${
                          filters.gramaje === gramaje.key
                            ? 'bg-white text-black'
                            : 'bg-white/15 text-white/90 hover:bg-white/25'
                        }`}
                      >
                        {gramaje.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            {/* Scrolling product area with prev/next nav buttons */}
            <div className="relative">
              <button
                onClick={() => scrollByAmount(-1)}
                className="catalog-carousel-nav-button group absolute left-0 top-1/2 z-10 -translate-y-1/2 flex items-center justify-center rounded-full bg-gradient-to-r from-white/20 to-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:from-white/35 hover:to-white/15 hover:shadow-xl hover:left-1 sm:p-4"
                aria-label="Producto anterior"
              >
                <ChevronLeft className="h-6 w-6 text-white transition-all duration-300 group-hover:scale-125 sm:h-7 sm:w-7" />
                <div className="absolute inset-0 rounded-full border border-white/0 group-hover:border-white/40 transition-all duration-300" />
              </button>

              {/* Main scrollable product list */}
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
                      <motion.button
                        key={product.id}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onProductSelect?.(product);
                        }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="catalog-carousel-item flex shrink-0 flex-col items-center text-center transition-transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                      >
                        {/*
                         * Product image — uses carouselImage if available, falls back to product.image.
                         * loading="lazy" defers off-screen image loading.
                         * explicit width/height prevent Cumulative Layout Shift (CLS).
                         */}
                        <img
                          src={product.carouselImage ?? product.image}
                          alt={product.name}
                          className="catalog-carousel-image w-full object-contain"
                          draggable={false}
                          loading="lazy"
                          width={180}
                          height={180}
                        />
                        <h4 className="catalog-carousel-name mt-2 font-extrabold uppercase leading-tight">
                          {product.name}
                        </h4>
                        {product.gramaje ? (
                          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/72">
                            {product.gramaje}
                          </p>
                        ) : null}

                      </motion.button>
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
                className="catalog-carousel-nav-button group absolute right-0 top-1/2 z-10 -translate-y-1/2 flex items-center justify-center rounded-full bg-gradient-to-l from-white/20 to-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:from-white/35 hover:to-white/15 hover:shadow-xl hover:right-1 sm:p-4"
                aria-label="Proximo producto"
              >
                <ChevronRight className="h-6 w-6 text-white transition-all duration-300 group-hover:scale-125 sm:h-7 sm:w-7" />
                <div className="absolute inset-0 rounded-full border border-white/0 group-hover:border-white/40 transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react';

const TOTAL_FRAMES = 120;
const FRAME_PADDING = 2;
const FRAME_PATH = '/frames/logo';
const SECTION_HEIGHT = '300vh';
const FRAME_ROOT_MARGIN = '150% 0px';
const FRAMES = Array.from({ length: TOTAL_FRAMES }, (_, index) => {
  const frameNumber = String(index + 1).padStart(FRAME_PADDING, '0');
  return `${FRAME_PATH}/frame_${frameNumber}.webp`;
});

export function ScrollLogo() {
  const containerRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [shouldLoadFrames, setShouldLoadFrames] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.08, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 1.04]);
  const hintOpacity = useTransform(scrollYProgress, [0.05, 0.15, 0.8, 0.9], [0, 1, 1, 0]);

  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    const image = imagesRef.current[frameIndex];

    if (!canvas || !stage || !image) {
      return;
    }

    const bounds = stage.getBoundingClientRect();
    const cssWidth = Math.max(1, Math.round(bounds.width));
    const cssHeight = Math.max(1, Math.round(bounds.height));
    const dpr = window.devicePixelRatio || 1;
    const targetWidth = Math.max(1, Math.round(cssWidth * dpr));
    const targetHeight = Math.max(1, Math.round(cssHeight * dpr));

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
    }

    const context = canvas.getContext('2d');

    if (!context) {
      return;
    }

    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = 'high';

    const containScale = Math.min(cssWidth / image.naturalWidth, cssHeight / image.naturalHeight);
    const drawWidth = image.naturalWidth * containScale;
    const drawHeight = image.naturalHeight * containScale;
    const offsetX = (cssWidth - drawWidth) / 2;
    const offsetY = (cssHeight - drawHeight) / 2;

    context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
  };

  const requestDraw = (frameIndex: number) => {
    currentFrameRef.current = frameIndex;

    if (rafRef.current !== null) {
      return;
    }

    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      drawFrame(currentFrameRef.current);
    });
  };

  useEffect(() => {
    const section = containerRef.current;

    if (!section || shouldLoadFrames) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) {
          return;
        }

        setShouldLoadFrames(true);
        observer.disconnect();
      },
      { rootMargin: FRAME_ROOT_MARGIN }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [shouldLoadFrames]);

  useEffect(() => {
    if (!shouldLoadFrames) {
      return;
    }

    let isCancelled = false;
    const loadedImages: HTMLImageElement[] = [];

    imagesRef.current = new Array(TOTAL_FRAMES).fill(null);

    FRAMES.forEach((src, index) => {
      const image = new Image();
      image.decoding = 'async';
      image.src = src;

      image.onload = () => {
        if (isCancelled) {
          return;
        }

        imagesRef.current[index] = image;

        if (index === 0 || index === currentFrameRef.current) {
          requestDraw(currentFrameRef.current);
        }
      };

      loadedImages.push(image);
    });

    return () => {
      isCancelled = true;

      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }

      loadedImages.forEach((image) => {
        image.onload = null;
        image.onerror = null;
        image.src = '';
      });
    };
  }, [shouldLoadFrames]);

  useEffect(() => {
    const redraw = () => requestDraw(currentFrameRef.current);
    const resizeObserver = new ResizeObserver(redraw);

    redraw();

    if (stageRef.current) {
      resizeObserver.observe(stageRef.current);
    }

    window.addEventListener('resize', redraw);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', redraw);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const nextFrame = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(latest * (TOTAL_FRAMES - 1))));

    if (nextFrame !== currentFrameRef.current) {
      requestDraw(nextFrame);
    }
  });

  return (
    <section ref={containerRef} className="relative bg-stone-50" style={{ height: SECTION_HEIGHT }}>
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <motion.div
          ref={stageRef}
          style={{ opacity, scale }}
          className="relative aspect-video w-full max-w-5xl px-4"
        >
          <canvas
            ref={canvasRef}
            aria-label="Animacion del logo"
            className="pointer-events-none h-full w-full select-none"
          />
        </motion.div>

        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-20 font-mono text-xs uppercase tracking-[0.3em] text-stone-400"
        >
          Scroll para descubrir
        </motion.div>
      </div>
    </section>
  );
}

/**
 * vite.config.ts — Vite build configuration.
 *
 * Key settings:
 * - Plugins: @vitejs/plugin-react (React HMR), @tailwindcss/vite (Tailwind CSS v4)
 * - Define: exposes GEMINI_API_KEY env var to the app
 * - manualChunks: splits vendor and feature code into separate cacheable chunks
 * - resolve.alias: maps @ → ./src for cleaner imports
 * - server.hmr: controlled via DISABLE_HMR env var (disabled in AI Studio to prevent flicker)
 */

/** NOTE: Circular chunk warning for motion → vendor → motion.
 * motion/react is split into its own chunk but vendor still contains a copy.
 * This is a known trade-off of manual chunking with motion's package structure.
 * Not critical — just means motion may be included in vendor if chunking logic changes. */

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react(), tailwindcss()],

    /**
     * process.env is server-side only in Vite. Expose GEMINI_API_KEY as a global
     * constant for client-side usage (e.g., AI features in the app).
     */
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    build: {
      rollupOptions: {
        output: {
          /**
           * manualChunks — splits the build into multiple JS files for better caching.
           *
           * Strategy:
           * - Feature chunks: each major feature gets its own chunk (catalog, modals, scroll-logo)
           * - Vendor chunks: third-party libs are split by package (gsap, lucide-react, motion, vendor)
           *
           * Why: Users only download code for features they're using.
           * GSAP and motion are heavy — separating them means they're cached independently.
           *
           * Chunk map:
           * - category-grid: all catalog feature code
           * - modals: contact + location modals + ModalShell
           * - scroll-logo: scroll-logo feature
           * - gsap: GSAP core + ScrollTrigger
           * - icons: lucide-react (tree-shakeable — only used icons bundled)
           * - motion: motion/react (animation library)
           * - vendor: everything else in node_modules (react, react-dom, etc.)
           */
          manualChunks(id) {
            const normalizedId = id.split(path.sep).join('/');

            // Feature chunk: catalog feature (CategoryGrid, ProductCarouselCentered, etc.)
            if (normalizedId.includes('/src/features/catalog/')) {
              return 'category-grid';
            }

            // Feature chunk: modals (contact, location, and shared ModalShell)
            if (
              normalizedId.includes('/src/features/contact/') ||
              normalizedId.includes('/src/features/location/LocationModal.tsx') ||
              normalizedId.includes('/src/shared/ui/ModalShell.tsx')
            ) {
              return 'modals';
            }

            // Feature chunk: scroll-logo feature (hero logo parallax)
            if (normalizedId.includes('/src/features/scroll-logo/ScrollLogo.tsx')) {
              return 'scroll-logo';
            }

            // Vendor chunks — each major library gets its own chunk
            if (normalizedId.includes('/node_modules/')) {
              // GSAP: split separately (114KB gzipped ~45KB — worth isolating)
              if (normalizedId.includes('/gsap/')) {
                return 'gsap';
              }

              // lucide-react: icons (tree-shaken per icon, but still separated for caching)
              if (normalizedId.includes('/lucide-react/')) {
                return 'icons';
              }

              // motion/react: animation library (heavy, used on multiple features)
              if (normalizedId.includes('/motion/')) {
                return 'motion';
              }

              // Everything else: react, react-dom, utilities, etc.
              return 'vendor';
            }
          },
        },
      },
    },

    resolve: {
      alias: {
        /** @ → ./src for cleaner absolute imports throughout the codebase */
        '@': path.resolve(__dirname, './src'),
      },
    },

    server: {
      /**
       * HMR (Hot Module Replacement) toggle.
       * Disabled via DISABLE_HMR env var in AI Studio to prevent flickering during agent edits.
       * In local dev, leave unset or set to 'true' for full HMR support.
       */
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            const normalizedId = id.split(path.sep).join('/');

            if (normalizedId.includes('/src/features/catalog/')) {
              return 'category-grid';
            }

            if (
              normalizedId.includes('/src/features/contact/') ||
              normalizedId.includes('/src/features/location/LocationModal.tsx') ||
              normalizedId.includes('/src/shared/ui/ModalShell.tsx')
            ) {
              return 'modals';
            }

            if (normalizedId.includes('/src/features/scroll-logo/ScrollLogo.tsx')) {
              return 'scroll-logo';
            }

            if (normalizedId.includes('/node_modules/')) {
              if (normalizedId.includes('/gsap/')) {
                return 'gsap';
              }

              if (normalizedId.includes('/lucide-react/')) {
                return 'icons';
              }

              return 'vendor';
            }
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify: file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});

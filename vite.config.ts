import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Set base path for GitHub Pages deployment
  base: mode === 'production' ? '/learn-ai-edu-nexus/' : '/',
  server: {
    host: "::",
    port: 8080,
  },
  // Add preview server configuration for SPA routing
  preview: {
    port: 4173,
    strictPort: true,
  },
  plugins: [
    react(),
  ],
  // Optimization for faster development
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', '@tanstack/react-query'],
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Ensure proper build output for GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure compatibility with GitHub Pages
    target: 'es2015',
    sourcemap: false, // Disable sourcemaps in production for smaller bundle size
    rollupOptions: {
      treeshake: true,
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunks
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          icons: ['lucide-react'],
          query: ['@tanstack/react-query']
        },
      },
    },
    // Enable compression and minification
    minify: 'esbuild', // Use esbuild instead of terser for faster builds
  },
  // Define environment variables
  define: {
    'import.meta.env.VITE_BASE_URL': JSON.stringify(mode === 'production' ? '/learn-ai-edu-nexus/' : '/'),
  },
}));

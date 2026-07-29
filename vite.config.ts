import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

const isPreview = process.env.NODE_ENV !== 'production'

export default defineConfig({
  plugins: [
    react(),

    ...(!isPreview
      ? [dts({
          include: ['src'],
          exclude: ['src/preview', '**/*.test.tsx'],
        })]
      : []
    ),
  ],


  ...(!isPreview && {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        formats: ['es', 'cjs'],
        fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
      },

      rollupOptions: {
        external: ['react', 'react-dom', 'react/jsx-runtime'],

        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
      },

      emptyOutDir: false,
    },
  }),

  server: {
    port: 3000,
    open: true,
  },

  // Vitest
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test-setup.ts'],
  },
})
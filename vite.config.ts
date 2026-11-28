import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
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
          exclude: ['src/web/preview', 'src/web/test-setup.ts', '**/*.test.tsx'],
        })]
      : []
    ),
  ],


  ...(!isPreview && {
    build: {
      lib: {
        entry: {
          index: resolve(__dirname, 'src/index.ts'),
          'mobile/index': resolve(__dirname, 'src/mobile/index.ts'),
        },
        formats: ['es', 'cjs'],
        fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'js' : 'cjs'}`,
      },

      rollupOptions: {
        external: ['react', 'react-dom', 'react-native', 'react/jsx-runtime'],

        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
      },

      emptyOutDir: true,
    },
  }),

  server: {
    port: 3000,
    open: true,
  },

  // Vitest
  test: {
    exclude: [...configDefaults.exclude, 'src/mobile/**'],
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/web/test-setup.ts'],
  },
})

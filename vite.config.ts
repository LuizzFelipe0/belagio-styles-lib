import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),

    // Gera arquivos .d.ts automaticamente ao fazer build
    dts({
      include: ['src'],
      exclude: ['src/preview', '**/*.test.tsx'],
    }),
  ],

  build: {
    // Modo biblioteca: não gera index.html, gera módulos importáveis
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },

    rollupOptions: {
      // React não deve ser bundlado na biblioteca — vem do projeto consumidor
      external: ['react', 'react-dom', 'react/jsx-runtime'],

      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },

        // Preserva a estrutura de módulos para tree-shaking funcionar
        // Cada componente fica em seu próprio arquivo no dist/
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },

    // Não limpa o dist antes do build para preservar arquivos .d.ts gerados pelo dts plugin
    emptyOutDir: false,
  },

  // Configuração do servidor de desenvolvimento para o preview (App.tsx)
  server: {
    port: 3000,
    open: true,
  },

  // Configuração do Vitest
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test-setup.ts'],
  },
})
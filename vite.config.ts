import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'

// Calculamos la ruta absoluta de la carpeta actual
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    alias: {
      // Configuramos @ para que apunte directamente a la carpeta src/
      '@': path.resolve(__dirname, './src'),
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' permet au site de fonctionner sur GitHub Pages
// quel que soit le nom du dépôt (ex : yebhe.github.io/portfolio)
export default defineConfig({
  plugins: [react()],
  base: './',
})

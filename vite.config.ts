import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works on GitHub Pages under any project subpath
// (e.g. https://user.github.io/receptor/) as well as a custom domain at root.
export default defineConfig({
  base: '/receptor/',
  plugins: [react()],
})

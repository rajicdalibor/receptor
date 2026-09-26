import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Minimal Node process typing (avoids a full @types/node dependency).
declare const process: { env: Record<string, string | undefined> }

const API_TARGET = 'https://www.restoranreceptor.rs'

// Paths that should be proxied to the Laravel backend during local dev.
// Everything else falls through to Vite (the React app).
const apiPaths = [
  '/get-foods',
  '/get-vine',
  '/get-celebrations',
  '/get-texts',
  '/reserve',
  '/srb',
  '/eng',
  '/ru',
]

const proxy = Object.fromEntries(
  apiPaths.map((p) => [
    p,
    {
      target: API_TARGET,
      changeOrigin: true,
      secure: true,
      cookieDomainRewrite: 'localhost',
    },
  ]),
)

// Base path is configurable per deploy target:
//   - cPanel (same-domain, default): base '/'
//   - GitHub Pages (rajicdalibor.github.io/receptor/): VITE_BASE=/receptor/
// Local dev still proxies API calls to the production backend.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
  server: { proxy },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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

// Deploy target: same-domain cPanel — React served from /, Laravel API on
// same origin. Local dev still proxies API calls to production backend.
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: { proxy },
})

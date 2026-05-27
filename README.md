# Receptor — Riverside Brasserie

Zvanični web sajt restorana **Receptor Riverside Brasserie** (Beograd).
Premium, dvojezičan (SR / EN), riverside brasserie identitet.

Izrađeno po `Uputstvu za Web Dizajn Receptor` i dostavljenim mockup renderima.

> Napomena: fotografije su trenutno **mock** (privremene, sa Unsplash-a, optimizovane u WebP).
> Lako se zamenjuju pravim fotografijama u `public/images/` (iste nazive fajlova zadržati).

## Tehnologija

- **React 18 + TypeScript + Vite**
- React Router (HashRouter) — radi na bilo kom GitHub Pages putu bez dodatne konfiguracije
- Čist CSS sa dizajn tokenima (cream/ivory, deep olive, warm gold), serif (Cormorant Garamond) + sans (Inter)
- Bilingvalni sadržaj (SR podrazumevano, EN), prebacivač u navigaciji, izbor se pamti u `localStorage`

## Stranice

Početna · Meni · Vinska karta · Karta pića · Business Lunch · Proslave · Galerija · Kontakt

## Lokalni razvoj

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # produkcijski build u dist/
npm run preview  # lokalni pregled build-a
```

## Deploy na GitHub Pages

Sve je već spremno (`.github/workflows/deploy.yml`). Potrebno je samo:

1. Napraviti repo na GitHub-u i pushovati kod:
   ```bash
   git remote add origin https://github.com/<korisnik>/<repo>.git
   git push -u origin main
   ```
2. Na GitHub-u: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Svaki push na `main` automatski builduje i objavljuje sajt.
   URL će biti `https://<korisnik>.github.io/<repo>/`.

Pošto je Vite `base` relativan (`./`) i koristi se HashRouter, sajt radi i na
project-page putanji (`/repo/`) i na custom domenu (root) — bez izmena.

## Zamena mock fotografija

Prave fotografije ubaciti u `public/images/` pod istim imenima
(`hero-riverside.webp`, `food-plate.webp`, …) ili izmeniti mapiranje u
`src/lib/img.ts`. Preporuka: WebP, tople/večernje, cinematic (vidi uputstvo).

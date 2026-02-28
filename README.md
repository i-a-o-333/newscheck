# pr_detector

A React + Vite app for narrative analysis with optional Supabase Edge Function backends.

## Deployment status

This project is configured for **GitHub Pages** deployment via `.github/workflows/static.yml`.

- The workflow installs dependencies and builds the app.
- The Pages base path is injected at build time using `VITE_BASE_PATH` from `actions/configure-pages`.
- The built `dist/` folder is published (not raw source files).

## Local development

```bash
npm ci
npm run dev
```

## Environment variables (optional)

Create `.env` for full remote functionality:

```bash
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

If these variables are missing, the app still works in **local fallback mode** so static deployments can open correctly and demonstrate the UI/analysis flow.

## Production build

```bash
npm run build
npm run preview
```

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

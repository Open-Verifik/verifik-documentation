# AGENTS.md

## Cursor Cloud specific instructions

This is a **Docusaurus v3** static documentation site (Verifik / Zelf Name Service). There is a single service — no backend, no database, no Docker.

### Quick reference

- **Dev server:** `npm start` (port 3000, hot-reloading)
- **Production build:** `npm run build` (outputs to `build/`)
- **All scripts:** see `package.json` `"scripts"` section

### Notes

- The Docusaurus config uses ESM (`import`/`export`); the file is `docusaurus.config.js`.
- Spanish docs are served at `/verifik-es/` (not `/es/`). The i18n prefix was intentionally removed.
- `onBrokenLinks` is set to `"warn"` and `onDuplicateRoutes` is `"ignore"` — some warnings during build are expected.
- The `future.v4: true` flag is enabled for forward compatibility with Docusaurus v4.
- Dev dependencies `puppeteer` and `sharp` are only used for social card generation scripts (`npm run generate-social-cards`), not for the dev server.

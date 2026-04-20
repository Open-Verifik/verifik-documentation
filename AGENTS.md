# AGENTS.md

## Cursor Cloud specific instructions

This is a **Docusaurus v3** static documentation site (Verifik / Zelf Name Service). There is a single service — no backend, no database, no Docker.

### Quick reference

- **Dev server:** `npm start` (port 3000, hot-reloading)
- **Production build:** `npm run build` (outputs to `build/`)
- **All scripts:** see `package.json` `"scripts"` section
- **Endpoint inventory (i18n seeding):** `npm run inventory-docs-i18n` writes `internal/docs-i18n-inventory.{md,json}`. Rollout chunks: `docs-i18n-CHUNKS.md`.

### Notes

- The Docusaurus config uses ESM (`import`/`export`); the file is `docusaurus.config.js`.
- Spanish docs are served at `/verifik-es/` (not `/es/`). The i18n prefix was intentionally removed.
- Partial locales (fr, pt, ko, ja, zh) are served at `/verifik-fr/`, `/verifik-pt/`, `/verifik-ko/`, `/verifik-ja/`, `/verifik-zh/` (currently small trees + `intro` stub; expand sidebars as content grows).
- If `npm start` / `npm run build` fails with **ENOENT** under `.docusaurus/` (missing `blog-tags-*.json`, `site-metadata.json`, etc.), the cache is corrupted or permissions are wrong. Run `npm run clear`. If that cannot remove `.docusaurus` (**EACCES**), fix ownership: `sudo chown -R "$(whoami)" .docusaurus` (or delete the folder with the same user that runs npm), then `npm run clear` again and restart the dev server.
- `onBrokenLinks` is set to `"warn"` and `onDuplicateRoutes` is `"ignore"` — some warnings during build are expected.
- The `future.v4: true` flag is enabled for forward compatibility with Docusaurus v4.
- Dev dependencies `puppeteer` and `sharp` are only used for social card generation scripts (`npm run generate-social-cards`), not for the dev server.

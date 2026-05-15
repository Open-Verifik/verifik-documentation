# Partial-locale docs playbook (FR, PT, KO, JA, ZH)

This document is the **continuation guide** for adding country/endpoint documentation across partial locales. The canonical Docusaurus site lives in **verifik-documentation**; Smart Agent consumes doc URLs from the API after seeding (see backend seeder below).

## Goals

- One **locale prefix** in the public URL: `/verifik-{locale}/<category>/<page>/`.
- **English `docs/`** remains the structural source of truth for paths and slugs.
- All partial locales mirror **the same folder layout** under `docs-fr`, `docs-pt`, `docs-ko`, `docs-ja`, `docs-zh` where content exists.

## Architecture (why double prefixes happened)

Each partial locale is registered in `docusaurus.config.js` as its own `@docusaurus/plugin-content-docs` instance with `routeBasePath: "verifik-fr"` (or `verifik-pt`, etc.). The **permalink** is:

`/{routeBasePath}{slug}`

If front matter uses `slug: /fr-docs/identity/chile`, the site serves `/verifik-fr/fr-docs/identity/chile` — **invalid** (two prefixes). Correct:

```yaml
slug: /identity/chile
```

Result: `/verifik-fr/identity/chile/`.

## Categories used in this rollout

Align files with English under `docs/`:

| Category | Purpose |
|----------|---------|
| `identity/` | National ID / cédula / citizen checks |
| `business-validation/` | KYB / company registry |
| `vehicle-validation/` | Plates, vehicle records |
| `driver-validation/` | Driver licenses |
| `background-check/` | Domestic and `background-check/international/` for sanctions / agency checks |

## Countries and areas covered (reference list)

Use this as a **checklist** when expanding. Paths are English-style; each partial locale should add a matching file when you localize that page.

**Americas (examples from recent work):** Chile (identity, taxpayer, validate-documents, business `chilean`, vehicle, driver license), Colombia (multiple background-check pages, comptroller), Costa Rica, Panama, Paraguay (identity CIC, business RUC, vehicle), Venezuela (cedula + foreigner-id), Mexico (identity / business / vehicle), Brazil (background-check).

**Europe / other:** Spain (identity citizen, business, vehicle).

**International background checks:** `background-check/international/` — DEA, Europol, FBI, Interpol, OFAC, ONU (and similar) where present in English.

When adding a **new** country, copy the English MDX structure first, then translate; keep `slug` = `/...` path matching `docs/` (no `*-docs` segment).

## Step-by-step: new endpoint page in all partial locales

1. **English**  
   - Add or update `docs/<category>/<page>.mdx` with stable headings for the seeder (`### Endpoint`, tables, Request/Response tabs).

2. **For each partial locale** (`docs-fr`, `docs-pt`, `docs-ko`, `docs-ja`, `docs-zh`):  
   - Create the **same relative path**: `<category>/<page>.mdx`.  
   - Set `slug: /<category>/<page>` (leading slash; **no** `/fr-docs` or other locale-doc prefix).  
   - Localize title/description/body; keep endpoint path and code samples aligned with product.

3. **Sidebars**  
   - Add doc entries to `sidebars-fr.js`, `sidebars-pt.js`, `sidebars-ko.js`, `sidebars-ja.js`, `sidebars-zh.js` (same `id` as relative path without `.mdx`).

4. **Links**  
   - Internal links: `/verifik-fr/...`, `/verifik-pt/...`, etc. Never embed `fr-docs` in URLs.

5. **Hreflang**  
   - Run `node scripts/generate-hreflang-manifest.js` (or full `npm run build` so `prebuild` runs). Commit `static/hreflang-manifest.json` when URLs change.

6. **Backend seed (AppFeature docs in Mongo)**  
   - From `verifik-backend`:  
     `node scripts/seed-app-feature-docs.js --dry-run` then without dry-run.  
   - Use `--only=<regex>` matching the file path fragment (e.g. `chile`) to limit scope.

7. **Verify**  
   - Grep: `rg 'fr-docs|pt-docs|ko-docs|ja-docs|zh-docs' docs-fr docs-pt docs-ko docs-ja docs-zh --glob '*.{md,mdx}'` → should be **empty**.  
   - `npm run build` (or `npx docusaurus build --out-dir _build_verify` if `build/` permissions are wrong).

## Optional: legacy URL redirects

If old `/verifik-{locale}/{locale}-docs/...` links were published, add server or `@docusaurus/plugin-client-redirects` rules to map to `/verifik-{locale}/...`.

## Smart Agent / Postman

- Feature metadata and URLs may be seeded from these docs; keep **one canonical URL** per locale in MDX so panels and tools do not store double-prefixed paths.
- For Smart-Agent–specific conventions, see `Smart-Agent/docs/PARTIAL_LOCALE_DOCS.md` (pointer file).

## Related files

| File | Role |
|------|------|
| `docusaurus.config.js` | `routeBasePath` per partial plugin |
| `sidebars-*.js` | Nav for each partial tree |
| `scripts/generate-hreflang-manifest.js` | Builds `static/hreflang-manifest.json` from slugs |
| `verifik-backend/scripts/seed-app-feature-docs.js` | Syncs MDX sections into `AppFeature.docs` |

## Inventory automation

- `npm run inventory-docs-i18n` (when available) refreshes endpoint inventory under `internal/` for rollout planning; see `AGENTS.md`.

# Docs i18n rollout — chunks and commands

This file turns the rollout plan into **actionable chunks**. Canonical counts and duplicate groups live in [`internal/docs-i18n-inventory.md`](internal/docs-i18n-inventory.md) (regenerate with `npm run inventory-docs-i18n`).

## Conventions

| Item | Detail |
| --- | --- |
| Locales | `fr`, `pt`, `ko`, `ja`, `zh` (trees: `docs-fr`, …) |
| Seeder | [`verifik-backend/scripts/seed-app-feature-docs.js`](../verifik-backend/scripts/seed-app-feature-docs.js) |
| `--only` | Regex on file path **relative to each docs root**, not the API URL. Example: `vehicle-validation/colombia`, `simit`. |
| QA | Smart-Agent Postman About tab: no “Showing English” when `AppFeature.docs.<lang>` is populated |

## Chunk A — `vehicle-validation/colombia` (P0)

**Scope:** All MDX under `docs/vehicle-validation/colombia/` that participate in `AppFeature` seeding (unique endpoints). Many URLs map to **multiple files** (SEO aliases); translate the **canonical primary** path from the inventory and keep aliases in sync or accept duplicate routes only in EN.

**SIMIT pilot (done):** 6 canonical pages × 5 locales in `docs-{fr,pt,ko,ja,zh}/vehicle-validation/colombia/simit-*.mdx` (+ consult/general-query pair).

**Remaining P0:** Other Colombia vehicle pages — see **Canonical list** in `internal/docs-i18n-inventory.md` where `priority === "P0"`. Work through **batches of 5–10 primary paths** per PR to keep review manageable.

**After each batch:**

```bash
cd ../verifik-backend
node scripts/seed-app-feature-docs.js --dry-run --only='vehicle-validation/colombia' --verbose
node scripts/seed-app-feature-docs.js --only='vehicle-validation/colombia'
```

## Chunk B — `vehicle-validation` outside Colombia (P1)

**Folders / files:** `docs/vehicle-validation/` excluding `colombia/` — e.g. `ecuador/`, `chile/`, `peru/`, root files like `bolivia.mdx`, `mexico.mdx`, etc. Exact list: filter inventory `primaryPath` starting with `vehicle-validation/` and not `vehicle-validation/colombia/`.

**Commands:**

```bash
node scripts/seed-app-feature-docs.js --dry-run --only='vehicle-validation/(ecuador|chile|peru)' --verbose
# widen regex as locales are filled in
```

## Chunk C — Rest of `docs/` (P2)

**Scope:** Identity, biometrics, business-validation, resources, etc. (~90+ unique endpoints in inventory). Split by **top-level folder** or **~5–10 files per batch**.

**Example filters:**

```bash
--only='^identity/'
--only='resources/document-validations'
```

## Docusaurus site (optional public docs)

New locales are wired as separate doc plugins (`verifik-fr`, …). See `docusaurus.config.js`. Until each `docs-<lang>/` tree is filled, sidebars may only expose `intro` + `vehicle-validation/colombia`.

## Regenerate inventory

```bash
npm run inventory-docs-i18n
```

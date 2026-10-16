# Verifik documentation RAG corpus

Customer-facing knowledge chunks derived from the public Docusaurus documentation. This folder is **regenerable** — do not hand-edit files under `chunks/`; change source docs and re-run the builder.

## Purpose

Smart-Agent (and future RAG pipelines) can retrieve focused answers about:

- How to call an endpoint
- Required parameters and headers
- Example requests/responses
- Pricing and product behavior documented on the site
- Common errors and notes

This corpus is **knowledge only**. Live API calls, auth, and tool execution stay in Smart-Agent services — not here.

## Layout

```
rag/
├── README.md           # This file
├── manifest.json       # Index of all chunks (ids, metadata, char counts)
└── chunks/
    └── *.md            # One chunk per file (YAML frontmatter + markdown body)
```

## Chunk schema

Each file in `rag/chunks/` is markdown with YAML frontmatter:

| Field | Description |
| --- | --- |
| `id` | Stable slug, e.g. `en-identity-colombia-endpoint` |
| `title` | Human title (page title + section when split) |
| `sourcePath` | Repo path to source doc, e.g. `docs/identity/colombia.mdx` |
| `locale` | `en` or `es` |
| `category` | Top-level docs folder (`identity`, `vehicle-validation`, …) |
| `tags` | Country codes, products, folder hints (`co`, `smartcheck`, …) |
| `endpoint` / `endpoints` | Normalized API path(s) when present, e.g. `/v2/co/cedula` |
| `sourceAnchor` | Heading when split from a larger page |
| `slug` | Public docs slug from frontmatter |
| `url` | Full docs URL when slug is known |

The markdown body is cleaned for RAG: Docusaurus imports/JSX are stripped; fenced code blocks and parameter tables are preserved.

## Sources

| Locale | Source tree | Public URL prefix |
| --- | --- | --- |
| English (`en`) | `docs/**` | `https://docs.verifik.co/...` |
| Spanish (`es`) | `docs-es/**` | `https://docs.verifik.co/verifik-es/...` |

### Included

- Endpoint/API pages under identity, identity-validation, vehicle-validation, business-validation, background-check, biometrics, authentication, getting-started, smartcheck, smartenroll, smart-batch, phone-validations, resources, legal, api, and related product docs.

### Excluded

- `build/`, `node_modules/`, images/binaries
- Internal/sales material (e.g. `docs/compensar/`)
- Repo-root decks (`COMPENSAR_*`, `SEO_*`, etc.)
- Non-canonical duplicate EN pages (same API path documented twice — inventory primary path wins)

### Sanitization

The builder strips **Staff-only cache-bypass** `force` query documentation (see `.cursor/rules/client-facing-docs.mdc`). Client-facing `force` flags on Resources endpoints are kept when documented as product behavior.

## Regenerate

From the repo root:

```bash
node scripts/build-rag-chunks.mjs
```

Or via npm:

```bash
npm run build:rag-chunks
```

Options:

```bash
node scripts/build-rag-chunks.mjs --locale=en   # English only
node scripts/build-rag-chunks.mjs --locale=es   # Spanish only
```

The script is **idempotent**: it deletes and rebuilds `rag/chunks/` and rewrites `rag/manifest.json`. No network access or API keys required.

## Chunking rules

- Prefer semantic splits: one endpoint page, or one `##` / `###` section with enough context.
- Target ~400–1200 tokens (~1.6k–4.8k characters); long pages split on headings, not blind cuts.
- Each chunk includes the page title, API path(s) when known, and intro context so retrieval stands alone.
- Obvious duplicate EN docs (same endpoint URL) are deduped using `internal/docs-i18n-inventory.json`.

## manifest.json

Use as a retrieval index: filter by `locale`, `category`, `tags`, or `endpoints`, then load the matching file from `chunks/`.

Example entry:

```json
{
  "id": "en-identity-colombia-endpoint",
  "title": "Colombian Citizen — Endpoint",
  "sourcePath": "docs/identity/colombia.mdx",
  "url": "https://docs.verifik.co/identity/colombia",
  "locale": "en",
  "category": "identity",
  "tags": ["co", "identity"],
  "endpoints": ["/v2/co/cedula"],
  "charCount": 2840,
  "file": "rag/chunks/en-identity-colombia-endpoint.md"
}
```

## Maintenance

1. Edit source docs under `docs/` or `docs-es/`.
2. Run `npm run build:rag-chunks`.
3. Commit updated `rag/chunks/` and `rag/manifest.json` with your doc changes.

When adding many endpoints, refresh the inventory first (optional, improves dedupe):

```bash
npm run inventory-docs-i18n
```

---
id: "en-docs-identity-chile-taxpayer-notes-2"
title: "Chile — Taxpayer (RUT) lookup — Notes"
sourcePath: "docs/identity/chile-taxpayer.mdx"
locale: "en"
category: "identity"
tags:
  - "cl"
  - "identity"
endpoint: "/v2/cl/taxpayer"
sourceAnchor: "Notes"
slug: "/identity/chile-taxpayer"
url: "https://docs.verifik.co/identity/chile-taxpayer"
---

# Chile — Taxpayer (RUT) lookup
**API path(s):** /v2/cl/taxpayer

Use this endpoint when you need **taxpayer-oriented** identity data for a Chilean **RUT** (not the civil-registry cedula flow). It complements **[Identity verification in Chile](/identity/chile)** (`v2/cl/cedula`), which is tuned to **RUN/civil** lookup.

## Notes

- Prefer **`v2/cl/cedula`** for civil-registry **RUN** identity matching; use **`v2/cl/taxpayer`** when the **RUT taxpayer** record is the source of truth.

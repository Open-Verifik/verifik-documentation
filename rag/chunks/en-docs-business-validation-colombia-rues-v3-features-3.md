---
id: "en-docs-business-validation-colombia-rues-v3-features-3"
title: "Colombia — RUES business lookup (v3) — Features"
sourcePath: "docs/business-validation/colombia-rues-v3.mdx"
locale: "en"
category: "business-validation"
tags:
  - "business-validation"
endpoint: "/api/co/rues"
sourceAnchor: "Features"
slug: "/business-validation/colombia-rues-v3"
url: "https://docs.verifik.co/business-validation/colombia-rues-v3"
---

# Colombia — RUES business lookup (v3)
**API path(s):** /api/co/rues

Verifik queries **RUES** (*Registro Único Empresarial y Social*) for a Colombian legal entity using **`NIT`**, a **registry category**, and returns a **normalized basic record** for that category (commercial registry, RUP proponent, tourism, non-profits, etc.). This is the **lighter** **`/v3/co/rues`** integration; use **`/v3/co/rues-complete`** when you need the **full** dossier (representatives, economic activities, establishments, and more).

## Features

- **NIT-only** validation at the API layer
- **Category** selection for RM, PROP, tourism (RNT), ESAL, etc.
- **v3** RUES elastic API integration (see module comments for behaviour per category)

## Use cases

- **KYB** and **vendor** screening
- **Registry confirmation** before opening a full RUES Complete pull

### Notes

- **`category`** is optional in the handler (**defaults to `RM`**); include it explicitly when you are not querying **Registro Mercantil**.
- This endpoint returns a **summary**, not the full RUES dossier. For representatives, activities, and establishments, use **`GET /v3/co/rues-complete`** ([RUES Complete (v3)](/business-validation/rues-complete-v3)).
- Some category codes accepted by validation may follow a **legacy** code path inside the module; if results look unexpected, confirm the category with support or try **`RM`** / **`rues-complete`**.
- **`/v2/co/rues`** exists for older integrations; prefer **v3** for new work.
- RUES availability and captcha/rate behaviour can produce **404** / **409** / **5xx** errors depending on upstream state.

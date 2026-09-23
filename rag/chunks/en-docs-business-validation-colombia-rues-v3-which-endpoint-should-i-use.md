---
id: "en-docs-business-validation-colombia-rues-v3-which-endpoint-should-i-use"
title: "Colombia — RUES business lookup (v3) — Which endpoint should I use?"
sourcePath: "docs/business-validation/colombia-rues-v3.mdx"
locale: "en"
category: "business-validation"
tags:
  - "business-validation"
endpoint: "/api/co/rues"
sourceAnchor: "Which endpoint should I use?"
slug: "/business-validation/colombia-rues-v3"
url: "https://docs.verifik.co/business-validation/colombia-rues-v3"
---

# Colombia — RUES business lookup (v3)
**API path(s):** /api/co/rues

## Which endpoint should I use?

Verifik queries **RUES** (*Registro Único Empresarial y Social*) for a Colombian legal entity using **`NIT`**, a **registry category**, and returns a **normalized basic record** for that category (commercial registry, RUP proponent, tourism, non-profits, etc.). This is the **lighter** **`/v3/co/rues`** integration; use **`/v3/co/rues-complete`** when you need the **full** dossier (representatives, economic activities, establishments, and more).

## Which endpoint should I use?

| | **`GET /v3/co/rues`** (this API) | **`GET /v3/co/rues-complete`** |
| --- | --- | --- |
| **Purpose** | Quick **summary** per registry category | **Complete** business dossier |
| **Typical fields** | Category-specific core fields (name, NIT, status, chamber, etc.) | Full registry blocks including representatives and activities |
| **Parameters** | `documentType` (**`NIT`**), `documentNumber`, optional `category` | **Same** |
| **Catalog pricing** | Lower (e.g. **0.2** credits / **0.3** SmartCheck) | Higher (e.g. **0.3** credits / **0.4** SmartCheck) |

See [RUES Complete Business Validation (v3)](/business-validation/rues-complete-v3) for the full extract.

## What this API returns

- **Category-specific** summary fields (e.g. for **RM**: business name, NIT with DV, chamber, matrícula state, organization type—see live responses)
- Data mapped through the RUES response schema used in the integration
- **Caching** may apply
- A **signed** Verifik response

## API reference

### Endpoint

```
GET https://api.verifik.co/v3/co/rues
```

**GET** with **query parameters** only on this route. For the **full** extract, use **`GET /v3/co/rues-complete`** (same parameters).

Query: **`documentType`** (**`NIT`** only), **`documentNumber`**, optional **`category`**.

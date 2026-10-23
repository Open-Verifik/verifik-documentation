---
id: "en-docs-identity-colombia-ce-use-cases-3"
title: "Colombia — CE (Cédula de Extranjería) — Use cases"
sourcePath: "docs/identity/colombia-ce.mdx"
locale: "en"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/foreigner-id/ce"
sourceAnchor: "Use cases"
slug: "/identity/colombia-ce"
url: "https://docs.verifik.co/identity/colombia-ce"
---

# Colombia — CE (Cédula de Extranjería)
**API path(s):** /v2/co/foreigner-id/ce

Verifik validates **CE** (*Cédula de Extranjería*) records published by **Migración Colombia** for KYC, eligibility, and compliance workflows.

## Use cases

- **Onboarding** for foreign residents holding a Colombian CE
- **Banking, employment, and compliance** where immigration status must be confirmed

### Notes

- **`expeditionDate`** must match **`DD/MM/YYYY`**; wrong formats typically return **409**.
- **`GET`** and **`POST`** are both routed to the same handler; use **`POST`** if you prefer a JSON body.
- Do **not** send CE numbers to **`/v2/co/cedula`** — that endpoint only accepts **`CC`** and **`PPT`**. See the [documents guide](/identity-validation/colombia/colombia-identity-documents-guide).
- Upstream portal or parsing changes may surface **404** / **500** when no row is found or the source is unavailable.

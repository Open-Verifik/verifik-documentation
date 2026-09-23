---
id: "en-docs-identity-colombia-ce-what-this-api-returns"
title: "Colombia — CE (Cédula de Extranjería) — What this API returns"
sourcePath: "docs/identity/colombia-ce.mdx"
locale: "en"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/foreigner-id/ce"
sourceAnchor: "What this API returns"
slug: "/identity/colombia-ce"
url: "https://docs.verifik.co/identity/colombia-ce"
---

# Colombia — CE (Cédula de Extranjería)
**API path(s):** /v2/co/foreigner-id/ce

## What this API returns

Verifik validates **CE** (*Cédula de Extranjería*) records published by **Migración Colombia** for KYC, eligibility, and compliance workflows.

## What this API returns

- **Status** (e.g. **VIGENTE**) and key dates, including **expedition** and **expiration** where provided
- **Structured name** fields and **CE** document metadata when returned by the source
- Responses are **signed** and may be **cached**

## API reference

### Endpoint

```
GET https://api.verifik.co/v2/co/foreigner-id/ce
```

The same integration is available as **`POST`** with a JSON body containing the same fields. **`GET`** uses **query parameters** as shown below.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Document requirements

**Who is this for?** **Foreign nationals** legally residing in Colombia who hold a *Cédula de Extranjería* (**CE**). This is **not** for Colombian citizens (use [Colombian Citizen](/identity-validation/colombia/colombian-citizen) with **`CC`**) and **not** for Venezuelan **PPT** or immigration **PEP** permits.

| Field | Guidance |
| --- | --- |
| **`documentNumber`** | CE number, **digits only** (no spaces or punctuation). In Colombia, CE numbers are usually **6 or 7 digits** (variable length — not a fixed 10-digit NUIP). Examples: `712046`, `1156043`. |
| **`expeditionDate`** | Issue date on the CE, format **`DD/MM/YYYY`** (e.g. `15/06/2020`). Required — wrong format typically returns **409**. |

Full comparison: [Colombia identity documents guide](/identity-validation/colombia/colombia-identity-documents-guide).

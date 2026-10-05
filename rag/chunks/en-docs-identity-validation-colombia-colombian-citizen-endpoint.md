---
id: "en-docs-identity-validation-colombia-colombian-citizen-endpoint"
title: "Colombian Citizen — Endpoint"
sourcePath: "docs/identity-validation/colombia/colombian-citizen.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoint: "/v2/co/cedula"
sourceAnchor: "Endpoint"
slug: "/identity-validation/colombia/colombian-citizen"
url: "https://docs.verifik.co/identity-validation/colombia/colombian-citizen"
---

# Colombian Citizen
**API path(s):** /v2/co/cedula

## Endpoint

```
GET https://api.verifik.co/v2/co/cedula
```

Same path on the app host: `GET https://verifik.app/v2/co/cedula`.

The route also accepts **`POST`** with the same fields in the body (for clients that prefer it).

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Document requirements

**Who is this for?** Anyone whose name can be resolved from official Colombian sources. `/v2/co/cedula` consolidates Procuraduría, DIAN, ADRES, and Registraduría. **CE**, **PEP**, and **NIT** typically resolve through Procuraduría.

| Type | Who holds it | `documentType` | Typical length in Colombia | This API accepts |
| --- | --- | --- | --- | --- |
| **CC** | Colombian citizens | `CC` | **3–10** digits (common: **8** or **10** NUIP) | **5–10** digits, digits only |
| **CE** | Foreign residents (name lookup) | `CE` | Usually **6–7** digits | **5–10** digits, digits only |
| **PPT** | Venezuelan migrants (name lookup on this path) | `PPT` | Up to **7** digits | **5–10** digits, digits only |
| **PEP** | Permiso Especial de Permanencia (name lookup) | `PEP` | Typically **7–10** digits on this path | **5–10** digits, digits only |
| **NIT** | Tax ID (person or company name) | `NIT` | **9–10** digits | **5–10** digits, digits only |

**How to enter `documentNumber`:** digits only — no dots, spaces, or dashes. Example CC: `1032386359`.

**Use a different endpoint for:**
- **Procuraduría names only** → [Colombia Procuraduría](/identity/colombia-procuraduria) (`/v2/co/procuraduria`)
- **CE immigration status** (expiration) → [Colombia CE](/identity/colombia-ce) (`/v2/co/foreigner-id/ce` + `expeditionDate`)
- **PPT immigration status** (VIGENTE / expiration) → [Colombia PPT](/identity/colombia-ppt) (`/v2/co/foreigner-id/ppt` + `expeditionDate`)
- **PEP immigration status** (15-digit Migración number) → [Colombia PEP](/identity/colombia-pep-id)

Full comparison: [Colombia identity documents guide](/identity-validation/colombia/colombia-identity-documents-guide).

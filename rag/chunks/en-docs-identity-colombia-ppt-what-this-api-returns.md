---
id: "en-docs-identity-colombia-ppt-what-this-api-returns"
title: "Colombia — PPT (Temporary Protection Permit) — What this API returns"
sourcePath: "docs/identity/colombia-ppt.mdx"
locale: "en"
category: "identity"
tags:
  - "co"
  - "identity"
endpoints:
  - "/v2/co/cedula"
  - "/v2/co/foreigner-id/ppt"
sourceAnchor: "What this API returns"
slug: "/identity/colombia-ppt"
url: "https://docs.verifik.co/identity/colombia-ppt"
---

# Colombia — PPT (Temporary Protection Permit)
**API path(s):** /v2/co/cedula, /v2/co/foreigner-id/ppt

## What this API returns

Verifik validates **PPT** (*Permiso de Protección Temporal*) records published by **Migración Colombia** for KYC, eligibility, and compliance workflows.

## What this API returns

- **Status** (e.g. **VIGENTE**) and key dates, including **expedition** and **expiration**
- **Structured name** fields and **PPT** document metadata
- Responses are **signed** and may be **cached**

## API reference

### Endpoint

```
GET https://api.verifik.co/v2/co/foreigner-id/ppt
```

The same integration is available as **`POST`** with a JSON body containing the same fields. **`GET`** uses **query parameters** as shown below.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Document requirements

**Who is this for?** **Venezuelan nationals** in Colombia who hold a *Permiso de Protección Temporal* (**PPT**) when you need **immigration status** from **Migración Colombia** (e.g. VIGENTE, expiration dates).

| Field | Guidance |
| --- | --- |
| **`documentNumber`** | PPT number, **digits only**. In Colombia the permit number is usually **up to 7 digits**. Some systems (SENA, payroll) display it zero-padded to **15 characters** — send the numeric value your records use. Example from Migración: `2081381`. |
| **`expeditionDate`** | Issue date on the PPT, format **`DD/MM/YYYY`** (e.g. `07/03/2022`). Required. |

**Also available:** name-style lookup via [`/v2/co/cedula`](/identity-validation/colombia/colombian-citizen) with `documentType=PPT` (5–10 digit validation, no expedition date).

Full comparison: [Colombia identity documents guide](/identity-validation/colombia/colombia-identity-documents-guide).

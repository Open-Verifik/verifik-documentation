---
id: "en-docs-identity-validation-colombia-colombia-identity-documents-guide-how-to-enter-the-number-2"
title: "Colombia — Identity documents guide — How to enter the number"
sourcePath: "docs/identity-validation/colombia/colombia-identity-documents-guide.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoints:
  - "/v2/co/adres"
  - "/v2/co/afiliaciones"
  - "/v2/co/cedula"
  - "/v2/co/foreigner-id/ce"
  - "/v2/co/foreigner-id/pep"
  - "/v2/co/foreigner-id/ppt"
  - "/v2/co/politically-exposed-persons"
  - "/v2/co/procuraduria"
  - "/v2/co/runt/conductor"
sourceAnchor: "How to enter the number"
slug: "/identity-validation/colombia/colombia-identity-documents-guide"
url: "https://docs.verifik.co/identity-validation/colombia/colombia-identity-documents-guide"
---

# Colombia — Identity documents guide
**API path(s):** /v2/co/adres, /v2/co/afiliaciones, /v2/co/cedula, /v2/co/foreigner-id/ce, /v2/co/foreigner-id/pep, /v2/co/foreigner-id/ppt, /v2/co/politically-exposed-persons, /v2/co/procuraduria, /v2/co/runt/conductor

Use this page when you are not sure **which document type** your user has or **which Verifik endpoint** to call. Each Colombian ID has a different issuer and a different API path.

## How to enter the number

- Send **digits only** — no dots, spaces, or dashes (Verifik normalizes non-digits away).
- Do **not** pad with leading zeros unless that is how the number appears on the physical document or your source system stores it.
- If you get **409** “validation” errors, check length limits for `/v2/co/cedula` (**5–10**) or a missing / wrong **`expeditionDate`** on foreigner-id routes.

## Document types explained

### CC — Cédula de Ciudadanía

For people who are **Colombian citizens**. The number identifies them in the *Registraduría* civil registry.

- **Older IDs** (before ~2004): often **6–8 digits**, kept as issued.
- **Current NUIP** (since ~2004): **10 digits**, usually starting around `1.000.000.000`.
- **Very old historical IDs** can be as short as **3 digits**; Verifik’s `/v2/co/cedula` path requires **at least 5 digits**. If you only have a shorter historical number, contact Verifik support.

**Endpoint:** [Colombian Citizen](/identity-validation/colombia/colombian-citizen) — `documentType=CC`.

### CE — Cédula de Extranjería

For **foreign nationals** who are legal residents in Colombia. Issued by **Migración Colombia**, not the *Registraduría* cédula flow.

- Numbers are typically **6 or 7 digits** (not a fixed length like NUIP).
- You must send the **expedition (issue) date** exactly as **`DD/MM/YYYY`**.

**Endpoints:**
- **Name lookup:** [Colombian Citizen](/identity-validation/colombia/colombian-citizen) (`/v2/co/cedula`) or [Colombia Procuraduría](/identity/colombia-procuraduria) (`/v2/co/procuraduria`) with `documentType=CE`.
- **Immigration status:** [Colombia CE](/identity/colombia-ce) — requires `expeditionDate`.

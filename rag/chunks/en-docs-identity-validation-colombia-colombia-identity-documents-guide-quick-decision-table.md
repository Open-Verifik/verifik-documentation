---
id: "en-docs-identity-validation-colombia-colombia-identity-documents-guide-quick-decision-table"
title: "Colombia — Identity documents guide — Quick decision table"
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
sourceAnchor: "Quick decision table"
slug: "/identity-validation/colombia/colombia-identity-documents-guide"
url: "https://docs.verifik.co/identity-validation/colombia/colombia-identity-documents-guide"
---

# Colombia — Identity documents guide
**API path(s):** /v2/co/adres, /v2/co/afiliaciones, /v2/co/cedula, /v2/co/foreigner-id/ce, /v2/co/foreigner-id/pep, /v2/co/foreigner-id/ppt, /v2/co/politically-exposed-persons, /v2/co/procuraduria, /v2/co/runt/conductor

## Quick decision table

Use this page when you are not sure **which document type** your user has or **which Verifik endpoint** to call. Each Colombian ID has a different issuer and a different API path.

## Quick decision table

| If the person has… | Plain name | Verifik endpoint | Required fields | Typical number length | What this API accepts |
| --- | --- | --- | --- | --- | --- |
| **CC** | *Cédula de Ciudadanía* (Colombian national ID) | `GET/POST /v2/co/cedula` | `documentType=CC`, `documentNumber` | **3–10** in the wild (common today: **8** or **10** NUIP) | **5–10** digits |
| **PPT** (names / civil data) | *Permiso de Protección Temporal* | `GET/POST /v2/co/cedula` | `documentType=PPT`, `documentNumber` | Up to **7** digits (some systems pad to 15) | **5–10** digits on this path |
| **PPT** (immigration status) | Same permit, Migración Colombia | `GET/POST /v2/co/foreigner-id/ppt` | `documentNumber`, `expeditionDate` | Up to **7** digits | Required string + date **`DD/MM/YYYY`** |
| **CE** (names) | *Cédula de Extranjería* | `GET/POST /v2/co/cedula` or `/v2/co/procuraduria` | `documentType=CE`, `documentNumber` | Usually **6–7** digits | **5–10** digits |
| **CE** (immigration status) | Same card, Migración Colombia | `GET/POST /v2/co/foreigner-id/ce` | `documentNumber`, `expeditionDate` | Usually **6–7** digits | Required string + date **`DD/MM/YYYY`** |
| **PEP** (names) | *Permiso Especial de Permanencia* | `GET/POST /v2/co/cedula` or `/v2/co/procuraduria` | `documentType=PEP`, `documentNumber` | Typically **7–10** on name paths | **5–10** digits |
| **PEP** (immigration status) | Same permit, Migración Colombia | `GET/POST /v2/co/foreigner-id/pep` | `documentNumber`, `expeditionDate` | **15** digits (fixed) | Required string + date **`DD/MM/YYYY`** |
| **NIT** (names) | Tax ID | `GET/POST /v2/co/cedula` or `/v2/co/procuraduria` | `documentType=NIT`, `documentNumber` | **9–10** digits | **5–10** digits |
| **PA** | *Pasaporte* (passport) — **not PPT** | `GET /v2/co/runt/conductor` | `documentType=PA`, `documentNumber`, **`primerApellido`** | Varies | Not accepted on `/v2/co/cedula` or Procuraduría |

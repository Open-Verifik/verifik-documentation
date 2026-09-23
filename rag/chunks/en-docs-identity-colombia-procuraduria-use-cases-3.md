---
id: "en-docs-identity-colombia-procuraduria-use-cases-3"
title: "Colombia — Citizen lookup via Procuraduría — Use cases"
sourcePath: "docs/identity/colombia-procuraduria.mdx"
locale: "en"
category: "identity"
tags:
  - "co"
  - "identity"
endpoints:
  - "/v2/co/cedula"
  - "/v2/co/procuraduria"
  - "/v2/co/procuraduria/antecedentes"
sourceAnchor: "Use cases"
slug: "/identity/colombia-procuraduria"
url: "https://docs.verifik.co/identity/colombia-procuraduria"
---

# Colombia — Citizen lookup via Procuraduría
**API path(s):** /v2/co/cedula, /v2/co/procuraduria, /v2/co/procuraduria/antecedentes

Validate a Colombian document number and extract **names** from **Procuraduría General de la Nación**. This is the official source that supports *Cédula de ciudadanía* (**CC**), *Cédula de extranjería* (**CE**), *Permiso Especial de Permanencia* (**PEP**), *NIT*, and *Permiso por Protección Temporal* (**PPT**).
Unlike [citizen by document](/identity-validation/colombia/colombian-citizen) (`/v2/co/cedula`), this endpoint hits **Procuraduría only** — it does **not** try DIAN, ADRES, or Registraduría. Unlike [disciplinary records](/background-check/colombia-disciplinary-records-attorneys-office) (`/v2/co/procuraduria/antecedentes`), it does **not** return `antecedentes` or `legend`.

## Use cases

- Validate a *cédula de extranjería* or NIT when you only need the registered name
- Isolate Procuraduría from the multi-source `/cedula` consolidation
- Prefer a dedicated product when you do not want antecedentes billed separately

### Notes

- Name extraction only — the response does **not** include `antecedentes` or `legend`.
- For disciplinary records use [Colombia disciplinary records](/background-check/colombia-disciplinary-records-attorneys-office).
- `/v2/co/cedula` still consolidates Procuraduría with other sources for the same document types.
- Sandbox reserved document `90040401` returns **404**.
- Related: [Citizen by document](/identity-validation/colombia/colombian-citizen), [Colombia identity documents guide](/identity-validation/colombia/colombia-identity-documents-guide).

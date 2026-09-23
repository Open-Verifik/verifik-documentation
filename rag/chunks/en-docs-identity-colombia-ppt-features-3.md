---
id: "en-docs-identity-colombia-ppt-features-3"
title: "Colombia — PPT (Temporary Protection Permit) — Features"
sourcePath: "docs/identity/colombia-ppt.mdx"
locale: "en"
category: "identity"
tags:
  - "co"
  - "identity"
endpoints:
  - "/v2/co/cedula"
  - "/v2/co/foreigner-id/ppt"
sourceAnchor: "Features"
slug: "/identity/colombia-ppt"
url: "https://docs.verifik.co/identity/colombia-ppt"
---

# Colombia — PPT (Temporary Protection Permit)
**API path(s):** /v2/co/cedula, /v2/co/foreigner-id/ppt

Verifik validates **PPT** (*Permiso de Protección Temporal*) records published by **Migración Colombia** for KYC, eligibility, and compliance workflows.

## Features

- **Official PPT lookup** against Migración Colombia’s public consultation flow
- **Validity and lifecycle fields** when returned by the source

## Use cases

- **Humanitarian and social programs** that require proof of temporary protection status
- **Employer and financial onboarding** where Colombian immigration checks apply

### Notes

- **`expeditionDate`** must match **`DD/MM/YYYY`**; wrong formats typically return **409**.
- **`GET`** and **`POST`** are both routed to the same handler; use **`POST`** if you prefer a JSON body.
- For **name / identity data** without expedition date, try [`/v2/co/cedula`](/identity-validation/colombia/colombian-citizen) with `documentType=PPT`. See the [documents guide](/identity-validation/colombia/colombia-identity-documents-guide).
- Upstream portal or parsing changes may surface **404** / **500** when no row is found or the source is unavailable.

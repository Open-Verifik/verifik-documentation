---
id: "en-docs-vehicle-validation-colombia-simit-suspensiones-notes-2"
title: "SIMIT - License suspensions — Notes"
sourcePath: "docs/vehicle-validation/colombia/simit-suspensiones.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/simit/suspensiones"
sourceAnchor: "Notes"
slug: "/vehicle-validation/colombia/simit-suspensiones"
url: "https://docs.verifik.co/vehicle-validation/colombia/simit-suspensiones"
---

# SIMIT - License suspensions
**API path(s):** /v2/co/simit/suspensiones

## Notes

- **SIMIT** (Sistema Integrado de Información de Multas y Sanciones por Infracciones de Tránsito) is Colombia’s national traffic infractions registry.
- Field names and nested lists in **`data`** follow the upstream **SIMIT** payload; the sample illustrates common patterns—adjust integration code to the live response shape.
- A **200** with an **empty** `suspensiones` array (or equivalent) may mean no suspensions were returned for that identity in the consulted window—interpret alongside business rules.
- You may receive **`409`** with `documentNumber maximum length exceeded` if the document number is longer than allowed.

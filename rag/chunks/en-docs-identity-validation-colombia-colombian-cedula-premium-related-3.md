---
id: "en-docs-identity-validation-colombia-colombian-cedula-premium-related-3"
title: "Colombia — National ID premium lookup (CC) — Related"
sourcePath: "docs/identity-validation/colombia/colombian-cedula-premium.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoint: "/v2/co/cedula/premium"
sourceAnchor: "Related"
slug: "/identity-validation/colombia/colombian-cedula-premium"
url: "https://docs.verifik.co/identity-validation/colombia/colombian-cedula-premium"
---

# Colombia — National ID premium lookup (CC)
**API path(s):** /v2/co/cedula/premium

**Purpose:** confirm a **Colombian *Cédula de Ciudadanía* (CC)** against official sources and return a **structured identity record** suitable for KYC and compliance workflows—not a binary pass/fail on the number alone. The response reflects **how the name is recorded**, **date of birth**, **place and date of issue**, and—where provided by sources—**gender** and **alive status**, with a **signed certification** block in the response. **Submit only the document number**; the **issue date is resolved server-side** (no `documentType` or issue date in the request). Record depth matches [**cédula extra**](/identity/colombia-full-id). Credit consumption is **higher** than the [**basic cédula endpoint**](/identity-validation/colombia/colombian-citizen) because of additional resolution steps.

## Related

- [**National ID (basic)**](/identity-validation/colombia/colombian-citizen) — `GET/POST /v2/co/cedula` (`CC` / `PPT`).
- [**National ID extra (manual date)**](/identity/colombia-full-id) — `GET/POST /v2/co/cedula/extra` with `documentType`, `documentNumber`, and `date`.

### Other languages

Same page is available under each localized site (same API, translated UI copy where present):

- **Español:** [/verifik-es/validacion-identidad/colombia/cedula-premium-cc/](/verifik-es/validacion-identidad/colombia/cedula-premium-cc/)
- **Français:** [/verifik-fr/identity-validation/colombia/colombian-cedula-premium/](/verifik-fr/identity-validation/colombia/colombian-cedula-premium/)
- **Português:** [/verifik-pt/identity-validation/colombia/colombian-cedula-premium/](/verifik-pt/identity-validation/colombia/colombian-cedula-premium/)
- **한국어:** [/verifik-ko/identity-validation/colombia/colombian-cedula-premium/](/verifik-ko/identity-validation/colombia/colombian-cedula-premium/)
- **日本語:** [/verifik-ja/identity-validation/colombia/colombian-cedula-premium/](/verifik-ja/identity-validation/colombia/colombian-cedula-premium/)
- **中文:** [/verifik-zh/identity-validation/colombia/colombian-cedula-premium/](/verifik-zh/identity-validation/colombia/colombian-cedula-premium/)

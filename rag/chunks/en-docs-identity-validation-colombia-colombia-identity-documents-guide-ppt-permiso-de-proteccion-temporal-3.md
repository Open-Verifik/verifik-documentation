---
id: "en-docs-identity-validation-colombia-colombia-identity-documents-guide-ppt-permiso-de-proteccion-temporal-3"
title: "Colombia — Identity documents guide — PPT — Permiso de Protección Temporal"
sourcePath: "docs/identity-validation/colombia/colombia-identity-documents-guide.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
sourceAnchor: "PPT — Permiso de Protección Temporal"
slug: "/identity-validation/colombia/colombia-identity-documents-guide"
url: "https://docs.verifik.co/identity-validation/colombia/colombia-identity-documents-guide"
---

# Colombia — Identity documents guide

Use this page when you are not sure **which document type** your user has or **which Verifik endpoint** to call. Each Colombian ID has a different issuer and a different API path.

## PPT — Permiso de Protección Temporal

For **Venezuelan nationals** under Colombia’s temporary protection regime.

- The permit number is usually **up to 7 digits**. Some portals (SENA, payroll, etc.) display it **zero-padded to 15 characters** — use the format your integration already stores; Verifik accepts the numeric value without decoration when possible.
- **Two endpoints:**
  - **Name / identity-style lookup:** `/v2/co/cedula` with `documentType=PPT` (5–10 digit validation).
  - **Immigration status (VIGENTE, expiration, etc.):** `/v2/co/foreigner-id/ppt` with **`expeditionDate`**.

**Endpoints:** [Colombian Citizen (PPT names)](/identity-validation/colombia/colombian-citizen) · [PPT Migración status](/identity/colombia-ppt).

PPT is **not** a passport. RUNT labels PPT as **`Y.`**. Passport is **`PA`** (RUNT **`P.`**).

### PA — Pasaporte (passport)

For people identified by a **passport**, not a Colombian national ID or temporary-protection permit.

- `/v2/co/cedula` and Procuraduría **do not** accept `PA`.
- Use [RUNT driver's license](/vehicle-validation/colombia/runt-drivers-license) with `documentType=PA` and a required **`primerApellido`**.

### PEP — Permiso Especial de Permanencia

For **Venezuelan nationals** who hold this **immigration permit** (different from “politically exposed person” in AML).

- The number is **always 15 digits**.
- Requires **`expeditionDate`** in **`DD/MM/YYYY`**.

**Endpoints:**
- **Name lookup** (5–10 digits on `/v2/co/cedula` or `/v2/co/procuraduria`): [Colombian Citizen](/identity-validation/colombia/colombian-citizen) · [Colombia Procuraduría](/identity/colombia-procuraduria).
- **Immigration status** (15-digit Migración number + `expeditionDate`): [Colombia PEP (immigration)](/identity/colombia-pep-id).

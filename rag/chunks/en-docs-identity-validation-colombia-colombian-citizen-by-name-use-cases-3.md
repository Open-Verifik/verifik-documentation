---
id: "en-docs-identity-validation-colombia-colombian-citizen-by-name-use-cases-3"
title: "Colombia — Citizen lookup by name (SCCRC) — Use cases"
sourcePath: "docs/identity-validation/colombia/colombian-citizen-by-name.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoint: "/v2/co/cedula/by-name"
sourceAnchor: "Use cases"
slug: "/identity-validation/colombia/colombian-citizen-by-name"
url: "https://docs.verifik.co/identity-validation/colombia/colombian-citizen-by-name"
---

# Colombia — Citizen lookup by name (SCCRC)
**API path(s):** /v2/co/cedula/by-name

Search the **Registraduría Nacional del Estado Civil** birth civil registry (**SCCRC**) using **names**, **sex**, and **date of birth**. Unlike [Colombian citizen by document](/identity-validation/colombia/colombian-citizen), this endpoint is a **reverse lookup** and may return **multiple matches**.
Use this when you know personal identity attributes but not the NUIP/CC, or when you need to confirm possible registry hits before a document-based check.

## Use cases

- Recover possible **NUIP/CC** candidates from known name + DOB
- Pre-screen applicants when only biographic data is available
- Cross-check name spelling against civil registry hits

### Notes

- Always inspect **`matches`**; name queries can return more than one person.
- **`fecha`** must be **`DD/MM/YYYY`** (date of birth).
- **Sandbox:** name queries map to fixed profiles with document numbers **`10000001`–`10000010`**. Example defaults: `MARIA` / `LOPEZ` / `FEMENINO` / `15/03/1990`.
- Temporary source availability issues may surface as **409** (`Endpoint_out_of_service`).
- Related: [Colombian citizen by document](/identity-validation/colombia/colombian-citizen), [Civil registry by serial](/identity/colombia-registraduria-serial), [Marriage civil registry](/identity/colombia-registraduria-matrimonio).

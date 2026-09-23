---
id: "en-docs-identity-colombia-registraduria-matrimonio-notes-3"
title: "Colombia — Marriage civil registry (SCCRC) — Notes"
sourcePath: "docs/identity/colombia-registraduria-matrimonio.mdx"
locale: "en"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/registraduria/matrimonio"
sourceAnchor: "Notes"
slug: "/identity/colombia-registraduria-matrimonio"
url: "https://docs.verifik.co/identity/colombia-registraduria-matrimonio"
---

# Colombia — Marriage civil registry (SCCRC)
**API path(s):** /v2/co/registraduria/matrimonio

Query the **marriage civil registry** (*registro civil de matrimonio*) from **Registraduría Nacional del Estado Civil** (**SCCRC**).
Provide **one** search mode:
1. **`documentNumber` + `sexo`** — document search (single record)
2. **`primerNombre` + `primerApellido` + `sexo` + `fecha`** — name search (may return **`matches`**)
3. **`serial`** — serial search (single record)

## Notes

- Supply **exactly one** search mode (do not mix serial with document/name fields).
- **Sandbox:** document numbers **`10000001`–`10000010`**; name mode follows the same sandbox profiles as [by-name](/identity-validation/colombia/colombian-citizen-by-name).
- Temporary source availability issues may surface as **409** (`Endpoint_out_of_service`).
- Related: [Citizen by document](/identity-validation/colombia/colombian-citizen), [Citizen by name](/identity-validation/colombia/colombian-citizen-by-name), [Civil registry by serial](/identity/colombia-registraduria-serial), [Registraduría certificate](/identity/colombia-registraduria-certificate).

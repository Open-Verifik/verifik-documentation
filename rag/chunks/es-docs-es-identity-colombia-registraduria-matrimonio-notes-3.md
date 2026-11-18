---
id: "es-docs-es-identity-colombia-registraduria-matrimonio-notes-3"
title: "Colombia — Registro civil de matrimonio (SCCRC) — Notes"
sourcePath: "docs-es/identity/colombia-registraduria-matrimonio.mdx"
locale: "es"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/registraduria/matrimonio"
sourceAnchor: "Notes"
slug: "/identity/colombia-registraduria-matrimonio"
url: "https://docs.verifik.co/verifik-es/identity/colombia-registraduria-matrimonio"
---

# Colombia — Registro civil de matrimonio (SCCRC)
**API path(s):** /v2/co/registraduria/matrimonio

Consulta el **registro civil de matrimonio** (*registro civil de matrimonio*) de la **Registraduría Nacional del Estado Civil** (**SCCRC**).
Proporciona **un** modo de búsqueda:
1. **`documentNumber` + `sexo`** — búsqueda por documento (un solo registro)
2. **`primerNombre` + `primerApellido` + `sexo` + `fecha`** — búsqueda por nombre (puede devolver **`matches`**)
3. **`serial`** — búsqueda por serial (un solo registro)

## Notes

- Proporciona **exactamente un** modo de búsqueda (no mezcles serial con campos de documento/nombre).
- **Sandbox:** números de documento **`10000001`–`10000010`**; el modo nombre sigue los mismos perfiles sandbox que [por nombre](/identity-validation/colombia/colombian-citizen-by-name).
- Problemas temporales de disponibilidad de la fuente pueden aparecer como **409** (`Endpoint_out_of_service`).
- Relacionado: [Ciudadano por documento](/identity-validation/colombia/colombian-citizen), [Ciudadano por nombre](/identity-validation/colombia/colombian-citizen-by-name), [Registro civil por serial](/identity/colombia-registraduria-serial), [Certificado Registraduría](/identity/colombia-registraduria-certificate).

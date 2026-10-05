---
id: "es-docs-es-identity-validation-colombia-colombian-citizen-by-name-casos-de-uso-3"
title: "Colombia — Búsqueda de ciudadano por nombre (SCCRC) — Casos de uso"
sourcePath: "docs-es/identity-validation/colombia/colombian-citizen-by-name.mdx"
locale: "es"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoint: "/v2/co/cedula/by-name"
sourceAnchor: "Casos de uso"
slug: "/validacion-identidad/colombia/ciudadano-colombiano-por-nombre"
url: "https://docs.verifik.co/verifik-es/validacion-identidad/colombia/ciudadano-colombiano-por-nombre"
---

# Colombia — Búsqueda de ciudadano por nombre (SCCRC)
**API path(s):** /v2/co/cedula/by-name

Consulta el registro civil de nacimiento (**SCCRC**) de la **Registraduría Nacional del Estado Civil** usando **nombres**, **sexo** y **fecha de nacimiento**. A diferencia de [ciudadano colombiano por documento](/identity-validation/colombia/colombian-citizen), este endpoint es una **búsqueda inversa** y puede devolver **múltiples coincidencias**.
Úsalo cuando conoces atributos de identidad personal pero no el NUIP/CC, o cuando necesitas confirmar posibles hallazgos en el registro antes de una verificación por documento.

## Casos de uso

- Recuperar posibles candidatos de **NUIP/CC** a partir de nombre + fecha de nacimiento conocidos
- Preseleccionar solicitantes cuando solo hay datos biográficos
- Contrastar la ortografía del nombre con hallazgos del registro civil

### Notes

- Siempre inspecciona **`matches`**; las consultas por nombre pueden devolver más de una persona.
- **`fecha`** debe ser **`DD/MM/YYYY`** (fecha de nacimiento).
- **Sandbox:** las consultas por nombre mapean a perfiles fijos con números de documento **`10000001`–`10000010`**. Valores de ejemplo por defecto: `MARIA` / `LOPEZ` / `FEMENINO` / `15/03/1990`.
- Problemas temporales de disponibilidad de la fuente pueden aparecer como **409** (`Endpoint_out_of_service`).
- Relacionado: [Ciudadano colombiano por documento](/identity-validation/colombia/colombian-citizen), [Registro civil por serial](/identity/colombia-registraduria-serial), [Registro civil de matrimonio](/identity/colombia-registraduria-matrimonio).

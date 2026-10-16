---
id: "es-docs-es-validacion-empresarial-verificacion-dian-notas-2"
title: "Colombia — Verificación DIAN (NIT) — Notas"
sourcePath: "docs-es/validacion-empresarial/verificacion-dian.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "co"
  - "validacion-empresarial"
endpoint: "/v2/co/company/dian"
sourceAnchor: "Notas"
slug: "/business-validation/colombia-dian-verification"
url: "https://docs.verifik.co/verifik-es/business-validation/colombia-dian-verification"
---

# Colombia — Verificación DIAN (NIT)
**API path(s):** /v2/co/company/dian

## Notas

- Solo **`GET`** con parámetros en query (sin cuerpo). Usa **`Accept`** para respuestas JSON.
- NIT válido; el integrador gestiona formato y dígito de verificación según respuesta DIAN.
- **División de Nombres para Personas Naturales**: Cuando la respuesta es para una "persona natural", Verifik divide automáticamente el nombre del campo `nombreRazon` en `firstName`, `lastName`, `fullName` y `arrayName` usando funciones internas. Sin embargo, dado que los datos de origen devuelven el nombre como un solo campo (`nombreRazon`), la división puede no ser siempre 100% precisa. El campo `nombreRazon` siempre contiene el nombre original sin modificar tal como lo devuelve DIAN.

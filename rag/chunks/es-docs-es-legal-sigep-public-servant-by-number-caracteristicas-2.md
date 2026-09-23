---
id: "es-docs-es-legal-sigep-public-servant-by-number-caracteristicas-2"
title: "Colombia — Consulta SIGEP por documento — Características"
sourcePath: "docs-es/legal/sigep-public-servant-by-number.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/sigep/number"
sourceAnchor: "Características"
slug: "/legal/sigep-servidor-publico-por-numero"
url: "https://docs.verifik.co/verifik-es/legal/sigep-servidor-publico-por-numero"
---

# Colombia — Consulta SIGEP por documento
**API path(s):** /v2/co/sigep/number

## Características

- **Filas del directorio**: Cargo, entidad, correo, teléfono y ubicación cuando se publican.
- **Enlace al perfil**: URL oficial cuando existe.
- **Leyenda**: Puede explicar ausencia de filas en el directorio.

## Casos de uso

- **Transparencia y proveedores**: Verificar listados vinculados a un documento.
- **Cumplimiento / KYB**: Debida diligencia sobre personas ligadas al sector público.

### Notas

- **`documentType`** debe ser **`CC`** o **`NIT`** (algunas interfaces muestran más opciones; la API solo acepta estas).
- Puede haber **200** con **`records`** vacío y **`legend`** explicativo.

---
id: "es-docs-es-legal-sigep-public-servant-by-name-caracteristicas-2"
title: "Colombia — Consulta SIGEP por nombre completo — Características"
sourcePath: "docs-es/legal/sigep-public-servant-by-name.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/sigep/name"
sourceAnchor: "Características"
slug: "/legal/sigep-servidor-publico-por-nombre"
url: "https://docs.verifik.co/verifik-es/legal/sigep-servidor-publico-por-nombre"
---

# Colombia — Consulta SIGEP por nombre completo
**API path(s):** /v2/co/sigep/name

## Características

- **Búsqueda por nombre**: Consulta al formulario web del directorio SIGEP.
- **Filas detalladas**: Entidad, cargo, contacto y enlace al perfil cuando existen.

## Casos de uso

- **Localización**: Encontrar fichas cuando no hay número de documento.
- **Verificación**: Datos publicados para transparencia o debida diligencia.

### Notas

- **`fullName`** es obligatorio; si falta, suele devolverse **409**.
- Puede haber **200** con **`records`** vacío y **`legend`**.
- Si el servicio de SIGEP no responde, puede devolverse **409** `Endpoint_out_of_service`.

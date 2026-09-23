---
id: "es-docs-es-legal-retrieve-details-of-a-legal-process-by-number-caracteristicas-3"
title: "Recuperar Detalles de un Proceso Legal por Número — Características"
sourcePath: "docs-es/legal/retrieve-details-of-a-legal-process-by-number.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoints:
  - "/v2/co/rama/proceso"
  - "/v2/co/rama/proceso/${processnumber}"
  - "/v2/co/rama/proceso/\\(processnumber)"
  - "/v2/co/rama/proceso/{$processnumber}"
  - "/v2/co/rama/proceso/{process_number}"
sourceAnchor: "Características"
slug: "/legal/recuperar-detalles-proceso-legal-por-numero"
url: "https://docs.verifik.co/verifik-es/legal/recuperar-detalles-proceso-legal-por-numero"
---

# Recuperar Detalles de un Proceso Legal por Número
**API path(s):** /v2/co/rama/proceso, /v2/co/rama/proceso/${processnumber}, /v2/co/rama/proceso/\(processnumber), /v2/co/rama/proceso/{$processnumber}, /v2/co/rama/proceso/{process_number}

## Características

- **Detalle del expediente**: Despacho, tipo de asunto, clase y fechas desde Rama Judicial.
- **Sujetos procesales**: Partes cuando la fuente las expone.
- **Actuaciones**: Historial de actuaciones con anotaciones.

## Casos de Uso

- **Seguimiento**: Consultar un `llaveProceso` conocido tras listar procesos.
- **Debida diligencia**: Obtener datos estructurados de un expediente por número.

### Notas

- **`processNumber`** va en la **ruta**, no en query (en exploradores puede mostrarse como campo `processNumber`).
- **409** suele indicar `processNumber` ausente o inválido (por ejemplo, menos de 7 caracteres).

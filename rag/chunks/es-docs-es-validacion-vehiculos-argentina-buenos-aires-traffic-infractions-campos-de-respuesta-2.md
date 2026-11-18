---
id: "es-docs-es-validacion-vehiculos-argentina-buenos-aires-traffic-infractions-campos-de-respuesta-2"
title: "Buenos Aires - Infracciones de Tránsito — Campos de respuesta"
sourcePath: "docs-es/validacion-vehiculos/argentina/buenos-aires-traffic-infractions.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "ar"
  - "validacion-vehiculos"
endpoint: "/v2/ar/buenos-aires/traffic-infractions"
sourceAnchor: "Campos de respuesta"
slug: "/validacion-vehiculos/argentina/buenos-aires-traffic-infractions"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/argentina/buenos-aires-traffic-infractions"
---

# Buenos Aires - Infracciones de Tránsito
**API path(s):** /v2/ar/buenos-aires/traffic-infractions

## Campos de respuesta

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `plate` | string | Placa normalizada. |
| `totalRecords` | string | Número de registros devueltos por la fuente. |
| `infractions` | object[] | Registros de infracciones de tránsito asociados a la placa. |
| `infractions[].caseNumber` | string \| null | Número de caso. |
| `infractions[].actNumber` | string \| null | Número de acta. |
| `infractions[].status` | string \| null | Estado público del caso. |
| `infractions[].isExpired` | boolean \| null | Indica si el registro está vencido. |
| `infractions[].totalAmount` | string \| null | Monto total devuelto por la fuente. |
| `infractions[].details` | object[] | Artículos y descripciones de la infracción. |

### Notas

- Este endpoint está limitado a registros de infracciones de tránsito de Buenos Aires.
- `infractions` puede ser un array vacío cuando la placa no tiene infracciones devueltas.

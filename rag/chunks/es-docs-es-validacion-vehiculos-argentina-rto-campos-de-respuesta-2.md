---
id: "es-docs-es-validacion-vehiculos-argentina-rto-campos-de-respuesta-2"
title: "Argentina - RTO — Campos de respuesta"
sourcePath: "docs-es/validacion-vehiculos/argentina/rto.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "ar"
  - "validacion-vehiculos"
endpoint: "/v2/ar/rto"
sourceAnchor: "Campos de respuesta"
slug: "/validacion-vehiculos/argentina/rto"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/argentina/rto"
---

# Argentina - RTO
**API path(s):** /v2/ar/rto

## Campos de respuesta

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `plate` | string | Placa normalizada. |
| `totalRecords` | string | Número de registros RTO devueltos. |
| `inspections` | object[] | Registros de inspección RTO. |
| `inspections[].result` | string \| null | Resultado de la inspección. |
| `inspections[].inspectionType` | string \| null | Etiqueta del tipo de inspección. |
| `inspections[].inspectionDate` | string \| null | Fecha de inspección. |
| `inspections[].expirationDate` | string \| null | Fecha de vencimiento. |
| `inspections[].certificate` | string \| null | Identificador del certificado. |
| `inspections[].scalabilityCategory` | string \| null | Categoría de escalabilidad devuelta por la fuente. |
| `inspections[].inspectionCenter` | string \| null | Nombre del centro de inspección. |
| `inspections[].alertType` | string \| null | Tipo de alerta de la fuente cuando esté disponible. |

### Notas

- Los campos de fecha se normalizan cuando la fuente devuelve un valor día/mes/año reconocible.
- Los registros RTO se devuelven como un array `inspections` para manejar múltiples registros por placa.

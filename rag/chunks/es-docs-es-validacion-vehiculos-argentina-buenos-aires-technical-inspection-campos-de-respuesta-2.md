---
id: "es-docs-es-validacion-vehiculos-argentina-buenos-aires-technical-inspection-campos-de-respuesta-2"
title: "Buenos Aires - Inspección Técnica — Campos de respuesta"
sourcePath: "docs-es/validacion-vehiculos/argentina/buenos-aires-technical-inspection.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "ar"
  - "validacion-vehiculos"
endpoint: "/v2/ar/buenos-aires/technical-inspection"
sourceAnchor: "Campos de respuesta"
slug: "/validacion-vehiculos/argentina/buenos-aires-technical-inspection"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/argentina/buenos-aires-technical-inspection"
---

# Buenos Aires - Inspección Técnica
**API path(s):** /v2/ar/buenos-aires/technical-inspection

## Campos de respuesta

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `plate` | string | Placa normalizada. |
| `totalRecords` | string | Número de registros de inspección técnica devueltos. |
| `inspections` | object[] | Registros de inspección técnica. |
| `inspections[].verificationId` | string \| null | Identificador de verificación. |
| `inspections[].verificationDate` | string \| null | Fecha de verificación de la inspección. |
| `inspections[].resultTypeId` | string \| null | Identificador del tipo de resultado devuelto por la fuente. |
| `inspections[].stickerNumber` | string \| null | Número de oblea de inspección. |
| `inspections[].expirationDate` | string \| null | Fecha de vencimiento de la inspección. |
| `inspections[].brand` | string \| null | Marca del vehículo. |
| `inspections[].model` | string \| null | Modelo del vehículo. |
| `inspections[].plantName` | string \| null | Nombre de la planta de inspección. |

### Notas

- Este endpoint está limitado a registros de inspección técnica de Buenos Aires.
- Los campos de fecha se normalizan cuando la fuente devuelve un valor día/mes/año reconocible.

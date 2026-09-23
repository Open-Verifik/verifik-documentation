---
id: "es-docs-es-validacion-vehiculos-argentina-vehicle-v3-campos-de-respuesta-2"
title: "🇦🇷 Argentina - Vehículo v3 — Campos de respuesta"
sourcePath: "docs-es/validacion-vehiculos/argentina/vehicle-v3.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "ar"
  - "validacion-vehiculos"
endpoint: "/v3/ar/vehicle"
sourceAnchor: "Campos de respuesta"
slug: "/validacion-vehiculos/argentina/vehicle-v3"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/argentina/vehicle-v3"
---

# 🇦🇷 Argentina - Vehículo v3
**API path(s):** /v3/ar/vehicle

## Campos de respuesta

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `plate` | string | Placa del vehículo normalizada. |
| `engineNumber` | string \| null | Número de motor devuelto por la fuente. |
| `chassis` | string \| null | Identificador de chasis devuelto por la fuente. |
| `year` | string \| null | Año del vehículo. |
| `brand` | string \| null | Marca del vehículo. |
| `modelGroup` | string \| null | Familia o grupo del modelo. |
| `model` | string \| null | Etiqueta de modelo/versión del vehículo. |
| `color` | string \| null | Color registrado. |
| `type` | string \| null | Tipo de unidad del vehículo. |
| `isActivePolicyFound` | boolean | Indica si se encontró una póliza activa para el vehículo. |
| `technicalSheet` | object \| null | Datos de ficha técnica cuando estén disponibles. |

### Notas

- `technicalSheet` puede ser `null` o estar parcialmente poblado cuando no hay datos técnicos coincidentes.
- El servicio normaliza el formato de la placa antes de consultar la fuente.

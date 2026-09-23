---
id: "es-docs-es-validacion-vehiculos-colombia-runt-vehicle-by-plate-only-que-devuelve-la-api"
title: "RUNT - Registros de vehículos solo por placa — Qué devuelve la API"
sourcePath: "docs-es/validacion-vehiculos/colombia/runt-vehicle-by-plate-only.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoints:
  - "/v2/co/runt/vehicle-by-plate"
  - "/v2/co/runt/vehicle-by-plate-only"
sourceAnchor: "Qué devuelve la API"
slug: "/validacion-vehiculos/colombia/runt-vehicle-by-plate-only"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/runt-vehicle-by-plate-only"
---

# RUNT - Registros de vehículos solo por placa
**API path(s):** /v2/co/runt/vehicle-by-plate, /v2/co/runt/vehicle-by-plate-only

## Qué devuelve la API

Consulta información oficial de un vehículo en RUNT usando **solo** la placa. A diferencia de [Registros de vehículos por placa](/verifik-es/validacion-de-vehiculo/colombia/vehiculo-por-placa-y-cedula-unicamente), este endpoint **no** requiere `documentType` ni `documentNumber` del propietario.

Úsalo cuando necesites los bloques de identidad, técnicos y de estado de una placa colombiana sin el documento del titular.

## Qué devuelve la API

- **`informacionGeneral`** — placa, marca, línea, modelo, clase, servicio, estado y campos de matrícula cuando existan
- **`datosTecnicos`** — campos técnicos cuando existan
- Bloques temporales como **`soat[]`** y **`tecnoMecanica[]`** cuando existan
- Otros bloques RUNT (`solicitudes`, `polizasResponsabilidadCivil` y similares) cuando la respuesta los incluya
- **`documentType`** y **`documentNumber`** pueden ser `null`
- Respuesta **firmada** por Verifik

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/co/runt/vehicle-by-plate-only
```

Envía **`plate`** como **parámetro de consulta**. El manejador devuelve la forma completa de vehículo RUNT. Las secciones de identidad, técnicas y de estado se incluyen cuando están disponibles. Los campos de documento del propietario no son obligatorios y pueden volver como `null`.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Obligatorio | Descripción | Ejemplo |
| --- | --- | --- | --- | --- |
| `plate` | string | Sí | Placa colombiana de **5 a 9** caracteres alfanuméricos. | `AA123BA` |

---
id: "es-docs-es-validacion-vehiculos-colombia-runt-vehicle-by-plate-only-notas-3"
title: "RUNT - Registros de vehículos solo por placa — Notas"
sourcePath: "docs-es/validacion-vehiculos/colombia/runt-vehicle-by-plate-only.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/runt/vehicle-by-plate-only"
sourceAnchor: "Notas"
slug: "/validacion-vehiculos/colombia/runt-vehicle-by-plate-only"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/runt-vehicle-by-plate-only"
---

# RUNT - Registros de vehículos solo por placa
**API path(s):** /v2/co/runt/vehicle-by-plate-only

Consulta información oficial de un vehículo en RUNT usando **solo** la placa. A diferencia de [Registros de vehículos por placa](/verifik-es/validacion-de-vehiculo/colombia/vehiculo-por-placa-y-cedula-unicamente), este endpoint **no** requiere `documentType` ni `documentNumber` del propietario.
Úsalo cuando necesites los bloques de identidad, técnicos y de estado de una placa colombiana sin el documento del titular.

## Notas

- El código AppFeature es **`colombia_api_runt_vehicle_by_plate_only`**.
- Esta ruta es la hermana solo-placa de [GET `/v2/co/runt/vehicle-by-plate`](/verifik-es/validacion-de-vehiculo/colombia/vehiculo-por-placa-y-cedula-unicamente). No acepta `documentType` ni `documentNumber` del propietario.
- `documentType` y `documentNumber` en el payload pueden ser `null`.
- Los bloques de identidad, técnicos y de estado se devuelven cuando existen; arreglos u objetos vacíos significan que esa sección no tenía filas.
- En sandbox, **`AA123BA`** y **`ABC10001`–`ABC10010`** devuelven 200 estables. **`ERR40401`** devuelve **404** `NotFound`.
- **409** se usa para errores de validación y cuando el servicio no está disponible temporalmente.

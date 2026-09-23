---
id: "es-docs-es-validacion-de-vehiculo-estados-unidos-informacion-del-vehiculo"
title: "Estados Unidos - Información del Vehículo — Endpoint"
sourcePath: "docs-es/validacion-de-vehiculo/estados-unidos/informacion-del-vehiculo.md"
locale: "es"
category: "validacion-de-vehiculo"
tags:
  - "us"
  - "usa"
  - "validacion-de-vehiculo"
endpoints:
  - "/v2/us/vehicle"
  - "/v2/usa/vehicle"
  - "/v2/usa/vehicle-by-vin"
sourceAnchor: "Endpoint"
slug: "/validacion-de-vehiculo/estados-unidos/informacion-del-vehiculo"
url: "https://docs.verifik.co/verifik-es/validacion-de-vehiculo/estados-unidos/informacion-del-vehiculo"
---

# Estados Unidos - Información del Vehículo
**API path(s):** /v2/us/vehicle, /v2/usa/vehicle, /v2/usa/vehicle-by-vin

## Endpoint

:::info Temporalmente no disponible
La consulta de vehículos de EE. UU. por **placa y estado** está temporalmente deshabilitada.

El endpoint correcto (históricamente) es `GET /v2/usa/vehicle` (no `v2/us/vehicle`).

Usa **Vehículo por VIN** en su lugar:

- **[Estados Unidos - Vehículo por VIN](/verifik-es/validacion-vehiculos/estados-unidos-vin)** — `GET /v2/usa/vehicle-by-vin`
:::

### Endpoint

```
GET https://api.verifik.co/v2/usa/vehicle
```

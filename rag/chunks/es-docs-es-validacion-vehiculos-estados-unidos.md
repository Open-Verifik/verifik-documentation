---
id: "es-docs-es-validacion-vehiculos-estados-unidos"
title: "🇺🇸 Estados Unidos - Información de Vehículos — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/estados-unidos.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "usa"
  - "validacion-vehiculos"
endpoint: "/v2/usa/vehicle"
sourceAnchor: "Endpoint"
slug: "/validacion-vehiculos/estados-unidos"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/estados-unidos"
---

# 🇺🇸 Estados Unidos - Información de Vehículos
**API path(s):** /v2/usa/vehicle

## Endpoint

:::info Temporalmente no disponible
La consulta de vehículos de EE. UU. por **placa y estado** (`GET /v2/usa/vehicle`) está temporalmente deshabilitada y no está disponible para nuevas integraciones.

Usa **Vehículo por VIN** en su lugar:

- **[Estados Unidos - Vehículo por VIN](/verifik-es/validacion-vehiculos/estados-unidos-vin)** — `GET /v2/usa/vehicle-by-vin`
:::

### Endpoint

```
GET https://api.verifik.co/v2/usa/vehicle
```

Esta ruta aceptaba los parámetros de consulta `plate` y `state`. Prefiere el endpoint por VIN mientras la consulta por placa permanezca fuera de servicio.

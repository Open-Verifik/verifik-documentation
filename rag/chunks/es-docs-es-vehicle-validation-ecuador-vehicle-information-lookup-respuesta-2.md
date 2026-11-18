---
id: "es-docs-es-vehicle-validation-ecuador-vehicle-information-lookup-respuesta-2"
title: "🇪🇨 Ecuador - Consulta de Información de Vehículo — Respuesta"
sourcePath: "docs-es/vehicle-validation/ecuador/vehicle-information-lookup.mdx"
locale: "es"
category: "vehicle-validation"
tags:
  - "ec"
  - "vehicle-validation"
endpoint: "/v2/ec/vehiculo/placa/multas"
sourceAnchor: "Respuesta"
slug: "/vehicle-validation/ecuador/vehicle-information-lookup"
url: "https://docs.verifik.co/verifik-es/vehicle-validation/ecuador/vehicle-information-lookup"
---

# 🇪🇨 Ecuador - Consulta de Información de Vehículo
**API path(s):** /v2/ec/vehiculo/placa/multas

El servicio de Multas de Placa de Vehículos de Ecuador te permite recuperar información sobre multas asociadas con la placa de matrícula de un vehículo en Ecuador. Puedes acceder a detalles como la información de registro del vehículo, incluyendo el número de placa, clase y modelo. El servicio también proporciona el estado actual, tipo de servicio y fecha de vencimiento del registro, junto con cualquier multa pendiente vinculada a la placa de matrícula.
Este servicio es útil para individuos y empresas que buscan mantenerse informados sobre las multas asociadas con sus vehículos y asegurar el cumplimiento de las leyes de tránsito ecuatorianas.

## Respuesta

```json
{
  "data": {
    "plate": "ABC1234",
    "class": "AUTOMOVIL",
    "model": "SENTRA 1.6 M/T",
    "year": "2010",
    "status": "ASIGNADO",
    "service": "PARTICULAR"
  },
  "signature": {
    "dateTime": "March 12, 2024 7:50 PM",
    "message": "Certified by Verifik.co"
  }
}
```

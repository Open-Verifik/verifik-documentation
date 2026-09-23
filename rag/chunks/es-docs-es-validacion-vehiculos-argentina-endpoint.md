---
id: "es-docs-es-validacion-vehiculos-argentina-endpoint"
title: "Argentina - Información Vehicular — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/argentina.md"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "ar"
  - "validacion-vehiculos"
endpoint: "/v2/ar/vehicle"
sourceAnchor: "Endpoint"
slug: "/validacion-de-vehiculo/argentina"
url: "https://docs.verifik.co/verifik-es/validacion-de-vehiculo/argentina"
---

# Argentina - Información Vehicular
**API path(s):** /v2/ar/vehicle

## Endpoint

### Endpoint

```
GET https://api.verifik.co/v2/ar/vehicle
```

El servicio de información de vehículos argentinos proporciona información detallada sobre vehículos registrados en Argentina usando su número de placa de matrícula. Este servicio devuelve datos completos del vehículo incluyendo marca, modelo, año, especificaciones del motor y detalles de registro.

### Servicios relacionados de vehículos en Argentina

- [Argentina Vehículo v3](/verifik-es/validacion-vehiculos/argentina/vehicle-v3) devuelve identificadores del vehículo, estado de póliza activa y datos de ficha técnica cuando estén disponibles.
- [Buenos Aires - Infracciones de Tránsito](/verifik-es/validacion-vehiculos/argentina/buenos-aires-traffic-infractions) consulta registros de infracciones de tránsito por placa.
- [Buenos Aires - Inspección Técnica](/verifik-es/validacion-vehiculos/argentina/buenos-aires-technical-inspection) consulta el historial de inspección técnica VTV por placa.
- [Argentina RTO](/verifik-es/validacion-vehiculos/argentina/rto) consulta registros de inspección RTO por placa.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Name  | Type   | Required? | Description                                             | Example  |
| ----- | ------ | --------- | ------------------------------------------------------- | -------- |
| plate | String | True      | Formato Mercosur `AA-123-BB` (envíe `AA123BB`, sin espacios ni puntos). | `AA123BB` |

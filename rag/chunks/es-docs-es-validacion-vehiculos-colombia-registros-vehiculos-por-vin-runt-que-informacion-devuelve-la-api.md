---
id: "es-docs-es-validacion-vehiculos-colombia-registros-vehiculos-por-vin-runt-que-informacion-devuelve-la-api"
title: "Registros de Vehículos por VIN en RUNT — ¿Qué información devuelve la API?"
sourcePath: "docs-es/validacion-vehiculos/colombia/registros-vehiculos-por-vin-runt.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/runt/vehicle-by-vin"
sourceAnchor: "¿Qué información devuelve la API?"
slug: "/validacion-vehiculos/colombia/registros-vehiculos-por-vin-runt"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/registros-vehiculos-por-vin-runt"
---

# Registros de Vehículos por VIN en RUNT
**API path(s):** /v2/co/runt/vehicle-by-vin

## ¿Qué información devuelve la API?

La API de Validación Vehicular por VIN de Verifik permite consultar el historial completo y las especificaciones técnicas de un vehículo registrado en Colombia utilizando su Número de Identificación Vehicular (VIN).

Este método es particularmente útil cuando no se dispone de la placa o para verificar la autenticidad de la identidad de un vehículo durante inspecciones, ya que el VIN es un identificador único y difícil de alterar.

## ¿Qué información devuelve la API?

Al realizar una consulta por VIN, la API retorna datos exhaustivos del RUNT, incluyendo:

-   Especificaciones técnicas detalladas (motor, chasis, peso, ejes)
-   Marca, modelo, línea y color del vehículo
-   Estado legal actual (Activo, Cancelado)
-   Historial de seguros (SOAT) y Revisión Técnico-Mecánica (RTM)
-   Aseguradora y tipo de Pólizas (Responsabilidad Civil Contractual o Extracontractual, no todo riesgo).
-   Limitaciones a la propiedad y alertas activas
-   Historial de accidentes y reclamaciones (si está disponible)

Estos datos son cruciales para detectar vehículos gemeleados y validar el cumplimiento técnico.

## Referencia de API

### Service URL

```
GET https://api.verifik.co/v2/co/runt/vehicle-by-vin
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Name  | Type   | Required | Description                                       |
| ----- | ------ | -------- | ------------------------------------------------- |
| `vin` | string | Yes      | VIN del vehículo del que quieres verificar datos. |

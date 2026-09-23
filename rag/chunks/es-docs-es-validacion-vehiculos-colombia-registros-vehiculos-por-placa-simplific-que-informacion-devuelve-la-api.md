---
id: "es-docs-es-validacion-vehiculos-colombia-registros-vehiculos-por-placa-simplific-que-informacion-devuelve-la-api"
title: "Validación Vehicular Simplificada por Placa en RUNT — ¿Qué información devuelve la API?"
sourcePath: "docs-es/validacion-vehiculos/colombia/registros-vehiculos-por-placa-simplificado-runt.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/runt/vehicle-by-plate-simplified"
sourceAnchor: "¿Qué información devuelve la API?"
slug: "/validacion-vehiculos/colombia/registros-vehiculos-por-placa-simplificado-runt"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/registros-vehiculos-por-placa-simplificado-runt"
---

# Validación Vehicular Simplificada por Placa en RUNT
**API path(s):** /v2/co/runt/vehicle-by-plate-simplified

## ¿Qué información devuelve la API?

La API de Validación Vehicular Simplificada de Verifik permite consultar información esencial del vehículo en el Registro Único Nacional de Tránsito (RUNT) utilizando la placa y el número de documento del propietario.

Esta versión ligera de la consulta vehicular está diseñada para aplicaciones que requieren una verificación rápida de la identidad del vehículo y sus características básicas, sin la carga de datos extensos como el historial de seguros y revisiones técnico-mecánicas.

## ¿Qué información devuelve la API?

Al realizar una consulta, la API retorna detalles clave del vehículo, incluyendo:

-   Número de placa del vehículo
-   Marca, modelo y línea
-   Color y tipo de servicio (ej. Público, Particular)
-   Clase (ej. Automóvil, Camión)
-   Números de motor, chasis y VIN
-   Estado del registro (Activo)

Estos datos son suficientes para la verificación básica de identidad y gestión de inventarios.

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/co/runt/vehicle-by-plate-simplified
```

Versión simplificada de la consulta vehicular en **RUNT** (Registro Único Nacional de Tránsito), con los indicadores legales y físicos esenciales. Envía **`documentType`**, **`documentNumber`** y **`plate`** como parámetros de **consulta**.

### Headers

| Nombre       | Valor              |
| ------------ | ------------------ |
| Accept       | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre           | Tipo   | Requerido | Descripción |
| ---------------- | ------ | --------- | ----------- |
| `documentType`   | string | Sí        | Tipo de documento del propietario. Valores permitidos: `CC`, `CE`, `PA`, `NIT`. |
| `documentNumber` | string | Sí        | Número de documento del propietario, sin espacios ni puntos. |
| `plate`          | string | Sí        | Placa a consultar (normalmente 5–9 caracteres según reglas de validación de la API). |

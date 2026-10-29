---
id: "es-docs-es-validacion-de-vehiculo-colombia-consulta-completa-de-vehiculo-con-his-que-informacion-devuelve-la-api"
title: "Consulta Completa de Vehículo con Historial por Placa y Documento de Identificación RUNT — ¿Qué información devuelve la API?"
sourcePath: "docs-es/validacion-de-vehiculo/colombia/consulta-completa-de-vehiculo-con-historial-por-placa-y-documento-de-identificacion-runt.mdx"
locale: "es"
category: "validacion-de-vehiculo"
tags:
  - "co"
  - "validacion-de-vehiculo"
endpoint: "/v2/co/runt/vehicle-by-plate"
sourceAnchor: "¿Qué información devuelve la API?"
slug: "/validacion-de-vehiculo/colombia/consulta-completa-de-vehiculo-con-historial-por-placa-y-documento-de-identificacion-runt"
url: "https://docs.verifik.co/verifik-es/validacion-de-vehiculo/colombia/consulta-completa-de-vehiculo-con-historial-por-placa-y-documento-de-identificacion-runt"
---

# Consulta Completa de Vehículo con Historial por Placa y Documento de Identificación RUNT
**API path(s):** /v2/co/runt/vehicle-by-plate

## ¿Qué información devuelve la API?

La API de validación vehicular de Verifik permite consultar información oficial registrada en el Registro Único Nacional de Tránsito (RUNT) de Colombia, utilizando el número de placa del vehículo como identificador principal.

Esta integración es ideal para empresas del sector automotriz, financiero, asegurador y de movilidad, que necesitan confirmar la autenticidad de los datos vehiculares antes de aprobar operaciones, emitir pólizas o realizar procesos de control y cumplimiento normativo.

## ¿Qué información devuelve la API?

Al realizar una consulta por placa, la API retorna datos actualizados directamente del RUNT, incluyendo:

-   Número de placa del vehículo
-   Marca, línea y modelo
-   Clase y tipo de servicio
-   Estado actual (activo, cancelado, en trámite)
-   Fecha de matrícula
-   Entidad registral
-   Información de propiedad y registro

Estos datos permiten validar la existencia, legalidad y estado operativo del vehículo consultado.

## Referencia de API

### Service URL

```
https://api.verifik.co/v2/co/runt/vehicle-by-plate
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Name             | Type   | Required | Description                                                               |
| ---------------- | ------ | -------- | ------------------------------------------------------------------------- |
| `documentType`   | string | Yes      | Tipo de documento. Valores permitidos: `CC`, `CE`, `PA`, `NIT`.         |
| `documentNumber` | string | Yes      | Número de documento del propietario del vehículo, sin espacios ni puntos. |
| `plate`          | string | Yes      | Placa del vehículo a consultar.                                           |

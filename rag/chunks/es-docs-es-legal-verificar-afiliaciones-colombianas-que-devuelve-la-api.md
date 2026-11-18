---
id: "es-docs-es-legal-verificar-afiliaciones-colombianas-que-devuelve-la-api"
title: "Colombia — Afiliaciones de salud y seguridad social — Qué devuelve la API"
sourcePath: "docs-es/legal/verificar-afiliaciones-colombianas.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/afiliaciones"
sourceAnchor: "Qué devuelve la API"
slug: "/legal/verificar-afiliaciones-colombianas"
url: "https://docs.verifik.co/verifik-es/legal/verificar-afiliaciones-colombianas"
---

# Colombia — Afiliaciones de salud y seguridad social
**API path(s):** /v2/co/afiliaciones

## Qué devuelve la API

Verifik devuelve **datos de afiliación e información personal** de una persona en Colombia a partir de fuentes oficiales de **salud y seguridad social** (incluido el flujo **RUAF / SISPRO**), usando **tipo de documento**, **número** y **fecha de expedición**. Suele incluir bloques de **EPS**, **ARL**, **pensión (AP)**, **caja de compensación** y **cesantías**, además de **datos personales** cuando la fuente los provee.

Este endpoint es solo **GET** (parámetros en query). Úsalo para **empleo**, **prestaciones** y **cumplimiento** cuando la ley y tu política lo permitan.

## Qué devuelve la API

- Resumen **personal** (nombres, línea de documento, sexo, fecha de corte) cuando exista
- **EPS**: régimen, fechas, estado, municipio, etc.
- **ARL**: riesgos con administradora, actividad, municipio
- **Pensiones (AP)**: regímenes y administradoras
- Bloques de **caja de compensación** y **cesantías** (pueden ser listas vacías)
- Respuesta **firmada** por Verifik

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/co/afiliaciones
```

Solo **GET** por query; envía **`documentType`**, **`documentNumber`** y **`date`** (`DD/MM/AAAA`).

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| name | type | required | description |
| --- | --- | --- | --- |
| `documentType` | string | sí | Uno de **`CC`**, **`CE`**, **`PA`**, **`PE`**. |
| `documentNumber` | string | sí | Número sin espacios ni signos (longitud mínima validada por la API). |
| `date` | string | sí | **Fecha de expedición** del documento en **`DD/MM/AAAA`**. |

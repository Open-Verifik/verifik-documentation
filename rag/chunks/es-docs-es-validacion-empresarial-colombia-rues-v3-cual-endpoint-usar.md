---
id: "es-docs-es-validacion-empresarial-colombia-rues-v3-cual-endpoint-usar"
title: "Colombia — Consulta RUES (v3) — ¿Cuál endpoint usar?"
sourcePath: "docs-es/validacion-empresarial/colombia-rues-v3.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "validacion-empresarial"
sourceAnchor: "¿Cuál endpoint usar?"
slug: "/business-validation/colombia-rues-v3"
url: "https://docs.verifik.co/verifik-es/business-validation/colombia-rues-v3"
---

# Colombia — Consulta RUES (v3)

## ¿Cuál endpoint usar?

Verifik consulta **RUES** (*Registro Único Empresarial y Social*) con **`NIT`**, **categoría** de registro y devuelve un **resumen** normalizado para esa línea. Es el endpoint **básico** **`/v3/co/rues`**; para el **expediente completo** usa **`/v3/co/rues-complete`**.

## ¿Cuál endpoint usar?

| | **`GET /v3/co/rues`** (este API) | **`GET /v3/co/rues-complete`** |
| --- | --- | --- |
| **Uso** | **Resumen** rápido por categoría de registro | **Expediente completo** |
| **Datos típicos** | Campos principales de la categoría | Representantes, actividades económicas, establecimientos, etc. |
| **Parámetros** | `documentType` (**`NIT`**), `documentNumber`, `category` opcional | **Los mismos** |
| **Precio en catálogo** | Menor (ej. **0,2** créditos / **0,3** SmartCheck) | Mayor (ej. **0,3** créditos / **0,4** SmartCheck) |

Ver [Colombia — RUES expediente completo (v3)](/verifik-es/business-validation/rues-complete-v3).

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v3/co/rues
```

**GET** por query: **`documentType`**=`NIT`, **`documentNumber`**, **`category`** opcional (por defecto **`RM`**). Para expediente **completo**, usar **`GET /v3/co/rues-complete`**.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| name | type | required | description |
| --- | --- | --- | --- |
| `documentType` | string | sí | Debe ser **`NIT`**. |
| `documentNumber` | string | sí | Número de identificación tributaria (el servidor elimina signos). |
| `category` | string | no | **`RM`**, **`PROP`**, **`RUNEOL`**, **`RNT`**, **`ESAL`**, **`ESOL`**, **`JUEGOS`**, **`EXTRANJERAS`**. Por defecto **`RM`**. |

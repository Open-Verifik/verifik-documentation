---
id: "es-docs-es-identity-colombia-ppt-que-devuelve-la-api"
title: "Colombia — PPT (Permiso de Protección Temporal) — Qué devuelve la API"
sourcePath: "docs-es/identity/colombia-ppt.mdx"
locale: "es"
category: "identity"
tags:
  - "co"
  - "identity"
endpoints:
  - "/v2/co/cedula"
  - "/v2/co/foreigner-id/ppt"
sourceAnchor: "Qué devuelve la API"
slug: "/identidad/colombia-ppt"
url: "https://docs.verifik.co/verifik-es/identidad/colombia-ppt"
---

# Colombia — PPT (Permiso de Protección Temporal)
**API path(s):** /v2/co/cedula, /v2/co/foreigner-id/ppt

## Qué devuelve la API

Validación del **PPT** ante **Migración Colombia** para KYC, programas sociales y cumplimiento.

## Qué devuelve la API

- **Estado** (p. ej. **VIGENTE**) y fechas clave
- **Nombre estructurado** y metadatos del permiso
- Respuesta **firmada**; caché opcional

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/co/foreigner-id/ppt
```

También existe **`POST`** con el mismo cuerpo JSON. **`GET`** usa **query**.

### Encabezados

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Requisitos del documento

**¿Para quién es?** **Nacionales venezolanos** en Colombia con *Permiso de Protección Temporal* (**PPT**) cuando necesitas el **estado migratorio** ante **Migración Colombia** (p. ej. VIGENTE, fechas de vencimiento).

| Campo | Orientación |
| --- | --- |
| **`documentNumber`** | Número del PPT, **solo dígitos**. Suele tener **hasta 7 dígitos**; algunos sistemas lo muestran rellenado a **15 caracteres**. Ejemplo: `2081381`. |
| **`expeditionDate`** | Fecha de expedición en **`DD/MM/AAAA`** (ej. `07/03/2022`). Obligatoria. |

También disponible: consulta de nombres vía [`/v2/co/cedula`](/verifik-es/validacion-identidad/colombia/ciudadano-colombiano) con `documentType=PPT`.

Guía completa: [Guía de documentos](/verifik-es/validacion-identidad/colombia/guia-documentos-identidad-colombia).

### Parámetros

| name | type | required | description |
| --- | --- | --- | --- |
| `documentNumber` | string | sí | Número del PPT, **solo dígitos**. Normalmente **hasta 7 dígitos** (algunos sistemas rellenan a 15). Ejemplo: `2081381`. |
| `expeditionDate` | string | sí | Fecha de expedición en **`DD/MM/AAAA`** (ej. `07/03/2022`). Debe coincidir con el documento. |

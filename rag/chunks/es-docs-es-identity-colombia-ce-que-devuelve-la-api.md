---
id: "es-docs-es-identity-colombia-ce-que-devuelve-la-api"
title: "Colombia — CE (Cédula de Extranjería) — Qué devuelve la API"
sourcePath: "docs-es/identity/colombia-ce.mdx"
locale: "es"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/foreigner-id/ce"
sourceAnchor: "Qué devuelve la API"
slug: "/identidad/colombia-ce"
url: "https://docs.verifik.co/verifik-es/identidad/colombia-ce"
---

# Colombia — CE (Cédula de Extranjería)
**API path(s):** /v2/co/foreigner-id/ce

## Qué devuelve la API

Verifik valida registros de **CE** publicados por **Migración Colombia** para KYC, elegibilidad y cumplimiento.

## Qué devuelve la API

- **Estado** (p. ej. **VIGENTE**) y fechas clave, incluidas **expedición** y **vencimiento** cuando la fuente las entrega
- **Nombre** estructurado y metadatos del documento **CE**
- Respuesta **firmada**; caché opcional

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/co/foreigner-id/ce
```

La misma integración está disponible como **`POST`** con cuerpo JSON con los mismos campos. En **`GET`** usa **parámetros de query** como abajo.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Requisitos del documento

**¿Para quién es?** **Extranjeros** con residencia legal en Colombia que tienen *Cédula de Extranjería* (**CE**). No es para ciudadanos colombianos (**CC** — [Ciudadano colombiano](/verifik-es/validacion-identidad/colombia/ciudadano-colombiano)) ni para **PPT** o **PEP** migratorio.

| Campo | Orientación |
| --- | --- |
| **`documentNumber`** | Número de CE, **solo dígitos**. En Colombia suele tener **6 o 7 dígitos** (longitud variable). Ejemplos: `712046`, `1156043`. |
| **`expeditionDate`** | Fecha de expedición en **`DD/MM/AAAA`** (ej. `15/06/2020`). Obligatoria — formato incorrecto suele devolver **409**. |

Guía completa: [Guía de documentos](/verifik-es/validacion-identidad/colombia/guia-documentos-identidad-colombia).

### Parámetros

| nombre | tipo | requerido | descripción |
| --- | --- | --- | --- |
| `documentNumber` | string | sí | Número de CE, **solo dígitos**. Normalmente **6–7 dígitos** en Colombia. Ejemplos: `712046`, `1156043`. |
| `expeditionDate` | string | sí | Fecha de expedición en **`DD/MM/AAAA`** (ej. `15/06/2020`). Debe coincidir con el documento. |

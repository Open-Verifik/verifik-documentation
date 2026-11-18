---
id: "es-docs-es-identity-colombia-registraduria-matrimonio-que-devuelve-esta-api"
title: "Colombia — Registro civil de matrimonio (SCCRC) — Qué devuelve esta API"
sourcePath: "docs-es/identity/colombia-registraduria-matrimonio.mdx"
locale: "es"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/registraduria/matrimonio"
sourceAnchor: "Qué devuelve esta API"
slug: "/identity/colombia-registraduria-matrimonio"
url: "https://docs.verifik.co/verifik-es/identity/colombia-registraduria-matrimonio"
---

# Colombia — Registro civil de matrimonio (SCCRC)
**API path(s):** /v2/co/registraduria/matrimonio

## Qué devuelve esta API

Consulta el **registro civil de matrimonio** (*registro civil de matrimonio*) de la **Registraduría Nacional del Estado Civil** (**SCCRC**).

Proporciona **un** modo de búsqueda:

1. **`documentNumber` + `sexo`** — búsqueda por documento (un solo registro)
2. **`primerNombre` + `primerApellido` + `sexo` + `fecha`** — búsqueda por nombre (puede devolver **`matches`**)
3. **`serial`** — búsqueda por serial (un solo registro)

## Qué devuelve esta API

- Un solo registro **o** un arreglo **`matches`** (modo nombre)
- **`documentNumber`**, **`documentType`**, nombres, **`sexo`**, **`serial`**
- **`oficina`** / **`expeditionPlace`**, **`fecha`** cuando están disponibles
- **`recordType`** — `REGISTRO CIVIL DE MATRIMONIO`
- Un wrapper de respuesta Verifik **firmado**

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/co/registraduria/matrimonio
```

Usa este endpoint para consultas del **registro de matrimonio**. La misma integración está disponible como **`POST`** con cuerpo JSON. **`GET`** usa **parámetros de consulta** como se muestra abajo.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| name | type | required | description | Examples |
| --- | --- | --- | --- | --- |
| `documentNumber` | string | conditional | NUIP/CC; requiere **`sexo`** | `10000001` |
| `sexo` | string | conditional | Requerido para búsqueda por documento o nombre (`MASCULINO` / `FEMENINO`) | `MASCULINO` |
| `serial` | string | conditional | Serial del registro de matrimonio | `0042012345` |
| `primerNombre` | string | conditional | Primer nombre (modo nombre) | `JUAN` |
| `primerApellido` | string | conditional | Primer apellido (modo nombre) | `PEREZ` |
| `fecha` | string | conditional | Fecha de matrimonio **`DD/MM/YYYY`** (modo nombre) | `20/06/2015` |
| `segundoNombre` | string | no | Segundo nombre | `CARLOS` |
| `segundoApellido` | string | no | Segundo apellido | `GOMEZ` |

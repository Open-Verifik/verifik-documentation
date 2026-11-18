---
id: "en-docs-identity-colombia-registraduria-matrimonio-what-this-api-returns"
title: "Colombia — Marriage civil registry (SCCRC) — What this API returns"
sourcePath: "docs/identity/colombia-registraduria-matrimonio.mdx"
locale: "en"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/registraduria/matrimonio"
sourceAnchor: "What this API returns"
slug: "/identity/colombia-registraduria-matrimonio"
url: "https://docs.verifik.co/identity/colombia-registraduria-matrimonio"
---

# Colombia — Marriage civil registry (SCCRC)
**API path(s):** /v2/co/registraduria/matrimonio

## What this API returns

Query the **marriage civil registry** (*registro civil de matrimonio*) from **Registraduría Nacional del Estado Civil** (**SCCRC**).

Provide **one** search mode:

1. **`documentNumber` + `sexo`** — document search (single record)
2. **`primerNombre` + `primerApellido` + `sexo` + `fecha`** — name search (may return **`matches`**)
3. **`serial`** — serial search (single record)

## What this API returns

- Single record **or** a **`matches`** array (name mode)
- **`documentNumber`**, **`documentType`**, names, **`sexo`**, **`serial`**
- **`oficina`** / **`expeditionPlace`**, **`fecha`** when available
- **`recordType`** — `REGISTRO CIVIL DE MATRIMONIO`
- A **signed** Verifik response wrapper

## API reference

### Endpoint

```
GET https://api.verifik.co/v2/co/registraduria/matrimonio
```

Use this endpoint for **marriage registry** lookups. The same integration is available as **`POST`** with a JSON body. **`GET`** uses **query parameters** as shown below.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| name | type | required | description | Examples |
| --- | --- | --- | --- | --- |
| `documentNumber` | string | conditional | NUIP/CC; requires **`sexo`** | `10000001` |
| `sexo` | string | conditional | Required for document or name search (`MASCULINO` / `FEMENINO`) | `MASCULINO` |
| `serial` | string | conditional | Marriage registry serial | `0042012345` |
| `primerNombre` | string | conditional | First given name (name mode) | `JUAN` |
| `primerApellido` | string | conditional | First surname (name mode) | `PEREZ` |
| `fecha` | string | conditional | Marriage date **`DD/MM/YYYY`** (name mode) | `20/06/2015` |
| `segundoNombre` | string | no | Second given name | `CARLOS` |
| `segundoApellido` | string | no | Second surname | `GOMEZ` |

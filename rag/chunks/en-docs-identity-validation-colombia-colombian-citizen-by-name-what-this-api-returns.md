---
id: "en-docs-identity-validation-colombia-colombian-citizen-by-name-what-this-api-returns"
title: "Colombia — Citizen lookup by name (SCCRC) — What this API returns"
sourcePath: "docs/identity-validation/colombia/colombian-citizen-by-name.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoint: "/v2/co/cedula/by-name"
sourceAnchor: "What this API returns"
slug: "/identity-validation/colombia/colombian-citizen-by-name"
url: "https://docs.verifik.co/identity-validation/colombia/colombian-citizen-by-name"
---

# Colombia — Citizen lookup by name (SCCRC)
**API path(s):** /v2/co/cedula/by-name

## What this API returns

Search the **Registraduría Nacional del Estado Civil** birth civil registry (**SCCRC**) using **names**, **sex**, and **date of birth**. Unlike [Colombian citizen by document](/identity-validation/colombia/colombian-citizen), this endpoint is a **reverse lookup** and may return **multiple matches**.

Use this when you know personal identity attributes but not the NUIP/CC, or when you need to confirm possible registry hits before a document-based check.

## What this API returns

- **`matches`** — array of civil-registry hits (zero or more)
- **`documentNumber`**, **`documentType`** — NUIP/CC when present on the record
- **`firstName`**, **`lastName`**, **`fullName`**, **`arrayName`** — name parts
- **`sexo`**, **`serial`** — sex and civil-registry serial
- **`oficina`** / **`expeditionPlace`**, **`fecha`** / **`dateOfBirth`** — when Detalle enrichment is available
- **`recordType`** — `REGISTRO CIVIL DE NACIMIENTO`
- A **signed** Verifik response wrapper

## API reference

### Endpoint

```
GET https://api.verifik.co/v2/co/cedula/by-name
```

Use this endpoint when you need to **find birth registry candidates by name**. The same integration is available as **`POST`** with a JSON body. **`GET`** uses **query parameters** as shown below.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| name | type | required | description | Examples |
| --- | --- | --- | --- | --- |
| `primerNombre` | string | yes | First given name | `MARIA` |
| `primerApellido` | string | yes | First surname | `LOPEZ` |
| `sexo` | string | yes | Sex as registered. Allowed: `MASCULINO`, `FEMENINO` (also `M` / `F`) | `FEMENINO` |
| `fecha` | string | yes | Date of birth in **`DD/MM/YYYY`** | `15/03/1990` |
| `segundoNombre` | string | no | Second given name | `ELENA` |
| `segundoApellido` | string | no | Second surname | `GARCIA` |

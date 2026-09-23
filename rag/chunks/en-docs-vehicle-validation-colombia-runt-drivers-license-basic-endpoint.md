---
id: "en-docs-vehicle-validation-colombia-runt-drivers-license-basic-endpoint"
title: "RUNT - Driver's License (Basic) — Endpoint"
sourcePath: "docs/vehicle-validation/colombia/runt-drivers-license-basic.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoints:
  - "/v2/co/runt/conductor"
  - "/v3/co/runt/conductor"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/colombia/runt-drivers-license-basic"
url: "https://docs.verifik.co/vehicle-validation/colombia/runt-drivers-license-basic"
---

# RUNT - Driver's License (Basic)
**API path(s):** /v2/co/runt/conductor, /v3/co/runt/conductor

## Endpoint

Same RUNT driver lookup as [Premium v2](/vehicle-validation/colombia/runt-drivers-license), billed at the **current conductor price**. You must send `primerApellido`. Omitting it returns `409 MissingParameter`.

Use this path when you already know the first last name. If you stay on v2 and send `primerApellido`, you also pay this Basic rate without changing the URL.

### Endpoint

```
GET https://api.verifik.co/v3/co/runt/conductor
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name             | Type   | Required | Description                                                    |
| ---------------- | ------ | -------- | -------------------------------------------------------------- |
| `documentType`   | string | Yes      | One of **`CC`**, **`CE`**, **`PA`**, **`PPT`**. **`PA` is passport, `PPT` is not**. |
| `documentNumber` | string | Yes      | Driver's document number, without spaces or periods.           |
| `primerApellido` | string | **Yes**  | First last name (min 2 characters). Required for every document type. |

### Document types

| Code | Full name | Who holds it | RUNT label | `primerApellido` |
| --- | --- | --- | --- | --- |
| **`CC`** | *Cédula de Ciudadanía* | Colombian citizens (national ID) | `C.` | **Required** |
| **`CE`** | *Cédula de Extranjería* | Foreign residents in Colombia | `E.` | **Required** |
| **`PA`** | *Pasaporte* (passport) | Passport holders | `P.` | **Required** |
| **`PPT`** | *Permiso por Protección Temporal* | Venezuelan temporary-protection permit — **not a passport** | `Y.` | **Required** |

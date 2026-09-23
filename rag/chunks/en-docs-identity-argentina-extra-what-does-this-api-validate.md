---
id: "en-docs-identity-argentina-extra-what-does-this-api-validate"
title: "Argentina - Complete Argentine Citizen — What does this API validate?"
sourcePath: "docs/identity/argentina-extra.mdx"
locale: "en"
category: "identity"
tags:
  - "ar"
  - "identity"
endpoint: "/v2/ar/cedula/extra"
sourceAnchor: "What does this API validate?"
slug: "/identity/argentina-extra"
url: "https://docs.verifik.co/identity/argentina-extra"
---

# Argentina - Complete Argentine Citizen
**API path(s):** /v2/ar/cedula/extra

## What does this API validate?

Verifik's Identity Verification API helps you authenticate Argentine citizens using official government data. This endpoint returns extended identity fields beyond the standard cédula response, including **date of birth**, **gender**, structured name tokens, and **life status** (`isAlive`).

## What does this API validate?

Our API connects directly with official records to validate:

-   **Full Name & DNI Number**: Supports *Documento Nacional de Identidad* (DNI), document type `DNIAR`.
-   **Identity Match**: Confirms that the document number corresponds to a registered person.
-   **Extra Data**: Returns **date of birth**, **gender**, **first name**, **last name**, **full name**, **arrayName** (name parts), and **isAlive**.

By verifying these details, you can be confident that the person you're dealing with is real and holds a valid document, significantly lowering the risk of impersonation and fraud.

## API Reference

### Endpoint

```
https://api.verifik.co/v2/ar/cedula/extra
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name             | Type   | Required | Description                                                                 |
| ---------------- | ------ | -------- | --------------------------------------------------------------------------- |
| `documentType`   | string | Yes      | Document type. Allowed value: `DNIAR`.                                      |
| `documentNumber` | string | Yes      | DNI number to query, without spaces.                                        |

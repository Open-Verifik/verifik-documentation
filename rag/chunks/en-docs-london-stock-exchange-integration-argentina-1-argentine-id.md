---
id: "en-docs-london-stock-exchange-integration-argentina-1-argentine-id"
title: "Argentina — Verifik public API — 1. Argentine ID"
sourcePath: "docs/london-stock-exchange-integration/argentina.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "ar"
  - "london-stock-exchange-integration"
endpoint: "/v2/ar/cedula"
sourceAnchor: "1. Argentine ID"
slug: "/london-stock-exchange-integration/argentina"
url: "https://docs.verifik.co/london-stock-exchange-integration/argentina"
---

# Argentina — Verifik public API
**API path(s):** /v2/ar/cedula

## 1. Argentine ID

**English** (this page) · [Versión en español](/verifik-es/london-stock-exchange-integration/argentina/)

# Argentina

## 1. Argentine ID

**Location in the collection:** v2 › ar › cedula › Cedula Argentina

**What it does (summary):**

The Argentine National Identity Document (DNI) verification API allows developers to verify the authenticity of an Argentine identity document (Documento Nacional de Identidad, or DNI) by providing the DNI number. The API returns information such as the person's full name, the first and last name separately, and the DNI number.

This information can be used for various purposes, such as verifying the identity of a customer or validating information provided by a user.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/ar/cedula?documentType=DNIAR&documentNumber=33016244
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | DNIAR | (Required) Document type. Allowed value: DNIAR. |
| documentNumber | 33016244 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/ar/cedula?documentType=DNIAR&documentNumber=33016244" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "MESSI",

            "LIONEL",

            "ANDRES"

        ],

        "documentNumber": "33016244",

        "documentType": "DNIAR",

        "firstName": "LIONEL ANDRES",

        "fullName": "LIONEL ANDRES MESSI",

        "lastName": "MESSI"

    },

    "signature": {

        "dateTime": "April 8, 2026 9:40 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "JH82J"

}
```

- **HTTP 404 (Not Found)**

```json
{

    "code": "NotFound",

    "message": "Record not found."

}
```

- **HTTP 409 (Conflict)**

```json
{

    "code": "MissingParameter",

    "message": "documentNumber maximum length: 13\n"

}
```

---

---
id: "en-docs-london-stock-exchange-integration-colombia-83-rethus-medicos-colombiano-57"
title: "Colombia — Verifik public API — 83. RETHUS Medicos Colombiano"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "83. RETHUS Medicos Colombiano"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 83. RETHUS Medicos Colombiano

**Location in the collection:** v2 › co › rethus › RETHUS Medicos Colombiano

**What it does (summary):**

This API allows you to verify the authenticity of a Colombian identity card (ID) and obtain information from the database of the Single National Registry of Human Talent in Health (RETHUS). With the type and document number provided, the full name, RETHUS status, and academic and SSO data if available are obtained. The RETHUS data includes information on the health professional's academic titles and Social Security affiliation, including benefits and modalities.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/cedula/rethus?documentType=CC&documentNumber=1032386359
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CC | (Required) Document type. Valid parameter: CC. |
| documentNumber | 1032386359 | 1032386359 |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/cedula/rethus?documentType=CC&documentNumber=1032386359" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "APELLIDO",

            "NOMBRE",

            "SEGUNDO"

        ],

        "documentNumber": "1032386359",

        "documentType": "CC",

        "firstName": "NOMBRE SEGUNDO",

        "fullName": "NOMBRE SEGUNDO APELLIDO",

        "lastName": "APELLIDO"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "IDNT1"

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

    "message": "documentNumber maximum length exceeded.\n"

}
```

---

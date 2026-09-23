---
id: "en-docs-london-stock-exchange-integration-spain-114-verify-spanish-identity-card-dni-nie"
title: "Spain — Verifik public API — 114. Verify Spanish identity card (DNI/NIE)"
sourcePath: "docs/london-stock-exchange-integration/spain.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "es"
  - "london-stock-exchange-integration"
endpoint: "/v2/es/cedula"
sourceAnchor: "114. Verify Spanish identity card (DNI/NIE)"
slug: "/london-stock-exchange-integration/spain"
url: "https://docs.verifik.co/london-stock-exchange-integration/spain"
---

# Spain — Verifik public API
**API path(s):** /v2/es/cedula

## 114. Verify Spanish identity card (DNI/NIE)

**English** (this page) · [Versión en español](/verifik-es/london-stock-exchange-integration/spain/)

# Spain

## 114. Verify Spanish identity card (DNI/NIE)

**Location in the collection:** v2 › es › cedula › Verify Spanish identity card (DNI/NIE)

**What it does (summary):**

With the Verifik API for Spain, you can easily verify the validity of Spanish identity cards (DNI/NIE) by providing the document number and expiration date. The API returns a JSON response containing the document type, document number, full name, first name, last name, and an array of names.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/es/cedula?documentType=DNIES&documentNumber=29731290H&expirationDate=27/03/2025
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | DNIES | (Required) Document type. Allowed parameters: DNIES, NIE. |
| documentNumber | 29731290H | (Required) Document number of the person to be consulted, without spaces or periods. |
| expirationDate | 03/27/2025 | (Required) Date on which the document to be consulted expires. Valid format: DD/MM/YYYY |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/es/cedula?documentType=DNIES&documentNumber=29731290H&expirationDate=27/03/2025" \
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

        "documentNumber": "29731290H",

        "documentType": "DNIES",

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

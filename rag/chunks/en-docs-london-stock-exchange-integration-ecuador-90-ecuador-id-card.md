---
id: "en-docs-london-stock-exchange-integration-ecuador-90-ecuador-id-card"
title: "Ecuador — Verifik public API — 90. Ecuador ID Card"
sourcePath: "docs/london-stock-exchange-integration/ecuador.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "ec"
  - "london-stock-exchange-integration"
endpoint: "/v2/ec/cedula"
sourceAnchor: "90. Ecuador ID Card"
slug: "/london-stock-exchange-integration/ecuador"
url: "https://docs.verifik.co/london-stock-exchange-integration/ecuador"
---

# Ecuador — Verifik public API
**API path(s):** /v2/ec/cedula

## 90. Ecuador ID Card

**English** (this page) · [Versión en español](/verifik-es/london-stock-exchange-integration/ecuador/)

# Ecuador

## 90. Ecuador ID Card

**Location in the collection:** v2 › ec › cedula › Cedula Ecuador

**What it does (summary):**

The Ecuadorian Citizen Identification Information API allows users to obtain basic information about a person based on their Ecuadorian identification number. By providing the document type and number as parameters, the API returns the person's full name, separating the first and last name.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/ec/cedula?documentType=CCEC&documentNumber=0102260098
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CCEC | (Required) Document type. Allowed parameter: CCEC. |
| documentNumber | 0102260098 | (Required) Document number of the person to be consulted, without spaces or periods. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/ec/cedula?documentType=CCEC&documentNumber=0102260098" \
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

        "documentNumber": "0102260098",

        "documentType": "CCEC",

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

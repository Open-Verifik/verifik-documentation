---
id: "en-docs-london-stock-exchange-integration-spain-116-spanish-company-cif-3"
title: "Spain — Verifik public API — 116. Spanish company (CIF)"
sourcePath: "docs/london-stock-exchange-integration/spain.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "es"
  - "london-stock-exchange-integration"
endpoint: "/v2/es/cedula"
sourceAnchor: "116. Spanish company (CIF)"
slug: "/london-stock-exchange-integration/spain"
url: "https://docs.verifik.co/london-stock-exchange-integration/spain"
---

# Spain — Verifik public API
**API path(s):** /v2/es/cedula

## 116. Spanish company (CIF)

**Location in the collection:** v2 › es › Companies › Spanish company (CIF)

**What it does (summary):**

With the Verifik API for Spain, you can easily verify the validity of Spanish identity cards (DNI/NIE) by providing the document number and expiration date. The API returns a JSON response containing the document type, document number, full name, first name, last name, and an array of names.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/es/company?documentType=NIF&documentNumber=A29268166
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | NIF |  |
| documentNumber | A29268166 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/es/company?documentType=NIF&documentNumber=A29268166" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentType": "NIF",

        "documentNumber": "A29268166",

        "legalName": "EMPRESA EJEMPLO SA",

        "status": "ACTIVO"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "CMPY1"

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

    "message": "documentNumber invalid format."

}
```

---

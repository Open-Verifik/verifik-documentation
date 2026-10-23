---
id: "en-docs-london-stock-exchange-integration-colombia-24-colombia-id-2"
title: "Colombia — Verifik public API — 24. Colombia ID"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "24. Colombia ID"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 24. Colombia ID

**Location in the collection:** v2 › co › cedula › Cedula › Cedula Colombia

**What it does (summary):**

The Colombian Citizen Identification endpoint allows obtaining information about the identification document of a Colombian citizen, such as their full name and identification number. This can be useful for a variety of purposes, such as identity verification or background checks.

To use this service, you must provide the identification number and type of identification document of the Colombian citizen. After a successful verification, the response will contain the full name, first names, last names and identification number of the Colombian citizen.

**Note:** Please note that this service is designed exclusively for identification documents of Colombian citizens. For other countries and types of identification documents, please consult the documentation for the appropriate service.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/cedula?documentType=cc&documentNumber=1121329662
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | cc | (Required) Document type. Valid parameter: CC, CE, PEP, PPT. |
| documentNumber | 1121329662 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/cedula?documentType=cc&documentNumber=1121329662" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "JULIO",

            "CESAR",

            "CABANA",

            "CONTRERAS"

        ],

        "documentNumber": "1121329662",

        "documentType": "CC",

        "firstName": "JULIO CESAR",

        "fullName": "JULIO CESAR CABANA CONTRERAS",

        "lastName": "CABANA CONTRERAS"

    },

    "signature": {

        "dateTime": "April 9, 2026 3:05 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "TFBWA"

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

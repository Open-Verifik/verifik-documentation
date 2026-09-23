---
id: "en-docs-london-stock-exchange-integration-colombia-23-extra-colombia-id"
title: "Colombia — Verifik public API — 23. Extra Colombia ID"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "23. Extra Colombia ID"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 23. Extra Colombia ID

**English** (this page) · [Versión en español](/verifik-es/london-stock-exchange-integration/colombia/)

# Colombia

## 23. Extra Colombia ID

**Location in the collection:** v2 › co › cedula › extra › Cedula extra Colombia

**What it does (summary):**

The endpoint "Colombian Citizen Identification Information with Additional Data" allows you to obtain additional information about a Colombian citizen's identification document beyond their basic identification information. This endpoint provides data such as date of birth, gender, and whether the person is alive, among others.

To use this endpoint, you must provide the identification number and type of identification document of the Colombian citizen. Upon successful verification, the response will contain not only the Colombian citizen's full name, first name, last name, and identification number, but also their date of birth, gender, and other relevant data.

Note: Please note that this endpoint is designed exclusively for identification documents of Colombian citizens. For other countries and ID document types, see the documentation for the appropriate endpoint.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/cedula/extra?documentType=CC&documentNumber=1121329663&date=16/07/2007
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CC | (Required) Document type. Only value allowed: CC. |
| documentNumber | 1121329663 |  |
| date | 07/16/2007 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/cedula/extra?documentType=CC&documentNumber=1121329663&date=16/07/2007" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "LAURA",

            "VANESSA",

            "ESCUDERO",

            "POVEDA"

        ],

        "dateOfBirth": "1989-07-05",

        "documentNumber": "1121329663",

        "documentType": "CC",

        "expeditionDate": "2007-07-16",

        "expeditionPlace": {

            "municipio": null,

            "departamento": null

        },

        "firstName": "LAURA VANESSA",

        "fullName": "LAURA VANESSA ESCUDERO POVEDA",

        "gender": "MUJER",

        "isAlive": true,

        "lastName": "ESCUDERO POVEDA"

    },

    "signature": {

        "dateTime": "April 9, 2026 3:03 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "NEHJG"

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

---
id: "en-docs-london-stock-exchange-integration-colombia-67-colombian-affiliations-43"
title: "Colombia — Verifik public API — 67. Colombian Affiliations"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "67. Colombian Affiliations"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 67. Colombian Affiliations

**Location in collection:** v2 › co › affiliations › Colombian Affiliations

**What it does (summary):**

The Verify Colombian Affiliations API provided by Verifik.co allows users to obtain information related to a person's affiliations to various entities in Colombia.

This API receives parameters such as document type, document number and date, and returns a response in JSON format containing data about the person's personal information, their affiliations to EPS (health care provider), ARL (occupational risk insurance), AP (pension fund), compensation fund and severance pay (unemployment fund).

This API is especially useful for companies and organizations that need to verify a person's affiliations in Colombia for various purposes, such as employment or benefit eligibility.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/afiliaciones?documentType=CC&documentNumber=1121329662&date=16/07/2007
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CC | (Required) Document type. Valid parameters: CC, PA, CE, PEP, . |
| documentNumber | 1121329662 | (Required) Document number of the person to be consulted, without spaces or periods. |
| date | 07/16/2007 | (Required) Date of issue of the document, must be entered as follows: DD/MM/YYYY. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/afiliaciones?documentType=CC&documentNumber=1121329662&date=16/07/2007" \
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

        "documentNumber": "1121329662",

        "documentType": "CC",

        "firstName": "NOMBRE SEGUNDO",

        "fullName": "NOMBRE SEGUNDO APELLIDO",

        "lastName": "APELLIDO",

        "date": "16/07/2007"

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

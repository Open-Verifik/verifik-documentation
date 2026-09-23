---
id: "en-docs-london-stock-exchange-integration-colombia-61-full-rues-api-v2-37"
title: "Colombia — Verifik public API — 61. Full RUES API V2"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "61. Full RUES API V2"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 61. Full RUES API V2

**Location in collection:** v2 › co › rues › RUES API Complete V2

**What it does (summary):**

The RUES API provides a way to search for information about companies registered with the Colombian Chamber of Commerce. When submitting a request with the company's NIT (Tax Identification Number), the API will return information such as the company name, address, telephone number, state, city, main activity and license category.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/rues/complete?documentType=NIT&documentNumber=1121329661
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | NIT |  |
| documentNumber | 1121329661 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/rues/complete?documentType=NIT&documentNumber=1121329661" \
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

        "documentNumber": "1121329661",

        "documentType": "NIT",

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

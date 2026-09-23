---
id: "en-docs-london-stock-exchange-integration-colombia-49-driver-s-license-verification-api-in-colombia-26"
title: "Colombia — Verifik public API — 49. Driver's License Verification API in Colombia"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "49. Driver's License Verification API in Colombia"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 49. Driver's License Verification API in Colombia

**Location in collection:** v2 › co › runt › driver › Driver's License Verification API in Colombia

**What it does (summary):**

The Driver's License Verification API provides information about driver's license holders in Colombia. Using this API, you can obtain information such as document type and number, full name, expiration date, status, and license category. You can also check if the license is active, suspended or cancelled, along with getting details about road taxes and other related information.

This API is useful for organizations that need to verify driver's license information for various purposes, including insurance, employment, and other regulatory requirements.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/runt/conductor?documentType=CC&documentNumber=53911355
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CC |  |
| documentNumber | 53911355 | (Required) Driver's document number, without spaces or periods. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/runt/conductor?documentType=CC&documentNumber=53911355" \
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

        "documentNumber": "53911355",

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

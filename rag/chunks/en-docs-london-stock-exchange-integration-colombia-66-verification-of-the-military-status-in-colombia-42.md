---
id: "en-docs-london-stock-exchange-integration-colombia-66-verification-of-the-military-status-in-colombia-42"
title: "Colombia — Verifik public API — 66. Verification of the Military Status in Colombia"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "66. Verification of the Military Status in Colombia"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 66. Verification of the Military Status in Colombia

**Location in the collection:** v2 › co › military-situation › Verification of Military Status in Colombia

**What it does (summary):**

The Colombia Military Status Verification API allows developers to integrate military status verification into their applications. With this API, users can provide a Colombian national identification number and its type, and receive a response indicating the person's current military status, including their rank and military district office.

This API can be useful for government agencies, employers or any organization that needs to verify the military status of a person in Colombia.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/situacion-militar?documentType=CC&documentNumber=1121329661
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CC | (Required) Document type. Allowed parameter: CC, . |
| documentNumber | 1121329661 | (Required) Document number to consult, without spaces or periods. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/situacion-militar?documentType=CC&documentNumber=1121329661" \
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

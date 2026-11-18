---
id: "en-docs-london-stock-exchange-integration-colombia-46-simit-suspensions-api-23"
title: "Colombia — Verifik public API — 46. SIMIT Suspensions API"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "46. SIMIT Suspensions API"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 46. SIMIT Suspensions API

**Location in the collection:** v2 › co › simit › suspensions › SIMIT Suspensions API

**What it does (summary):**

The SIMIT Suspensions API allows users to obtain information about suspended driver's licenses in Colombia. This API returns the suspension status of a driver's license, along with the suspension date and the number of the resolution that issued the suspension.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/simit/suspensiones?documentType=CC&documentNumber=123456789
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CC | (Required) Document type. Valid parameters: CC, PA, CE, , RC, NIT. |
| documentNumber | 123456789 | (Required) Document number to consult, without spaces or periods. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/simit/suspensiones?documentType=CC&documentNumber=123456789" \
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

        "documentNumber": "123456789",

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

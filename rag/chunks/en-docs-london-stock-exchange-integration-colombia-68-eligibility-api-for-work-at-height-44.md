---
id: "en-docs-london-stock-exchange-integration-colombia-68-eligibility-api-for-work-at-height-44"
title: "Colombia — Verifik public API — 68. Eligibility API for Work at Height"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "68. Eligibility API for Work at Height"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 68. Eligibility API for Work at Height

**Location in collection:** v2 › co › ministry-of-labor › certificates › Eligibility API for Work at Height

**What it does (summary):**

The Eligibility for High Altitude Jobs API allows you to check if a citizen is eligible to work in jobs that require being in high altitude areas. This API returns a list of courses the citizen has taken related to working in high altitude areas, as well as the institutions that provided those courses.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/ministerio-de-trabajo/certificados?documentType=CC&documentNumber=1057582023
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CC | (Required) Document type. Valid parameters: CC, , CE. |
| documentNumber | 1057582023 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/ministerio-de-trabajo/certificados?documentType=CC&documentNumber=1057582023" \
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

        "documentNumber": "1057582023",

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

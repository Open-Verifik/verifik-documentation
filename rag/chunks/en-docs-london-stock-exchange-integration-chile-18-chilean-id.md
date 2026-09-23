---
id: "en-docs-london-stock-exchange-integration-chile-18-chilean-id"
title: "Chile — Verifik public API — 18. Chilean ID"
sourcePath: "docs/london-stock-exchange-integration/chile.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "cl"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/cl/cedula"
  - "/v2/cl/company"
  - "/v2/cl/driver-license"
  - "/v2/cl/taxpayer"
  - "/v2/cl/vehicle"
sourceAnchor: "18. Chilean ID"
slug: "/london-stock-exchange-integration/chile"
url: "https://docs.verifik.co/london-stock-exchange-integration/chile"
---

# Chile — Verifik public API
**API path(s):** /v2/cl/cedula, /v2/cl/company, /v2/cl/driver-license, /v2/cl/taxpayer, /v2/cl/vehicle

## 18. Chilean ID

**English** (this page) · [Versión en español](/verifik-es/london-stock-exchange-integration/chile/)

# Chile

## 18. Chilean ID

**Location in the collection:** v2 › cl › cedula › Chilean Cedula

**What it does (summary):**

This API allows you to verify the authenticity of Chilean identity cards (RUT). Simply enter the RUT number and you will receive a response with the full name, first name, last name and name arrangement of the cardholder, along with the verification signature.

This API can be used by companies or individuals to ensure the validity of Chilean identity cards for various purposes, such as employment, financial transactions or legal requirements.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/cl/cedula?documentType=RUN&documentNumber=18.562.530-3
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | RUN |  |
| documentNumber | 18.562.530-3 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/cl/cedula?documentType=RUN&documentNumber=18.562.530-3" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "VERONICA",

            "ANDREA",

            "BAEZ",

            "MALDINI"

        ],

        "documentNumber": "185625303",

        "documentType": "RUN",

        "firstName": "VERONICA ANDREA",

        "fullName": "VERONICA ANDREA BAEZ MALDINI",

        "lastName": "BAEZ MALDINI"

    },

    "signature": {

        "dateTime": "April 9, 2026 2:57 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "HN1W5"

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

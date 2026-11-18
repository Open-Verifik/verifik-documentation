---
id: "en-docs-london-stock-exchange-integration-colombia-74-delinquent-debtors-api-50"
title: "Colombia — Verifik public API — 74. Delinquent Debtors API"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "74. Delinquent Debtors API"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 74. Delinquent Debtors API

**Location in collection:** v2 › co › delinquent debtors › Delinquent Debtors API

**What it does (summary):**

The Delinquent Debtors API allows users to consult the status of their debts with the Colombian government. Users can enter their NIT (Tax Identification Number) or citizen identification number to obtain information about any outstanding debt, including the type of debt, object of the debt, year, period and date.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/deudoresmorosos?documentType=NIT&documentNumber=800096561
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | NIT | (Required) Type of document to consult, allowed values: CC, , NIT, CE. |
| documentNumber | 800096561 | (Required) Document number of the person or company to consult, without spaces or points and in the case of a company without a verification code. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/deudoresmorosos?documentType=NIT&documentNumber=800096561" \
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

        "documentNumber": "800096561",

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

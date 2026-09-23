---
id: "en-docs-london-stock-exchange-integration-paraguay-106-paraguay-company-2"
title: "Paraguay — Verifik public API — 106. Paraguay Company"
sourcePath: "docs/london-stock-exchange-integration/paraguay.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "py"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/py/cic"
  - "/v2/py/company"
  - "/v2/py/vehicle"
sourceAnchor: "106. Paraguay Company"
slug: "/london-stock-exchange-integration/paraguay"
url: "https://docs.verifik.co/london-stock-exchange-integration/paraguay"
---

# Paraguay — Verifik public API
**API path(s):** /v2/py/cic, /v2/py/company, /v2/py/vehicle

## 106. Paraguay Company

**Location in the collection:** v2 › py › company › Company Paraguay

**What it does (summary):**

The Paraguay Citizen Identification Card (CIC) Data Retrieval API allows you to effortlessly retrieve essential information from Paraguay's Citizen Identification Cards. By leveraging this API, you can efficiently obtain verified data associated with a specific CIC, enabling various identity verification and data processing applications.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/py/company?documentType=RUC&documentNumber=80033331
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | RUC |  |
| documentNumber | 80033331 | 90033335 |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/py/company?documentType=RUC&documentNumber=80033331" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentType": "RUC",

        "documentNumber": "80033331",

        "legalName": "EMPRESA EJEMPLO SA",

        "status": "ACTIVO"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "CMPY1"

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

    "message": "documentNumber invalid format."

}
```

---

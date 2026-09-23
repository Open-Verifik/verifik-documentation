---
id: "en-docs-london-stock-exchange-integration-paraguay-105-paraguay-id"
title: "Paraguay — Verifik public API — 105. Paraguay ID"
sourcePath: "docs/london-stock-exchange-integration/paraguay.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "py"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/py/cic?documentnumber=5316480"
  - "/v2/py/company?documenttype=ruc&documentnumber=80033331"
  - "/v2/py/vehicle?plate=bgr850"
sourceAnchor: "105. Paraguay ID"
slug: "/london-stock-exchange-integration/paraguay"
url: "https://docs.verifik.co/london-stock-exchange-integration/paraguay"
---

# Paraguay — Verifik public API
**API path(s):** /v2/py/cic?documentnumber=5316480, /v2/py/company?documenttype=ruc&documentnumber=80033331, /v2/py/vehicle?plate=bgr850

## 105. Paraguay ID

**English** (this page) · [Versión en español](/verifik-es/london-stock-exchange-integration/paraguay/)

# Paraguay

## 105. Paraguay ID

**Location in the collection:** v2 › py › cic › Cedula Paraguay

**What it does (summary):**

The Paraguay Citizen Identification Card (CIC) Data Retrieval API allows you to effortlessly retrieve essential information from Paraguay's Citizen Identification Cards. By leveraging this API, you can efficiently obtain verified data associated with a specific CIC, enabling various identity verification and data processing applications.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/py/cic?documentNumber=5316480
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentNumber | 5316480 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/py/cic?documentNumber=5316480" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentNumber": "5316480"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "GNRC1"

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

    "code": "Conflict",

    "message": "Endpoint out of service."

}
```

---

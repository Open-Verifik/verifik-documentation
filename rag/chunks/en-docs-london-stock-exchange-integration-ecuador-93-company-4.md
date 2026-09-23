---
id: "en-docs-london-stock-exchange-integration-ecuador-93-company-4"
title: "Ecuador — Verifik public API — 93. COMPANY"
sourcePath: "docs/london-stock-exchange-integration/ecuador.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "ec"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/ec/cedula?documenttype=ccec&documentnumber=0102260098"
  - "/v2/ec/company?documenttype=rucec&documentnumber=1790008959001"
  - "/v2/ec/vehiculo/placa/multas?plate=abb4568"
  - "/v2/ec/vehiculo/placa?plate=pbb3239"
sourceAnchor: "93. COMPANY"
slug: "/london-stock-exchange-integration/ecuador"
url: "https://docs.verifik.co/london-stock-exchange-integration/ecuador"
---

# Ecuador — Verifik public API
**API path(s):** /v2/ec/cedula?documenttype=ccec&documentnumber=0102260098, /v2/ec/company?documenttype=rucec&documentnumber=1790008959001, /v2/ec/vehiculo/placa/multas?plate=abb4568, /v2/ec/vehiculo/placa?plate=pbb3239

## 93. COMPANY

**Location in collection:** v2 › ec › company › COMPANY

**What it does (summary):**

Method to consult information about a company in Ecuador.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/ec/company?documentType=RUCEC&documentNumber=1790008959001
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | RUCEC | (Required) Document type. Valid parameter: RUCEC. |
| documentNumber | 1790008959001 | (Required) Document number to consult, without spaces or periods and must also be 13 digits. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/ec/company?documentType=RUCEC&documentNumber=1790008959001" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentType": "RUCEC",

        "documentNumber": "1790008959001",

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

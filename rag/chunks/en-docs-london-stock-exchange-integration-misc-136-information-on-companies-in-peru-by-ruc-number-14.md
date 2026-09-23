---
id: "en-docs-london-stock-exchange-integration-misc-136-information-on-companies-in-peru-by-ruc-number-14"
title: "Other — Verifik public API — 136. Information on Companies in Peru by RUC Number"
sourcePath: "docs/london-stock-exchange-integration/misc.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "usa"
  - "london-stock-exchange-integration"
endpoint: "/v2/usa/vehicle"
sourceAnchor: "136. Information on Companies in Peru by RUC Number"
slug: "/london-stock-exchange-integration/misc"
url: "https://docs.verifik.co/london-stock-exchange-integration/misc"
---

# Other — Verifik public API
**API path(s):** /v2/usa/vehicle

## 136. Information on Companies in Peru by RUC Number

**Location in the collection:** v3 › pe › company v3 › Information of Companies in Peru by RUC Number

**What it does (summary):**

This API allows users to obtain information about companies in Peru by providing the RUC (Unique Taxpayer Registry) number. The API returns data such as company name, address, tax status, and more. The information is obtained from official sources and is certified by Verifik.co. The API can be used by companies, researchers or anyone who needs to verify the status or information of a company in Peru.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v3/pe/company?documentType=RUC&documentNumber=20605980008
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | RUC | (Required) Document type. Allowed value: RUC. |
| documentNumber | 20605980008 |  |
| documentNumber | 10725480615 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v3/pe/company?documentType=RUC&documentNumber=20605980008" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentType": "RUC",

        "documentNumber": "20605980008",

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

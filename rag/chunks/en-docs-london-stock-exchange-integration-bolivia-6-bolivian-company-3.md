---
id: "en-docs-london-stock-exchange-integration-bolivia-6-bolivian-company-3"
title: "Bolivia — Verifik public API — 6. Bolivian Company"
sourcePath: "docs/london-stock-exchange-integration/bolivia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "bo"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/bo/cedula?documenttype=ci&documentnumber=4511200&dateofbirth=27/03/1978"
  - "/v2/bo/company?documenttype=nit&documentnumber=5287278014"
  - "/v2/bo/vehicle?plate=1852phd"
sourceAnchor: "6. Bolivian Company"
slug: "/london-stock-exchange-integration/bolivia"
url: "https://docs.verifik.co/london-stock-exchange-integration/bolivia"
---

# Bolivia — Verifik public API
**API path(s):** /v2/bo/cedula?documenttype=ci&documentnumber=4511200&dateofbirth=27/03/1978, /v2/bo/company?documenttype=nit&documentnumber=5287278014, /v2/bo/vehicle?plate=1852phd

## 6. Bolivian Company

**Location in the collection:** v2 › bo › company › Bolivian Company

**What it does (summary):**

The Bolivian Citizen Identification API allows you to obtain basic information about a Bolivian citizen based on their national identification number and date of birth.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/bo/company?documentType=NIT&documentNumber=5287278014
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | NIT |  |
| documentNumber | 5287278014 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/bo/company?documentType=NIT&documentNumber=5287278014" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "NIT": "5287278014",

        "businessName": "JIMMY WILSON ORELLANA CALVI",

        "dateLastState": "04/03/2016",

        "documentNumber": "5287278014",

        "documentType": "NIT",

        "status": "ACTIVO"

    },

    "signature": {

        "dateTime": "April 9, 2026 2:51 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "11PT4"

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

---
id: "en-docs-london-stock-exchange-integration-misc-138-full-rues-api-v3-16"
title: "Other — Verifik public API — 138. Full RUES API V3"
sourcePath: "docs/london-stock-exchange-integration/misc.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "dea"
  - "europol"
  - "fbi"
  - "interpol"
  - "ip-lookup"
  - "ofac"
  - "tin"
  - "usa"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/dea"
  - "/v2/europol"
  - "/v2/fbi"
  - "/v2/interpol"
  - "/v2/ip-lookup"
  - "/v2/ofac"
  - "/v2/tin/validate"
  - "/v2/usa/company"
  - "/v2/usa/florida/driver-license"
  - "/v2/usa/ssn"
  - "/v2/usa/vehicle"
  - "/v2/usa/vehicle-by-vin"
  - "/v3/co/ministerio-de-trabajo/certificados"
  - "/v3/co/rues"
  - "/v3/co/rues-complete"
  - "/v3/pe/cedula"
  - "/v3/pe/cedula/extra"
  - "/v3/pe/company"
sourceAnchor: "138. Full RUES API V3"
slug: "/london-stock-exchange-integration/misc"
url: "https://docs.verifik.co/london-stock-exchange-integration/misc"
---

# Other — Verifik public API
**API path(s):** /v2/dea, /v2/europol, /v2/fbi, /v2/interpol, /v2/ip-lookup, /v2/ofac, /v2/tin/validate, /v2/usa/company, /v2/usa/florida/driver-license, /v2/usa/ssn, /v2/usa/vehicle, /v2/usa/vehicle-by-vin, /v3/co/ministerio-de-trabajo/certificados, /v3/co/rues, /v3/co/rues-complete, /v3/pe/cedula, /v3/pe/cedula/extra, /v3/pe/company

## 138. Full RUES API V3

**Location in collection:** v3 › rues › RUES API Complete V3

**What it does (summary):**

The RUES API provides a way to search for information about companies registered with the Colombian Chamber of Commerce. When submitting a request with the company's NIT (Tax Identification Number), the API will return information such as the company name, address, telephone number, state, city, main activity and license category.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v3/co/rues-complete?documentType=NIT&documentNumber=52993862&category=RNT
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | NIT |  |
| documentNumber | 52993862 |  |
| category | RNT |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v3/co/rues-complete?documentType=NIT&documentNumber=52993862&category=RNT" \
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

        "documentNumber": "52993862",

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

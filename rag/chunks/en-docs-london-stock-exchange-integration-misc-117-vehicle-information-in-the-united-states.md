---
id: "en-docs-london-stock-exchange-integration-misc-117-vehicle-information-in-the-united-states"
title: "Other — Verifik public API — 117. Vehicle Information in the United States"
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
sourceAnchor: "117. Vehicle Information in the United States"
slug: "/london-stock-exchange-integration/misc"
url: "https://docs.verifik.co/london-stock-exchange-integration/misc"
---

# Other — Verifik public API
**API path(s):** /v2/dea, /v2/europol, /v2/fbi, /v2/interpol, /v2/ip-lookup, /v2/ofac, /v2/tin/validate, /v2/usa/company, /v2/usa/florida/driver-license, /v2/usa/ssn, /v2/usa/vehicle, /v2/usa/vehicle-by-vin, /v3/co/ministerio-de-trabajo/certificados, /v3/co/rues, /v3/co/rues-complete, /v3/pe/cedula, /v3/pe/cedula/extra, /v3/pe/company

## 117. Vehicle Information in the United States

**English** (this page) · [Versión en español](/verifik-es/london-stock-exchange-integration/misc/)

# Other

## 117. Vehicle Information in the United States

**Location in collection:** v2 › usa › vehicle › United States Vehicle Information

**What it does (summary):**

The Vehicle Information API provides a way to obtain detailed information about a vehicle in the United States, given its license plate number and status. The API returns a response in JSON format that includes various data points about the vehicle, such as make, model, model year, engine configuration, body class, transmission style, and more.

This API can be useful for a variety of applications, such as vehicle history reporting, automotive research, and insurance underwriting.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/usa/vehicle?state=AR&plate=EXPLORE
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| state | AR |  |
| plates | EXPLORE |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/usa/vehicle?state=AR&plate=EXPLORE" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "EXPLORE",

        "brand": "MAKE",

        "model": "MODEL",

        "year": "2020",

        "vehicleType": "SEDAN"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "VHCL1"

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

    "message": "plate format invalid."

}
```

---

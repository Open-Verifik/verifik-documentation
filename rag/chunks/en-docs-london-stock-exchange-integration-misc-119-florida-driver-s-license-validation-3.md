---
id: "en-docs-london-stock-exchange-integration-misc-119-florida-driver-s-license-validation-3"
title: "Other — Verifik public API — 119. Florida Driver's License Validation"
sourcePath: "docs/london-stock-exchange-integration/misc.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "dea?documenttype=curp&documentnumber=gusj860517hjczls06"
  - "europol?documenttype=ccve&documentnumber=25622914"
  - "fbi?documenttype=cc&documentnumber=80251972"
  - "interpol?documenttype=ppt&documentnumber=5519356&expeditiondate=01"
  - "ip-lookup?ip=54.196.228.28"
  - "ofac?documenttype=nit&documentnumber=1121329661"
  - "tin"
  - "usa"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/dea?documenttype=curp&documentnumber=gusj860517hjczls06"
  - "/v2/europol?documenttype=ccve&documentnumber=25622914"
  - "/v2/fbi?documenttype=cc&documentnumber=80251972"
  - "/v2/interpol?documenttype=ppt&documentnumber=5519356&expeditiondate=01/12/2023"
  - "/v2/ip-lookup?ip=54.196.228.28"
  - "/v2/ofac?documenttype=nit&documentnumber=1121329661"
  - "/v2/tin/validate?mscode=es&tinnumber=819128y"
  - "/v2/usa/company?business=apple"
  - "/v2/usa/florida/driver-license?documentnumber=s514-172-80-844-0"
  - "/v2/usa/ssn?documentnumber=769-82-2324"
  - "/v2/usa/vehicle-by-vin?vin=1g3ak47a7cm535209"
  - "/v2/usa/vehicle?state=ar&plate=explore"
  - "/v3/co/ministerio-de-trabajo/certificados?documenttype=cc&documentnumber=1057582023"
  - "/v3/co/rues-complete?documenttype=nit&documentnumber=52993862&category=rnt"
  - "/v3/co/rues?documenttype=nit&documentnumber=1121329661&category=rm"
  - "/v3/pe/cedula/extra?documenttype=dni&documentnumber=43451826"
  - "/v3/pe/cedula?documenttype=dni&documentnumber=43451826"
  - "/v3/pe/company?documenttype=ruc&documentnumber=20605980008"
sourceAnchor: "119. Florida Driver's License Validation"
slug: "/london-stock-exchange-integration/misc"
url: "https://docs.verifik.co/london-stock-exchange-integration/misc"
---

# Other — Verifik public API
**API path(s):** /v2/dea?documenttype=curp&documentnumber=gusj860517hjczls06, /v2/europol?documenttype=ccve&documentnumber=25622914, /v2/fbi?documenttype=cc&documentnumber=80251972, /v2/interpol?documenttype=ppt&documentnumber=5519356&expeditiondate=01/12/2023, /v2/ip-lookup?ip=54.196.228.28, /v2/ofac?documenttype=nit&documentnumber=1121329661, /v2/tin/validate?mscode=es&tinnumber=819128y, /v2/usa/company?business=apple, /v2/usa/florida/driver-license?documentnumber=s514-172-80-844-0, /v2/usa/ssn?documentnumber=769-82-2324, /v2/usa/vehicle-by-vin?vin=1g3ak47a7cm535209, /v2/usa/vehicle?state=ar&plate=explore, /v3/co/ministerio-de-trabajo/certificados?documenttype=cc&documentnumber=1057582023, /v3/co/rues-complete?documenttype=nit&documentnumber=52993862&category=rnt, /v3/co/rues?documenttype=nit&documentnumber=1121329661&category=rm, /v3/pe/cedula/extra?documenttype=dni&documentnumber=43451826, /v3/pe/cedula?documenttype=dni&documentnumber=43451826, /v3/pe/company?documenttype=ruc&documentnumber=20605980008

## 119. Florida Driver's License Validation

**Location in collection:** v2 › usa › florida › driver-license › Florida Driver License Validation

**What it does (summary):**

The Florida Driver License Validation API allows developers to programmatically validate the status, restrictions, endorsements, and designations of Florida driver licenses. The API accepts as input a valid Florida driver's license number and returns a response in JSON format containing the license status, expiration date, restrictions, endorsements, and designations.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/usa/florida/driver-license?documentNumber=S514-172-80-844-0
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentNumber | S514-172-80-844-0 | (Required) Driver's license to consult, all data must be entered exactly the same as found in this document, additionally keep in mind that it only applies to Florida licenses, a New York license will fail for this service. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/usa/florida/driver-license?documentNumber=S514-172-80-844-0" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentNumber": "S514-172-80-844-0"

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

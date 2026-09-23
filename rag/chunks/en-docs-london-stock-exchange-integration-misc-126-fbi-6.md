---
id: "en-docs-london-stock-exchange-integration-misc-126-fbi-6"
title: "Other — Verifik public API — 126. FBI"
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
sourceAnchor: "126. FBI"
slug: "/london-stock-exchange-integration/misc"
url: "https://docs.verifik.co/london-stock-exchange-integration/misc"
---

# Other — Verifik public API
**API path(s):** /v2/dea?documenttype=curp&documentnumber=gusj860517hjczls06, /v2/europol?documenttype=ccve&documentnumber=25622914, /v2/fbi?documenttype=cc&documentnumber=80251972, /v2/interpol?documenttype=ppt&documentnumber=5519356&expeditiondate=01/12/2023, /v2/ip-lookup?ip=54.196.228.28, /v2/ofac?documenttype=nit&documentnumber=1121329661, /v2/tin/validate?mscode=es&tinnumber=819128y, /v2/usa/company?business=apple, /v2/usa/florida/driver-license?documentnumber=s514-172-80-844-0, /v2/usa/ssn?documentnumber=769-82-2324, /v2/usa/vehicle-by-vin?vin=1g3ak47a7cm535209, /v2/usa/vehicle?state=ar&plate=explore, /v3/co/ministerio-de-trabajo/certificados?documenttype=cc&documentnumber=1057582023, /v3/co/rues-complete?documenttype=nit&documentnumber=52993862&category=rnt, /v3/co/rues?documenttype=nit&documentnumber=1121329661&category=rm, /v3/pe/cedula/extra?documenttype=dni&documentnumber=43451826, /v3/pe/cedula?documenttype=dni&documentnumber=43451826, /v3/pe/company?documenttype=ruc&documentnumber=20605980008

## 126. FBI

**Location in collection:** v2 › fbi › FBI

**What it does (summary):**

This API allows users to check if a specific person's full name, document type, and document number are on the DEA (Drug Enforcement Administration) watch list. The API response will include a Boolean alert indicating whether the person is on the watch list, as well as a URL to access the official DEA record on the person (if applicable).

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/fbi?documentType=CC&documentNumber=80251972
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CC | (Required) Document type. Allowed values: CC,CE,PA,RC,,PEP,CCVE,NIT,CURP,DNI, CCEC. |
| fullName |  |  |
| fullName |  |  |
| documentNumber | 17636873k |  |
| fullName |  |  |
| documentNumber | 80251972 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/fbi?documentType=CC&documentNumber=80251972" \
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

        "documentNumber": "80251972",

        "documentType": "CC",

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

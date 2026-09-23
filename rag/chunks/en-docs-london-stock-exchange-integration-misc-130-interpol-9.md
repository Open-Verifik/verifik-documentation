---
id: "en-docs-london-stock-exchange-integration-misc-130-interpol-9"
title: "Other — Verifik public API — 130. INTERPOL"
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
sourceAnchor: "130. INTERPOL"
slug: "/london-stock-exchange-integration/misc"
url: "https://docs.verifik.co/london-stock-exchange-integration/misc"
---

# Other — Verifik public API
**API path(s):** /v2/dea, /v2/europol, /v2/fbi, /v2/interpol, /v2/ip-lookup, /v2/ofac, /v2/tin/validate, /v2/usa/company, /v2/usa/florida/driver-license, /v2/usa/ssn, /v2/usa/vehicle, /v2/usa/vehicle-by-vin, /v3/co/ministerio-de-trabajo/certificados, /v3/co/rues, /v3/co/rues-complete, /v3/pe/cedula, /v3/pe/cedula/extra, /v3/pe/company

## 130. INTERPOL

**Location in collection:** v2 › interpol › INTERPOL

**What it does (summary):**

The Interpol Search API allows you to search for information about a person in the Interpol database. The database contains records of individuals wanted by law enforcement agencies for various reasons such as criminal offenses, terrorist activities, etc. The API returns a response in JSON format that includes the document type, document number, first name, last name, full name, and an array of the person's name components.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/interpol?documentType=PPT&documentNumber=5519356&expeditionDate=01/12/2023
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | PPT | (Required) Document type. Valid parameters: CC,CE,PA,RC,,PEP,CCVE,NIT,CURP,DNI, CCEC. |
| documentNumber | 25622914 | 1023942104 |
| documentNumber | 5519356 |  |
| fullName | IVAN LUCIANO MARQUEZ MARIN ARANGO |  |
| documentNumber | 76294536 |  |
| documentNumber | 19304877 |  |
| expeditionDate | 12/01/2023 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/interpol?documentType=PPT&documentNumber=5519356&expeditionDate=01/12/2023" \
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

        "documentNumber": "5519356",

        "documentType": "PPT",

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

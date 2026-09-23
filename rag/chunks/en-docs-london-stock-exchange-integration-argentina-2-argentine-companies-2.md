---
id: "en-docs-london-stock-exchange-integration-argentina-2-argentine-companies-2"
title: "Argentina — Verifik public API — 2. Argentine Companies"
sourcePath: "docs/london-stock-exchange-integration/argentina.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "ar"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/ar/cedula?documenttype=dniar&documentnumber=33016244"
  - "/v2/ar/company?documenttype=cuit&documentnumber=30703088534"
  - "/v2/ar/vehicle?plate=aa123bb"
sourceAnchor: "2. Argentine Companies"
slug: "/london-stock-exchange-integration/argentina"
url: "https://docs.verifik.co/london-stock-exchange-integration/argentina"
---

# Argentina — Verifik public API
**API path(s):** /v2/ar/cedula?documenttype=dniar&documentnumber=33016244, /v2/ar/company?documenttype=cuit&documentnumber=30703088534, /v2/ar/vehicle?plate=aa123bb

## 2. Argentine Companies

**Location in the collection:** v2 › ar › company › Empresas Argentina

**What it does (summary):**

The CURP API allows you to easily verify the identity of Mexican citizens through their CURP number. With this API, you can obtain important personal information such as full name, date of birth, nationality and supporting document associated with a specific CURP number.

The data returned also includes details about the place of registration and other relevant information, making it an essential tool for identity verification and fraud prevention.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/ar/company?documentType=CUIT&documentNumber=30703088534
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CUIT | (Required) Document type. Valid parameter: CUIT. |
| documentNumber | 30703088534 | (Required) Document of the person to be consulted, without spaces or points. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/ar/company?documentType=CUIT&documentNumber=30703088534" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "businessName": "MERCADOLIBRE S.R.L.",

        "contractDate": "15-07-1999",

        "documentNumber": "30703088534",

        "documentType": "CUIT",

        "economicActivities": {

            "mainActivity": [

                {

                    "code": "620900 (F-883)",

                    "description": "SERVICIOS DE INFORMÁTICA N.C.P.",

                    "startDate": "04/2015"

                }

            ],

            "secondaryActivity": [

                {

                    "code": "731009 (F-883)",

                    "description": "SERVICIOS DE PUBLICIDAD N.C.P.",

                    "startDate": "12/2014"

                },

                {

                    "code": "649999 (F-883)",

                    "description": "SERVICIOS DE FINANCIACIÓN Y ACTIVIDADES FINANCIERAS N.C.P.",

                    "startDate": "12/2014"

                },

                {

                    "code": "829900 (F-883)",

                    "description": "SERVICIOS EMPRESARIALES N.C.P.",

                    "startDate": "12/2014"

                },

                {

                    "code": "523090 (F-883)",

                    "description": "SERVICIOS DE GESTIÓN Y LOGÍSTICA PARA EL TRANSPORTE DE MERCADERÍAS N.C.P.",

                    "startDate": "08/2017"

                }

            ]

        },

        "legalForm": "S.R.L."

    },

    "signature": {

        "dateTime": "April 8, 2026 11:36 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "JES91"

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

    "message": "documentNumber invalid format for CUIT."

}
```

---

---
id: "en-docs-london-stock-exchange-integration-peru-111-immigration-card-information-4"
title: "Peru — Verifik public API — 111. Immigration Card Information"
sourcePath: "docs/london-stock-exchange-integration/peru.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "pe"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/pe/cedula"
  - "/v2/pe/cedula/extra"
  - "/v2/pe/empresa"
  - "/v2/pe/foreigner-id/ce"
  - "/v2/pe/vehiculo/placa"
  - "/v2/pe/vehiculo/soat"
sourceAnchor: "111. Immigration Card Information"
slug: "/london-stock-exchange-integration/peru"
url: "https://docs.verifik.co/london-stock-exchange-integration/peru"
---

# Peru — Verifik public API
**API path(s):** /v2/pe/cedula, /v2/pe/cedula/extra, /v2/pe/empresa, /v2/pe/foreigner-id/ce, /v2/pe/vehiculo/placa, /v2/pe/vehiculo/soat

## 111. Immigration Card Information

**Location in the collection:** v2 › pe › cedula › Cedula Extranjeria › Cedula Extranjeria information

**What it does (summary):**

This API allows users to obtain detailed information about Peruvian identity cards (DNI). The API returns a response in JSON format that includes document type, document number, full name, first name, last name, check digit, date of birth, date of issue, expiration date, date of death (if applicable), age, gender, marital status, province, area, district of residence, donor state, ubigeo, zip code, area of ​​death (if applicable), province of death (if applicable), and district of death (if applicable).

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/pe/foreigner-id/ce?documentNumber=005005393&dateOfBirth=16/08/1993
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentNumber | 005005393 | (Required) Document number of the person to be consulted, without spaces or periods. |
| dateOfBirth | 08/16/1993 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/pe/foreigner-id/ce?documentNumber=005005393&dateOfBirth=16/08/1993" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "CORDERO",

            "CAMPERO",

            "RENZO",

            "RENE"

        ],

        "dateOfBirth": "16/08/1993",

        "documentNumber": "005005393",

        "documentType": "DNI",

        "firstName": "RENZO RENE",

        "fullName": "RENZO RENE CORDERO CAMPERO",

        "lastName": "CORDERO CAMPERO"

    },

    "signature": {

        "dateTime": "April 10, 2026 4:10 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "IF43V"

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

---
id: "en-docs-london-stock-exchange-integration-peru-110-information-on-peruvian-citizens-with-additional-data-3"
title: "Peru — Verifik public API — 110. Information on Peruvian Citizens with Additional Data"
sourcePath: "docs/london-stock-exchange-integration/peru.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "pe"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/pe/cedula/extra?documenttype=dni&documentnumber=70904000"
  - "/v2/pe/cedula?documenttype=dni&documentnumber=01028795"
  - "/v2/pe/empresa?documenttype=ruc&documentnumber=20605980008"
  - "/v2/pe/foreigner-id/ce?documentnumber=005005393&dateofbirth=16/08/1993"
  - "/v2/pe/vehiculo/placa?plate=afj286"
  - "/v2/pe/vehiculo/soat?plate=afj289"
sourceAnchor: "110. Information on Peruvian Citizens with Additional Data"
slug: "/london-stock-exchange-integration/peru"
url: "https://docs.verifik.co/london-stock-exchange-integration/peru"
---

# Peru — Verifik public API
**API path(s):** /v2/pe/cedula/extra?documenttype=dni&documentnumber=70904000, /v2/pe/cedula?documenttype=dni&documentnumber=01028795, /v2/pe/empresa?documenttype=ruc&documentnumber=20605980008, /v2/pe/foreigner-id/ce?documentnumber=005005393&dateofbirth=16/08/1993, /v2/pe/vehiculo/placa?plate=afj286, /v2/pe/vehiculo/soat?plate=afj289

## 110. Information on Peruvian Citizens with Additional Data

**Location in the collection:** v2 › pe › cedula › extra › Information on Peruvian Citizens with Additional Data

**What it does (summary):**

This API allows users to obtain detailed information about Peruvian identity cards (DNI). The API returns a response in JSON format that includes document type, document number, full name, first name, last name, check digit, date of birth, date of issue, expiration date, date of death (if applicable), age, gender, marital status, province, area, district of residence, donor state, ubigeo, zip code, area of ​​death (if applicable), province of death (if applicable), and district of death (if applicable).

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/pe/cedula/extra?documentType=DNI&documentNumber=70904000
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | DNI |  |
| documentNumber | 70904000 | (Required) Document number of the person to be consulted, without spaces or periods. |
| source | 5 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/pe/cedula/extra?documentType=DNI&documentNumber=70904000" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "age": "22",

        "area": "-",

        "arrayName": [

            "JOAQUIN",

            "ISMAEL",

            "PURUGUAY",

            "TORRES"

        ],

        "civilStatus": "not_available",

        "dateOfBirth": "27-02-2004",

        "dateOfDeath": null,

        "documentNumber": "70904000",

        "documentType": "DNI",

        "donor": null,

        "expeditionDate": "22-09-2025",

        "expirationDate": "22-09-2035",

        "firstName": "JOAQUIN ISMAEL",

        "fullName": "JOAQUIN ISMAEL PURUGUAY TORRES",

        "gender": "HOMBRE",

        "paternalLastName": "PURUGUAY",

        "maternalLastName": "TORRES",

        "homeDistrict": "",

        "lastName": "PURUGUAY TORRES",

        "postalCode": "-",

        "province": "-",

        "ubigeous": "not_available",

        "verificationDigit": "not_available"

    },

    "signature": {

        "dateTime": "April 10, 2026 4:04 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "S0TWW"

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

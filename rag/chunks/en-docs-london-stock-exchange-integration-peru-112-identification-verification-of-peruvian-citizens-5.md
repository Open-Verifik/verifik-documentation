---
id: "en-docs-london-stock-exchange-integration-peru-112-identification-verification-of-peruvian-citizens-5"
title: "Peru — Verifik public API — 112. Identification Verification of Peruvian Citizens"
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
sourceAnchor: "112. Identification Verification of Peruvian Citizens"
slug: "/london-stock-exchange-integration/peru"
url: "https://docs.verifik.co/london-stock-exchange-integration/peru"
---

# Peru — Verifik public API
**API path(s):** /v2/pe/cedula/extra?documenttype=dni&documentnumber=70904000, /v2/pe/cedula?documenttype=dni&documentnumber=01028795, /v2/pe/empresa?documenttype=ruc&documentnumber=20605980008, /v2/pe/foreigner-id/ce?documentnumber=005005393&dateofbirth=16/08/1993, /v2/pe/vehiculo/placa?plate=afj286, /v2/pe/vehiculo/soat?plate=afj289

## 112. Identification Verification of Peruvian Citizens

**Location in the collection:** v2 › pe › cedula › Identification Verification of Peruvian Citizens

**What it does (summary):**

The Peruvian Citizen Identification Verification API allows you to verify the identity of a person in Peru using their DNI (National Identity Document) number. The API returns the full name and other related information of the person, along with a signature to certify the authenticity of the response.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/pe/cedula?documentType=DNI&documentNumber=01028795
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | DNI |  |
| documentNumber | 01028795 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/pe/cedula?documentType=DNI&documentNumber=01028795" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "MANUEL",

            "FELICIANO",

            "MERLO",

            "ROMERO"

        ],

        "documentNumber": "01028795",

        "documentType": "DNI",

        "firstName": "MANUEL FELICIANO",

        "fullName": "MANUEL FELICIANO MERLO ROMERO",

        "lastName": "MERLO ROMERO",

        "maternalLastName": "ROMERO",

        "paternalLastName": "MERLO"

    },

    "signature": {

        "dateTime": "April 10, 2026 4:54 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "5MNYA"

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

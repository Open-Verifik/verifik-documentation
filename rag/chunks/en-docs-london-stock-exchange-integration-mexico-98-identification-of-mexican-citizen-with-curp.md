---
id: "en-docs-london-stock-exchange-integration-mexico-98-identification-of-mexican-citizen-with-curp"
title: "Mexico — Verifik public API — 98. Identification of Mexican Citizen with CURP"
sourcePath: "docs/london-stock-exchange-integration/mexico.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "mx"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/mx/company"
  - "/v2/mx/curp"
  - "/v2/mx/vehiculo/placa"
sourceAnchor: "98. Identification of Mexican Citizen with CURP"
slug: "/london-stock-exchange-integration/mexico"
url: "https://docs.verifik.co/london-stock-exchange-integration/mexico"
---

# Mexico — Verifik public API
**API path(s):** /v2/mx/company, /v2/mx/curp, /v2/mx/vehiculo/placa

## 98. Identification of Mexican Citizen with CURP

**English** (this page) · [Versión en español](/verifik-es/london-stock-exchange-integration/mexico/)

# Mexico

## 98. Identification of Mexican Citizen with CURP

**Location in the collection:** v2 › mx › curp › Mexican Citizen Identification with CURP

**What it does (summary):**

The CURP API allows you to easily verify the identity of Mexican citizens through their CURP number. With this API, you can obtain important personal information such as full name, date of birth, nationality and supporting document associated with a specific CURP number.

The data returned also includes details about the place of registration and other relevant information, making it an essential tool for identity verification and fraud prevention.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/mx/curp?documentNumber=NUHA930929HSLXRL02&documentType=CURP
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentNumber | NUHA930929HSLXRL02 | (Required) Document of the person to be consulted, without spaces or points. |
| documentType | CURP | (Required) Document type. Valid parameter: CURP. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/mx/curp?documentNumber=NUHA930929HSLXRL02&documentType=CURP" \
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

        "documentNumber": "NUHA930929HSLXRL02",

        "documentType": "CURP",

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

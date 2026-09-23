---
id: "en-docs-london-stock-exchange-integration-panama-102-identification-of-panamanian-citizens-with-additional-data"
title: "Panama — Verifik public API — 102. Identification of Panamanian Citizens with Additional Data"
sourcePath: "docs/london-stock-exchange-integration/panama.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "pa"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/pa/cedula"
  - "/v2/pa/company"
  - "/v2/pa/vehiculo/placa"
sourceAnchor: "102. Identification of Panamanian Citizens with Additional Data"
slug: "/london-stock-exchange-integration/panama"
url: "https://docs.verifik.co/london-stock-exchange-integration/panama"
---

# Panama — Verifik public API
**API path(s):** /v2/pa/cedula, /v2/pa/company, /v2/pa/vehiculo/placa

## 102. Identification of Panamanian Citizens with Additional Data

**English** (this page) · [Versión en español](/verifik-es/london-stock-exchange-integration/panama/)

# Panama

## 102. Identification of Panamanian Citizens with Additional Data

**Location in the collection:** v2 › pa › cedula › Identification of Panamanian Citizens with Additional Data

**What it does (summary):**

Verifik.co's API for Panamanian citizen identification information provides accurate and reliable data for individuals in Panama. This API offers personal details such as full name, gender, email, phone number, and date of birth associated with a provided CCPA document number.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/pa/cedula?documentType=CCPA&documentNumber=9-718-196&dateOfBirth=25/06/1983
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CCPA | (Required) Document type. Allowed parameter: CCPA. |
| documentNumber | 9-718-196 | (Required) Document number of the person to be consulted, without spaces or periods. |
| dateOfBirth | 06/25/1983 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/pa/cedula?documentType=CCPA&documentNumber=9-718-196&dateOfBirth=25/06/1983" \
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

        "documentNumber": "9-718-196",

        "documentType": "CCPA",

        "firstName": "NOMBRE SEGUNDO",

        "fullName": "NOMBRE SEGUNDO APELLIDO",

        "lastName": "APELLIDO",

        "dateOfBirth": "25/06/1983"

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

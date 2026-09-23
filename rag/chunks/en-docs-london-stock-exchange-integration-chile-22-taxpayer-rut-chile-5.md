---
id: "en-docs-london-stock-exchange-integration-chile-22-taxpayer-rut-chile-5"
title: "Chile — Verifik public API — 22. Taxpayer rut Chile"
sourcePath: "docs/london-stock-exchange-integration/chile.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "cl"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/cl/cedula"
  - "/v2/cl/cedula?documenttype=run&documentnumber=18.562.530-3"
  - "/v2/cl/company?documenttype=rut&documentnumber=77398220"
  - "/v2/cl/driver-license"
  - "/v2/cl/driver-license?documentnumber=06230840"
  - "/v2/cl/taxpayer?documenttype=rut&documentnumber=263007905"
  - "/v2/cl/vehicle?plate=bb985"
sourceAnchor: "22. Taxpayer rut Chile"
slug: "/london-stock-exchange-integration/chile"
url: "https://docs.verifik.co/london-stock-exchange-integration/chile"
---

# Chile — Verifik public API
**API path(s):** /v2/cl/cedula, /v2/cl/cedula?documenttype=run&documentnumber=18.562.530-3, /v2/cl/company?documenttype=rut&documentnumber=77398220, /v2/cl/driver-license, /v2/cl/driver-license?documentnumber=06230840, /v2/cl/taxpayer?documenttype=rut&documentnumber=263007905, /v2/cl/vehicle?plate=bb985

## 22. Taxpayer rut Chile

**Location in the collection:** v2 › cl › Taxpayer › Taxpayer rut Chile

**What it does (summary):**

This API performs a **taxpayer (RUT) lookup** for Chile: supply `documentType=RUT` and the **tax ID** in `documentNumber`. The response aligns with **tax-registry-oriented** name fields (e.g. structured full name) for **KYB**, **vendor**, and **invoice** validation—distinct from the civil-registry **cedula** (`v2/cl/cedula`) and from **driver license** (`v2/cl/driver-license`).

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/cl/taxpayer?documentType=RUT&documentNumber=263007905
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | RUT |  |
| documentNumber | 263007905 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/cl/taxpayer?documentType=RUT&documentNumber=263007905" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "RICHARD",

            "DANIEL",

            "BARBERA",

            "MARICHAL"

        ],

        "documentNumber": "263007905",

        "documentType": "RUT",

        "firstName": "RICHARD DANIEL",

        "fullName": "RICHARD DANIEL BARBERA MARICHAL",

        "lastName": "BARBERA MARICHAL"

    },

    "signature": {

        "dateTime": "April 9, 2026 3:02 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "S40CG"

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

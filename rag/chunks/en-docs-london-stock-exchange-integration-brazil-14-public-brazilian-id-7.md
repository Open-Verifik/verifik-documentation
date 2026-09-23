---
id: "en-docs-london-stock-exchange-integration-brazil-14-public-brazilian-id-7"
title: "Brazil: Verifik public API — 14. Public Brazilian ID"
sourcePath: "docs/london-stock-exchange-integration/brazil.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "br"
  - "vehicle"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/br/background-check"
  - "/v2/br/cedula"
  - "/v2/br/company"
  - "/v2/br/public/cedula"
  - "/v2/br/public/vehicle"
  - "/v2/br/vehicle"
  - "/v2/br/vehicle/data-sheet-by-plate"
  - "/v2/vehicle/data-sheet"
sourceAnchor: "14. Public Brazilian ID"
slug: "/london-stock-exchange-integration/brazil"
url: "https://docs.verifik.co/london-stock-exchange-integration/brazil"
---

# Brazil: Verifik public API
**API path(s):** /v2/br/background-check, /v2/br/cedula, /v2/br/company, /v2/br/public/cedula, /v2/br/public/vehicle, /v2/br/vehicle, /v2/br/vehicle/data-sheet-by-plate, /v2/vehicle/data-sheet

## 14. Public Brazilian ID

**Location in the collection:** v2 › br › cedula publico › Cedula Brazilian publico

**What it does (summary):**

**Public** Brazilian **CPF** lookup (`v2/br/public/cedula`): same general parameters as the authenticated identity endpoint, with a **redacted/obfuscated** payload suitable for unauthenticated or public flows. It is **not** a Peru DNI API.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/br/public/cedula?documentType=CPF&documentNumber=019.166.58601&dateOfBirth=17/02/2002
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CPF |  |
| documentNumber | 019.166.58601 |  |
| dateOfBirth | 17/02/2002 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/br/public/cedula?documentType=CPF&documentNumber=019.166.58601&dateOfBirth=17/02/2002" \
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

        "documentNumber": "019.166.58601",

        "documentType": "CPF",

        "firstName": "NOMBRE SEGUNDO",

        "fullName": "NOMBRE SEGUNDO APELLIDO",

        "lastName": "APELLIDO",

        "dateOfBirth": "17/02/2002"

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

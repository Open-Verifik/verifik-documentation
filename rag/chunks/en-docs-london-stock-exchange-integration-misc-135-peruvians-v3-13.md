---
id: "en-docs-london-stock-exchange-integration-misc-135-peruvians-v3-13"
title: "Other — Verifik public API — 135. Peruvians v3"
sourcePath: "docs/london-stock-exchange-integration/misc.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "usa"
  - "london-stock-exchange-integration"
endpoint: "/v2/usa/vehicle"
sourceAnchor: "135. Peruvians v3"
slug: "/london-stock-exchange-integration/misc"
url: "https://docs.verifik.co/london-stock-exchange-integration/misc"
---

# Other — Verifik public API
**API path(s):** /v2/usa/vehicle

## 135. Peruvians v3

**Location in the collection:** v3 › pe › cedula › Peruanos v3

**What it does (summary):**

The Peruvian Citizen Identification Verification API allows you to verify the identity of a person in Peru using their DNI (National Identity Document) number. The API returns the full name and other related information of the person, along with a signature to certify the authenticity of the response.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v3/pe/cedula?documentType=DNI&documentNumber=43451826
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | DNI |  |
| documentNumber | 43451826 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v3/pe/cedula?documentType=DNI&documentNumber=43451826" \
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

        "documentNumber": "43451826",

        "documentType": "DNI",

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

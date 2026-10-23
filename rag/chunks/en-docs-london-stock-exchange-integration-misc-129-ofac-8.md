---
id: "en-docs-london-stock-exchange-integration-misc-129-ofac-8"
title: "Other — Verifik public API — 129. OFAC"
sourcePath: "docs/london-stock-exchange-integration/misc.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "usa"
  - "london-stock-exchange-integration"
endpoint: "/v2/usa/vehicle"
sourceAnchor: "129. OFAC"
slug: "/london-stock-exchange-integration/misc"
url: "https://docs.verifik.co/london-stock-exchange-integration/misc"
---

# Other — Verifik public API
**API path(s):** /v2/usa/vehicle

## 129. OFAC

**Location in collection:** v2 › ofac › OFAC

**What it does (summary):**

The OFAC API provides a simple way to check whether a person or entity appears on the United States Department of the Treasury's Office of Foreign Assets Control (OFAC) list of Specially Designated Individuals (SDN) and Blocked Persons.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/ofac?documentType=NIT&documentNumber=1121329661
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | NIT | (Required) Type of document to consult. Valid parameters: CC, NIT. |
| documentNumber | VILJ580411HSLLRN09 |  |
| documentNumber | 1121329661 |  |
| fullName | JUAN CARLOS VILLEGAS LOERA |  |
| fullName | FIGUERA VALDEZ JOSE RAMON | 11448109 |
| documentNumber | 1057352 |  |
| fullName | FIGUERA VALDEZ jose ramon |  |
| fullName | ANUAR DE JESUS ​​HERNANDEZ GARCIA |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/ofac?documentType=NIT&documentNumber=1121329661" \
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

        "documentNumber": "1121329661",

        "documentType": "NIT",

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

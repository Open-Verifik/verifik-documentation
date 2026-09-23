---
id: "en-docs-london-stock-exchange-integration-misc-127-dea-7"
title: "Other — Verifik public API — 127. DEA"
sourcePath: "docs/london-stock-exchange-integration/misc.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "usa"
  - "london-stock-exchange-integration"
endpoint: "/v2/usa/vehicle"
sourceAnchor: "127. DEA"
slug: "/london-stock-exchange-integration/misc"
url: "https://docs.verifik.co/london-stock-exchange-integration/misc"
---

# Other — Verifik public API
**API path(s):** /v2/usa/vehicle

## 127. DEA

**Location in collection:** v2 › dea › DEA

**What it does (summary):**

This API allows users to check if a specific person's full name, document type, and document number are on the DEA (Drug Enforcement Administration) watch list. The API response will include a Boolean alert indicating whether the person is on the watch list, as well as a URL to access the official DEA record on the person (if applicable).

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/dea?documentType=CURP&documentNumber=GUSJ860517HJCZLS06
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CURP | (Required) Document type. Allowed values: CC,CE,PA,RC,,PEP,CCVE,NIT,CURP,DNI, CCEC. |
| documentNumber | GUSJ860517HJCZLS06 |  |
| fullName | JESUS ​​ALFREDO GUZMAN SALAZAR |  |
| documentType | CE |  |
| documentNumber | 44871740 |  |
| fullName | ANUAR DE JESUS ​​HERNANDEZ GARCIA |  |
| dateOfBirth | 02/18/1983 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/dea?documentType=CURP&documentNumber=GUSJ860517HJCZLS06" \
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

        "documentNumber": "GUSJ860517HJCZLS06",

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

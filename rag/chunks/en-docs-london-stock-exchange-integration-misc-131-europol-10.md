---
id: "en-docs-london-stock-exchange-integration-misc-131-europol-10"
title: "Other — Verifik public API — 131. EUROPOL"
sourcePath: "docs/london-stock-exchange-integration/misc.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "usa"
  - "london-stock-exchange-integration"
endpoint: "/v2/usa/vehicle"
sourceAnchor: "131. EUROPOL"
slug: "/london-stock-exchange-integration/misc"
url: "https://docs.verifik.co/london-stock-exchange-integration/misc"
---

# Other — Verifik public API
**API path(s):** /v2/usa/vehicle

## 131. EUROPOL

**Location in collection:** v2 › europol › EUROPOL

**What it does (summary):**

The Europol Verification API allows users to verify whether a specific document number and name are found in the Europol database.

This can be useful for companies and organizations to verify the identity of their customers or employees.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/europol?documentType=CCVE&documentNumber=25622914
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CCVE | (Required) Document type. Allowed values: CC,CE,PA,RC,,PEP,CCVE,NIT,CURP,DNI, CCEC. |
| documentNumber | 25622914 | (Required) Document number of the person to be consulted, without spaces or periods. |
| fullName | MUNTEANU, ADRIAN |  |
| dateOfBirth | 02/18/1983 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/europol?documentType=CCVE&documentNumber=25622914" \
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

        "documentNumber": "25622914",

        "documentType": "CCVE",

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

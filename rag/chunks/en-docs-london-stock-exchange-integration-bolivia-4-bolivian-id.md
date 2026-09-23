---
id: "en-docs-london-stock-exchange-integration-bolivia-4-bolivian-id"
title: "Bolivia — Verifik public API — 4. Bolivian ID"
sourcePath: "docs/london-stock-exchange-integration/bolivia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "bo"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/bo/cedula?documenttype=ci&documentnumber=4511200&dateofbirth=27/03/1978"
  - "/v2/bo/company?documenttype=nit&documentnumber=5287278014"
  - "/v2/bo/vehicle?plate=1852phd"
sourceAnchor: "4. Bolivian ID"
slug: "/london-stock-exchange-integration/bolivia"
url: "https://docs.verifik.co/london-stock-exchange-integration/bolivia"
---

# Bolivia — Verifik public API
**API path(s):** /v2/bo/cedula?documenttype=ci&documentnumber=4511200&dateofbirth=27/03/1978, /v2/bo/company?documenttype=nit&documentnumber=5287278014, /v2/bo/vehicle?plate=1852phd

## 4. Bolivian ID

**English** (this page) · [Versión en español](/verifik-es/london-stock-exchange-integration/bolivia/)

# Bolivia

## 4. Bolivian ID

**Location in the collection:** v2 › bo › cedula › Bolivian Cedula

**What it does (summary):**

The Bolivian Citizen Identification API allows you to obtain basic information about a Bolivian citizen based on their national identification number and date of birth.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/bo/cedula?documentType=CI&documentNumber=4511200&dateOfBirth=27/03/1978
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CI | (Required) Document type. Allowed value: CI. |
| documentNumber | 4511200 |  |
| dateOfBirth | 03/27/1978 | (Required) Date of birth of the person to be consulted, valid format: dd/mm/yyyy |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/bo/cedula?documentType=CI&documentNumber=4511200&dateOfBirth=27/03/1978" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "LIDIA",

            "IRIARTE",

            "TORREZ"

        ],

        "dateOfBirth": "1978-03-27",

        "documentNumber": "4511200",

        "documentType": "CI",

        "firstName": "LIDIA",

        "fullName": "LIDIA IRIARTE TORREZ",

        "lastName": "IRIARTE TORREZ"

    },

    "signature": {

        "dateTime": "April 9, 2026 2:51 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "91IL9"

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

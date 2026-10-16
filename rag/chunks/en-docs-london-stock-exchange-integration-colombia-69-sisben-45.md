---
id: "en-docs-london-stock-exchange-integration-colombia-69-sisben-45"
title: "Colombia — Verifik public API — 69. sisben"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "69. sisben"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 69. sisben

**Location in collection:** v2 › co › sisben › sisben

**What it does (summary):**

The SENA Certificates API allows developers to access certification data of people who have completed courses with the National Learning Service (SENA), a Colombian institution that offers training and technical education. By providing parameters such as the document type and the person's number, the API returns a response in JSON format that includes information about the title, type, program, certification date, and download link of each certificate obtained by the person.

This API can be used to automate certificate verification processes or to create custom certificate management applications.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/sisben?documentType=CC&documentNumber=1121329661
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CC | (Required) Document type. Valid parameters: CC, , CE, PA, RC, PEP.  |
| documentNumber | 1121329661 | (Required) Document number of the person to be consulted, without spaces or periods. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/sisben?documentType=CC&documentNumber=1121329661" \
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

        "documentType": "CC",

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

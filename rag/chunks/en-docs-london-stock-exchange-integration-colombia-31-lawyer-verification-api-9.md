---
id: "en-docs-london-stock-exchange-integration-colombia-31-lawyer-verification-api-9"
title: "Colombia — Verifik public API — 31. Lawyer Verification API"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "31. Lawyer Verification API"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 31. Lawyer Verification API

**Location in collection:** v2 › co › branch › lawyers › Lawyer Verification API

**What it does (summary):**

The Lawyer Verification API provides a comprehensive solution to verify the professional credentials of lawyers in Colombia. This access point allows you to validate a lawyer's document number and type and obtain essential information about their professional status.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/rama/abogados?documentType=CC&documentNumber=7570624
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CC | (Required) Document type. Valid parameters: CC, NIT, CE. |
| documentNumber | 7570624 | (Required) Document number of the person for whom you want to search for judicial processes. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/rama/abogados?documentType=CC&documentNumber=7570624" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "FABIAN",

            "ENRIQUE",

            "DAZA",

            "MORALES"

        ],

        "documentNumber": "7570624",

        "documentType": "CC",

        "firstName": "FABIAN ENRIQUE",

        "fullName": "FABIAN ENRIQUE DAZA MORALES",

        "lastName": "DAZA MORALES",

        "results": [

            {

                "contactId": "df541c14-ed72-e511-80f1-005056b16b17",

                "documentNumber": "7570624",

                "documentTypeId": "1",

                "documentTypeName": "Cédula de ciudadanía",

                "firstName": "FABIAN ENRIQUE",

                "lastName": "DAZA MORALES",

                "nonValidityReason": " - ",

                "numberOfRecords": "1",

                "personalEmail": "-",

                "statusName": "Vigente",

                "tarcarliceNumber": "152806"

            }

        ]

    },

    "signature": {

        "dateTime": "April 9, 2026 3:13 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "AJ6NP"

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

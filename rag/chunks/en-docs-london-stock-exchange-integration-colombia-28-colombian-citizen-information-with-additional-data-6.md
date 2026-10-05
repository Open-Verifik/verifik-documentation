---
id: "en-docs-london-stock-exchange-integration-colombia-28-colombian-citizen-information-with-additional-data-6"
title: "Colombia — Verifik public API — 28. Colombian Citizen Information with Additional Data"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "28. Colombian Citizen Information with Additional Data"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 28. Colombian Citizen Information with Additional Data

**Location in the collection:** v2 › co › migracion › PPT › Colombian Citizen Information with Additional Data

**What it does (summary):**

The endpoint "Colombian Citizen Identification Information with Additional Data" allows you to obtain additional information about a Colombian citizen's identification document beyond their basic identification information. This endpoint provides data such as date of birth, gender, and whether the person is alive, among others.

To use this endpoint, you must provide the identification number and type of identification document of the Colombian citizen. Upon successful verification, the response will contain not only the Colombian citizen's full name, first name, last name, and identification number, but also their date of birth, gender, and other relevant data.

Note: Please note that this endpoint is designed exclusively for identification documents of Colombian citizens. For other countries and ID document types, see the documentation for the appropriate endpoint.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/foreigner-id/ppt?documentNumber=5519356&expeditionDate=01/12/2023
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentNumber | 5519356 | (Required) Document number of the person to be consulted, without spaces or periods. |
| expeditionDate | 12/01/2023 | (Required) Date of issue of the document. Valid format: DD/MM/YYYY. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/foreigner-id/ppt?documentNumber=5519356&expeditionDate=01/12/2023" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "NORIS",

            "ESMERALDA",

            "RODRIGUEZ",

            "MEDINA"

        ],

        "documentNumber": "5519356",

        "documentType": "PPT",

        "expeditionDate": "2023-12-01T00:00:00.000Z",

        "expirationDate": "30/05/2031",

        "firstName": "NORIS ESMERALDA",

        "fullName": "NORIS ESMERALDA RODRIGUEZ MEDINA",

        "lastName": "RODRIGUEZ MEDINA",

        "status": "VIGENTE"

    },

    "signature": {

        "dateTime": "April 9, 2026 3:09 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "ILQSK"

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

    "code": "Conflict",

    "message": "Endpoint out of service."

}
```

---

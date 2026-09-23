---
id: "en-docs-london-stock-exchange-integration-colombia-38-comptroller-s-copy-certificate-api-16"
title: "Colombia — Verifik public API — 38. Comptroller's Copy Certificate API"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "38. Comptroller's Copy Certificate API"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 38. Comptroller's Copy Certificate API

**Location in the collection:** v2 › co › comptroller › certificate › Comptroller's Certificate API Copy

**What it does (summary):**

The Comptroller's Certificate API allows you to verify a certificate of good conduct issued by the Comptroller's Office of Colombia. Simply provide the document type and number, and the API will return the lookup date and a base64-encoded PDF of the certificate. 

The API response is certified by Verifik.co to ensure the authenticity of the data. Use this API to quickly and easily confirm the good conduct of a Colombian company or individual.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/contraloria/certificado?documentType=CC&documentNumber=1121329661
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CC | (Required) Document type. Valid parameters: CC, CE, PA, PEP.  |
| documentNumber | 1121329661 | (Required) Document number of the person to be consulted, without spaces or periods. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/contraloria/certificado?documentType=CC&documentNumber=1121329661" \
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

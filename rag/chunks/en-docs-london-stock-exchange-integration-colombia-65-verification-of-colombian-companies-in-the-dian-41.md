---
id: "en-docs-london-stock-exchange-integration-colombia-65-verification-of-colombian-companies-in-the-dian-41"
title: "Colombia — Verifik public API — 65. Verification of Colombian Companies in the DIAN"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "65. Verification of Colombian Companies in the DIAN"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 65. Verification of Colombian Companies in the DIAN

**Location in the collection:** v2 › co › company › dian › Verification of Colombian Companies in the DIAN

**What it does (summary):**

The Colombia DIAN Company Verification API allows you to verify the registration status and information of Colombian companies registered with the DIAN (National Tax and Customs Directorate). Simply provide the NIT (Tax Identification Number) and the type of document, and the API will return the registration date, status and name or company name of the company.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/company/dian?documentType=NIT&documentNumber=80086615
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | NIT | (Required) Valid parameter: NIT |
| documentNumber | 80086615 | (Required) NIT of the company, without spaces, points and without verification number. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/company/dian?documentType=NIT&documentNumber=80086615" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentType": "NIT",

        "documentNumber": "80086615",

        "legalName": "EMPRESA EJEMPLO SA",

        "status": "ACTIVO"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "CMPY1"

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

    "message": "documentNumber invalid format."

}
```

---

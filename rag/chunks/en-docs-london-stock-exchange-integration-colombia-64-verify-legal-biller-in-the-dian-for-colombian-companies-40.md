---
id: "en-docs-london-stock-exchange-integration-colombia-64-verify-legal-biller-in-the-dian-for-colombian-companies-40"
title: "Colombia — Verifik public API — 64. Verify Legal Biller in the DIAN for Colombian Companies"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "64. Verify Legal Biller in the DIAN for Colombian Companies"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 64. Verify Legal Biller in the DIAN for Colombian Companies

**Location in the collection:** v2 › co › company › dian › invoicer › Verify Legal Invoice in the DIAN for Colombian Companies

**What it does (summary):**

This API allows you to verify if a company is registered with the DIAN (National Tax and Customs Directorate) as a legal invoicer. A successful response indicates that the company is registered as such.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/company/dian/invoicer?documentType=NIT&documentNumber=901708460
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | NIT | (Required) Valid parameter: NIT |
| documentNumber | 901708460 | (Required) NIT of the company, without spaces, points and without verification number. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/company/dian/invoicer?documentType=NIT&documentNumber=901708460" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentType": "NIT",

        "documentNumber": "901708460",

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

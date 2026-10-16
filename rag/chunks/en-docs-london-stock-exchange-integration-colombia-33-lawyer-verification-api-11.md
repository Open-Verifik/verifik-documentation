---
id: "en-docs-london-stock-exchange-integration-colombia-33-lawyer-verification-api-11"
title: "Colombia — Verifik public API — 33. Lawyer Verification API"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "33. Lawyer Verification API"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 33. Lawyer Verification API

**Location in collection:** v2 › co › branch › files › Lawyer Verification API

**What it does (summary):**

The Lawyer Verification API provides a comprehensive solution to verify the professional credentials of lawyers in Colombia. This access point allows you to validate a lawyer's document number and type and obtain essential information about their professional status.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/rama/juzgado/expedientes?documentType=CC&documentNumber=16452888&city=CALI
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CC | (Required) Document type. Valid parameters: CC, NIT, CE. |
| documentNumber | 16452888 | (Required) Document number of the person for whom you want to search for judicial processes. |
| city ​​| CALI |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/rama/juzgado/expedientes?documentType=CC&documentNumber=16452888&city=CALI" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "appeal": "00",

        "city": "CALI",

        "codeRoom": "04",

        "consOffice": "002",

        "corporation": "40",

        "court": "8021",

        "courtOfepms": "002",

        "documentNumber": "16452888",

        "documentType": "CC",

        "filingNumber": "76892400400220030002100",

        "municipality": "76892",

        "name": "MARCOS - HERNANDEZ",

        "receiptDate": "27/8/2010",

        "representative": "JOSE  ALBEIRO PARRA  PARRA",

        "year": "2003"

    },

    "signature": {

        "dateTime": "April 9, 2026 3:14 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "YG6AF"

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

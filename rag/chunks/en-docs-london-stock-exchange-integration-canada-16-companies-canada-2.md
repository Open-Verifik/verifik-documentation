---
id: "en-docs-london-stock-exchange-integration-canada-16-companies-canada-2"
title: "Canada — Verifik public API — 16. Companies Canada"
sourcePath: "docs/london-stock-exchange-integration/canada.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "ca"
  - "london-stock-exchange-integration"
endpoint: "/v2/ca/ontario/driver-license"
sourceAnchor: "16. Companies Canada"
slug: "/london-stock-exchange-integration/canada"
url: "https://docs.verifik.co/london-stock-exchange-integration/canada"
---

# Canada — Verifik public API
**API path(s):** /v2/ca/ontario/driver-license

## 16. Companies Canada

**Location in collection:** v2 › ca › company › Companies Canada

**What it does (summary):**

The Ontario Driver's License API allows you to quickly obtain essential information about a driver's license issued in the province of Ontario, Canada. By providing the document number, you can access details such as the license status and the associated verification number.

Use this API to validate and verify the authenticity of Ontario driver's licenses efficiently. Whether you need to confirm the validity of a driver's license for identification or regulatory purposes, this API provides accurate and up-to-date license information.

Integrate this API seamlessly into your systems to enhance your verification processes and maintain compliance with Ontario's driver's license requirements. Empower your applications with the capability to verify Ontario driver's licenses with ease.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/ca/company?business=BAI HENG PACKAGING SUPPLIES INC&province=ON
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| business | BAI HENG PACKAGING SUPPLIES INC |  |
| province | ON |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/ca/company?business=BAI HENG PACKAGING SUPPLIES INC&province=ON" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "business": "BAI HENG PACKAGING SUPPLIES INC",

        "businessNumber": "783439201",

        "businessType": "ONTARIO BUSINESS CORP.",

        "compayName": "BAI HENG PACKAGING SUPPLIES INC.",

        "province": "ON",

        "regOfficeCity": "Richmond Hill",

        "regOfficeProvince": "Ontario",

        "registryId": "2859292",

        "status": "Active",

        "statusDate": "2021-08-10"

    },

    "signature": {

        "dateTime": "April 9, 2026 2:56 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "M38Z1"

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

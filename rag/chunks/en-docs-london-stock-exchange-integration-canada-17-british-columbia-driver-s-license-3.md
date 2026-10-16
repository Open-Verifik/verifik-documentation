---
id: "en-docs-london-stock-exchange-integration-canada-17-british-columbia-driver-s-license-3"
title: "Canada — Verifik public API — 17. British Columbia Driver's License"
sourcePath: "docs/london-stock-exchange-integration/canada.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "ca"
  - "london-stock-exchange-integration"
endpoint: "/v2/ca/ontario/driver-license"
sourceAnchor: "17. British Columbia Driver's License"
slug: "/london-stock-exchange-integration/canada"
url: "https://docs.verifik.co/london-stock-exchange-integration/canada"
---

# Canada — Verifik public API
**API path(s):** /v2/ca/ontario/driver-license

## 17. British Columbia Driver's License

**Location in collection:** v2 › ca › british-columbia › driver-license › British Columbia Driver License

**What it does (summary):**

The British Columbia Driver License Verification API offers a simple method to verify the authenticity and validity of a driver's license in the province of British Columbia, Canada. By utilizing this API, you can quickly validate a driver's license based on the provided document number and last name.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/ca/british-columbia/driver-license?documentNumber=7793458&lastName=JIWA
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentNumber | 7793458 | (Required) Driver's license to consult, all data must be entered exactly as found in this document, additionally keep in mind that it only applies to Quebec licenses, another license will fail for this service. |
| lastName | JIWA | (Required) Last name that appears in the Dribver License |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/ca/british-columbia/driver-license?documentNumber=7793458&lastName=JIWA" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentNumber": "7793458",

        "lastName": "JIWA",

        "valid": true

    },

    "signature": {

        "dateTime": "April 9, 2026 2:56 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "VLEVD"

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

---
id: "en-docs-london-stock-exchange-integration-misc-120-ssn-social-security-number-verification-4"
title: "Other — Verifik public API — 120. SSN (Social Security Number) Verification"
sourcePath: "docs/london-stock-exchange-integration/misc.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "usa"
  - "london-stock-exchange-integration"
endpoint: "/v2/usa/vehicle"
sourceAnchor: "120. SSN (Social Security Number) Verification"
slug: "/london-stock-exchange-integration/misc"
url: "https://docs.verifik.co/london-stock-exchange-integration/misc"
---

# Other — Verifik public API
**API path(s):** /v2/usa/vehicle

## 120. SSN (Social Security Number) Verification

**Location in collection:** v2 › usa › ssn › SSN (Social Security Number) Verification

**What it does (summary):**

The SSN (Social Security Number) Verification API is a powerful tool for verifying Social Security Numbers issued in the United States. This API can be used to quickly validate the issuing status and first year of issuance of an SSN. Returns a response in JSON format that includes the first year the SSN was issued, the issuing state, the SSN itself, and whether it is valid or not.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/usa/ssn?documentNumber=769-82-2324
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentNumber | 769-82-2324 | (Required) SSN to consult, it must be written as is and as found in this document. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/usa/ssn?documentNumber=769-82-2324" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentNumber": "769-82-2324"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "GNRC1"

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

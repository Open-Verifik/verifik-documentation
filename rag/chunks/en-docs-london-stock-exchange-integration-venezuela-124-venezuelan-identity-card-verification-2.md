---
id: "en-docs-london-stock-exchange-integration-venezuela-124-venezuelan-identity-card-verification-2"
title: "Venezuela — Verifik public API — 124. Venezuelan Identity Card Verification"
sourcePath: "docs/london-stock-exchange-integration/venezuela.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "ve"
  - "london-stock-exchange-integration"
endpoint: "/v2/ve/cedula"
sourceAnchor: "124. Venezuelan Identity Card Verification"
slug: "/london-stock-exchange-integration/venezuela"
url: "https://docs.verifik.co/london-stock-exchange-integration/venezuela"
---

# Venezuela — Verifik public API
**API path(s):** /v2/ve/cedula

## 124. Venezuelan Identity Card Verification

**Location in the collection:** v2 › ve › foreign ID card › Venezuelan Identity Card Verification

**What it does (summary):**

The Venezuelan Identity Card Verification API allows users to verify the authenticity of a Venezuelan identity card by providing the document number. The API returns the full name of the holder, the first and last name separately, and the document type.

This information can be used by companies and organizations to verify the identity of their customers, employees or partners.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/ve/foreigner-id?documentNumber=27976032
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentNumber | 27976032 | (Required) Document number to consult, without spaces or periods. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/ve/foreigner-id?documentNumber=27976032" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentNumber": "27976032"

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

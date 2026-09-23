---
id: "en-docs-london-stock-exchange-integration-canada-15-ontario-driver-s-license"
title: "Canada — Verifik public API — 15. Ontario Driver's License"
sourcePath: "docs/london-stock-exchange-integration/canada.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "ca"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/ca/british-columbia/driver-license"
  - "/v2/ca/company"
  - "/v2/ca/ontario/driver-license"
sourceAnchor: "15. Ontario Driver's License"
slug: "/london-stock-exchange-integration/canada"
url: "https://docs.verifik.co/london-stock-exchange-integration/canada"
---

# Canada — Verifik public API
**API path(s):** /v2/ca/british-columbia/driver-license, /v2/ca/company, /v2/ca/ontario/driver-license

## 15. Ontario Driver's License

**English** (this page) · [Versión en español](/verifik-es/london-stock-exchange-integration/canada/)

# Canada

## 15. Ontario Driver's License

**Location in collection:** v2 › ca › ontario › driver-license › Ontario Driver License

**What it does (summary):**

The Ontario Driver's License API allows you to quickly obtain essential information about a driver's license issued in the province of Ontario, Canada. By providing the document number, you can access details such as the license status and the associated verification number.

Use this API to validate and verify the authenticity of Ontario driver's licenses efficiently. Whether you need to confirm the validity of a driver's license for identification or regulatory purposes, this API provides accurate and up-to-date license information.

Integrate this API seamlessly into your systems to enhance your verification processes and maintain compliance with Ontario's driver's license requirements. Empower your applications with the capability to verify Ontario driver's licenses with ease.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/ca/ontario/driver-license?documentNumber=S62912794485721
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentNumber | S62912794485721 | (Required) Driver's license to consult, all data must be entered exactly as found in this document, additionally keep in mind that it only applies to Ontario licenses, another license will fail for this service. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/ca/ontario/driver-license?documentNumber=S62912794485721" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentNumber": "S62912794485721"

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

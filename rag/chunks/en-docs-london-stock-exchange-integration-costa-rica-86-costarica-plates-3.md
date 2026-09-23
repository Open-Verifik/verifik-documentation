---
id: "en-docs-london-stock-exchange-integration-costa-rica-86-costarica-plates-3"
title: "Costa Rica — Verifik public API — 86. COSTARICA PLATES"
sourcePath: "docs/london-stock-exchange-integration/costa-rica.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "cr"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/cr/cedula?documenttype=cccr&documentnumber=206820588"
  - "/v2/cr/company?documenttype=nite&documentnumber=3101122876"
  - "/v2/cr/vehicle?plate=123456"
sourceAnchor: "86. COSTARICA PLATES"
slug: "/london-stock-exchange-integration/costa-rica"
url: "https://docs.verifik.co/london-stock-exchange-integration/costa-rica"
---

# Costa Rica — Verifik public API
**API path(s):** /v2/cr/cedula?documenttype=cccr&documentnumber=206820588, /v2/cr/company?documenttype=nite&documentnumber=3101122876, /v2/cr/vehicle?plate=123456

## 86. COSTARICA PLATES

**Location in the collection:** v2 › cr › Vehicles › COSTARICA PLATES

**What it does (summary):**

This API allows you to verify the authenticity of a Costa Rican National Identity Card by providing the document number. The response includes the full name of the cardholder, as well as their first and last names separately.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/cr/vehicle?plate=123456
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| plates | 123456 | 221242 123456 |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/cr/vehicle?plate=123456" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "123456",

        "brand": "MAKE",

        "model": "MODEL",

        "year": "2020",

        "vehicleType": "SEDAN"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "VHCL1"

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

    "message": "plate format invalid."

}
```

---

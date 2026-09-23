---
id: "en-docs-london-stock-exchange-integration-brazil-13-brazilian-public-vehicle-6"
title: "Brazil: Verifik public API — 13. Brazilian Public Vehicle"
sourcePath: "docs/london-stock-exchange-integration/brazil.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "br"
  - "london-stock-exchange-integration"
endpoint: "/v2/br/cedula"
sourceAnchor: "13. Brazilian Public Vehicle"
slug: "/london-stock-exchange-integration/brazil"
url: "https://docs.verifik.co/london-stock-exchange-integration/brazil"
---

# Brazil: Verifik public API
**API path(s):** /v2/br/cedula

## 13. Brazilian Public Vehicle

**Location in the collection:** v2 › br › public vehicle › Brazilian Public Vehicle

**What it does (summary):**

The Brazilian Vehicle Verification API allows you to verify the authenticity of a Brazilian vehicle information by providing the vehicle's license plate number. The API returns detailed information about the vehicle, including make, model, year of manufacture, engine, transmission, fuel type, and more.

This API is useful for car dealers, insurance companies, and any company or individual who wants to verify the information of a Brazilian vehicle.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/br/public/vehicle?plate=CDV2172
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| plate | CDV2172 | (Required) License plate. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/br/public/vehicle?plate=CDV2172" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "CDV2172",

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

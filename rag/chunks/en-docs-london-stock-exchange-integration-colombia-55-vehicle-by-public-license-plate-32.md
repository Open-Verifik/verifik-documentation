---
id: "en-docs-london-stock-exchange-integration-colombia-55-vehicle-by-public-license-plate-32"
title: "Colombia — Verifik public API — 55. Vehicle by public license plate"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "55. Vehicle by public license plate"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 55. Vehicle by public license plate

**Location in the collection:** v2 › co › runt › Vehicle by Public License Plate

**What it does (summary):**

The Vehicle Information API allows you to obtain detailed information about a vehicle in Colombia by providing its license plate number and its owner's document number. With this API, you can access information such as the make, model, color and technical data of the vehicle. Additionally, you can obtain data on the vehicle's insurance history, including SOAT and liability policies, as well as technical inspections and warranties.

This API provides a valuable resource for businesses and individuals looking to access accurate and up-to-date information about vehicles in Colombia.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/public/vehicle?plate=CRL299
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| plates | CRL299 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/public/vehicle?plate=CRL299" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "CRL299",

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

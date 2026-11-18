---
id: "en-docs-london-stock-exchange-integration-ecuador-92-vehicle-information-search-api-3"
title: "Ecuador — Verifik public API — 92. Vehicle Information Search API"
sourcePath: "docs/london-stock-exchange-integration/ecuador.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "ec"
  - "london-stock-exchange-integration"
endpoint: "/v2/ec/cedula"
sourceAnchor: "92. Vehicle Information Search API"
slug: "/london-stock-exchange-integration/ecuador"
url: "https://docs.verifik.co/london-stock-exchange-integration/ecuador"
---

# Ecuador — Verifik public API
**API path(s):** /v2/ec/cedula

## 92. Vehicle Information Search API

**Location in collection:** v2 › ec › vehicle › license plate › Vehicle Information Lookup API

**What it does (summary):**

With the Vehicle Information Search API for Ecuador License Plates, you can easily obtain valuable information about a vehicle by simply entering its license plate number. Get details such as the make and model of the vehicle, its year of manufacture and the date of its last registration. You will also be able to find out when the vehicle's registration expires, its service status and if it has any restrictions on its sale. Additionally, the API can provide additional information on the cylinder capacity, color and make of the vehicle.

This API is ideal for anyone looking to buy or sell a used car in Ecuador, or for companies that need to verify vehicle information for their operations.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/ec/vehiculo/placa/multas?plate=ABB4568
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| plates | ABB4568 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/ec/vehiculo/placa/multas?plate=ABB4568" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "ABB4568",

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

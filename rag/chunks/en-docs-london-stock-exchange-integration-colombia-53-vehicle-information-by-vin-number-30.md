---
id: "en-docs-london-stock-exchange-integration-colombia-53-vehicle-information-by-vin-number-30"
title: "Colombia — Verifik public API — 53. Vehicle Information by VIN Number"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "53. Vehicle Information by VIN Number"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 53. Vehicle Information by VIN Number

**Location in collection:** v2 › co › runt › vehicle-by-vin › Vehicle Information by VIN Number

**What it does (summary):**

Verifik's Vehicle Information API allows you to obtain details about a vehicle registered in Colombia using its VIN (Vehicle Identification Number). This API provides information such as vehicle status, type of service, vehicle class, make, model, color and technical specifications such as weight and number of seats. Additionally, this API provides information about insurance policies and vehicle inspection records.

To use this API, simply provide the vehicle's VIN as a parameter and the API will return a JSON response with the vehicle details.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/runt/vehicle-by-vin?vin=VR3KBDGH5TS001559
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| vin | VR3KBDGH5TS001559 | (Required) Unique VIN of the vehicle to consult. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/runt/vehicle-by-vin?vin=VR3KBDGH5TS001559" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "ABC123",

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

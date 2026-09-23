---
id: "en-docs-london-stock-exchange-integration-brazil-10-data-sheet-4"
title: "Brazil: Verifik public API — 10. data sheet"
sourcePath: "docs/london-stock-exchange-integration/brazil.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "br"
  - "vehicle"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/br/background-check"
  - "/v2/br/cedula"
  - "/v2/br/company"
  - "/v2/br/public/cedula"
  - "/v2/br/public/vehicle"
  - "/v2/br/vehicle"
  - "/v2/br/vehicle/data-sheet-by-plate"
  - "/v2/vehicle/data-sheet"
sourceAnchor: "10. data sheet"
slug: "/london-stock-exchange-integration/brazil"
url: "https://docs.verifik.co/london-stock-exchange-integration/brazil"
---

# Brazil: Verifik public API
**API path(s):** /v2/br/background-check, /v2/br/cedula, /v2/br/company, /v2/br/public/cedula, /v2/br/public/vehicle, /v2/br/vehicle, /v2/br/vehicle/data-sheet-by-plate, /v2/vehicle/data-sheet

## 10. data sheet

**Location in collection:** v2 › br › data sheet › data sheet

**What it does (summary):**

Returns a **vehicle data sheet** from catalog-style inputs: **brand**, **model**, **year**, **version**, and **vehicleType** (`cars` or `motorcycles`). This is the global endpoint `v2/vehicle/data-sheet` (not Brazil-specific); use it when you have make/model/year rather than a license plate.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/vehicle/data-sheet?brand=CHEVROLET&model=cruze&year=2011&version=LT&vehicleType=cars
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| brand | CHEVROLET | (Required) Vehicle brand. |
| model | cruze | (Required) Model name. |
| year | 2011 | (Required) Model year. |
| version | LT | Trim / version. |
| vehicleType | cars | `cars` or `motorcycles`. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/vehicle/data-sheet?brand=CHEVROLET&model=cruze&year=2011&version=LT&vehicleType=cars" \
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

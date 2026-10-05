---
id: "en-docs-london-stock-exchange-integration-brazil-8-brazilian-vehicle-2"
title: "Brazil: Verifik public API — 8. Brazilian Vehicle"
sourcePath: "docs/london-stock-exchange-integration/brazil.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "br"
  - "london-stock-exchange-integration"
endpoint: "/v2/br/cedula"
sourceAnchor: "8. Brazilian Vehicle"
slug: "/london-stock-exchange-integration/brazil"
url: "https://docs.verifik.co/london-stock-exchange-integration/brazil"
---

# Brazil: Verifik public API
**API path(s):** /v2/br/cedula

## 8. Brazilian Vehicle

**Location in collection:** v2 › br › vehicle › Brazilian Vehicle

**What it does (summary):**

The Brazilian Vehicle Verification API allows you to verify the authenticity of a Brazilian vehicle information by providing the vehicle's license plate number. The API returns detailed information about the vehicle, including make, model, year of manufacture, engine, transmission, fuel type, and more.

This API is useful for car dealers, insurance companies, and any company or individual who wants to verify the information of a Brazilian vehicle.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/br/vehicle?plate=PZY7H82
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| plate | PZY7H82 | (Required) License plate (no spaces). |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/br/vehicle?plate=PZY7H82" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{
  "data": {
    "bodyType": "AU - HATCH PEQUENO",
    "brand": "HYUNDAI",
    "chassis": "9BHBG51CAJP791679",
    "color": "BRANCA",
    "country": "Brasil",
    "denatranWarning": "",
    "doors": "0",
    "engine": "998",
    "factory": "NACIONAL",
    "fipeCodes": [],
    "fuelType": "ALCOOL / GASOLINA",
    "irregularitiesCount": 0,
    "irregularityCode": "",
    "manufacturer": "HYUNDAI",
    "model": "HYUNDAI/HB20 1.0M COMFOR",
    "modelYear": "2018",
    "plate": "PZY7H82",
    "transmission": "",
    "vehicle": "AUTOMOVEL",
    "version": "HB20",
    "yearOfManufacture": "2017"
  },
  "signature": {
    "dateTime": "June 30, 2026 3:10 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "0ZNLG"
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

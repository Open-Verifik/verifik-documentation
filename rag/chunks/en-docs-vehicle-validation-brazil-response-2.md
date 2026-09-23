---
id: "en-docs-vehicle-validation-brazil-response-2"
title: "Vehicle Information — Response"
sourcePath: "docs/vehicle-validation/brazil.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "br"
  - "vehicle-validation"
endpoints:
  - "/v2/br/vehicle"
  - "/v2/br/vehicle?plate=pzy7h82"
sourceAnchor: "Response"
slug: "/vehicle-validation/brazil"
url: "https://docs.verifik.co/vehicle-validation/brazil"
---

# Vehicle Information
**API path(s):** /v2/br/vehicle, /v2/br/vehicle?plate=pzy7h82

## Response

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
  }
}
```

  
  

```json
{
  "code": "NotFound",
  "message": "Record not found."
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing plate\n"
}
```

  
  

```json
{
  "code": "InternalServerError",
  "message": "Server error."
}
```

### Response fields

| Field | Type | Description |
| ----- | ---- | ----------- |
| `bodyType` | string | Vehicle type label returned by the registry. |
| `brand` | string | Vehicle make. |
| `chassis` | string | Vehicle chassis or VIN value returned by the registry. |
| `color` | string | Registered vehicle color. |
| `country` | string | Country of the vehicle record. |
| `denatranWarning` | string | Denatran or registry status notice when available; often an empty string. |
| `doors` | string | Passenger capacity returned by the registry; may be `"0"` when the source does not provide it. |
| `engine` | string | Engine displacement or engine reference from the registry. |
| `factory` | string | Origin or manufacturing region. |
| `fipeCodes` | string[] | FIPE reference codes related to the vehicle when available. |
| `fuelType` | string | Registered fuel type. |
| `irregularitiesCount` | number | Number of active restrictions or irregularities found. |
| `irregularityCode` | string | Active restriction labels joined in one string; empty when there are no restrictions. |
| `manufacturer` | string | Manufacturer name returned by the registry. |
| `model` | string | Registered model description. |
| `modelYear` | string | Model year. |
| `plate` | string | Normalized plate returned by the lookup. |
| `transmission` | string | Transmission value when available; registry-sourced records can return an empty string. |
| `vehicle` | string | Registry vehicle category. |
| `version` | string | Best FIPE model/version match when available. |
| `yearOfManufacture` | string | Manufacturing year. |

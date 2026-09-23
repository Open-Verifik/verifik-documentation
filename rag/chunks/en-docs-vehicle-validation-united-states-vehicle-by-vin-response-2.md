---
id: "en-docs-vehicle-validation-united-states-vehicle-by-vin-response-2"
title: "United States - Vehicle by VIN — Response"
sourcePath: "docs/vehicle-validation/united-states/vehicle-by-vin.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "us"
  - "usa"
  - "vehicle-validation"
endpoints:
  - "/v2/usa/vehicle-by-vin"
  - "/v2/usa/vehicle-by-vin?vin=1g3ak47a7cm535209"
sourceAnchor: "Response"
slug: "/vehicle-validation/united-states/vehicle-by-vin"
url: "https://docs.verifik.co/vehicle-validation/united-states/vehicle-by-vin"
---

# United States - Vehicle by VIN
**API path(s):** /v2/usa/vehicle-by-vin, /v2/usa/vehicle-by-vin?vin=1g3ak47a7cm535209

This service decodes a **17-character vehicle identification number (VIN)** for a U.S. market vehicle and returns structured vehicle attributes (make, model, model year, engine, body class, and related fields) sourced from NHTSA VPIC-style data.

## Response

```json
{
  "data": {
    "make": "OLDSMOBILE",
    "model": "Cutlass",
    "modelYear": "1982",
    "vehicleType": "PASSENGER CAR",
    "vin": "1G3AK47A7CM535209"
  },
  "signature": {
    "dateTime": "October 10, 2025 7:10 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "KFOFL"
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
  "message": "Validation error message for VIN."
}
```

  
  

```json
{
  "code": "InternalServerError",
  "message": "Server error."
}
```

## Features

- **VIN decode**: 17-character VIN validation and decode
- **NHTSA-aligned data**: Structured technical and descriptive fields when available
- **Consistent with plate lookup**: Same normalized vehicle object shape as the U.S. plate endpoint where applicable

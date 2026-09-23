---
id: "en-docs-vehicle-validation-colombia-runt-vehicle-by-vin-response-5"
title: "Vehicle Records by VIN — Response"
sourcePath: "docs/vehicle-validation/colombia/runt-vehicle-by-vin.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoints:
  - "/v2/co/runt/vehicle-by-vin"
  - "/v2/co/runt/vehicle-by-vin?vin=3mvdm2wlaml234946"
sourceAnchor: "Response"
slug: "/vehicle-validation/colombia/runt-vehicle-by-vin"
url: "https://docs.verifik.co/vehicle-validation/colombia/runt-vehicle-by-vin"
---

# Vehicle Records by VIN
**API path(s):** /v2/co/runt/vehicle-by-vin, /v2/co/runt/vehicle-by-vin?vin=3mvdm2wlaml234946

Verifik’s Vehicle Validation by VIN API allows you to query the complete history and technical specifications of a vehicle registered in Colombia using its Vehicle Identification Number (VIN).
This method is particularly useful when the license plate is unavailable or when verifying the authenticity of a vehicle's identity during inspections, as the VIN is a unique, tamper-resistant identifier.

## Response

```json
{
	"code": "NotFound",
	"message": "Record not found."
}
```

  
  

```json
{
	"code": "MissingParameter",
	"message": "missing vin"
}
```

  
  

```json
{
	"code": "InternalServerError",
	"message": "Server error."
}
```

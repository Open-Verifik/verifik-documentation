---
id: "en-docs-vehicle-validation-colombia-runt-vehicle-by-vin-what-information-does-the-api-return"
title: "Vehicle Records by VIN — What information does the API return?"
sourcePath: "docs/vehicle-validation/colombia/runt-vehicle-by-vin.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoints:
  - "/v2/co/runt/vehicle-by-vin"
  - "/v2/co/runt/vehicle-by-vin?vin=3mvdm2wlaml234946"
sourceAnchor: "What information does the API return?"
slug: "/vehicle-validation/colombia/runt-vehicle-by-vin"
url: "https://docs.verifik.co/vehicle-validation/colombia/runt-vehicle-by-vin"
---

# Vehicle Records by VIN
**API path(s):** /v2/co/runt/vehicle-by-vin, /v2/co/runt/vehicle-by-vin?vin=3mvdm2wlaml234946

## What information does the API return?

Verifik’s Vehicle Validation by VIN API allows you to query the complete history and technical specifications of a vehicle registered in Colombia using its Vehicle Identification Number (VIN).

This method is particularly useful when the license plate is unavailable or when verifying the authenticity of a vehicle's identity during inspections, as the VIN is a unique, tamper-resistant identifier.

## What information does the API return?

When a VIN query is made, the API returns comprehensive data from RUNT, including:

-   Detailed technical specifications (engine, chassis, weight, axles)
-   Vehicle make, model, line, and color
-   Current legal status (Active, Cancelled)
-   Insurance history (SOAT) and Technical Inspection (RTM) status
-   Insurer and policy type (Contractual or Extra-contractual Civil Liability, not comprehensive / todo riesgo).
-   Ownership limitations and active alerts
-   Accident and claim history (if available)

This data is crucial for detecting cloned vehicles and validating technical compliance.

## API Reference

### Endpoint

```
GET https://api.verifik.co/v2/co/runt/vehicle-by-vin
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name  | Type   | Required | Description                                     |
| ----- | ------ | -------- | ----------------------------------------------- |
| `vin` | string | Yes      | 17-character VIN to query (no spaces; letters and digits as registered in RUNT). |

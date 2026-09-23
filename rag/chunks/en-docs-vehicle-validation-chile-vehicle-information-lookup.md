---
id: "en-docs-vehicle-validation-chile-vehicle-information-lookup"
title: "\\U0001F1E8\\U0001F1F1 Chile - Vehicle Information — Vehicle Information Lookup"
sourcePath: "docs/vehicle-validation/chile.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "cl"
  - "vehicle-validation"
endpoints:
  - "/v2/cl/vehicle"
  - "/v2/cl/vehicle-soap"
  - "/v2/cl/vehicle/v3"
sourceAnchor: "Vehicle Information Lookup"
slug: "/vehicle-validation/chile"
url: "https://docs.verifik.co/vehicle-validation/chile"
---

# \U0001F1E8\U0001F1F1 Chile - Vehicle Information
**API path(s):** /v2/cl/vehicle, /v2/cl/vehicle-soap, /v2/cl/vehicle/v3

## Vehicle Information Lookup

Chilean vehicle validation service provides comprehensive verification capabilities for vehicle information. This service allows you to retrieve detailed information about vehicles registered in Chile.

Related Chile vehicle endpoints:

- **Vehicle Information (`v2/cl/vehicle`)**: commercial vehicle lookup (Reale / getapi). A **404** means the plate is not in that source—not an outage.
- **Vehicle Technical Review (`v3/cl/vehicle`)**: technical review status and inspection history. See [Chile - Vehicle Technical Review](/vehicle-validation/chile/vehicle-technical-review). Use this route for ficha técnica / revisión (`GET /v3/cl/vehicle`, not `/v2/cl/vehicle/v3`).
- **Vehicle SOAP (`v2/cl/vehicle-soap`)**: mandatory personal accident insurance certificate. See [Chile - Vehicle SOAP](/vehicle-validation/chile/vehicle-soap).

## Vehicle Information Lookup

### Endpoint

```
https://api.verifik.co/v2/cl/vehicle
```

Query by **license plate** (`plate`, no spaces or dots). Typical fields include **make**, **model**, **year**, **VIN/chassis**, **engine**, **color**, **vehicle type**, **fines summary**, and **owner RUT** when the provider exposes them—use for **fleet onboarding**, **collateral checks**, and **claims** workflows. This is not official permiso de circulación; a valid plate can still 404 if it is missing from the commercial source.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `plate` | string | **Yes** | Current format `BB-CC-12` (send as `BBCC12`, four letters + two digits, without spaces or points). | `BBCC12` |

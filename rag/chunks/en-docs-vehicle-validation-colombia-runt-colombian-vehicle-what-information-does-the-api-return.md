---
id: "en-docs-vehicle-validation-colombia-runt-colombian-vehicle-what-information-does-the-api-return"
title: "Vehicle Records by Plate — What information does the API return?"
sourcePath: "docs/vehicle-validation/colombia/runt-colombian-vehicle.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/runt/vehicle-by-plate"
sourceAnchor: "What information does the API return?"
slug: "/vehicle-validation/colombia/runt-colombian-vehicle"
url: "https://docs.verifik.co/vehicle-validation/colombia/runt-colombian-vehicle"
---

# Vehicle Records by Plate
**API path(s):** /v2/co/runt/vehicle-by-plate

## What information does the API return?

Verifik's Vehicle Validation API allows you to query official information registered in Colombia's Registro Único Nacional de Tránsito (RUNT) using the vehicle's license plate number as the main identifier.

This integration is ideal for companies in the automotive, financial, insurance, and mobility sectors that need to confirm the authenticity of vehicle data before approving transactions, issuing insurance policies, or performing control and compliance procedures.

## What information does the API return?

When a license plate query is made, the API returns updated data directly from RUNT, including:

-   Vehicle license plate number
-   Make, line, and model
-   Class and service type
-   Current status (active, canceled, pending)
-   Registration date
-   Registration entity
-   Ownership and registration information

This data enables verification of the existence, legality, and operational status of the queried vehicle.

## API Reference

### Service URL

```
https://api.verifik.co/v2/co/runt/vehicle-by-plate
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name             | Type   | Required | Description                                                             |
| ---------------- | ------ | -------- | ----------------------------------------------------------------------- |
| `documentType`   | string | Yes      | Document type. Allowed values: `CC`, `CE`, `PA`, `NIT`.                   |
| `documentNumber` | string | Yes      | Document number of the owner of the vehicle, without spaces or periods. |
| `plate`          | string | Yes      | Vehicle plate to consult.                                               |

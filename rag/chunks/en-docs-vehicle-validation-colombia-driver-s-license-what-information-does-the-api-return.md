---
id: "en-docs-vehicle-validation-colombia-driver-s-license-what-information-does-the-api-return"
title: "Driver's License — What information does the API return?"
sourcePath: "docs/vehicle-validation/colombia/driver-s-license.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/runt/conductor"
sourceAnchor: "What information does the API return?"
slug: "/vehicle-validation/colombia/driver-s-license"
url: "https://docs.verifik.co/vehicle-validation/colombia/driver-s-license"
---

# Driver's License
**API path(s):** /v2/co/runt/conductor

## What information does the API return?

Verifik's Driver's License Validation API allows you to query official information registered in Colombia's Registro Único Nacional de Tránsito (RUNT) using the driver's identification document number.

This integration is essential for transport companies, car rental agencies, insurers, and logistics platforms that need to verify the legal status and eligibility of drivers before hiring or authorizing vehicle use.

## What information does the API return?

When a document number query is made, the API returns updated data directly from RUNT, including:

-   Driver's full name and document details
-   License status (active, suspended, canceled)
-   License categories (e.g., B1, C1, A2)
-   Expiration dates for each category
-   Medical and aptitude certificate status
-   Traffic fines and infractions history (SIMIT/RUNT)

This data enables verification of the driver's capability and legal standing to operate vehicles.

## API Reference

### Endpoint

```
https://api.verifik.co/v2/co/runt/conductor
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name             | Type   | Required | Description                                                    |
| ---------------- | ------ | -------- | -------------------------------------------------------------- |
| `documentType`   | string | Yes      | Document Type. Allowed values: `CC`, `CE`, `PPT`, `PA`, `NIT`. |
| `documentNumber` | string | Yes      | Driver's document number, without spaces or periods.           |

---
id: "en-docs-vehicle-validation-colombia-runt-vehicle-by-plate-simplified-what-information-does-the-api-return"
title: "Simplified Vehicle Records by Plate in RUNT — What information does the API return?"
sourcePath: "docs/vehicle-validation/colombia/runt-vehicle-by-plate-simplified.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/runt/vehicle-by-plate-simplified"
sourceAnchor: "What information does the API return?"
slug: "/vehicle-validation/colombia/runt-vehicle-by-plate-simplified"
url: "https://docs.verifik.co/vehicle-validation/colombia/runt-vehicle-by-plate-simplified"
---

# Simplified Vehicle Records by Plate in RUNT
**API path(s):** /v2/co/runt/vehicle-by-plate-simplified

## What information does the API return?

Verifik’s Simplified Vehicle Validation API allows you to retrieve essential vehicle information from the Registro Único Nacional de Tránsito (RUNT) using the license plate and owner's document number.

This lightweight version of the vehicle query is designed for applications that need quick verification of vehicle identity and basic characteristics without the extensive data load of insurance and technical inspection history.

## What information does the API return?

When a query is made, the API returns key vehicle details, including:

-   Vehicle license plate number
-   Make, model, and line
-   Color and service type (e.g., Public, Private)
-   Class (e.g., Automobile, Truck)
-   Engine, chassis, and VIN numbers
-   Registration status (Active)

This data is sufficient for basic identity verification and inventory management.

## API Reference

### Endpoint

```
GET https://api.verifik.co/v2/co/runt/vehicle-by-plate-simplified
```

A streamlined version of the vehicle background check from **RUNT** (Registro Único Nacional de Tránsito), focusing on essential legal and physical status markers. Pass **`documentType`**, **`documentNumber`**, and **`plate`** as **query** parameters.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name             | Type   | Required | Description                                                                 |
| ---------------- | ------ | -------- | --------------------------------------------------------------------------- |
| `documentType`   | string | Yes      | Owner document type. Allowed values: `CC`, `CE`, `PA`, `NIT`.                |
| `documentNumber` | string | Yes      | Owner’s document number, without spaces or periods.                          |
| `plate`          | string | Yes      | License plate to query (typically 5–9 characters per API validation rules). |

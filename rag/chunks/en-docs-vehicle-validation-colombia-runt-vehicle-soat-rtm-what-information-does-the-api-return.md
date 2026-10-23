---
id: "en-docs-vehicle-validation-colombia-runt-vehicle-soat-rtm-what-information-does-the-api-return"
title: "SOAT and RTM Validation in RUNT — What information does the API return?"
sourcePath: "docs/vehicle-validation/colombia/runt-vehicle-soat-rtm.md"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/runt/vehiculo"
sourceAnchor: "What information does the API return?"
slug: "/vehicle-validation/colombia/runt-vehicle-soat-rtm"
url: "https://docs.verifik.co/vehicle-validation/colombia/runt-vehicle-soat-rtm"
---

# SOAT and RTM Validation in RUNT
**API path(s):** /v2/co/runt/vehiculo

## What information does the API return?

Verifik’s SOAT and RTM Validation API provides real-time access to the status of mandatory documents for vehicles registered in Colombia: the Mandatory Traffic Accident Insurance (SOAT) and the Mechanical Technical Review (RTM).

This service is critical for ensuring that vehicles comply with Colombian traffic regulations, helping to prevent fines and legal issues.

## What information does the API return?

When a query is made using the license plate and owner's document, the API returns:

-   **SOAT Status**: Validity, policy number, insurer, issuance and expiration dates.
-   **RTM Status**: Validity, certificate number, diagnostic center, issuance and expiration dates.
-   **Vehicle Details**: Make, line, model, color, and registration status.
-   **Owner Verification**: Confirmation of the document number associated with the vehicle.

## API Reference

### Endpoint

```
https://api.verifik.co/v2/co/runt/vehiculo
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name             | Type   | Required | Description                                                             |
| ---------------- | ------ | -------- | ----------------------------------------------------------------------- |
| `documentType`   | string | Yes      | Document type. Allowed values are: CC, CE, PA, RC, NIT.                 |
| `documentNumber` | string | Yes      | Document number of the owner of the vehicle, without spaces or periods. |
| `plate`          | string | Yes      | Vehicle plate to consult.                                               |

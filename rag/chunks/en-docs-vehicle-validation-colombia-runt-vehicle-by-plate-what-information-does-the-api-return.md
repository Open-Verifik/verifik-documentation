---
id: "en-docs-vehicle-validation-colombia-runt-vehicle-by-plate-what-information-does-the-api-return"
title: "Vehicle Records by Plate — What information does the API return?"
sourcePath: "docs/vehicle-validation/colombia/runt-vehicle-by-plate.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/runt/vehicle-by-plate"
sourceAnchor: "What information does the API return?"
slug: "/vehicle-validation/colombia/runt-vehicle-by-plate"
url: "https://docs.verifik.co/vehicle-validation/colombia/runt-vehicle-by-plate"
---

# Vehicle Records by Plate
**API path(s):** /v2/co/runt/vehicle-by-plate

## What information does the API return?

Verifik’s Vehicle Validation API allows you to query official information registered in Colombia’s Registro Único Nacional de Tránsito (RUNT) using the vehicle’s license plate number as the main identifier.

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
-   Insurer and policy type (Contractual or Extra-contractual Civil Liability, not comprehensive / todo riesgo).

This data enables verification of the existence, legality, and operational status of the queried vehicle.

## API Reference

### Endpoint

```
GET https://api.verifik.co/v2/co/runt/vehicle-by-plate
```

Get an **exhaustive history and technical report** for a vehicle in Colombia from **RUNT** using its **license plate**, the owner’s **`documentType`**, and **`documentNumber`** as **query** parameters (SOAT, civil liability policies, technical inspection rows, registration requests, etc., when available).

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

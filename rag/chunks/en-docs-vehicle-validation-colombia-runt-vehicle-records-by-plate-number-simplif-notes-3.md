---
id: "en-docs-vehicle-validation-colombia-runt-vehicle-records-by-plate-number-simplif-notes-3"
title: "Simplified Vehicle Records by Plate in RUNT — Notes"
sourcePath: "docs/vehicle-validation/colombia/runt-vehicle-records-by-plate-number-simplified.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/runt/vehicle-by-plate-simplified"
sourceAnchor: "Notes"
slug: "/vehicle-validation/colombia/runt-vehicle-records-by-plate-number-simplified"
url: "https://docs.verifik.co/vehicle-validation/colombia/runt-vehicle-records-by-plate-number-simplified"
---

# Simplified Vehicle Records by Plate in RUNT
**API path(s):** /v2/co/runt/vehicle-by-plate-simplified

Verifik's Simplified Vehicle Validation API allows you to retrieve essential vehicle information from the Registro Único Nacional de Tránsito (RUNT) using the license plate and owner's document number.
This lightweight version of the vehicle query is designed for applications that need quick verification of vehicle identity and basic characteristics without the extensive data load of insurance and technical inspection history.

## Notes

-   This simplified version provides essential vehicle information without detailed insurance and technical inspection data.
-   Vehicle status "ACTIVO" means the vehicle is currently registered and operational.
-   VIN (Vehicle Identification Number) and chassis numbers are provided for vehicle identification.
-   This service is ideal for basic vehicle verification needs.

---

## Business Use Cases

The Simplified RUNT vehicle query API is ideal for:

-   **Parking Management**: To verify vehicle details at entry/exit points.
-   **Logistics and Fleet Management**: Quick registration of vehicles in internal systems.
-   **Auto Parts Stores**: To confirm vehicle specifications for part compatibility.
-   **Toll Roads and Access Control**: Fast validation of vehicle category.

## Compliance & Data Quality

### Compliance, availability, and accuracy

The API connects directly to official sources such as RUNT, ensuring:

-   Verified and up-to-date information.
-   High availability and optimal response times.
-   Regulatory compliance with data protection laws.

### Additional technical information

-   **Method**: GET
-   **Response format**: JSON
-   **Update frequency**: Real-time
-   **Official source**: RUNT Colombia
-   **Coverage**: Nationwide

## About Verifik

Verifik is an identity verification and compliance platform that connects companies with official data sources across Latin America.

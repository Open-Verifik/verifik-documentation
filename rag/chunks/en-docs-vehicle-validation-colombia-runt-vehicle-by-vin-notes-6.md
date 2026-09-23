---
id: "en-docs-vehicle-validation-colombia-runt-vehicle-by-vin-notes-6"
title: "Vehicle Records by VIN — Notes"
sourcePath: "docs/vehicle-validation/colombia/runt-vehicle-by-vin.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoints:
  - "/v2/co/runt/vehicle-by-vin"
  - "/v2/co/runt/vehicle-by-vin?vin=3mvdm2wlaml234946"
sourceAnchor: "Notes"
slug: "/vehicle-validation/colombia/runt-vehicle-by-vin"
url: "https://docs.verifik.co/vehicle-validation/colombia/runt-vehicle-by-vin"
---

# Vehicle Records by VIN
**API path(s):** /v2/co/runt/vehicle-by-vin, /v2/co/runt/vehicle-by-vin?vin=3mvdm2wlaml234946

Verifik’s Vehicle Validation by VIN API allows you to query the complete history and technical specifications of a vehicle registered in Colombia using its Vehicle Identification Number (VIN).
This method is particularly useful when the license plate is unavailable or when verifying the authenticity of a vehicle's identity during inspections, as the VIN is a unique, tamper-resistant identifier.

## Notes

-   VIN (Vehicle Identification Number) is a unique 17-character identifier for vehicles.
-   This service provides the same comprehensive information as the plate-based service.
-   Vehicle status "ACTIVO" means the vehicle is currently registered and operational.
-   SOAT insurance information is included when available.

---

## Business Use Cases

The RUNT vehicle query API by VIN is essential for:

-   **Vehicle Inspections and Appraisals**: To verify that physical identifiers match official records.
-   **Import/Export Compliance**: To validate vehicle origins and technical characteristics.
-   **Insurance Claims**: To confirm vehicle identity and policy coverage.
-   **Used Car Dealerships**: To prevent fraud by detecting VIN tampering or cloning.

## Compliance & Data Quality

### Compliance, availability, and accuracy

The API connects directly to official sources such as RUNT, ensuring:

-   Verified and up-to-date information.
-   High availability and optimal response times.
-   Regulatory compliance with transport and data protection laws.

### Additional technical information

-   **Method**: GET
-   **Response format**: JSON
-   **Update frequency**: Real-time
-   **Official source**: RUNT Colombia
-   **Coverage**: Nationwide

## About Verifik

Verifik is an identity verification and compliance platform that connects companies with official data sources across Latin America.

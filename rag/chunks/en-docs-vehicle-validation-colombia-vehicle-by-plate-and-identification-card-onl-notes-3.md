---
id: "en-docs-vehicle-validation-colombia-vehicle-by-plate-and-identification-card-onl-notes-3"
title: "Vehicle Records by Plate — Notes"
sourcePath: "docs/vehicle-validation/colombia/vehicle-by-plate-and-identification-card-only.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/runt/vehicle-by-plate"
sourceAnchor: "Notes"
slug: "/vehicle-validation/colombia/vehicle-by-plate-and-identification-card-only"
url: "https://docs.verifik.co/vehicle-validation/colombia/vehicle-by-plate-and-identification-card-only"
---

# Vehicle Records by Plate
**API path(s):** /v2/co/runt/vehicle-by-plate

Verifik's Vehicle Validation API allows you to query official information registered in Colombia's Registro Único Nacional de Tránsito (RUNT) using the vehicle's license plate number as the main identifier.
This integration is ideal for companies in the automotive, financial, insurance, and mobility sectors that need to confirm the authenticity of vehicle data before approving transactions, issuing insurance policies, or performing control and compliance procedures.

## Notes

-   RUNT provides comprehensive vehicle information including technical specifications and legal status.
-   SOAT (Seguro Obligatorio de Accidentes de Tránsito) is mandatory accident insurance in Colombia.
-   "VIGENTE" status indicates active/current insurance policies.
-   Vehicle status "ACTIVO" means the vehicle is currently registered and operational.

---

## Business Use Cases

The RUNT vehicle query API by license plate is used across multiple industries:

-   **Insurance and financial companies**: To verify vehicle assets before granting loans or issuing policies.
-   **Mobility and transportation companies**: To validate the legal and technical status of associated vehicles.
-   **Used car marketplaces**: To confirm registration details and prevent fraud.
-   **Government or regulatory entities**: To perform automated cross-checks for audits or oversight processes.

## Compliance & Data Quality

### Compliance, availability, and accuracy

The API connects directly to official sources such as RUNT, ensuring:

-   Verified and up-to-date information.
-   High availability and optimal response times.
-   Regulatory compliance with KYC, KYB, and AML standards.
-   Data protection in accordance with Law 1581 of 2012 and the regulations of the Superintendence of Transportation.

Verifik continuously monitors source availability and updates its service to ensure operational continuity and data reliability.

### Additional technical information

-   **Method**: GET
-   **Response format**: JSON
-   **Update frequency**: Real-time, according to RUNT source
-   **Official source**: Registro Único Nacional de Tránsito (RUNT), Colombia
-   **Coverage**: Nationwide

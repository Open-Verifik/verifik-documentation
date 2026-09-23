---
id: "en-docs-vehicle-validation-colombia-driver-s-license-business-use-cases-4"
title: "Driver's License — Business Use Cases"
sourcePath: "docs/vehicle-validation/colombia/driver-s-license.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/runt/conductor"
sourceAnchor: "Business Use Cases"
slug: "/vehicle-validation/colombia/driver-s-license"
url: "https://docs.verifik.co/vehicle-validation/colombia/driver-s-license"
---

# Driver's License
**API path(s):** /v2/co/runt/conductor

Verifik's Driver's License Validation API allows you to query official information registered in Colombia's Registro Único Nacional de Tránsito (RUNT) using the driver's identification document number.
This integration is essential for transport companies, car rental agencies, insurers, and logistics platforms that need to verify the legal status and eligibility of drivers before hiring or authorizing vehicle use.

## Business Use Cases

The RUNT driver's license query API is used across multiple industries:

-   **Transportation and Logistics**: To verify driver eligibility and license validity during recruitment.
-   **Car Rental Agencies**: To ensure customers have a valid license before handing over a vehicle.
-   **Insurance Companies**: For risk assessment and policy issuance based on driver history.
-   **On-demand Delivery & Ride-hailing**: To validate gig workers' credentials in real-time.

## Compliance & Data Quality

### Compliance, availability, and accuracy

The API connects directly to official sources such as RUNT, ensuring:

-   Verified and up-to-date information.
-   High availability and optimal response times.
-   Regulatory compliance with KYC and transport regulations.
-   Data protection in accordance with Law 1581 of 2012.

### Additional technical information

-   **Method**: GET
-   **Response format**: JSON
-   **Update frequency**: Real-time, according to RUNT source
-   **Official source**: Registro Único Nacional de Tránsito (RUNT), Colombia
-   **Coverage**: Nationwide
-   License categories include B1 (cars), A2 (motorcycles), C1 (trucks), etc.
-   Status "ACTIVA" indicates the license is currently valid.
-   Multiple license categories can be associated with one driver.

## About Verifik

Verifik is an identity verification and compliance platform that connects companies with official data sources across Latin America.
Its API solutions automate KYC, KYB, AML, and background checks, reducing fraud risk and strengthening digital trust.

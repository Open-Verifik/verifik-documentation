---
id: "en-docs-vehicle-validation-colombia-sinister-verification-fasecolda-response-2"
title: "Claims Verification — Response"
sourcePath: "docs/vehicle-validation/colombia/sinister-verification-fasecolda.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/fasecolda/sinister"
sourceAnchor: "Response"
slug: "/vehicle-validation/colombia/sinister-verification-fasecolda"
url: "https://docs.verifik.co/vehicle-validation/colombia/sinister-verification-fasecolda"
---

# Claims Verification
**API path(s):** /v2/co/fasecolda/sinister

Verifik's Fasecolda Claims Verification API helps you check the insurance claim history of vehicles in Colombia using official Fasecolda data. It's designed to streamline your vehicle verification processes, assess risk, and ensure you have complete information about a vehicle's insurance history.
We built this integration for businesses that need a fast, secure, and automated way to verify vehicle insurance claims and accident history.

## Response

```json
{
  "data": {
    "plate": "KDK605",
    "sinister": [
      {
        "id": "1",
        "accidentDate": "20/01/2015",
        "protection": "Pérdida Menor Cuantía"
      },
      {
        "id": "2",
        "accidentDate": "17/08/2012",
        "protection": "Pérdida Menor Cuantía"
      },
      {
        "id": "3",
        "accidentDate": "16/01/2017",
        "protection": "Pérdida Menor Cuantía"
      }
    ]
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "February 9, 2024 7:43 PM"},
  "id": "PFDB2"
}
```

  
  

```json
{
    "code": "NotFound",
    "message": "Record not found."
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing plate"
}
```

### Notes

- "Sinister" in the API endpoint refers to insurance claims or accidents in Colombian insurance terminology.
- "Pérdida Menor Cuantía" indicates minor loss claims.
- This service is essential for assessing a vehicle's insurance history and potential risks.
- Each claim record includes a unique ID, accident date, and protection type.

### More information

The sections below are general product documentation (not part of the API contract).

---

## Common Use Cases

-   **Vehicle Purchasing**: Verify insurance claim history before purchasing a used vehicle.
-   **Insurance Underwriting**: Assess vehicle risk and insurance history for policy underwriting.
-   **Fleet Management**: Check insurance claims for vehicles in your fleet.
-   **Vehicle Valuation**: Use claim history to assess vehicle condition and value.

## Official Sources & Reliability

We connect directly with official Fasecolda sources to ensure you receive verified, up-to-the-minute information.
Every query is handled with strict adherence to security and regulatory standards.

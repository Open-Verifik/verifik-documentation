---
id: "en-docs-vehicle-validation-colombia-simit-comparendo-details-response-2"
title: "SIMIT - Subpoena Details — Response"
sourcePath: "docs/vehicle-validation/colombia/simit-comparendo-details.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/simit/comparendo"
sourceAnchor: "Response"
slug: "/vehicle-validation/colombia/simit-comparendo-details"
url: "https://docs.verifik.co/vehicle-validation/colombia/simit-comparendo-details"
---

# SIMIT - Subpoena Details
**API path(s):** /v2/co/simit/comparendo

## Response

```json
{
  "data": {
    "numeroComparendo": "2561200100010000000001",
    "idOrganismoTransito": "25612100",
    "documentType": "CC",
    "documentNumber": "10000001",
    "direccionComparendo": "CARRERA 43A CON CALLE 10 EL POBLADO",
    "infractorComparendo": "ANDRES ACOSTA",
    "tipoVehiculo": "AUTOMOVIL",
    "servicioVehiculo": "Particular"
  },
  "signature": {
    "dateTime": "January 16, 2024 3:44 PM",
    "message": "Certified by Verifik.co"
  }
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
  "message": "\"numeroComparendo\" is required"
}
```

### Notes

- To **list** all citations for a document, use **`GET /v2/co/simit/comparendos`** ([SIMIT - Fines](/vehicle-validation/colombia/simit-fines)).
- **Sandbox mode:** `documentNumber` **`10000001`**–**`10000010`** with matching comparendo/authority IDs return fixtures; **`90040401`** returns **404**.
- SIMIT portal **availability** and **captcha** handling are environment-dependent.

---
id: "en-docs-business-validation-chilean-response-2"
title: "\\U0001F1E8\\U0001F1F1 Chile - Business Validation — Response"
sourcePath: "docs/business-validation/chilean.mdx"
locale: "en"
category: "business-validation"
tags:
  - "cl"
  - "business-validation"
endpoints:
  - "/v2/cl/company"
  - "/v2/cl/company?documenttype=rut&documentnumber=212957739"
sourceAnchor: "Response"
slug: "/business-validation/chilean"
url: "https://docs.verifik.co/business-validation/chilean"
---

# \U0001F1E8\U0001F1F1 Chile - Business Validation
**API path(s):** /v2/cl/company, /v2/cl/company?documenttype=rut&documentnumber=212957739

Verifik's Business Verification API helps you authenticate Chilean companies using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.
This service allows you to retrieve information about a company in Chile by providing its document type and number. The service response will contain the name of the company, its business category, subcategory, and activity. Additionally, this service will provide you with a list of services for which the company is authorized to work.

## Response

```json
{
  "data": {
    "activities": "Contribuyente presenta Inicio de Actividades: SI",
    "currentEconomicActivities": [
      {
        "activity": "ELABORACION DE PRODUCTOS DE PANADERIA Y PASTELERIA",
        "code": "107100",
        "category": "Primera",
        "affectIVA": "Si",
        "date": "05-09-2014"
      },
      {
        "activity": "VENTA AL POR MENOR DE ALIMENTOS EN COMERCIOS ESPECIALIZADOS (ALMACENES",
        "code": "472101",
        "category": "Primera",
        "affectIVA": "Si",
        "date": "05-09-2014"
      }
    ],
    "documentNumber": "76409396",
    "documentType": "RUT",
    "fullRUT": "76409396-8",
    "name": "PANADERIA R&M SPA",
    "stampedDocuments": [],
    "startDate": "05-09-2014"
  },
  "signature": {
    "dateTime": "September 4, 2023 3:07 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "azbnj"
}
```

  
  

```json
{
  "code": "NotFound",
  "message": "No existe contribuyente asociado a la CUIT ingresada"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing documentType\n. missing documentNumber\n"
}
```
```json
{
  "code": "MissingParameter",
  "message": "documentType must be one of: [RUT]"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "documentType must be one of: [RUT]"
}
```

  

---

## What does this API validate?

Our API connects directly with official records to validate:

-   **Company Name & RUT Number**: Supports *Rol Único Tributario* (RUT).
-   **Business Information**: Returns company name, economic activities, business categories, and authorization details.
-   **Economic Activities**: Provides detailed economic activities with codes, categories, IVA status, and dates.
-   **Company Match**: Confirms that the company information matches the RUT number.

By verifying these details, you can be confident that the company you're dealing with is legitimate and properly registered, significantly lowering the risk of fraud and ensuring compliance.

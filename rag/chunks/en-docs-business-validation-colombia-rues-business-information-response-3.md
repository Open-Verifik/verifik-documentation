---
id: "en-docs-business-validation-colombia-rues-business-information-response-3"
title: "RUES Complete Business Validation (v3) — Response"
sourcePath: "docs/business-validation/colombia-rues-business-information.mdx"
locale: "en"
category: "business-validation"
tags:
  - "business-validation"
endpoint: "/v3/co/rues-complete"
sourceAnchor: "Response"
slug: "/business-validation/colombia-rues-business-information"
url: "https://docs.verifik.co/business-validation/colombia-rues-business-information"
---

# RUES Complete Business Validation (v3)
**API path(s):** /v3/co/rues-complete

Verifik's RUES Complete Business Validation API helps you retrieve comprehensive business information from Colombia's RUES (Registro Único Empresarial y Social) registry. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to access complete business information for Colombian companies, partners, or vendors.

## Response

```json
{
  "data": {
    "commercialRegistry": {
      "NIT": "1121329661",
      "acronym": null,
      "businessName": "ANUAR DE JESUS HERNANDEZ GARCIA",
      "chamberCommerce": "VALLEDUPAR",
      "commercialAddress": null,
      "companyLocation": "VALLEDUPAR",
      "companyType": "PERSONA NATURAL",
      "email": null,
      "enrollmentDate": "2017-07-10",
      "idRm": "390000145954",
      "lastRenewedYear": "2018",
      "lastUpdatedDate": "2023-04-20",
      "legalRepresentatives": {
        "faculty": "",
        "legalRepresentatives": []
      },
      "organizationType": "PERSONA NATURAL",
      "reasonForCancellation": "SOCIEDAD COMERCIAL",
      "registrationNumber": "0000145954",
      "registrationStatus": "CANCELADA",
      "renewalDate": "2018-03-28"
    },
    "economicActivities": [
      {
        "code": "9521",
        "description": "Mantenimiento y reparación de aparatos electrónicos de consumo",
        "name": "ciiu_act_econ_pri"
      },
      {
        "code": "9511",
        "description": "Mantenimiento y reparación de computadores y de equipo periférico",
        "name": "ciiu_act_econ_sec"
      },
      {
        "code": "9512",
        "description": "Mantenimiento y reparación de equipos de comunicación",
        "name": "ciiu3"
      },
      {
        "code": "4741",
        "description": "Comercio al por menor de computadores, equipos periféricos, programas de informática y equipos de telecomunicaciones en establecimientos especializados",
        "name": "ciiu4"
      }
    ],
    "establishmentOwner": [
      {
        "abbreviation": "",
        "businessName": "INGEEN SOLUCIONES",
        "chamberCode": "39",
        "chamberDescription": "VALLEDUPAR",
        "codeClassIdentification": "06",
        "companyTypeCode": "02",
        "companyTypeDescription": "SOCIEDAD COMERCIAL",
        "digitVerification": " ",
        "lastYearRenewed": "2018",
        "legalOrganizationCode": "02",
        "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
        "numberIdentification": "00000000000000",
        "registration": "0000148365",
        "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
        "registrationCategoryCode": "04",
        "registrationDate": "2017-10-13",
        "registrationStatusCode": "03",
        "registrationStatusDescription": "CANCELADA",
        "renewalDate": "2018-03-28"
      }
    ]
  },
  "signature": {
    "dateTime": "October 6, 2025 3:11 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "2VTPR"
}
```

Category: `PROP`

---
id: "es-docs-es-validacion-empresarial-validacion-empresarial-rues-completa-v3-respuesta-3"
title: "Colombia — RUES expediente completo (v3) — Respuesta"
sourcePath: "docs-es/validacion-empresarial/validacion-empresarial-rues-completa-v3.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "validacion-empresarial"
sourceAnchor: "Respuesta"
slug: "/business-validation/rues-complete-v3"
url: "https://docs.verifik.co/verifik-es/business-validation/rues-complete-v3"
---

# Colombia — RUES expediente completo (v3)

Recupera información empresarial **completa** del registro RUES de Colombia (mismos parámetros que `GET /v3/co/rues`, con mucho más detalle en la respuesta).

## Respuesta

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

Categoría: `PROP`

```json
{
  "data": {
    "RUPActivities": [
      {
        "codeUnspsc": "41101500",
        "descripcion": "Equipo - suministros para la mezcla, la dispersión - la homogeneización en laboratorio"
      },
      {
        "codeUnspsc": "41103000",
        "descripcion": "Equipo de enfriamiento para laboratorio"
      },
      {
        "codeUnspsc": "41103700",
        "descripcion": "Cubetas de laboratorio"
      },
      "...",
    ],
    "commercialRegistry": {
      "NIT": "824005670",
      "businessName": "DISTRIBUIDORA FARMACENTRO S.A.S.",
      "chamberCommerce": "VALLEDUPAR",
      "fullNit": "824005670-7",
      "idRup": "39000000001547",
      "identificationNumber": "00000824005670",
      "proponentRegistration": "000000001547",
      "proponentsStatusDescription": "NORMAL",
      "registrationDate": "2021-05-20",
      "renewalDate": "2025-06-20"
    },
    "finesAndSanctions": {
      "contracts": [],
      "fines": [],
      "sanctions": []
    },
    "news": [
      {
        "act": "RENOVACIÓN",
        "businessName": "DISTRIBUIDORA FARMACENTRO S.A.S.",
        "chamber": "VALLEDUPAR",
        "publicationDate": "2025-06-20",
        "publicationTime": "05:18",
        "registrationDate": "2025-06-20",
        "registrationTime": "17:18",
        "title": "RENOVACION DEL PROPONENTE DISTRIBUIDORA FARMACENTRO S.A.S."
      }
    ]
  },
  "signature": {
    "dateTime": "October 6, 2025 3:23 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "U4DVB"
}
```

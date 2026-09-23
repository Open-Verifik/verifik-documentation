---
id: "es-docs-es-validacion-empresarial-validacion-empresarial-rues-completa-v3-respuesta-4"
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

Categoría `JUEGOS`
```json
{
  "data": {
    "commercialRegistry": {
      "NIT": "802013432",
      "acronym": null,
      "businessName": "UNION DE EMPRESARIO DE APUESTAS PERMANENTES DEL ATLANTICO S.A. \"UNIA\nPUESTAS S.A. EN LIQUIDACION",
      "commercialAddress": null,
      "companyType": "SOCIEDAD ANONIMA",
      "email": null,
      "enrollmentDate": "2000-12-05",
      "idRm": "30000303543",
      "lastRenewedYear": "2016",
      "lastUpdatedDate": "2023-05-09",
      "legalRepresentatives": {
        "faculty": "Cargo/Nombre IdentificaciónDepositario Provisional Noriega Montealegre Carla Andrea CC. 55066517ADMINISTRACION: La sociedad tendra para su direccion, administracio n y representacion los siguientes organos: Asamblea General de Soci os; Junta Directiva, y Gerencia.",
        "legalRepresentatives": [
          [
            {
              "documentNumber": "55066517",
              "documentType": "CC",
              "name": "Noriega Montealegre Carla Andrea",
              "role": "Representante Legal"
            }
          ]
        ]
      },
      "organizationType": "SOCIEDAD ó PERSONA JURIDICA PRINCIPAL ó ESAL",
      "reasonForCancellation": "SOCIEDAD COMERCIAL",
      "registrationNumber": "0000303543",
      "renewalDate": "2016-06-16"
    },
    "economicActivities": [
      {
        "code": "6810",
        "description": "Actividades inmobiliarias realizadas con bienes propios o arrendados",
        "name": "ciiu_act_econ_pri"
      },
      {
        "code": "9200",
        "description": "Actividades de juegos de azar y apuestas",
        "name": "ciiu_act_econ_sec"
      }
    ],
    "establishmentOwner": [
      {
        "abbreviation": "                                                                                                    ",
        "businessName": "CENTRO PAGO DE PREMIOS",
        "chamberCode": "03",
        "chamberDescription": "BARRANQUILLA",
        "codeClassIdentification": "06",
        "companyTypeCode": "02",
        "companyTypeDescription": "SOCIEDAD COMERCIAL",
        "digitVerification": "0",
        "lastYearRenewed": "2016",
        "legalOrganizationCode": "02",
        "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
        "numberIdentification": "00000000000000",
        "registration": "0000313204",
        "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
        "registrationCategoryCode": "04",
        "registrationDate": "2001-06-15",
        "registrationStatusCode": "01",
        "registrationStatusDescription": "ACTIVA",
        "renewalDate": "2016-06-16"
      }
    ]
  },
  "signature": {
    "dateTime": "October 6, 2025 3:23 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "F3QY1"
}

```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing documentType\n"
}
```

```json
{
  "code": "MissingParameter",
  "message": "missing documentNumber\n"
}
```

  
  

```json
{
  "code": "NotFound",
  "message": "Record not found."
}
```

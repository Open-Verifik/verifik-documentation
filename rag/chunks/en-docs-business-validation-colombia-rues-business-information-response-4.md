---
id: "en-docs-business-validation-colombia-rues-business-information-response-4"
title: "RUES Complete Business Validation (v3) — Response"
sourcePath: "docs/business-validation/colombia-rues-business-information.mdx"
locale: "en"
category: "business-validation"
tags:
  - "business-validation"
endpoint: "/api/co/rues-complete"
sourceAnchor: "Response"
slug: "/business-validation/colombia-rues-business-information"
url: "https://docs.verifik.co/business-validation/colombia-rues-business-information"
---

# RUES Complete Business Validation (v3)
**API path(s):** /api/co/rues-complete

Verifik's RUES Complete Business Validation API helps you retrieve comprehensive business information from Colombia's RUES (Registro Único Empresarial y Social) registry. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to access complete business information for Colombian companies, partners, or vendors.

## Response

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
      },
      {
        "act": "RENOVACIÓN",
        "businessName": "DISTRIBUIDORA FARMACENTRO S.A.S.",
        "chamber": "VALLEDUPAR",
        "publicationDate": "2024-05-06",
        "publicationTime": "14:06",
        "registrationDate": "2024-05-06",
        "registrationTime": "14:06",
        "title": "RENOVACION DEL PROPONENTE"
      },
      {
        "act": "RENOVACIÓN",
        "businessName": "DISTRIBUIDORA FARMACENTRO S.A.S.",
        "chamber": "VALLEDUPAR",
        "publicationDate": "2023-06-21",
        "publicationTime": "09:32",
        "registrationDate": "2023-06-21",
        "registrationTime": "09:32",
        "title": "RENOVACION DEL PROPONENTE"
      },
      {
        "act": "RENOVACIÓN",
        "businessName": "DISTRIBUIDORA FARMACENTRO S.A.S.",
        "chamber": "VALLEDUPAR",
        "publicationDate": "2022-05-19",
        "publicationTime": "08:20",
        "registrationDate": "2022-05-19",
        "registrationTime": "08:20",
        "title": "RENOVACION DEL PROPONENTE"
      },
      {
        "act": "INSCRIPCIÓN",
        "businessName": "DISTRIBUIDORA FARMACENTRO S.A.S.",
        "chamber": "VALLEDUPAR",
        "publicationDate": "2021-05-20",
        "publicationTime": "16:19",
        "registrationDate": "2021-05-20",
        "registrationTime": "16:19",
        "title": "INSCRIPCION DEL PROPONENTE"
      },
      {
        "act": "CESACIÓN DE EEFECTOS",
        "businessName": "DISTRIBUIDORA FARMACENTRO S.A.S.",
        "chamber": "VALLEDUPAR",
        "publicationDate": "2020-07-08",
        "publicationTime": "15:16",
        "registrationDate": "2020-07-08",
        "registrationTime": "15:16",
        "title": "CESACION DE EFECTOS DE LA INSCRIPCION"
      },
      {
        "act": "INSCRIPCIÓN",
        "businessName": "DISTRIBUIDORA FARMACENTRO S.A.S.",
        "chamber": "VALLEDUPAR",
        "publicationDate": "2019-06-27",
        "publicationTime": "08:22",
        "registrationDate": "2019-06-27",
        "registrationTime": "08:22",
        "title": "INSCRIPCION DEL PROPONENTE"
      },
      {
        "act": "CESACIÓN DE EEFECTOS",
        "businessName": "DISTRIBUIDORA FARMAPOS S.A.S.",
        "chamber": "VALLEDUPAR",
        "publicationDate": "2018-04-07",
        "publicationTime": "12:16",
        "registrationDate": "2018-04-07",
        "registrationTime": "12:17",
        "title": "CESACION DE EFECTOS DE LA INSCRIPCION"
      },
      {
        "act": "INSCRIPCIÓN",
        "businessName": "DISTRIBUIDORA FARMAPOS S.A.S.",
        "chamber": "VALLEDUPAR",
        "publicationDate": "2017-09-26",
        "publicationTime": "08:58",
        "registrationDate": "2017-09-26",
        "registrationTime": "08:59",
        "title": "INSCRIPCION DEL PROPONENTE"
      },
      {
        "act": "CESACIÓN DE EEFECTOS",
        "businessName": "DISTRIBUIDORA FARMAPOS S.A.S.",
        "chamber": "VALLEDUPAR",
        "publicationDate": "2017-04-08",
        "publicationTime": "13:20",
        "registrationDate": "2017-04-08",
        "registrationTime": "13:22",
        "title": "CESACION DE EFECTOS DE LA INSCRIPCION"
      },
      {
        "act": "INSCRIPCIÓN",
        "businessName": "DISTRIBUIDORA FARMAPOS S.A.S.",
        "chamber": "VALLEDUPAR",
        "publicationDate": "2016-10-06",
        "publicationTime": "16:56",
        "registrationDate": "2016-10-06",
        "registrationTime": "16:55",
        "title": "INSCRIPCION DEL PROPONENTE"
      },
      {
        "act": "INSCRIPCIÓN",
        "businessName": "DISTRIBUIDORA FARMAPOS S.A.S.",
        "chamber": "VALLEDUPAR",
        "publicationDate": "2015-03-11",
        "publicationTime": "18:16",
        "registrationDate": "2015-03-11",
        "registrationTime": "18:16",
        "title": "INSCRIPCION DEL PROPONENTE"
      },
      {
        "act": "INSCRIPCIÓN",
        "businessName": "DISTRIBUIDORA FARMAPOS S.A.S.",
        "chamber": "VALLEDUPAR",
        "publicationDate": "2012-02-27",
        "publicationTime": "09:06",
        "registrationDate": "2012-02-27",
        "registrationTime": "09:26",
        "title": "Que se clasificó como Proveedor, y se calificó de la siguiente manera: Capacidad máxima de contratación  de             5.092,04 SMMLV como Proveedor."
      },
      {
        "act": "INSCRIPCIÓN",
        "businessName": "DISTRIBUIDORA FARMAPOS LTDA",
        "chamber": "VALLEDUPAR",
        "publicationDate": "2010-09-23",
        "publicationTime": "17:23",
        "registrationDate": "2010-09-23",
        "registrationTime": "17:47",
        "title": "Que se clasificó como Proveedor, y se calificó de la siguiente manera: Capacidad máxima de contratación  de             4.576,28 SMMLV como Proveedor."
      },
      {
        "act": "INSCRIPCIÓN",
        "businessName": "DISTRIBUIDORA FARMAPOS LTDA",
        "chamber": "VALLEDUPAR",
        "publicationDate": "2009-07-08",
        "publicationTime": "16:49",
        "registrationDate": "2009-07-08",
        "registrationTime": "17:05",
        "title": "Que se clasificó como Proveedor, y se calificó de la siguiente manera: Capacidad máxima de contratación  de             4.671,92 SMMLV como Proveedor."
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

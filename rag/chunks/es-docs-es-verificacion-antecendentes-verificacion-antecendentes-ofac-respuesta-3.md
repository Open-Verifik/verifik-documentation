---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-ofac-respuesta-3"
title: "Verificación de Antecedentes OFAC — Respuesta"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-ofac.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "ofac"
  - "ofac?fullname=mateo"
  - "ofac?fullname=mateo%20verifik"
  - "verificacion-antecendentes"
endpoints:
  - "/v2/ofac"
  - "/v2/ofac?fullname=mateo"
  - "/v2/ofac?fullname=mateo%20verifik"
sourceAnchor: "Respuesta"
slug: "/verificacion-antecendentes/verificacion-antecendentes-ofac"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-ofac"
---

# Verificación de Antecedentes OFAC
**API path(s):** /v2/ofac, /v2/ofac?fullname=mateo, /v2/ofac?fullname=mateo%20verifik

## Respuesta

```json
{
  "data": {
    "documentType": "CC",
    "documentNumber": "80927603",
    "fullName": "MATEO ANDRES VERIFIK",
    "firstName": "MATEO ANDRES",
    "lastName": "VERIFIK",
    "arrayName": ["MATEO", "ANDRES", "VERIFIK"],
    "foundInOFAC": false,
    "details": {}
  },
  "signature": {
    "dateTime": "June 27, 2025 4:33 PM",
    "message": "Certified by Verifik.co"
  }
}
```

  
  

```json
{
  "data": {
    "documentType": "CURP",
    "documentNumber": "VILJ580411HSLLRN09",
    "fullName": "JUAN CARLOS VILLEGAS LOERA",
    "firstName": "JUAN CARLOS",
    "lastName": "VILLEGAS LOERA",
    "arrayName": ["JUAN", "CARLOS", "VILLEGAS", "LOERA"],
    "foundInOFAC": true,
    "details": {
      "fullLink": "https://sanctionssearch.ofac.treas.gov/Details.aspx?id=15785",
      "type": "Individual",
      "list": "SDN",
      "lastName": "VILLEGAS LOERA",
      "program": "SDNTK",
      "firstName": "Juan Carlos",
      "nationality": "",
      "title": "",
      "citizenship": "",
      "dateOfBirth": "11 Apr 1958",
      "placeOfBirth": "Culiacan, Sinaloa, Mexico",
      "remarks": "(Linked To: BUENOS AIRES SERVICIOS, S.A. DE C.V.; Linked To: ESTACIONES DE SERVICIOS CANARIAS, S.A. DE C.V.; Linked To: GASODIESEL Y SERVICIOS ANCONA, S.A. DE C.V.; Linked To: GASOLINERA ALAMOS COUNTRY, S.A. DE C.V.; Linked To: GASOLINERA Y SERVICIOS VILLABONITA, S.A. DE C.V.; Linked To: PETROBARRANCOS, S.A. DE C.V.; Linked To: SERVICIOS CHULAVISTA, S.A. DE C.V.)",
      "identifications": [
        {
          "type": "C.U.R.P.",
          "idNumber": "VILJ580411HSLLRN09",
          "country": "Mexico",
          "issueDate": null,
          "expireDate": null
        }
      ],
      "addresses": [
        {
          "address": "Calle Golfo de California No. 1635",
          "city": "Culiacan",
          "stateOrProvince": "Sinaloa",
          "postalCode": "",
          "country": "Mexico"
        }
      ]
    }
  },
  "signature": {
    "dateTime": "June 27, 2025 4:48 PM",
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
  "message": "missing documentType\n. missing documentNumber\n"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "documentType must be one of: [DNIAR]"
}
```

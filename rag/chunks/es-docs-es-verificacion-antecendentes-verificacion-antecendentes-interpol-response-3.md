---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-interpol-response-3"
title: "Verificación de Antecedentes Interpol — Response"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-interpol.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "interpol"
  - "interpol?fullname=ivan"
  - "interpol?fullname=ivan%20luciano%20marquez%20marin%20arango"
  - "verificacion-antecendentes"
endpoints:
  - "/v2/interpol"
  - "/v2/interpol?fullname=ivan"
  - "/v2/interpol?fullname=ivan%20luciano%20marquez%20marin%20arango"
sourceAnchor: "Response"
slug: "/verificacion-antecendentes/verificacion-antecendentes-interpol"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-interpol"
---

# Verificación de Antecedentes Interpol
**API path(s):** /v2/interpol, /v2/interpol?fullname=ivan, /v2/interpol?fullname=ivan%20luciano%20marquez%20marin%20arango

## Response

```json
{
  "data": {
    "documentType": "CC",
    "documentNumber": "19304877",
    "firstName": "IVAN LUCIANO MARQUEZ",
    "lastName": "MARIN ARANGO",
    "fullName": "IVAN LUCIANO MARQUEZ MARIN ARANGO",
    "arrayName": ["IVAN", "LUCIANO", "MARQUEZ", "MARIN", "ARANGO"],
    "foundInInterpol": true,
    "details": {
      "totalCards": "2",
      "cards": [
        {
          "arrestWarrants": [
            {
              "issuingCountryId": "CO",
              "charge": "ARTICULO 162.  - RECLUTAMIENTO ILÍCITO \r\nARTICULO 135-6 - HOMICIDIO EN PERSONA PROTEGIDA \r\nARTICULO 165 y 166 causal 3 - DESAPARICIÓN FORZADA AGRAVADA POR LA MENOR EDAD DE LA VÍCTIMA"
            }
          ],
          "weight": "0",
          "languagesSpokenIds": ["SPA"],
          "height": "1.75",
          "sexId": "M",
          "countryOfBirthId": "CO",
          "distinguishingMarks": null,
          "eyesColorsId": null,
          "hairsId": null,
          "placeOfBirth": "FLORENCIA - CAQUETA"
        }
      ]
    }
  },
  "signature": {
    "dateTime": "June 16, 2025 4:31 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "PHVXK"
}
```

  
  

```json
{
  "data": {
    "documentType": "CC",
    "documentNumber": "123456789",
    "firstName": "MATEO",
    "lastName": "VERIFIK",
    "fullName": "MATEO VERIFIK",
    "arrayName": ["MATEO", "VERIFIK"],
    "foundInInterpol": false,
    "details": {}
  },
  "signature": {
    "dateTime": "June 16, 2025 4:32 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "FX5TI"
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

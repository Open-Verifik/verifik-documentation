---
id: "en-docs-background-check-interpol-background-check-response-3"
title: "Interpol Background Check — Response"
sourcePath: "docs/background-check/interpol-background-check.mdx"
locale: "en"
category: "background-check"
tags:
  - "interpol"
  - "background-check"
endpoint: "/v2/interpol"
sourceAnchor: "Response"
slug: "/background-check/international/interpol-background-check"
url: "https://docs.verifik.co/background-check/international/interpol-background-check"
---

# Interpol Background Check
**API path(s):** /v2/interpol

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

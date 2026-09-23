---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-colombia-cumpli-response-3"
title: "Colombia - Verificar Cumplimiento Policial con Medidas Correctivas — Response"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-colombia-cumplimiento-policial.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "co"
  - "verificacion-antecendentes"
endpoints:
  - "/v2/co/policia/rnmc"
  - "/v2/co/policia/rnmc?documenttype=cc&documentnumber=123456789&date=10/10/2020"
sourceAnchor: "Response"
slug: "/verificacion-antecendentes/verificacion-antecendentes-colombia-cumplimiento-policial"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-cumplimiento-policial"
---

# Colombia - Verificar Cumplimiento Policial con Medidas Correctivas
**API path(s):** /v2/co/policia/rnmc, /v2/co/policia/rnmc?documenttype=cc&documentnumber=123456789&date=10/10/2020

## Response

```json
{
  "data": {
    "arrayName": [
      "MATEO",
      "VERIFIK"
    ],
    "correctiveMeasures": [
      {
        "attribution": "INSPECTOR DE POLICÍA",
        "address": "KR 12 26 25",
        "status": "IMPONER O RATIFICAR MEDIDA",
        "measure": "Multa General Tipo 2",
        "referredTo": "INSPECCION PERMANENTE TURNO 3"
      }
    ],
    "date": "22/07/2005",
    "documentNumber": "123456789",
    "documentType": "CC",
    "firstName": "MATEO",
    "fullName": "MATEO VERIFIK",
    "lastName": "VERIFIK",
    "records": [
      {
        "date": "16/12/2023 01:46:37 p. m.",
        "department": "CALDAS",
        "file": "17-001-6-2023-20697",
        "format": "002",
        "identification": "123456789",
        "municipality": "MANIZALES",
        "offender": "MATEO VERIFIK"
      }
    ]
  },
  "signature": {
    "dateTime": "April 18, 2024 6:33 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "12NC7"
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
  "message": "documentType must be one of: [CC,CE]"
}
```

### Features

-   **Corrective Measures Verification**: Query pending corrective measures
-   **Detailed Information**: Details about corrective measures and police records
-   **Compliance**: Helps ensure compliance with corrective measures
-   **Structured Response**: Organized data format for easy integration
-   **Multiple Programming Languages**: Support for JavaScript, Python, PHP and Swift
-   **Error Handling**: Comprehensive error responses for various scenarios

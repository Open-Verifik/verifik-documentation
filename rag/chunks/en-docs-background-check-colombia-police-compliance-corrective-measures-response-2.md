---
id: "en-docs-background-check-colombia-police-compliance-corrective-measures-response-2"
title: "Colombia - Verify Police Compliance with Corrective Measures — Response"
sourcePath: "docs/background-check/colombia-police-compliance-corrective-measures.mdx"
locale: "en"
category: "background-check"
tags:
  - "co"
  - "background-check"
endpoints:
  - "/v2/co/policia/rnmc"
  - "/v2/co/policia/rnmc?documenttype=cc&documentnumber=&date="
sourceAnchor: "Response"
slug: "/background-check/colombia-police-compliance-corrective-measures"
url: "https://docs.verifik.co/background-check/colombia-police-compliance-corrective-measures"
---

# Colombia - Verify Police Compliance with Corrective Measures
**API path(s):** /v2/co/policia/rnmc, /v2/co/policia/rnmc?documenttype=cc&documentnumber=&date=

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

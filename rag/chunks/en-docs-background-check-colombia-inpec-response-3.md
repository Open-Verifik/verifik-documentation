---
id: "en-docs-background-check-colombia-inpec-response-3"
title: "Colombia - INPEC Prison Records Check — Response"
sourcePath: "docs/background-check/colombia-inpec.mdx"
locale: "en"
category: "background-check"
tags:
  - "co"
  - "background-check"
endpoint: "/v2/co/inpec"
sourceAnchor: "Response"
slug: "/background-check/colombia-inpec"
url: "https://docs.verifik.co/background-check/colombia-inpec"
---

# Colombia - INPEC Prison Records Check
**API path(s):** /v2/co/inpec

## Response

```json
{
  "data": {
    "documentNumber": "80086615",
    "documentType": "CC",
    "firstSurname": "MURCIA",
    "legend": "Se encontró un registro de Persona privada de la libertad con los siguientes datos",
    "records": [
      {
        "admissionStatus": "INTRAMURAL",
        "gender": "MASCULINO",
        "identification": "80086615",
        "legalStatus": "CONDENADO",
        "name": "DAVID EDUARDO HELMUT MURCIA GUZMAN",
        "prison": "COMPLEJO CARCELARIO Y PENITENCIARIO BOGOTA",
        "uniqueNumber": "277351"
      }
    ]
  },
  "signature": {
    "dateTime": "October 27, 2025 12:53 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "YKOR5"
}
```

  
  

```json
{
  "data": {
    "documentNumber": "123456789",
    "documentType": "CC",
    "firstSurname": "EXAMPLE",
    "legend": "No se encontraron registros de Persona privada de la libertad",
    "records": []
  },
  "signature": {
    "dateTime": "October 27, 2025 12:53 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "ABC12"
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
  "message": "missing documentType\n. missing documentNumber\n. missing firstSurname\n"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "documentType must be one of: [CC,CE]"
}
```

### Response Fields

#### Data Object

| Field           | Type   | Description                                           |
| --------------- | ------ | ----------------------------------------------------- |
| `documentNumber` | string | Document number of the person consulted               |
| `documentType`   | string | Document type (CC or CE)                              |
| `firstSurname`   | string | First surname of the person consulted                 |
| `legend`         | string | Message indicating if records were found              |
| `records`        | array  | Array of prison records (empty if no records found)   |

#### Records Object (when found)

| Field             | Type   | Description                                                                      |
| ----------------- | ------ | -------------------------------------------------------------------------------- |
| `admissionStatus` | string | Admission status (e.g., "INTRAMURAL" for inmates inside the facility)            |
| `gender`          | string | Gender of the inmate (MASCULINO/FEMENINO)                                        |
| `identification`  | string | Identification number                                                            |
| `legalStatus`     | string | Legal status (e.g., "CONDENADO" for convicted, "SINDICADO" for accused)          |
| `name`            | string | Full name of the inmate                                                          |
| `prison`          | string | Name of the prison or penitentiary complex where the person is detained          |
| `uniqueNumber`    | string | Unique identification number within the INPEC system                             |

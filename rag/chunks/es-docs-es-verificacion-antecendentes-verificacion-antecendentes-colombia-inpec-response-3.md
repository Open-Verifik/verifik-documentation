---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-colombia-inpec-response-3"
title: "Colombia - Consulta INPEC Población Privada de la Libertad — Response"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-colombia-inpec.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "co"
  - "verificacion-antecendentes"
endpoint: "/v2/co/inpec"
sourceAnchor: "Response"
slug: "/verificacion-antecendentes/verificacion-antecendentes-colombia-inpec"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-inpec"
---

# Colombia - Consulta INPEC Población Privada de la Libertad
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
    "firstSurname": "EJEMPLO",
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

### Campos de Respuesta

#### Objeto Data

| Campo            | Tipo   | Descripción                                           |
| ---------------- | ------ | ----------------------------------------------------- |
| `documentNumber` | string | Número de documento de la persona consultada          |
| `documentType`   | string | Tipo de documento (CC o CE)                           |
| `firstSurname`   | string | Primer apellido de la persona consultada              |
| `legend`         | string | Mensaje indicando si se encontraron registros         |
| `records`        | array  | Array de registros carcelarios (vacío si no hay)      |

#### Objeto Records (cuando se encuentra)

| Campo             | Tipo   | Descripción                                                                                  |
| ----------------- | ------ | -------------------------------------------------------------------------------------------- |
| `admissionStatus` | string | Estado de admisión (ej: "INTRAMURAL" para internos dentro del establecimiento)               |
| `gender`          | string | Género del interno (MASCULINO/FEMENINO)                                                      |
| `identification`  | string | Número de identificación                                                                     |
| `legalStatus`     | string | Estado legal (ej: "CONDENADO" para condenado, "SINDICADO" para sindicado)                    |
| `name`            | string | Nombre completo del interno                                                                  |
| `prison`          | string | Nombre de la cárcel o complejo penitenciario donde se encuentra detenida la persona          |
| `uniqueNumber`    | string | Número único de identificación dentro del sistema INPEC                                      |

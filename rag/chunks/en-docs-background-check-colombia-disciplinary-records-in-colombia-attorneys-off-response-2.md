---
id: "en-docs-background-check-colombia-disciplinary-records-in-colombia-attorneys-off-response-2"
title: "Colombia - Disciplinary Records in Colombia (attorney's office) — **Response**"
sourcePath: "docs/background-check/colombia/disciplinary-records-in-colombia-attorneys-office.md"
locale: "en"
category: "background-check"
tags:
  - "co"
  - "background-check"
endpoints:
  - "/v2/co/procuraduria/antecedentes"
  - "/v2/co/procuraduría/antecedentes"
sourceAnchor: "**Response**"
slug: "/background-check/colombia/disciplinary-records-in-colombia-attorneys-office"
url: "https://docs.verifik.co/background-check/colombia/disciplinary-records-in-colombia-attorneys-office"
---

# Colombia - Disciplinary Records in Colombia (attorney's office)
**API path(s):** /v2/co/procuraduria/antecedentes, /v2/co/procuraduría/antecedentes

## **Response**

```json
{
  "data": {
    "documentType": "CC",
    "documentNumber": "19592793",
    "citizen": "JAIMER MARABITH PEREZ PEREZ",
    "hasRecord": true,
    "isRequired": false,
    "legend": "Consulta en línea de Antecedentes Disiplinarios, La Procuraduria General de la Nacion certifica Que siendo las 9:46:41 PM horas del 2/8/2022 el Señor(a) JAIMER MARABITH PEREZ PEREZ identificado(a) con Cédula de ciudadanía Número 19592793 El ciudadano si presenta antecedentes.",
    "antecedentes": [
      {
        "sanciones": [
          {
            "Sancion": "PRISION",
            "Termino": "78 MESES",
            "Clase": "PRINCIPAL",
            "Suspendida": ""
          },
          {
            "Sancion": "INHABILIDAD PARA EL EJERCICIO DE DERECHOS Y FUNCIONES PUBLICAS",
            "Termino": "78 MESES",
            "Clase": "ACCESORIA",
            "Suspendida": ""
          }
        ],
        "instancias": [
          {
            "Nombre": "PRIMERA",
            "Autoridad": "JUZGADO 2 PENAL DEL CIRCUITO ESPECIALIZADO DE DESCONGESTION - SANTA MARTA (MAGDALENA)",
            "Fecha providencia": "30/06/2015",
            "fecha efecto Juridicos": "13/06/2016"
          }
        ],
        "delitos": [
          {
            "Descripcion del Delito": "HOMICIDIO (LEY 599 DE 2000)"
          }
        ],
        "inhabilidades": [
          {
            "Módulo": "PENAL",
            "Inhabilidad legal": "INHABILIDAD PARA DESEMPEÑAR CARGOS PÚBLICO LEY 734 ART 38 NUM 1",
            "Fecha de inicio": "13/06/2016",
            "Fecha fin": "12/06/2026"
          }
        ]
      }
    ]
  },
  "signature": {
    "dateTime": "August 2, 2022 4:46 PM",
    "message": "Certified by Verifik.co"
  }
}
```

```json
{
  "data": {
    "documentType": "CC",
    "documentNumber": "123456789",
    "fullName": "MATEO VERIFIK",
    "firstName": "MATEO",
    "lastName": "VERIFIK",
    "arrayName": [
      "MATEO",
      "VERIFIK"
    ],
    "antecedentes": [],
    "isRequired": false,
    "legend": "Consulta en línea de Antecedentes Disiplinarios, La Procuraduria General de la Nacion certifica Que siendo las 15 horas del 31/08/2022 el Señor(a) NICOLAS HERNANDEZ TOVAR identificado(a) con Cédula de ciudadanía Número 1023942104 El ciudadano no presenta antecedentes.",
    "expeditionDate": "Esta información ha sido catalogada como semi privada y no está disponible para su entrega de forma temporal. - RNEC 2686",
    "expeditionPlace": "Esta información ha sido catalogada como semi privada y no está disponible para su entrega de forma temporal. - RNEC 2686",
    "dateOfBirth": "Esta información ha sido catalogada como semi privada y no está disponible para su entrega de forma temporal. - RNEC 2686"
  },
  "signature": {
    "dateTime": "August 31, 2022 3:53 PM",
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
"code": "Conflict",
"message": "Server_Not_Response_From_Procuraduria"
}
```

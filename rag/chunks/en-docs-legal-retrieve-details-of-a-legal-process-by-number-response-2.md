---
id: "en-docs-legal-retrieve-details-of-a-legal-process-by-number-response-2"
title: "Retrieve Details of a Legal Process by Number — Response"
sourcePath: "docs/legal/retrieve-details-of-a-legal-process-by-number.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoints:
  - "/v2/co/rama/proceso"
  - "/v2/co/rama/proceso/${processnumber}"
  - "/v2/co/rama/proceso/\\(processnumber"
  - "/v2/co/rama/proceso/{$processnumber}"
  - "/v2/co/rama/proceso/{process_number}"
sourceAnchor: "Response"
slug: "/legal/retrieve-details-of-a-legal-process-by-number"
url: "https://docs.verifik.co/legal/retrieve-details-of-a-legal-process-by-number"
---

# Retrieve Details of a Legal Process by Number
**API path(s):** /v2/co/rama/proceso, /v2/co/rama/proceso/${processnumber}, /v2/co/rama/proceso/\(processnumber, /v2/co/rama/proceso/{$processnumber}, /v2/co/rama/proceso/{process_number}

## Response

```json
{
  "data": {
    "actions": [
      {
        "actuacion": "XXXXXX XXXXX",
        "anotacion": "ARCHIVO FEBRERO DE 2014.PAQUETE 285.",
        "cant": "8",
        "codRegla": "00                              ",
        "consActuacion": "8",
        "conDocumentos": false,
        "fechaActuacion": "2014-02-10T00:00:00",
        "fechaFinal": "string",
        "fechaInicial": "string",
        "fechaRegistro": "2014-02-10T00:00:00",
        "idRegActuacion": "12345678",
        "llaveProceso": "11001310300520130078000"
      }
    ],
    "details": {
      "claseProceso": "Divisorios",
      "contenidoRadicacion": "ESCRITURA",
      "despacho": "JUZGADO 005 CIVIL DEL CIRCUITO DE BOGOTÁ ",
      "esPrivado": false,
      "fechaConsulta": "2021-12-17T15:53:20.15",
      "fechaProceso": "2013-11-28T00:00:00",
      "idConexion": "180",
      "idRegProceso": "123456",
      "llaveProceso": "12345678987654321",
      "ponente": "XXXX XXXX XXX XXXX",
      "recurso": "Sin Tipo de Recurso",
      "subclaseProceso": "Sin Subclase de Proceso",
      "tipoProceso": "Declarativo",
      "ubicacion": "Archivo",
      "ultimaActualizacion": "2021-12-16T18:27:25.95"
    },
    "processNumber": "18738473",
    "subjects": [
      {
        "cant": "2",
        "esEmplazado": false,
        "idRegSujeto": "15775331",
        "identificacion": "string",
        "nombreRazonSocial": "XXXX XXXX XXXX XXXX",
        "tipoSujeto": "Demandante"
      }
    ]
  },
  "signature": {
    "dateTime": "August 30, 2022 1:26 PM",
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
  "message": "\"processNumber\" length must be at least 7 characters long"
}
```

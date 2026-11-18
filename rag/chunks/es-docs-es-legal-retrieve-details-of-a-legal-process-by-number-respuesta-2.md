---
id: "es-docs-es-legal-retrieve-details-of-a-legal-process-by-number-respuesta-2"
title: "Recuperar Detalles de un Proceso Legal por Número — Respuesta"
sourcePath: "docs-es/legal/retrieve-details-of-a-legal-process-by-number.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/rama/proceso"
sourceAnchor: "Respuesta"
slug: "/legal/recuperar-detalles-proceso-legal-por-numero"
url: "https://docs.verifik.co/verifik-es/legal/recuperar-detalles-proceso-legal-por-numero"
---

# Recuperar Detalles de un Proceso Legal por Número
**API path(s):** /v2/co/rama/proceso

## Respuesta

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

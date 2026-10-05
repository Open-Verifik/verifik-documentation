---
id: "es-docs-es-london-stock-exchange-integration-colombia-30-obtener-detalles-de-un-proceso-legal-por-numero-8"
title: "Colombia — API pública Verifik — 30. Obtener detalles de un proceso legal por número"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "30. Obtener detalles de un proceso legal por número"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 30. Obtener detalles de un proceso legal por número

**Ubicación en la colección:** v2 › co › rama › proceso › processNumber › Obtener detalles de un proceso legal por número

**Qué hace (resumen):**

La API de Verifik.co para la Rama Judicial permite a los usuarios obtener detalles de un proceso legal específico en Colombia proporcionando su número. La API devuelve una respuesta en formato JSON que contiene información como el tipo de proceso, clase y subclase, las partes involucradas, acciones tomadas y más. Los datos están certificados por Verifik.co e incluyen una firma con la fecha y hora de certificación.

Esta API puede ser útil para profesionales legales y personas que necesiten obtener información legal sobre un caso en particular.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/rama/proceso/:processNumber
```

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/rama/proceso/:processNumber" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "actions": [

            {

                "idRegActuacion": "1237352083",

                "llaveProceso": "11001310504520230033800",

                "consActuacion": "8",

                "fechaActuacion": "2024-12-18T00:00:00",

                "actuacion": "Fijacion estado",

                "anotacion": "Actuación registrada el 18/12/2024 a las 15:15:21.",

                "fechaInicial": "2024-12-19T00:00:00",

                "fechaFinal": "2024-12-19T00:00:00",

                "fechaRegistro": "2024-12-18T00:00:00",

                "codRegla": "00",

                "conDocumentos": false,

                "cant": "8"

            },

            {

                "idRegActuacion": "1237352073",

                "llaveProceso": "11001310504520230033800",

                "consActuacion": "7",

                "fechaActuacion": "2024-12-18T00:00:00",

                "actuacion": "Auto requiere",

                "anotacion": "AUTO REQUIERE ",

                "fechaInicial": null,

                "fechaFinal": null,

                "fechaRegistro": "2024-12-18T00:00:00",

                "codRegla": "00",

                "conDocumentos": false,

                "cant": "8"

            },

            {

                "idRegActuacion": "1127570363",

                "llaveProceso": "11001310504520230033800",

                "consActuacion": "6",

                "fechaActuacion": "2024-07-08T00:00:00",

                "actuacion": "Al despacho",

                "anotacion": null,

                "fechaInicial": null,

                "fechaFinal": null,

                "fechaRegistro": "2024-07-08T00:00:00",

                "codRegla": "00",

                "conDocumentos": false,

                "cant": "8"

            },

            {

                "idRegActuacion": "1061569603",

                "llaveProceso": "11001310504520230033800",

                "consActuacion": "5",

                "fechaActuaci
… (respuesta recortada)
```

- **HTTP 404 (Not Found)**

```json
{

    "code": "NotFound",

    "message": "Record not found."

}
```

- **HTTP 409 (Conflict)**

```json
{

    "code": "Conflict",

    "message": "Endpoint out of service."

}
```

---

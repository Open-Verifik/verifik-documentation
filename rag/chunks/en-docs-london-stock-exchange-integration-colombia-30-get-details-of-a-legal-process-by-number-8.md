---
id: "en-docs-london-stock-exchange-integration-colombia-30-get-details-of-a-legal-process-by-number-8"
title: "Colombia — Verifik public API — 30. Get details of a legal process by number"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "30. Get details of a legal process by number"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 30. Get details of a legal process by number

**Location in collection:** v2 › co › branch › process › processNumber › Get details of a legal process by number

**What it does (summary):**

The Verifik.co API for the Judicial Branch allows users to obtain details of a specific legal process in Colombia by providing its number. The API returns a response in JSON format that contains information such as the type of process, class and subclass, the parties involved, actions taken, and more. The data is certified by Verifik.co and includes a signature with the date and time of certification.

This API can be useful for legal professionals and people who need to obtain legal information about a particular case.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/rama/proceso/:processNumber
```

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/rama/proceso/:processNumber" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

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

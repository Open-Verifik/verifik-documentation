---
id: "en-docs-london-stock-exchange-integration-colombia-29-colombian-legal-processes-api-7"
title: "Colombia — Verifik public API — 29. Colombian Legal Processes API"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "29. Colombian Legal Processes API"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 29. Colombian Legal Processes API

**Location in the collection:** v2 › co › branch › processes › Colombian Legal Processes API

**What it does (summary):**

The Colombian Legal Processes API provides information about the legal processes associated with a Colombian citizen or company. Given a valid Colombian document number, this API returns a list of legal processes that match the query name of the subject, as well as information about each legal process, including the date of the process, the last action date, the office where it was processed, and the subjects involved in the process. This API is useful for people and organizations that need to verify the legal history of a person in Colombia.

Note: The Judicial Branch does not generate exact queries using the identity card data, the queries are made through the name, so Verifik does not guarantee a 100% successful response due to this limitation presented by the data source.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/rama/procesos?documentType=CC&documentNumber=63535790
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CC | (Required) Document type. Valid parameters: CC, NIT. |
| documentNumber | 63535790 | (Required) Document number of the person for whom you want to search for judicial processes. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/rama/procesos?documentType=CC&documentNumber=63535790" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "consultedSubject": "DIANA ROCIO GARCIA PEÑARANDA",

        "documentNumber": "63535790",

        "documentType": "CC",

        "list": [

            {

                "idProceso": "1812531344",

                "idConexion": "283",

                "llaveProceso": "20001310500120220007400",

                "fechaProceso": "2022-03-11T00:00:00",

                "fechaUltimaActuacion": "2023-07-24T00:00:00",

                "despacho": "JUZGADO 001 LABORAL  DE VALLEDUPAR ",

                "departamento": "CESAR",

                "sujetosProcesales": {

                    "demandante": "ANGELA  - LOPEZ VALERA",

                    "demandado": "DIANA ROCIO GARCIA PEÑARANDA"

                },

                "esPrivado": false

            },

            {

                "idProceso": "172173761",

                "idConexion": "149",

                "llaveProceso": "20001333300520240008000",

                "fechaProceso": "2024-04-12T00:00:00",

                "fechaUltimaActuacion": "2025-06-12T00:00:00",

                "despacho": "JUZGADO 005 ADMINISTRATIVO  DE VALLEDUPAR ",

                "departamento": "CESAR",

                "sujetosProcesales": {

                    "Sin Tipo de Sujeto": "AGENCIA NACIONAL DE DEFENSA JURÍDICA DEL ESTADO",

                    "demandante": "DIANA ROCIO GARCIA PEÑARANDA",

                    "demandado": "MUNICIPIO DE PAILITAS",

                    "ministerioPublico": "ANDY    ALEXANDER IBARRA USTARIZ"

                },

                "esPrivado": false

            },

            {

                "idProceso": "128369561",

                "idConexion": "345",

                "llaveProceso": "20001400300520200000400",

                "fechaProceso": "2020-01-14T00:00:00",

                "fechaUltimaActuacion": "2025-09-10T00:00:00",

                "despacho": "JUZGADO 005 CIVIL MUNICIPAL DE VALLEDUPAR ",

                "departamento": "CESAR",

            
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

    "code": "MissingParameter",

    "message": "documentNumber maximum length exceeded.\n"

}
```

---

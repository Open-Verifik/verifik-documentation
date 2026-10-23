---
id: "en-docs-london-stock-exchange-integration-colombia-40-public-contracts-api-18"
title: "Colombia — Verifik public API — 40. Public Contracts API"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "40. Public Contracts API"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 40. Public Contracts API

**Location in collection:** v2 › co › contracts › Public Contracts API

**What it does (summary):**

The Public Contracts API allows you to obtain a list of public contracts associated with a person or company based on their number and document type. By providing the required document details, you can access valuable information about contracts, such as contractor details, contract values, entities involved, contract duration, and more.

This API allows transparency and facilitates the monitoring of public contracts with the state in Colombia.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/contracts?documentType=NIT&documentNumber=63535790
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | NIT | (Required) Document type. Allowed parameter: CC, NIT. |
| documentNumber | 63535790 | (Required) Document number to consult, without spaces or periods. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/contracts?documentType=NIT&documentNumber=63535790" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "contractor": [

            {

                "contractor": "63535790",

                "contractor_name": "SOLUCIONES BIOMEDICASDIANA ROCIO GARCIA PENARANDA"

            },

            {

                "contractor": "63535790",

                "contractor_name": "SOLUCIONES BIOMEDICAS SAS"

            },

            {

                "contractor": "63535790",

                "contractor_name": "SOLUCIONES BIOMEDICAS DEL NORTE SAS  DIANA ROCIO GARCIA PENARANDA"

            },

            {

                "contractor": "63535790",

                "contractor_name": "SOLUCIONES BIOMEDICAS DEL NORTE SAS"

            },

            {

                "contractor": "63535790",

                "contractor_name": "SOLUCIONES BIOMEDICAS"

            },

            {

                "contractor": "63535790",

                "contractor_name": "DIANA ROCIO GARCIA PENARANDA"

            }

        ],

        "contracts": [

            {

                "contractor_reference": "18485086457741909",

                "contractor_id": "63535790",

                "contractor": "SOLUCIONES BIOMEDICAS",

                "entity_id": "892399994",

                "entity": "CESAR ESE HOSPITAL ROSARIO PUMAREJO DE LOPEZ VALLEDUPAR",

                "url": "https://www.contratos.gov.co/consultas/detalleProceso.do?numConstancia=18-4-8508645",

                "value": "187739800",

                "object": "SERVICIO ESPECIALIZADO BIOMEDICO PARA MANTENIMIENTO PREVENTIVO CORRECTIVO Y VERIFICACION A LOS EQUIPOS BIOMEDICOS RED Y SISTEMAS DE GASES MEDICINALES SISTEMAS DE ESTERILIZACION Y LOS EQUIPOS MEDICOS DE APOYO HOSPITALARIO DE LA ESE HOSPITAL ROSARIO PUMAREJO DE LOPEZ",

                "process_id": "154-2018",

                "department": "CESAR",

                "contract_start_date": "2018-10-01",

                "contract_end_date": "2019-01-01"

            },

            {

                "contractor_reference": "1894485
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

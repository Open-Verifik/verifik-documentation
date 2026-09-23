---
id: "en-docs-london-stock-exchange-integration-chile-19-chilean-company-2"
title: "Chile — Verifik public API — 19. Chilean Company"
sourcePath: "docs/london-stock-exchange-integration/chile.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "cl"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/cl/cedula"
  - "/v2/cl/company"
  - "/v2/cl/driver-license"
  - "/v2/cl/taxpayer"
  - "/v2/cl/vehicle"
sourceAnchor: "19. Chilean Company"
slug: "/london-stock-exchange-integration/chile"
url: "https://docs.verifik.co/london-stock-exchange-integration/chile"
---

# Chile — Verifik public API
**API path(s):** /v2/cl/cedula, /v2/cl/company, /v2/cl/driver-license, /v2/cl/taxpayer, /v2/cl/vehicle

## 19. Chilean Company

**Location in the collection:** v2 › cl › company › Chilean Company

**What it does (summary):**

This API allows you to obtain information about a company in Chile by providing its type and document number. The API response will contain the company name, its business category, subcategory, and activity. Additionally, this endpoint will provide you with a list of services that the company is authorized to work for.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/cl/company?documentType=RUT&documentNumber=77398220
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | RUT | (Required) Document type. Allowed parameter: RUT. |
| documentNumber | 77398220 | (Required) RUT of the company you wish to consult, enter this parameter with dots and dashes as established in the native documentation. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/cl/company?documentType=RUT&documentNumber=77398220" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "activities": "Contribuyente presenta Inicio de Actividades: SI",

        "currentEconomicActivities": [

            {

                "activity": "VENTA AL POR MAYOR DE BEBIDAS ALCOHOLICAS Y NO ALCOHOLICAS",

                "code": "463020",

                "category": "Primera",

                "affectIVA": "Si",

                "date": "18-07-2023"

            },

            {

                "activity": "VENTA AL POR MAYOR DE OTROS TIPOS DE MAQUINARIA Y EQUIPO N.C.P.",

                "code": "465909",

                "category": "Primera",

                "affectIVA": "Si",

                "date": "20-03-2020"

            },

            {

                "activity": "VENTA AL POR MENOR EN COMERCIOS DE VESTUARIO Y PRODUCTOS PARA EL HOGAR",

                "code": "471910",

                "category": "Primera",

                "affectIVA": "Si",

                "date": "20-03-2020"

            },

            {

                "activity": "OTRAS ACTIVIDADES DE VENTA AL POR MENOR EN COMERCIOS NO ESPECIALIZADOS",

                "code": "471990",

                "category": "Primera",

                "affectIVA": "Si",

                "date": "20-03-2020"

            },

            {

                "activity": "VENTA AL POR MENOR DE BEBIDAS ALCOHOLICAS Y NO ALCOHOLICAS EN COMERCIO",

                "code": "472200",

                "category": "Primera",

                "affectIVA": "Si",

                "date": "18-07-2023"

            },

            {

                "activity": "VENTA AL POR MENOR DE COMPUTADORES, EQUIPO PERIFERICO, PROGRAMAS INFOR",

                "code": "474100",

                "category": "Primera",

                "affectIVA": "Si",

                "date": "20-03-2020"

            },

            {

                "activity": "VENTA AL POR MENOR DE ARTICULOS DE FERRETERIA Y MATERIALES DE CONSTRUC",

                "code": "475201",

                "category": "Primer
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

    "message": "documentNumber invalid format."

}
```

---

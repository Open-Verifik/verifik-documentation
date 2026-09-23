---
id: "en-docs-london-stock-exchange-integration-peru-109-vehicle-insurance-information-in-peru-2"
title: "Peru — Verifik public API — 109. Vehicle Insurance Information in Peru"
sourcePath: "docs/london-stock-exchange-integration/peru.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "pe"
  - "london-stock-exchange-integration"
endpoint: "/v2/pe/vehiculo/placa"
sourceAnchor: "109. Vehicle Insurance Information in Peru"
slug: "/london-stock-exchange-integration/peru"
url: "https://docs.verifik.co/london-stock-exchange-integration/peru"
---

# Peru — Verifik public API
**API path(s):** /v2/pe/vehiculo/placa

## 109. Vehicle Insurance Information in Peru

**Location in the collection:** v2 › pe › vehicle › soat › Vehicle Insurance Information in Peru

**What it does (summary):**

This API provides information about the insurance status of a vehicle in Peru. The response includes the name of the insurance company, policy start and end dates, vehicle license plate number, policy number, type of use, vehicle class, and policy status.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/pe/vehiculo/soat?plate=AFJ289
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| plates | AFJ289 | (Required) Plate number to consult, without spaces or periods. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/pe/vehiculo/soat?plate=AFJ289" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "AFJ289",

        "soat": [

            {

                "nombreCompania": "Rimac Seguros",

                "fechaInicio": "28/04/2025",

                "pechaFin": "28/04/2026",

                "placa": "AFJ289",

                "numeroPoliza": "000009543282000000000001",

                "nombreUsovehiculo": "PARTICULAR",

                "nombreClasevehiculo": "AUTOMOVIL",

                "estado": "VIGENTE"

            },

            {

                "nombreCompania": "Rimac Seguros",

                "fechaInicio": "20/04/2017",

                "pechaFin": "20/04/2018",

                "placa": "AFJ289",

                "numeroPoliza": "01087358417",

                "nombreUsovehiculo": "TAXI",

                "nombreClasevehiculo": "NO ENCONTRADO",

                "estado": "ANULADO"

            },

            {

                "nombreCompania": "Interseguro",

                "fechaInicio": "28/04/2024",

                "pechaFin": "28/04/2025",

                "placa": "AFJ289",

                "numeroPoliza": "000000000000000593588891",

                "nombreUsovehiculo": "PARTICULAR",

                "nombreClasevehiculo": "AUTOMOVIL",

                "estado": "VENCIDO"

            },

            {

                "nombreCompania": "Interseguro",

                "fechaInicio": "27/04/2023",

                "pechaFin": "27/04/2024",

                "placa": "AFJ289",

                "numeroPoliza": "000000000000000592855856",

                "nombreUsovehiculo": "PARTICULAR",

                "nombreClasevehiculo": "AUTOMOVIL",

                "estado": "VENCIDO"

            },

            {

                "nombreCompania": "Interseguro",

                "fechaInicio": "27/04/2022",

                "pechaFin": "27/04/2023",

                "placa": "AFJ289",

                "numeroPoliza": "000000000000000591989690",

                "nombreUsovehiculo": "PARTICULAR",

       
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

    "message": "plate format invalid."

}
```

---

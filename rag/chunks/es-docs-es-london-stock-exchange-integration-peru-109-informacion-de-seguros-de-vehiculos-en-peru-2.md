---
id: "es-docs-es-london-stock-exchange-integration-peru-109-informacion-de-seguros-de-vehiculos-en-peru-2"
title: "Perú — API pública Verifik — 109. Información de Seguros de Vehículos en Perú"
sourcePath: "docs-es/london-stock-exchange-integration/peru.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "pe"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/pe/cedula"
  - "/v2/pe/cedula/extra"
  - "/v2/pe/empresa"
  - "/v2/pe/foreigner-id/ce"
  - "/v2/pe/vehiculo/placa"
  - "/v2/pe/vehiculo/soat"
sourceAnchor: "109. Información de Seguros de Vehículos en Perú"
slug: "/london-stock-exchange-integration/peru"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/peru"
---

# Perú — API pública Verifik
**API path(s):** /v2/pe/cedula, /v2/pe/cedula/extra, /v2/pe/empresa, /v2/pe/foreigner-id/ce, /v2/pe/vehiculo/placa, /v2/pe/vehiculo/soat

## 109. Información de Seguros de Vehículos en Perú

**Ubicación en la colección:** v2 › pe › vehículo › soat › Información de Seguros de Vehículos en Perú

**Qué hace (resumen):**

Esta API proporciona información sobre el estado de seguro de un vehículo en Perú. La respuesta incluye el nombre de la compañía de seguros, las fechas de inicio y fin de la póliza, el número de placa del vehículo, el número de póliza, el tipo de uso, la clase del vehículo y el estado de la póliza.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/pe/vehiculo/soat?plate=AFJ289
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| plate | AFJ289 | (Required) Número de placa a consultar, sin espacios ni puntos. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/pe/vehiculo/soat?plate=AFJ289" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

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

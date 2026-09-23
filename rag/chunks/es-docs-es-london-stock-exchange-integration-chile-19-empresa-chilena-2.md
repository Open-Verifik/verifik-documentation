---
id: "es-docs-es-london-stock-exchange-integration-chile-19-empresa-chilena-2"
title: "Chile — API pública Verifik — 19. Empresa Chilena"
sourcePath: "docs-es/london-stock-exchange-integration/chile.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "cl"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/cl/cedula"
  - "/v2/cl/cedula?documenttype=run&documentnumber=18.562.530-3"
  - "/v2/cl/company?documenttype=rut&documentnumber=77398220"
  - "/v2/cl/driver-license"
  - "/v2/cl/driver-license?documentnumber=06230840"
  - "/v2/cl/taxpayer?documenttype=rut&documentnumber=263007905"
  - "/v2/cl/vehicle?plate=bb985"
sourceAnchor: "19. Empresa Chilena"
slug: "/london-stock-exchange-integration/chile"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/chile"
---

# Chile — API pública Verifik
**API path(s):** /v2/cl/cedula, /v2/cl/cedula?documenttype=run&documentnumber=18.562.530-3, /v2/cl/company?documenttype=rut&documentnumber=77398220, /v2/cl/driver-license, /v2/cl/driver-license?documentnumber=06230840, /v2/cl/taxpayer?documenttype=rut&documentnumber=263007905, /v2/cl/vehicle?plate=bb985

## 19. Empresa Chilena

**Ubicación en la colección:** v2 › cl › company › Empresa Chilena

**Qué hace (resumen):**

Este API le permite obtener información sobre una empresa en Chile al proporcionar su tipo y número de documento. La respuesta de la API contendrá el nombre de la empresa, su categoría comercial, subcategoría y actividad. Además, este punto final le proporcionará una lista de los servicios para los cuales la empresa está autorizada a trabajar.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/cl/company?documentType=RUT&documentNumber=77398220
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | RUT | (Required) Tipo de documento. parametro permitido: RUT. |
| documentNumber | 77398220 | (Required) RUT de la empresa que se desea consultar, digitar este parametro con puntos y guiones como lo establece la documentación nativa. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/cl/company?documentType=RUT&documentNumber=77398220" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

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

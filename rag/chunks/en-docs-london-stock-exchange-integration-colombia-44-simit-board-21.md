---
id: "en-docs-london-stock-exchange-integration-colombia-44-simit-board-21"
title: "Colombia — Verifik public API — 44. SIMIT board"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "44. SIMIT board"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 44. SIMIT board

**Location in collection:** v2 › co › simit › consult › SIMIT plate

**What it does (summary):**

This API allows users to obtain information about fines and traffic summonses associated with a specific vehicle license plate number in Colombia. The response provides detailed information about each summons, including the type of violation, the amount of the fine, and the current status of the summons.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/simit/consultar/placa?plate=YTW20G
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| plates | YTW20G | (Required) Plate |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/simit/consultar/placa?plate=YTW20G" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "acuerdosPago": [],

        "cancelada": false,

        "cantAcuerdosPagar": "0",

        "cantMultasPagar": "0",

        "comparendos": [],

        "cursos": [],

        "fechaDesdeCancelSuspen": null,

        "fechaHastaSuspencion": null,

        "mensajeValidacionPagoPlaca": "¿Está seguro que desea pagar?",

        "multas": [

            {

                "cisa": "N",

                "comparendo": false,

                "comparendoElectronico": false,

                "comparendosElectronicos": "N",

                "consecutivoComparendo": null,

                "contieneInfraccionesEmbriaguez": false,

                "contieneInfraccionesHG": false,

                "departamento": "Valle del Cauca",

                "estadoCartera": "Pendiente de pago",

                "estadoComparendo": null,

                "estadoPago": null,

                "fechaCoactivo": null,

                "fechaComparendo": "04/06/2024 00:00:00",

                "fechaHasta": "01/01/1900 00:00:00",

                "fechaNotificacion": null,

                "fechaResolucion": "27/11/2024 00:00:00",

                "idDepartamento": "140",

                "idEstadoCartera": "1",

                "idEstadoComparendo": "0",

                "idOrganismoTransito": "917",

                "idResolucion": "125584072",

                "idTipoResolucion": "1",

                "impreso": false,

                "infracciones": [

                    {

                        "codigoInfraccion": "C24",

                        "descripcionInfraccion": "Conducir motocicleta sin observar las normas establecidas en el presente código.",

                        "valorInfraccion": "572520"

                    }

                ],

                "infractor": {

                    "apellido": "CAI**** VE*** ",

                    "idTipoDocumento": "1",

                    "nombre": "JU** CAR*** ",

                    "numeroDocumento": "
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

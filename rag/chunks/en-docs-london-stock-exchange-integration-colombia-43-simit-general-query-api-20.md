---
id: "en-docs-london-stock-exchange-integration-colombia-43-simit-general-query-api-20"
title: "Colombia — Verifik public API — 43. SIMIT General Query API"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "43. SIMIT General Query API"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 43. SIMIT General Query API

**Location in collection:** v2 › co › simit › query › SIMIT General Query API

**What it does (summary):**

This API allows users to obtain information about fines and traffic summonses associated with a specific vehicle license plate number in Colombia. The response provides detailed information about each summons, including the type of violation, the amount of the fine, and the current status of the summons.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/simit/consultar?documentType=CC&documentNumber=6325871
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CC | (Required) Document type. Valid parameters: CC, PA, CE, , RC, NIT. |
| documentNumber | 6325871 | 6325871 |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/simit/consultar?documentType=CC&documentNumber=6325871" \
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

        "cursos": [

            {

                "centroInstruccion": "CIA FORMAVIAL S.A.S",

                "certificado": "13359",

                "ciudadRealizacion": "Guacari",

                "estado": "Aplicado",

                "fechaCurso": "24/07/2023 00:00:00",

                "fechaReporte": "24/07/2023",

                "idTipoDocumento": "1",

                "numeroCurso": "13359",

                "numeroDoc": "6325871",

                "numeroMulta": "99999999000005653543",

                "secretaria": "76318000"

            }

        ],

        "documentNumber": "6325871",

        "documentType": "CC",

        "fechaDesdeCancelSuspen": null,

        "fechaHastaSuspencion": null,

        "mensajeValidacionPagoPlaca": null,

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

                "idTipoResolucion": "1
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

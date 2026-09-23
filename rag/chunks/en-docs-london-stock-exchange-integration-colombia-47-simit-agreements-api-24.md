---
id: "en-docs-london-stock-exchange-integration-colombia-47-simit-agreements-api-24"
title: "Colombia — Verifik public API — 47. SIMIT Agreements API"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/co/afiliaciones"
  - "/v2/co/bogota/taxi-drivers/card/300283"
  - "/v2/co/bogota/taxi-drivers/plate/lsz913"
  - "/v2/co/bogota/vehicle/accidentality"
  - "/v2/co/bogota/vehicle/fines"
  - "/v2/co/bogota/vehicle/tax"
  - "/v2/co/cedula"
  - "/v2/co/cedula/extra"
  - "/v2/co/cedula/rethus"
  - "/v2/co/company/dian"
  - "/v2/co/company/dian/invoicer"
  - "/v2/co/contracts"
  - "/v2/co/contraloria/certificado"
  - "/v2/co/deudoresmorosos"
  - "/v2/co/fasecolda/sinister"
  - "/v2/co/fasecolda/values-by-code"
  - "/v2/co/fasecolda/values-by-plate"
  - "/v2/co/foreigner-id/ce"
  - "/v2/co/foreigner-id/pep"
  - "/v2/co/foreigner-id/ppt"
  - "/v2/co/inpec"
  - "/v2/co/medellin/vehicle/fines"
  - "/v2/co/ministerio-de-trabajo/certificados"
  - "/v2/co/policia/rnmc"
  - "/v2/co/politically-exposed-persons"
  - "/v2/co/procuraduria/antecedentes"
  - "/v2/co/public/registraduria/votacion"
  - "/v2/co/public/vehicle"
  - "/v2/co/rama/abogados"
  - "/v2/co/rama/certificado/vigencia"
  - "/v2/co/rama/juzgado/expedientes"
  - "/v2/co/rama/proceso/:processnumber"
  - "/v2/co/rama/procesos"
  - "/v2/co/registraduria/certificado"
  - "/v2/co/registraduria/votacion"
  - "/v2/co/rues"
  - "/v2/co/rues/complete"
  - "/v2/co/runt/conductor"
  - "/v2/co/runt/vehicle-by-plate"
  - "/v2/co/runt/vehicle-by-plate-simplified"
  - "/v2/co/runt/vehicle-by-vin"
  - "/v2/co/runt/vehiculo"
  - "/v2/co/runt/vehiculo-completo"
  - "/v2/co/sena/certificados"
  - "/v2/co/sigep/name"
  - "/v2/co/sigep/number"
  - "/v2/co/simit/acuerdos"
  - "/v2/co/simit/comparendos"
  - "/v2/co/simit/consultar"
  - "/v2/co/simit/consultar/placa"
  - "/v2/co/simit/resoluciones"
  - "/v2/co/simit/suspensiones"
  - "/v2/co/sisben"
  - "/v2/co/sisconmp/trainings"
  - "/v2/co/situacion-militar"
  - "/v2/co/vehiculo/pico-y-placa"
  - "/v3/co/rues"
  - "/v3/co/rues-complete"
sourceAnchor: "47. SIMIT Agreements API"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/afiliaciones, /v2/co/bogota/taxi-drivers/card/300283, /v2/co/bogota/taxi-drivers/plate/lsz913, /v2/co/bogota/vehicle/accidentality, /v2/co/bogota/vehicle/fines, /v2/co/bogota/vehicle/tax, /v2/co/cedula, /v2/co/cedula/extra, /v2/co/cedula/rethus, /v2/co/company/dian, /v2/co/company/dian/invoicer, /v2/co/contracts, /v2/co/contraloria/certificado, /v2/co/deudoresmorosos, /v2/co/fasecolda/sinister, /v2/co/fasecolda/values-by-code, /v2/co/fasecolda/values-by-plate, /v2/co/foreigner-id/ce, /v2/co/foreigner-id/pep, /v2/co/foreigner-id/ppt, /v2/co/inpec, /v2/co/medellin/vehicle/fines, /v2/co/ministerio-de-trabajo/certificados, /v2/co/policia/rnmc, /v2/co/politically-exposed-persons, /v2/co/procuraduria/antecedentes, /v2/co/public/registraduria/votacion, /v2/co/public/vehicle, /v2/co/rama/abogados, /v2/co/rama/certificado/vigencia, /v2/co/rama/juzgado/expedientes, /v2/co/rama/proceso/:processnumber, /v2/co/rama/procesos, /v2/co/registraduria/certificado, /v2/co/registraduria/votacion, /v2/co/rues, /v2/co/rues/complete, /v2/co/runt/conductor, /v2/co/runt/vehicle-by-plate, /v2/co/runt/vehicle-by-plate-simplified, /v2/co/runt/vehicle-by-vin, /v2/co/runt/vehiculo, /v2/co/runt/vehiculo-completo, /v2/co/sena/certificados, /v2/co/sigep/name, /v2/co/sigep/number, /v2/co/simit/acuerdos, /v2/co/simit/comparendos, /v2/co/simit/consultar, /v2/co/simit/consultar/placa, /v2/co/simit/resoluciones, /v2/co/simit/suspensiones, /v2/co/sisben, /v2/co/sisconmp/trainings, /v2/co/situacion-militar, /v2/co/vehiculo/pico-y-placa, /v3/co/rues, /v3/co/rues-complete

## 47. SIMIT Agreements API

**Location in collection:** v2 › co › simit › agreements › SIMIT Agreements API

**What it does (summary):**

The SIMIT Agreements API provides a simple way to obtain payment agreements for traffic violations in Colombia's SIMIT system. The API returns a response in JSON format with the details of the agreement, including the name of the offender, the resolution number, the issuing secretariat, and the total amount owed.

Developers can use this API to automate the process of obtaining payment agreements for traffic violations and integrate the data into their applications.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/simit/acuerdos?documentType=CC&documentNumber=12345
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CC | (Required) Document type. Valid parameters: CC, PA, CE, , RC, NIT. |
| documentNumber | 12345 | (Required) Document number to consult, without spaces or periods. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/simit/acuerdos?documentType=CC&documentNumber=12345" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "acuerdosPagos": [

            {

                "estadosResoluciones": "2",

                "fechaComparendo": "1900/01/01",

                "fechaResolucion": "2018 00:00:00/02/16",

                "noComparendo": "NO REPORTADO",

                "permitePago": "S",

                "resoluciones": "324",

                "secretaria": "NO DISPONIBLE",

                "total": "837716"

            },

            {

                "estadosResoluciones": "2",

                "fechaComparendo": "1900/01/01",

                "fechaResolucion": "2018 00:00:00/07/09",

                "noComparendo": "NO REPORTADO",

                "permitePago": "S",

                "resoluciones": "09072018",

                "secretaria": "NO DISPONIBLE",

                "total": "390621"

            },

            {

                "estadosResoluciones": "2",

                "fechaComparendo": "1900/01/01",

                "fechaResolucion": "2018 00:00:00/07/09",

                "noComparendo": "NO REPORTADO",

                "permitePago": "S",

                "resoluciones": "0907182",

                "secretaria": "NO DISPONIBLE",

                "total": "380861"

            },

            {

                "estadosResoluciones": "2",

                "fechaComparendo": "1900/01/01",

                "fechaResolucion": "2018 00:00:00/07/09",

                "noComparendo": "NO REPORTADO",

                "permitePago": "S",

                "resoluciones": "0907181",

                "secretaria": "NO DISPONIBLE",

                "total": "527616"

            },

            {

                "estadosResoluciones": "2",

                "fechaComparendo": "1900/01/01",

                "fechaResolucion": "2018 00:00:00/07/09",

                "noComparendo": "NO REPORTADO",

                "permitePago": "S",

                "resoluciones": "090718",

                "secretaria": "NO DISPONIBLE",

                "to
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

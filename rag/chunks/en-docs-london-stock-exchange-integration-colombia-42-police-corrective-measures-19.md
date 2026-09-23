---
id: "en-docs-london-stock-exchange-integration-colombia-42-police-corrective-measures-19"
title: "Colombia — Verifik public API — 42. Police Corrective Measures"
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
sourceAnchor: "42. Police Corrective Measures"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/afiliaciones, /v2/co/bogota/taxi-drivers/card/300283, /v2/co/bogota/taxi-drivers/plate/lsz913, /v2/co/bogota/vehicle/accidentality, /v2/co/bogota/vehicle/fines, /v2/co/bogota/vehicle/tax, /v2/co/cedula, /v2/co/cedula/extra, /v2/co/cedula/rethus, /v2/co/company/dian, /v2/co/company/dian/invoicer, /v2/co/contracts, /v2/co/contraloria/certificado, /v2/co/deudoresmorosos, /v2/co/fasecolda/sinister, /v2/co/fasecolda/values-by-code, /v2/co/fasecolda/values-by-plate, /v2/co/foreigner-id/ce, /v2/co/foreigner-id/pep, /v2/co/foreigner-id/ppt, /v2/co/inpec, /v2/co/medellin/vehicle/fines, /v2/co/ministerio-de-trabajo/certificados, /v2/co/policia/rnmc, /v2/co/politically-exposed-persons, /v2/co/procuraduria/antecedentes, /v2/co/public/registraduria/votacion, /v2/co/public/vehicle, /v2/co/rama/abogados, /v2/co/rama/certificado/vigencia, /v2/co/rama/juzgado/expedientes, /v2/co/rama/proceso/:processnumber, /v2/co/rama/procesos, /v2/co/registraduria/certificado, /v2/co/registraduria/votacion, /v2/co/rues, /v2/co/rues/complete, /v2/co/runt/conductor, /v2/co/runt/vehicle-by-plate, /v2/co/runt/vehicle-by-plate-simplified, /v2/co/runt/vehicle-by-vin, /v2/co/runt/vehiculo, /v2/co/runt/vehiculo-completo, /v2/co/sena/certificados, /v2/co/sigep/name, /v2/co/sigep/number, /v2/co/simit/acuerdos, /v2/co/simit/comparendos, /v2/co/simit/consultar, /v2/co/simit/consultar/placa, /v2/co/simit/resoluciones, /v2/co/simit/suspensiones, /v2/co/sisben, /v2/co/sisconmp/trainings, /v2/co/situacion-militar, /v2/co/vehiculo/pico-y-placa, /v3/co/rues, /v3/co/rues-complete

## 42. Police Corrective Measures

**Location in the collection:** v2 › co › policia › rnmc › Policiia Corrective Measures

**What it does (summary):**

The RNMC Police API allows you to verify whether a person has pending corrective measures or not. This API provides information on the person's name, document type, document number, verification date, and details of any pending corrective action. The response also includes a signature certifying the authenticity of the information provided by Verifik.co. With this API, you can ensure that people comply with corrective actions and make informed decisions based on their compliance status.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/policia/rnmc?documentType=CC&date=09/11/2006&documentNumber=1032423961
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CC | (Required) Document type. Valid parameters: CC, , CE. |
| date | 11/09/2006 |  |
| documentNumber | 1032423961 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/policia/rnmc?documentType=CC&date=09/11/2006&documentNumber=1032423961" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "MEJIA",

            "GOMEZ",

            "ALVARO",

            "ENRIQUE"

        ],

        "correctiveMeasures": [

            {

                "attribution": "COMANDANTE DE ESTACIÓN, SUBESTACIÓN, CAI, PERSONAL UNIFORMADO PONAL",

                "address": "Cra 14 Calle 42 Norte Sobre La \"Y\"",

                "status": "EN PROCESO",

                "measure": "Participación en programa comunitario o actividad pedagógica de convivencia",

                "referredTo": "CAI EL PORTICO"

            },

            {

                "attribution": "INSPECTOR DE POLICÍA",

                "address": "BARRIO CAÑAS GORDAS MZ 11 CASA 9",

                "status": "EN PROCESO",

                "measure": "Multa General Tipo 2",

                "referredTo": "INSP. DE POLICIA N 3"

            },

            {

                "attribution": "COMANDANTE DE ESTACIÓN, SUBESTACIÓN, CAI, PERSONAL UNIFORMADO PONAL",

                "address": "Cra 14 Calle 42 Norte Sobre La \"Y\"",

                "status": "CERRADO",

                "measure": "Destrucción de bien",

                "referredTo": "CAI EL PORTICO"

            }

        ],

        "date": "09/11/2006",

        "documentNumber": "1032423961",

        "documentType": "CC",

        "firstName": "MEJIA GOMEZ",

        "fullName": "MEJIA GOMEZ ALVARO ENRIQUE",

        "lastName": "ALVARO ENRIQUE",

        "records": [

            {

                "date": "03/11/2018 08:20:00 p. m.",

                "department": "QUINDIO",

                "expediente": "63-001-6-2018-7926",

                "format": "6300112762",

                "identification": "1032423961",

                "municipality": "ARMENIA (CT)",

                "offender": "MEJIA GOMEZ ALVARO ENRIQUE"

            }

        ]

    },

    "signature": {

        "dateTime": "April 9, 2026 3:23 PM",

        "message": "Certified by Verifik.co"

    },

    "id": 
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

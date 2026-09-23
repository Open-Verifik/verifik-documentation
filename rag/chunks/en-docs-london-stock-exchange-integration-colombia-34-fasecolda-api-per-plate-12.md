---
id: "en-docs-london-stock-exchange-integration-colombia-34-fasecolda-api-per-plate-12"
title: "Colombia — Verifik public API — 34. Fasecolda API per plate"
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
sourceAnchor: "34. Fasecolda API per plate"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/afiliaciones, /v2/co/bogota/taxi-drivers/card/300283, /v2/co/bogota/taxi-drivers/plate/lsz913, /v2/co/bogota/vehicle/accidentality, /v2/co/bogota/vehicle/fines, /v2/co/bogota/vehicle/tax, /v2/co/cedula, /v2/co/cedula/extra, /v2/co/cedula/rethus, /v2/co/company/dian, /v2/co/company/dian/invoicer, /v2/co/contracts, /v2/co/contraloria/certificado, /v2/co/deudoresmorosos, /v2/co/fasecolda/sinister, /v2/co/fasecolda/values-by-code, /v2/co/fasecolda/values-by-plate, /v2/co/foreigner-id/ce, /v2/co/foreigner-id/pep, /v2/co/foreigner-id/ppt, /v2/co/inpec, /v2/co/medellin/vehicle/fines, /v2/co/ministerio-de-trabajo/certificados, /v2/co/policia/rnmc, /v2/co/politically-exposed-persons, /v2/co/procuraduria/antecedentes, /v2/co/public/registraduria/votacion, /v2/co/public/vehicle, /v2/co/rama/abogados, /v2/co/rama/certificado/vigencia, /v2/co/rama/juzgado/expedientes, /v2/co/rama/proceso/:processnumber, /v2/co/rama/procesos, /v2/co/registraduria/certificado, /v2/co/registraduria/votacion, /v2/co/rues, /v2/co/rues/complete, /v2/co/runt/conductor, /v2/co/runt/vehicle-by-plate, /v2/co/runt/vehicle-by-plate-simplified, /v2/co/runt/vehicle-by-vin, /v2/co/runt/vehiculo, /v2/co/runt/vehiculo-completo, /v2/co/sena/certificados, /v2/co/sigep/name, /v2/co/sigep/number, /v2/co/simit/acuerdos, /v2/co/simit/comparendos, /v2/co/simit/consultar, /v2/co/simit/consultar/placa, /v2/co/simit/resoluciones, /v2/co/simit/suspensiones, /v2/co/sisben, /v2/co/sisconmp/trainings, /v2/co/situacion-militar, /v2/co/vehiculo/pico-y-placa, /v3/co/rues, /v3/co/rues-complete

## 34. Fasecolda API per plate

**Location in the collection:** v2 › co › Fasecolda › Plate query › Fasecolda API by plate

**What it does (summary):**

The Colombian Legal Processes API provides information about the legal processes associated with a Colombian citizen or company. Given a valid Colombian document number, this API returns a list of legal processes that match the query name of the subject, as well as information about each legal process, including the date of the process, the last action date, the office where it was processed, and the subjects involved in the process. This API is useful for people and organizations that need to verify the legal history of a person in Colombia.

Note: The Judicial Branch does not generate exact queries using the identity card data, the queries are made through the name, so Verifik does not guarantee a 100% successful response due to this limitation presented by the data source.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/fasecolda/values-by-plate?plate=CRL299
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| plates | CRL299 |  |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/fasecolda/values-by-plate?plate=CRL299"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "absShow": "SI",

        "airbags": "2",

        "airconditioningShow": "SI",

        "axles": "2",

        "bcpp": "92500",

        "brakes": "DISCO/DISCO",

        "capacityLoad": "0",

        "capacityPassengers": "5",

        "category": "LIVIANO PASAJEROS",

        "class": "AUTOMOVIL",

        "country": "KOR",

        "cylinderCapacity": "1796",

        "doors": "4",

        "electricChairs": "0",

        "electricGlasses": "4",

        "electricMirrors": "2",

        "explorersShow": "SI",

        "foodSystem": "NO APLICA",

        "fuel": "GASOLINA",

        "groupUpdate": "2",

        "homoloCode": "01601246",

        "importedShow": "SI",

        "line1": "CRUZE",

        "line2": "NICKEL [LS]",

        "line3": "AT 1800CC 4P CT",

        "long": "4600",

        "marke": "CHEVROLET",

        "novelty": "A",

        "observation": "",

        "plate": "CRL299",

        "power": "141",

        "rearSuspension": "NO APLICA",

        "reverseCameraShow": "NO",

        "segmentCylinder": "L",

        "segmentSize": "D",

        "sensorsShow": "NO",

        "service": "PARTICULAR",

        "sunroofShow": "SI",

        "tachometer": "NO APLICA",

        "traction": "DELANTERA",

        "transmission": "4X2",

        "typeAddress": "HIDRÁULICA",

        "typeAirConditioning": "AUTOMATICO",

        "typeBox": "AUTOMATICA",

        "typeHeadlights": "HALOGENO",

        "typology": "SEDAN",

        "upholsteryLeatherShow": "NO",

        "valueModel": [

            {

                "estado": "USADO",

                "idEstado": "1",

                "modelo": "2013",

                "modeloId": "44",

                "valor": "35300"

            },

            {

                "estado": "USADO",

                "idEstado": "1",

                "modelo": "2012",

                "modeloId": "43",

                "valor": "31800"

            },

            {

                "estado"
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

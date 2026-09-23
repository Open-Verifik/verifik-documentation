---
id: "es-docs-es-london-stock-exchange-integration-colombia-40-api-de-contratos-publicos-18"
title: "Colombia — API pública Verifik — 40. API de Contratos Públicos"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
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
sourceAnchor: "40. API de Contratos Públicos"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/afiliaciones, /v2/co/bogota/taxi-drivers/card/300283, /v2/co/bogota/taxi-drivers/plate/lsz913, /v2/co/bogota/vehicle/accidentality, /v2/co/bogota/vehicle/fines, /v2/co/bogota/vehicle/tax, /v2/co/cedula, /v2/co/cedula/extra, /v2/co/cedula/rethus, /v2/co/company/dian, /v2/co/company/dian/invoicer, /v2/co/contracts, /v2/co/contraloria/certificado, /v2/co/deudoresmorosos, /v2/co/fasecolda/sinister, /v2/co/fasecolda/values-by-code, /v2/co/fasecolda/values-by-plate, /v2/co/foreigner-id/ce, /v2/co/foreigner-id/pep, /v2/co/foreigner-id/ppt, /v2/co/inpec, /v2/co/medellin/vehicle/fines, /v2/co/ministerio-de-trabajo/certificados, /v2/co/policia/rnmc, /v2/co/politically-exposed-persons, /v2/co/procuraduria/antecedentes, /v2/co/public/registraduria/votacion, /v2/co/public/vehicle, /v2/co/rama/abogados, /v2/co/rama/certificado/vigencia, /v2/co/rama/juzgado/expedientes, /v2/co/rama/proceso/:processnumber, /v2/co/rama/procesos, /v2/co/registraduria/certificado, /v2/co/registraduria/votacion, /v2/co/rues, /v2/co/rues/complete, /v2/co/runt/conductor, /v2/co/runt/vehicle-by-plate, /v2/co/runt/vehicle-by-plate-simplified, /v2/co/runt/vehicle-by-vin, /v2/co/runt/vehiculo, /v2/co/runt/vehiculo-completo, /v2/co/sena/certificados, /v2/co/sigep/name, /v2/co/sigep/number, /v2/co/simit/acuerdos, /v2/co/simit/comparendos, /v2/co/simit/consultar, /v2/co/simit/consultar/placa, /v2/co/simit/resoluciones, /v2/co/simit/suspensiones, /v2/co/sisben, /v2/co/sisconmp/trainings, /v2/co/situacion-militar, /v2/co/vehiculo/pico-y-placa, /v3/co/rues, /v3/co/rues-complete

## 40. API de Contratos Públicos

**Ubicación en la colección:** v2 › co › contracts › API de Contratos Públicos

**Qué hace (resumen):**

La API de Contratos Públicos te permite obtener una lista de contratos públicos asociados a una persona o empresa basándose en su número y tipo de documento. Al proporcionar los detalles del documento requeridos, puedes acceder a información valiosa sobre los contratos, como detalles del contratista, valores del contrato, entidades involucradas, duración del contrato y más.

Esta API permite la transparencia y facilita el monitoreo de los contratos públicos con el estado en Colombia.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/contracts?documentType=NIT&documentNumber=63535790
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | NIT | (Required) Tipo de documento. Parámetro permitido: CC, NIT. |
| documentNumber | 63535790 | (Required)  Número de documento a consultar, sin espacios ni puntos. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/contracts?documentType=NIT&documentNumber=63535790" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

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

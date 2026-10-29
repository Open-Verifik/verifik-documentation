---
id: "en-docs-london-stock-exchange-integration-colombia-36-colombian-legal-process-api-copy-14"
title: "Colombia — Verifik public API — 36. Colombian Legal Process API Copy"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "36. Colombian Legal Process API Copy"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 36. Colombian Legal Process API Copy

**Location in the collection:** v2 › co › phasecolda › query code › Colombian Legal Processes API Copy

**What it does (summary):**

The Colombian Legal Processes API provides information about the legal processes associated with a Colombian citizen or company. Given a valid Colombian document number, this API returns a list of legal processes that match the query name of the subject, as well as information about each legal process, including the date of the process, the last action date, the office where it was processed, and the subjects involved in the process. This API is useful for people and organizations that need to verify the legal history of a person in Colombia.

Note: The Judicial Branch does not generate exact queries using the identity card data, the queries are made through the name, so Verifik does not guarantee a 100% successful response due to this limitation presented by the data source.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/fasecolda/values-by-code?codeFasecolda=01635021
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| codeFasecolda | 01635021 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/fasecolda/values-by-code?codeFasecolda=01635021" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "absShow": "SI",

        "airbags": "6",

        "airconditioningShow": "SI",

        "axles": "2",

        "bcpp": "152500",

        "brakes": "DISCO/TAMBOR",

        "capacityLoad": "0",

        "capacityPassengers": "5",

        "category": "LIVIANO PASAJEROS",

        "class": "CAMIONETA PASAJ.",

        "code": "01635021",

        "codeFasecolda": "01635021",

        "country": "BRA",

        "cylinderCapacity": "1200",

        "doors": "5",

        "electricChairs": "0",

        "electricGlasses": "4",

        "electricMirrors": "2",

        "explorersShow": "SI",

        "foodSystem": "NO APLICA",

        "fuel": "GASOLINA",

        "groupUpdate": "2",

        "homoloCode": "01606249",

        "importedShow": "SI",

        "line1": "TRACKER [2]",

        "line2": "PREMIER",

        "line3": "TP 1200CC T CT",

        "long": "4270",

        "marke": "CHEVROLET",

        "novelty": "M",

        "observation": "",

        "power": "132",

        "rearSuspension": "NO APLICA",

        "reverseCameraShow": "SI",

        "segmentCylinder": "Y",

        "segmentSize": "B",

        "sensorsShow": "SI",

        "service": "PARTICULAR",

        "sunroofShow": "SI",

        "tachometer": "NO APLICA",

        "traction": "DELANTERA",

        "transmission": "4X2",

        "typeAddress": "ELÉCTRICA",

        "typeAirConditioning": "NO DISPONIBLE",

        "typeBox": "TIPTRONICA",

        "typeHeadlights": "LED",

        "typology": "UTILITARIO DEPORTIVO 4X2",

        "upholsteryLeatherShow": "NO",

        "valueModel": [

            {

                "estado": "USADO",

                "idEstado": "1",

                "modelo": "2024",

                "modeloId": "41007",

                "valor": "112200"

            },

            {

                "estado": "NUEVO",

                "idEstado": "1",

                "modelo": "2024",

                "modeloId": "41007",

                "
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

    "code": "Conflict",

    "message": "Endpoint out of service."

}
```

---

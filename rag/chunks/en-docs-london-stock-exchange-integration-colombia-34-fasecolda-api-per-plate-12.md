---
id: "en-docs-london-stock-exchange-integration-colombia-34-fasecolda-api-per-plate-12"
title: "Colombia — Verifik public API — 34. Fasecolda API per plate"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "34. Fasecolda API per plate"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

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

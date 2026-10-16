---
id: "es-docs-es-london-stock-exchange-integration-colombia-34-api-de-fasecolda-por-placa-12"
title: "Colombia — API pública Verifik — 34. API de Fasecolda  por placa"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "34. API de Fasecolda  por placa"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 34. API de Fasecolda  por placa

**Ubicación en la colección:** v2 › co › fasecolda › consulta placa › API de Fasecolda  por placa

**Qué hace (resumen):**

La API de Procesos Legales Colombianos proporciona información sobre los procesos legales asociados a un ciudadano o empresa colombiana. Dado un número de documento colombiano válido, esta API devuelve una lista de procesos legales que coinciden con el nombre consultado del sujeto, así como información sobre cada proceso legal, incluyendo la fecha del proceso, la última fecha de acción, la oficina donde se procesó y los sujetos involucrados en el proceso. Esta API es útil para personas y organizaciones que necesitan verificar el historial legal de una persona en Colombia.

Nota: La Rama Judicial no genera consultas exactas utilizando los datos de la cédula de identidad, las consultas se realizan a través del nombre, por lo que Verifik no garantiza una respuesta exitosa al 100% debido a esta limitación que presenta la fuente de datos.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/fasecolda/values-by-plate?plate=CRL299
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| plate | CRL299 |  |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/fasecolda/values-by-plate?plate=CRL299"
```

**Ejemplos de respuesta que guarda Postman:**

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

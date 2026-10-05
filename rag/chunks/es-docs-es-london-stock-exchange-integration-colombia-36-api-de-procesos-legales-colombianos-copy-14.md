---
id: "es-docs-es-london-stock-exchange-integration-colombia-36-api-de-procesos-legales-colombianos-copy-14"
title: "Colombia — API pública Verifik — 36. API de Procesos Legales Colombianos Copy"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "36. API de Procesos Legales Colombianos Copy"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 36. API de Procesos Legales Colombianos Copy

**Ubicación en la colección:** v2 › co › fasecolda › consulta codigo › API de Procesos Legales Colombianos Copy

**Qué hace (resumen):**

La API de Procesos Legales Colombianos proporciona información sobre los procesos legales asociados a un ciudadano o empresa colombiana. Dado un número de documento colombiano válido, esta API devuelve una lista de procesos legales que coinciden con el nombre consultado del sujeto, así como información sobre cada proceso legal, incluyendo la fecha del proceso, la última fecha de acción, la oficina donde se procesó y los sujetos involucrados en el proceso. Esta API es útil para personas y organizaciones que necesitan verificar el historial legal de una persona en Colombia.

Nota: La Rama Judicial no genera consultas exactas utilizando los datos de la cédula de identidad, las consultas se realizan a través del nombre, por lo que Verifik no garantiza una respuesta exitosa al 100% debido a esta limitación que presenta la fuente de datos.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/fasecolda/values-by-code?codeFasecolda=01635021
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| codeFasecolda | 01635021 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/fasecolda/values-by-code?codeFasecolda=01635021" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

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

---
id: "en-docs-london-stock-exchange-integration-colombia-39-disciplinary-records-in-colombia-procuraduria-17"
title: "Colombia — Verifik public API — 39. Disciplinary Records in Colombia (Procuraduria)"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "39. Disciplinary Records in Colombia (Procuraduria)"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 39. Disciplinary Records in Colombia (Procuraduria)

**Location in the collection:** v2 › co › attorney's office › background › Disciplinary Records in Colombia (Procuraduria)

**What it does (summary):**

Use the Verifik API to verify the disciplinary records of individuals in Colombia. The API returns information about the type of document used, the document number, the name of the individual, and whether they have any disciplinary records. The response also includes details about penalties, instances, offenses, and ineligibility associated with the individual's registration.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/procuraduria/antecedentes?documentType=CC&documentNumber=80086615
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CC | (Required) Document type. Allowed parameter: CC, PEP, CE. |
| documentNumber | 80086615 | (Required) Document number to consult, without spaces or periods. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/procuraduria/antecedentes?documentType=CC&documentNumber=80086615" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "antecedentes": [

            {

                "name": "SIRI: 200993178",

                "sanciones": [

                    {

                        "sancion": "PRISION",

                        "termino": "22 AÑOS  10 MESES  15 DÍAS",

                        "clase": "PRINCIPAL",

                        "suspendida": ""

                    },

                    {

                        "sancion": "INHABILIDAD PARA EL EJERCICIO DE DERECHOS Y FUNCIONES PUBLICAS",

                        "termino": "20 AÑOS",

                        "clase": "ACCESORIA",

                        "suspendida": ""

                    }

                ],

                "delitos": [

                    {

                        "descripcionDelDelito": "CAPTACION MASIVA Y HABITUAL DE DINEROS AGRAVADA CUANDO SI PARA DICHOS FINES EL AGENTE HACE USO DE LOS MEDIOS DE COMUNICACIÓN SOCIAL U OTROS DE DIVULGACIÓN COLECTIVA(MODIFICADO.L.1357/2009, ART. 1°). (LEY 599 DE 2000)"

                    },

                    {

                        "descripcionDelDelito": "LAVADO DE ACTIVOS (LEY 599 DE 2000)"

                    }

                ],

                "instancias": [

                    {

                        "nombre": "PRIMERA",

                        "autoridad": "JUZGADO 4 PENAL DEL CIRCUITO ESPECIALIZADO - BOGOTA",

                        "fechaProvidencia": "16/12/2009",

                        "fechaEfectoJuridicos": "11/02/2016"

                    },

                    {

                        "nombre": "SEGUNDA",

                        "autoridad": "TRIBUNAL SUPERIOR DE BOGOTA",

                        "fechaProvidencia": "30/05/2013",

                        "fechaEfectoJuridicos": "11/02/2016"

                    },

                    {

                        "nombre": "CASACIÓN",

                        "autoridad": "CORTE SUPREMA DE JUSTICIA - SALA DE CASACION PENAL",

                        "fec
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

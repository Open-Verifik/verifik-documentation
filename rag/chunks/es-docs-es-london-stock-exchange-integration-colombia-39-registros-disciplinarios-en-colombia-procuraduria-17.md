---
id: "es-docs-es-london-stock-exchange-integration-colombia-39-registros-disciplinarios-en-colombia-procuraduria-17"
title: "Colombia — API pública Verifik — 39. Registros Disciplinarios en Colombia (Procuraduria)"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "39. Registros Disciplinarios en Colombia (Procuraduria)"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 39. Registros Disciplinarios en Colombia (Procuraduria)

**Ubicación en la colección:** v2 › co › procuraduría › antecedentes › Registros Disciplinarios en Colombia (Procuraduria)

**Qué hace (resumen):**

Utiliza la API de Verifik para verificar los registros disciplinarios de individuos en Colombia. La API devuelve información sobre el tipo de documento utilizado, el número de documento, el nombre del individuo y si tienen algún registro disciplinario. La respuesta también incluye detalles sobre sanciones, instancias, delitos e inelegibilidades asociadas al registro del individuo.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/procuraduria/antecedentes?documentType=CC&documentNumber=80086615
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CC | (Required) Tipo de documento. Parámetro permitido: CC, PEP, CE. |
| documentNumber | 80086615 | (Required)  Número de documento a consultar, sin espacios ni puntos. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/procuraduria/antecedentes?documentType=CC&documentNumber=80086615" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

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

---
id: "es-docs-es-london-stock-exchange-integration-colombia-29-api-de-procesos-legales-colombianos-7"
title: "Colombia — API pública Verifik — 29. API de Procesos Legales Colombianos"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "29. API de Procesos Legales Colombianos"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 29. API de Procesos Legales Colombianos

**Ubicación en la colección:** v2 › co › rama › procesos › API de Procesos Legales Colombianos

**Qué hace (resumen):**

La API de Procesos Legales Colombianos proporciona información sobre los procesos legales asociados a un ciudadano o empresa colombiana. Dado un número de documento colombiano válido, esta API devuelve una lista de procesos legales que coinciden con el nombre consultado del sujeto, así como información sobre cada proceso legal, incluyendo la fecha del proceso, la última fecha de acción, la oficina donde se procesó y los sujetos involucrados en el proceso. Esta API es útil para personas y organizaciones que necesitan verificar el historial legal de una persona en Colombia.

Nota: La Rama Judicial no genera consultas exactas utilizando los datos de la cédula de identidad, las consultas se realizan a través del nombre, por lo que Verifik no garantiza una respuesta exitosa al 100% debido a esta limitación que presenta la fuente de datos.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/rama/procesos?documentType=CC&documentNumber=63535790
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CC | (Required) Tipo de documento. Parámetros válidos: CC, NIT. |
| documentNumber | 63535790 | (Required) Número de documento de la persona de la cual se quiere buscar procesos judiciales. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/rama/procesos?documentType=CC&documentNumber=63535790" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "consultedSubject": "DIANA ROCIO GARCIA PEÑARANDA",

        "documentNumber": "63535790",

        "documentType": "CC",

        "list": [

            {

                "idProceso": "1812531344",

                "idConexion": "283",

                "llaveProceso": "20001310500120220007400",

                "fechaProceso": "2022-03-11T00:00:00",

                "fechaUltimaActuacion": "2023-07-24T00:00:00",

                "despacho": "JUZGADO 001 LABORAL  DE VALLEDUPAR ",

                "departamento": "CESAR",

                "sujetosProcesales": {

                    "demandante": "ANGELA  - LOPEZ VALERA",

                    "demandado": "DIANA ROCIO GARCIA PEÑARANDA"

                },

                "esPrivado": false

            },

            {

                "idProceso": "172173761",

                "idConexion": "149",

                "llaveProceso": "20001333300520240008000",

                "fechaProceso": "2024-04-12T00:00:00",

                "fechaUltimaActuacion": "2025-06-12T00:00:00",

                "despacho": "JUZGADO 005 ADMINISTRATIVO  DE VALLEDUPAR ",

                "departamento": "CESAR",

                "sujetosProcesales": {

                    "Sin Tipo de Sujeto": "AGENCIA NACIONAL DE DEFENSA JURÍDICA DEL ESTADO",

                    "demandante": "DIANA ROCIO GARCIA PEÑARANDA",

                    "demandado": "MUNICIPIO DE PAILITAS",

                    "ministerioPublico": "ANDY    ALEXANDER IBARRA USTARIZ"

                },

                "esPrivado": false

            },

            {

                "idProceso": "128369561",

                "idConexion": "345",

                "llaveProceso": "20001400300520200000400",

                "fechaProceso": "2020-01-14T00:00:00",

                "fechaUltimaActuacion": "2025-09-10T00:00:00",

                "despacho": "JUZGADO 005 CIVIL MUNICIPAL DE VALLEDUPAR ",

                "departamento": "CESAR",

            
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

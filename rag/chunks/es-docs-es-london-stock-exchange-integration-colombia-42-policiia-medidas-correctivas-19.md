---
id: "es-docs-es-london-stock-exchange-integration-colombia-42-policiia-medidas-correctivas-19"
title: "Colombia — API pública Verifik — 42. Policiia  Medidas Correctivas"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "42. Policiia  Medidas Correctivas"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 42. Policiia  Medidas Correctivas

**Ubicación en la colección:** v2 › co › policia › rnmc › Policiia  Medidas Correctivas

**Qué hace (resumen):**

La API de RNMC Policial te permite verificar si una persona tiene medidas correctivas pendientes o no. Esta API proporciona información sobre el nombre de la persona, tipo de documento, número de documento, fecha de verificación y detalles de cualquier medida correctiva pendiente. La respuesta también incluye una firma que certifica la autenticidad de la información proporcionada por Verifik.co. Con esta API, puedes asegurarte de que las personas cumplan con las medidas correctivas y tomar decisiones informadas basadas en su estado de cumplimiento.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/policia/rnmc?documentType=CC&date=09/11/2006&documentNumber=1032423961
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CC | (Required) Tipo de documento. Parámetros válidos: CC, , CE. |
| date | 09/11/2006 |  |
| documentNumber | 1032423961 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/policia/rnmc?documentType=CC&date=09/11/2006&documentNumber=1032423961" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

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

---
id: "es-docs-es-london-stock-exchange-integration-colombia-74-api-de-deudores-morosos-50"
title: "Colombia — API pública Verifik — 74. API de Deudores Morosos"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "74. API de Deudores Morosos"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 74. API de Deudores Morosos

**Ubicación en la colección:** v2 › co › deudoresmorosos › API de Deudores Morosos

**Qué hace (resumen):**

La API de Deudores Morosos permite a los usuarios consultar el estado de sus deudas con el gobierno colombiano. Los usuarios pueden ingresar su NIT (Número de Identificación Tributaria) o número de identificación ciudadana para obtener información sobre cualquier deuda pendiente, incluyendo el tipo de deuda, objeto de la deuda, año, periodo y fecha.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/deudoresmorosos?documentType=NIT&documentNumber=800096561
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | NIT | (Required) Tipo de documento a consultar, valores permitidos: CC, , NIT, CE. |
| documentNumber | 800096561 | (Required) Número de documento de la persona o empresa a consultar, sin espacios ni puntos y en caso de ser empresa sin código de verificación. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/deudoresmorosos?documentType=NIT&documentNumber=800096561" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "APELLIDO",

            "NOMBRE",

            "SEGUNDO"

        ],

        "documentNumber": "800096561",

        "documentType": "NIT",

        "firstName": "NOMBRE SEGUNDO",

        "fullName": "NOMBRE SEGUNDO APELLIDO",

        "lastName": "APELLIDO"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "IDNT1"

}
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

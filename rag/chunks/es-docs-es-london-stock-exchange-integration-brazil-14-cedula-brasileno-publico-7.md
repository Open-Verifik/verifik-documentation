---
id: "es-docs-es-london-stock-exchange-integration-brazil-14-cedula-brasileno-publico-7"
title: "Brasil: API pública Verifik — 14. Cedula Brasileño publico"
sourcePath: "docs-es/london-stock-exchange-integration/brazil.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "br"
  - "vehicle"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/br/background-check"
  - "/v2/br/cedula"
  - "/v2/br/company"
  - "/v2/br/public/cedula"
  - "/v2/br/public/vehicle"
  - "/v2/br/vehicle"
  - "/v2/br/vehicle/data-sheet-by-plate"
  - "/v2/vehicle/data-sheet"
sourceAnchor: "14. Cedula Brasileño publico"
slug: "/london-stock-exchange-integration/brazil"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/brazil"
---

# Brasil: API pública Verifik
**API path(s):** /v2/br/background-check, /v2/br/cedula, /v2/br/company, /v2/br/public/cedula, /v2/br/public/vehicle, /v2/br/vehicle, /v2/br/vehicle/data-sheet-by-plate, /v2/vehicle/data-sheet

## 14. Cedula Brasileño publico

**Ubicación en la colección:** v2 › br › cedula publico › Cedula Brasileño publico

**Qué hace (resumen):**

Consulta **pública** de **CPF** brasileño (`v2/br/public/cedula`): mismos parámetros generales que el endpoint autenticado, con respuesta **ofuscada/reducida** para flujos sin token. **No** es una API de DNI peruano.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/br/public/cedula?documentType=CPF&documentNumber=019.166.58601&dateOfBirth=17/02/2002
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CPF |  |
| documentNumber | 019.166.58601 |  |
| dateOfBirth | 17/02/2002 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/br/public/cedula?documentType=CPF&documentNumber=019.166.58601&dateOfBirth=17/02/2002" \
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

        "documentNumber": "019.166.58601",

        "documentType": "CPF",

        "firstName": "NOMBRE SEGUNDO",

        "fullName": "NOMBRE SEGUNDO APELLIDO",

        "lastName": "APELLIDO",

        "dateOfBirth": "17/02/2002"

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

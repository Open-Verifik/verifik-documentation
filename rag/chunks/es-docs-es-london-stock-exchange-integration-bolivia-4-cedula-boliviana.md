---
id: "es-docs-es-london-stock-exchange-integration-bolivia-4-cedula-boliviana"
title: "Bolivia — API pública Verifik — 4. Cedula Boliviana"
sourcePath: "docs-es/london-stock-exchange-integration/bolivia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "bo"
  - "london-stock-exchange-integration"
endpoint: "/v2/bo/cedula"
sourceAnchor: "4. Cedula Boliviana"
slug: "/london-stock-exchange-integration/bolivia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/bolivia"
---

# Bolivia — API pública Verifik
**API path(s):** /v2/bo/cedula

## 4. Cedula Boliviana

[English version](/london-stock-exchange-integration/bolivia/) · **Español** (esta página)

# Bolivia

## 4. Cedula Boliviana

**Ubicación en la colección:** v2 › bo › cedula › Cedula Boliviana

**Qué hace (resumen):**

La API de Identificación de Ciudadano Boliviano le permite obtener información básica sobre un ciudadano boliviano basada en su número de identificación nacional y fecha de nacimiento.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/bo/cedula?documentType=CI&documentNumber=4511200&dateOfBirth=27/03/1978
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CI | (Required) Tipo de documento. Valor permitido: CI. |
| documentNumber | 4511200 |  |
| dateOfBirth | 27/03/1978 | (Required) Fecha de nacimiento de la persona a consultar, formato valido: dd/mm/yyyy  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/bo/cedula?documentType=CI&documentNumber=4511200&dateOfBirth=27/03/1978" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "LIDIA",

            "IRIARTE",

            "TORREZ"

        ],

        "dateOfBirth": "1978-03-27",

        "documentNumber": "4511200",

        "documentType": "CI",

        "firstName": "LIDIA",

        "fullName": "LIDIA IRIARTE TORREZ",

        "lastName": "IRIARTE TORREZ"

    },

    "signature": {

        "dateTime": "April 9, 2026 2:51 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "91IL9"

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

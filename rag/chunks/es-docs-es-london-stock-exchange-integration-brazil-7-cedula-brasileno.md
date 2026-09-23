---
id: "es-docs-es-london-stock-exchange-integration-brazil-7-cedula-brasileno"
title: "Brasil: API pública Verifik — 7. Cedula Brasileño"
sourcePath: "docs-es/london-stock-exchange-integration/brazil.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "br"
  - "london-stock-exchange-integration"
endpoint: "/v2/br/cedula"
sourceAnchor: "7. Cedula Brasileño"
slug: "/london-stock-exchange-integration/brazil"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/brazil"
---

# Brasil: API pública Verifik
**API path(s):** /v2/br/cedula

## 7. Cedula Brasileño

[English version](/london-stock-exchange-integration/brazil/) · **Español** (esta página)

# Brasil

## 7. Cedula Brasileño

**Ubicación en la colección:** v2 › br › cedula › Cedula Brasileño

**Qué hace (resumen):**

La API de validación de CPF brasileño permite a los usuarios verificar la validez de los números de CPF (Cadastro de Pessoas Físicas) brasileños. La API devuelve una respuesta JSON que incluye el tipo de documento, número de documento, nombre completo, primer nombre, apellido y un array con el primer y último nombre del individuo.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/br/cedula?documentType=CPF&documentNumber=019.166.586-01&dateOfBirth=17/02/2002
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CPF | (Required) Tipo de documento. Valor permitido: CPF. |
| documentNumber | 019.166.586-01 | (Required) Número de documento de la persona a consultar. |
| dateOfBirth | 17/02/2002 | (Required) Fecha de nacimiento de la persona a consultar, formato correcto: dd/mm/yyyy |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/br/cedula?documentType=CPF&documentNumber=019.166.586-01&dateOfBirth=17/02/2002" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "RAISSA",

            "LARA",

            "ROCHA",

            "ALVES",

            "FERREIRA"

        ],

        "dateOfBirth": "2002-02-17",

        "documentNumber": "01916658601",

        "documentType": "CPF",

        "firstName": "RAISSA LARA ROCHA",

        "fullName": "RAISSA LARA ROCHA ALVES FERREIRA",

        "lastName": "ALVES FERREIRA"

    },

    "signature": {

        "dateTime": "April 9, 2026 9:46 AM",

        "message": "Certified by Verifik.co"

    },

    "id": "BQG7M"

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

---
id: "es-docs-es-london-stock-exchange-integration-argentina-1-cedula-argentina"
title: "Argentina — API pública Verifik — 1. Cedula Argentina"
sourcePath: "docs-es/london-stock-exchange-integration/argentina.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "ar"
  - "london-stock-exchange-integration"
endpoint: "/v2/ar/cedula"
sourceAnchor: "1. Cedula Argentina"
slug: "/london-stock-exchange-integration/argentina"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/argentina"
---

# Argentina — API pública Verifik
**API path(s):** /v2/ar/cedula

## 1. Cedula Argentina

[English version](/london-stock-exchange-integration/argentina/) · **Español** (esta página)

# Argentina

## 1. Cedula Argentina

**Ubicación en la colección:** v2 › ar › cedula › Cedula Argentina

**Qué hace (resumen):**

La API de verificación de Documento Nacional de Identidad (DNI) Argentino permite a los desarrolladores verificar la autenticidad de un documento de identidad argentino (Documento Nacional de Identidad, o DNI) al proporcionar el número de DNI. La API devuelve información como el nombre completo de la persona, el nombre y apellido por separado, y el número de DNI.

Esta información se puede utilizar para diversos fines, como verificar la identidad de un cliente o validar la información proporcionada por un usuario.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/ar/cedula?documentType=DNIAR&documentNumber=33016244
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | DNIAR | (Required) Tipo de documento. Valor permitido: DNIAR. |
| documentNumber | 33016244 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/ar/cedula?documentType=DNIAR&documentNumber=33016244" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "MESSI",

            "LIONEL",

            "ANDRES"

        ],

        "documentNumber": "33016244",

        "documentType": "DNIAR",

        "firstName": "LIONEL ANDRES",

        "fullName": "LIONEL ANDRES MESSI",

        "lastName": "MESSI"

    },

    "signature": {

        "dateTime": "April 8, 2026 9:40 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "JH82J"

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

    "message": "documentNumber maximum length: 13\n"

}
```

---

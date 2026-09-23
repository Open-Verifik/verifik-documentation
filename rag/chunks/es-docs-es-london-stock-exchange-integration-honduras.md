---
id: "es-docs-es-london-stock-exchange-integration-honduras"
title: "Honduras — API pública Verifik — 97. Cedula Honduras"
sourcePath: "docs-es/london-stock-exchange-integration/honduras.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "hn"
  - "london-stock-exchange-integration"
endpoint: "/v2/hn/cedula?documenttype=dnihn&documentnumber=0501199705651"
sourceAnchor: "97. Cedula Honduras"
slug: "/london-stock-exchange-integration/honduras"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/honduras"
---

# Honduras — API pública Verifik
**API path(s):** /v2/hn/cedula?documenttype=dnihn&documentnumber=0501199705651

## 97. Cedula Honduras

[English version](/london-stock-exchange-integration/honduras/) · **Español** (esta página)

# Honduras

## 97. Cedula Honduras

**Ubicación en la colección:** v2 › hn › cedula › Cedula Honduras

**Qué hace (resumen):**

La API de verificación de Documento Nacional de Identidad (DNI) Argentino permite a los desarrolladores verificar la autenticidad de un documento de identidad argentino (Documento Nacional de Identidad, o DNI) al proporcionar el número de DNI. La API devuelve información como el nombre completo de la persona, el nombre y apellido por separado, y el número de DNI.

Esta información se puede utilizar para diversos fines, como verificar la identidad de un cliente o validar la información proporcionada por un usuario.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/hn/cedula?documentType=DNIHN&documentNumber=0501199705651
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | DNIHN | (Required) Tipo de documento. Valor permitido: CCAR. |
| documentNumber | 0501199705651 | (Required) Número de documento de la persona a consultar. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/hn/cedula?documentType=DNIHN&documentNumber=0501199705651" \
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

        "documentNumber": "0501199705651",

        "documentType": "DNIHN",

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

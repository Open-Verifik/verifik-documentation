---
id: "es-docs-es-london-stock-exchange-integration-spain-114-verificar-tarjeta-de-identidad-espanola-dni-nie"
title: "España — API pública Verifik — 114. Verificar tarjeta de identidad española (DNI/NIE)"
sourcePath: "docs-es/london-stock-exchange-integration/spain.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "es"
  - "london-stock-exchange-integration"
endpoint: "/v2/es/cedula"
sourceAnchor: "114. Verificar tarjeta de identidad española (DNI/NIE)"
slug: "/london-stock-exchange-integration/spain"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/spain"
---

# España — API pública Verifik
**API path(s):** /v2/es/cedula

## 114. Verificar tarjeta de identidad española (DNI/NIE)

[English version](/london-stock-exchange-integration/spain/) · **Español** (esta página)

# España

## 114. Verificar tarjeta de identidad española (DNI/NIE)

**Ubicación en la colección:** v2 › es › cedula › Verificar tarjeta de identidad española (DNI/NIE)

**Qué hace (resumen):**

Con la API de Verifik para España, puedes verificar fácilmente la validez de las tarjetas de identidad españolas (DNI/NIE) al proporcionar el número de documento y la fecha de vencimiento. La API devuelve una respuesta JSON que contiene el tipo de documento, número de documento, nombre completo, primer nombre, apellido y un array de nombres.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/es/cedula?documentType=DNIES&documentNumber=29731290H&expirationDate=27/03/2025
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | DNIES | (Required) Tipo de documento. Parámetros permitidos: DNIES, NIE. |
| documentNumber | 29731290H | (Required) Número de documento de la persona a consultar, sin espacios ni puntos. |
| expirationDate | 27/03/2025 | (Required) Fecha en la que expira el documento a consultar. Formato válido: DD/MM/YYYY |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/es/cedula?documentType=DNIES&documentNumber=29731290H&expirationDate=27/03/2025" \
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

        "documentNumber": "29731290H",

        "documentType": "DNIES",

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

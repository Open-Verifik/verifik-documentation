---
id: "es-docs-es-london-stock-exchange-integration-costa-rica-84-informacion-de-la-cedula-de-identidad-nacional-de-costa-rica"
title: "Costa Rica — API pública Verifik — 84. Información de la Cédula de Identidad Nacional de Costa Rica"
sourcePath: "docs-es/london-stock-exchange-integration/costa-rica.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "cr"
  - "london-stock-exchange-integration"
endpoint: "/v2/cr/cedula"
sourceAnchor: "84. Información de la Cédula de Identidad Nacional de Costa Rica"
slug: "/london-stock-exchange-integration/costa-rica"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/costa-rica"
---

# Costa Rica — API pública Verifik
**API path(s):** /v2/cr/cedula

## 84. Información de la Cédula de Identidad Nacional de Costa Rica

[English version](/london-stock-exchange-integration/costa-rica/) · **Español** (esta página)

# Costa Rica

## 84. Información de la Cédula de Identidad Nacional de Costa Rica

**Ubicación en la colección:** v2 › cr › cedula › Información de la Cédula de Identidad Nacional de Costa Rica

**Qué hace (resumen):**

Esta API le permite verificar la autenticidad de una Cédula de Identidad Nacional costarricense al proporcionar el número de documento. La respuesta incluye el nombre completo del titular de la tarjeta, así como sus nombres y apellidos por separado.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/cr/cedula?documentType=CCCR&documentNumber=206820588
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CCCR | (Required) Tipo de documento. Parametro permitido: CCCR. |
| documentNumber | 206820588 | (Required) Número de documento a consultar, sin espacios ni puntos. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/cr/cedula?documentType=CCCR&documentNumber=206820588" \
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

        "documentNumber": "206820588",

        "documentType": "CCCR",

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

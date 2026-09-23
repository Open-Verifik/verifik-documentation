---
id: "es-docs-es-london-stock-exchange-integration-chile-22-contribuyente-rut-chile-5"
title: "Chile — API pública Verifik — 22. Contribuyente rut Chile"
sourcePath: "docs-es/london-stock-exchange-integration/chile.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "cl"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/cl/cedula"
  - "/v2/cl/company"
  - "/v2/cl/driver-license"
  - "/v2/cl/taxpayer"
  - "/v2/cl/vehicle"
sourceAnchor: "22. Contribuyente rut Chile"
slug: "/london-stock-exchange-integration/chile"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/chile"
---

# Chile — API pública Verifik
**API path(s):** /v2/cl/cedula, /v2/cl/company, /v2/cl/driver-license, /v2/cl/taxpayer, /v2/cl/vehicle

## 22. Contribuyente rut Chile

**Ubicación en la colección:** v2 › cl › Contribuyente › Contribuyente rut Chile

**Qué hace (resumen):**

Esta API realiza una **consulta de contribuyente (RUT)** en Chile: envíe `documentType=RUT` y el identificador en `documentNumber`. La respuesta se orienta al **registro tributario** (nombre estructurado) para **KYB**, **proveedores** y validación de **facturación**—distinta de la **cédula** civil (`v2/cl/cedula`) y de la **licencia de conducir** (`v2/cl/driver-license`).

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/cl/taxpayer?documentType=RUT&documentNumber=263007905
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | RUT |  |
| documentNumber | 263007905 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/cl/taxpayer?documentType=RUT&documentNumber=263007905" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "RICHARD",

            "DANIEL",

            "BARBERA",

            "MARICHAL"

        ],

        "documentNumber": "263007905",

        "documentType": "RUT",

        "firstName": "RICHARD DANIEL",

        "fullName": "RICHARD DANIEL BARBERA MARICHAL",

        "lastName": "BARBERA MARICHAL"

    },

    "signature": {

        "dateTime": "April 9, 2026 3:02 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "S40CG"

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

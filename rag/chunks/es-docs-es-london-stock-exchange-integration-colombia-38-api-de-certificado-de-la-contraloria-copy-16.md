---
id: "es-docs-es-london-stock-exchange-integration-colombia-38-api-de-certificado-de-la-contraloria-copy-16"
title: "Colombia — API pública Verifik — 38. API de Certificado de la Contraloría Copy"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "38. API de Certificado de la Contraloría Copy"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 38. API de Certificado de la Contraloría Copy

**Ubicación en la colección:** v2 › co › contraloria › certificado › API de Certificado de la Contraloría Copy

**Qué hace (resumen):**

La API de Certificado de la Contraloría te permite verificar un certificado de buena conducta emitido por la Contraloría de Colombia. Simplemente proporciona el tipo y número de documento, y la API devolverá la fecha de búsqueda y un PDF codificado en base64 del certificado. 

La respuesta de la API está certificada por Verifik.co para garantizar la autenticidad de los datos. Utiliza esta API para confirmar de manera rápida y sencilla la buena conducta de una empresa o individuo colombiano.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/contraloria/certificado?documentType=CC&documentNumber=1121329661
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CC | (Required) Tipo de documento. Parámetros válidos: CC, CE, PA, PEP.  |
| documentNumber | 1121329661 | (Required) Número de documento de la persona a consultar, sin espacios ni puntos. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/contraloria/certificado?documentType=CC&documentNumber=1121329661" \
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

        "documentNumber": "1121329661",

        "documentType": "CC",

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

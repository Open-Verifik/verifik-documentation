---
id: "es-docs-es-london-stock-exchange-integration-spain-116-empresa-espanola-cif-3"
title: "España — API pública Verifik — 116. empresa española (CIF)"
sourcePath: "docs-es/london-stock-exchange-integration/spain.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "es"
  - "london-stock-exchange-integration"
endpoint: "/v2/es/cedula"
sourceAnchor: "116. empresa española (CIF)"
slug: "/london-stock-exchange-integration/spain"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/spain"
---

# España — API pública Verifik
**API path(s):** /v2/es/cedula

## 116. empresa española (CIF)

**Ubicación en la colección:** v2 › es › Empresas › empresa española (CIF)

**Qué hace (resumen):**

Con la API de Verifik para España, puedes verificar fácilmente la validez de las tarjetas de identidad españolas (DNI/NIE) al proporcionar el número de documento y la fecha de vencimiento. La API devuelve una respuesta JSON que contiene el tipo de documento, número de documento, nombre completo, primer nombre, apellido y un array de nombres.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/es/company?documentType=NIF&documentNumber=A29268166
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | NIF |  |
| documentNumber | A29268166 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/es/company?documentType=NIF&documentNumber=A29268166" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentType": "NIF",

        "documentNumber": "A29268166",

        "legalName": "EMPRESA EJEMPLO SA",

        "status": "ACTIVO"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "CMPY1"

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

    "message": "documentNumber invalid format."

}
```

---

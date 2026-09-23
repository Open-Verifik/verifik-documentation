---
id: "es-docs-es-london-stock-exchange-integration-el-salvador"
title: "El Salvador — API pública Verifik — 94. El Salvador DUI Information Lookup"
sourcePath: "docs-es/london-stock-exchange-integration/el-salvador.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "sv"
  - "london-stock-exchange-integration"
endpoint: "/v2/sv/dui?documentnumber=055765964&dateofbirth=06/07/1997"
sourceAnchor: "94. El Salvador DUI Information Lookup"
slug: "/london-stock-exchange-integration/el-salvador"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/el-salvador"
---

# El Salvador — API pública Verifik
**API path(s):** /v2/sv/dui?documentnumber=055765964&dateofbirth=06/07/1997

## 94. El Salvador DUI Information Lookup

[English version](/london-stock-exchange-integration/el-salvador/) · **Español** (esta página)

# El Salvador

## 94. El Salvador DUI Information Lookup

**Ubicación en la colección:** v2 › sv › dui › El Salvador DUI Information Lookup

**Qué hace (resumen):**

The El Salvador DUI Information Lookup API allows you to effortlessly retrieve personal information associated with a DUI (Documento Único de Identidad) by using the document number. This API is a reliable and efficient tool for obtaining essential details related to an individual's identity.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/sv/dui?documentNumber=055765964&dateOfBirth=06/07/1997
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentNumber | 055765964 | (Required) Document number of the person to consult, without spaces or points. |
| dateOfBirth | 06/07/1997 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/sv/dui?documentNumber=055765964&dateOfBirth=06/07/1997" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentNumber": "055765964",

        "dateOfBirth": "06/07/1997"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "GNRC1"

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

    "code": "Conflict",

    "message": "Endpoint out of service."

}
```

---

---
id: "es-docs-es-london-stock-exchange-integration-venezuela-125-venezuela-publico-3"
title: "Venezuela — API pública Verifik — 125. venezuela publico"
sourcePath: "docs-es/london-stock-exchange-integration/venezuela.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "ve"
  - "london-stock-exchange-integration"
endpoint: "/v2/ve/cedula"
sourceAnchor: "125. venezuela publico"
slug: "/london-stock-exchange-integration/venezuela"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/venezuela"
---

# Venezuela — API pública Verifik
**API path(s):** /v2/ve/cedula

## 125. venezuela publico

**Ubicación en la colección:** v2 › ve › Publico › venezuela publico

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/ve/public/cedula?documentNumber=25622914
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentNumber | 25622914 |  |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/ve/public/cedula?documentNumber=25622914"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentNumber": "25622914"

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

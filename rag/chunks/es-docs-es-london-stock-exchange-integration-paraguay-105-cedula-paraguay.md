---
id: "es-docs-es-london-stock-exchange-integration-paraguay-105-cedula-paraguay"
title: "Paraguay — API pública Verifik — 105. Cedula Paraguay"
sourcePath: "docs-es/london-stock-exchange-integration/paraguay.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "py"
  - "london-stock-exchange-integration"
endpoint: "/v2/py/cic"
sourceAnchor: "105. Cedula Paraguay"
slug: "/london-stock-exchange-integration/paraguay"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/paraguay"
---

# Paraguay — API pública Verifik
**API path(s):** /v2/py/cic

## 105. Cedula Paraguay

[English version](/london-stock-exchange-integration/paraguay/) · **Español** (esta página)

# Paraguay

## 105. Cedula Paraguay

**Ubicación en la colección:** v2 › py › cic › Cedula Paraguay

**Qué hace (resumen):**

The Paraguay Citizen Identification Card (CIC) Data Retrieval API allows you to effortlessly retrieve essential information from Paraguay's Citizen Identification Cards. By leveraging this API, you can efficiently obtain verified data associated with a specific CIC, enabling various identity verification and data processing applications.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/py/cic?documentNumber=5316480
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentNumber | 5316480 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/py/cic?documentNumber=5316480" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentNumber": "5316480"

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

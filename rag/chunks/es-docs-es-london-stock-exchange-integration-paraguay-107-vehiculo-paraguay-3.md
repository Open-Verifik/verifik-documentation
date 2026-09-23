---
id: "es-docs-es-london-stock-exchange-integration-paraguay-107-vehiculo-paraguay-3"
title: "Paraguay — API pública Verifik — 107. Vehiculo Paraguay"
sourcePath: "docs-es/london-stock-exchange-integration/paraguay.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "py"
  - "london-stock-exchange-integration"
endpoint: "/v2/py/cic"
sourceAnchor: "107. Vehiculo Paraguay"
slug: "/london-stock-exchange-integration/paraguay"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/paraguay"
---

# Paraguay — API pública Verifik
**API path(s):** /v2/py/cic

## 107. Vehiculo Paraguay

**Ubicación en la colección:** v2 › py › vehicle › Vehiculo Paraguay

**Qué hace (resumen):**

The Paraguay Citizen Identification Card (CIC) Data Retrieval API allows you to effortlessly retrieve essential information from Paraguay's Citizen Identification Cards. By leveraging this API, you can efficiently obtain verified data associated with a specific CIC, enabling various identity verification and data processing applications.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/py/vehicle?plate=BGR850
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| plate | BGR850 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/py/vehicle?plate=BGR850" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "BGR850",

        "brand": "MAKE",

        "model": "MODEL",

        "year": "2020",

        "vehicleType": "SEDAN"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "VHCL1"

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

    "message": "plate format invalid."

}
```

---

---
id: "es-docs-es-london-stock-exchange-integration-bolivia-5-vehiculo-boliviano-2"
title: "Bolivia — API pública Verifik — 5. Vehiculo Boliviano"
sourcePath: "docs-es/london-stock-exchange-integration/bolivia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "bo"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/bo/cedula"
  - "/v2/bo/company"
  - "/v2/bo/vehicle"
sourceAnchor: "5. Vehiculo Boliviano"
slug: "/london-stock-exchange-integration/bolivia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/bolivia"
---

# Bolivia — API pública Verifik
**API path(s):** /v2/bo/cedula, /v2/bo/company, /v2/bo/vehicle

## 5. Vehiculo Boliviano

**Ubicación en la colección:** v2 › bo › vehiculo › Vehiculo Boliviano

**Qué hace (resumen):**

La API de Identificación de Ciudadano Boliviano le permite obtener información básica sobre un ciudadano boliviano basada en su número de identificación nacional y fecha de nacimiento.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/bo/vehicle?plate=1852PHD
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| plate | 1852PHD | (Required) Tipo de documento. Valor permitido: CI. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |
| User-Agent |  |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/bo/vehicle?plate=1852PHD" \
  -H "Accept: application/json" \
  -H "User-Agent: "
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "Policy": "71063790",

        "brand": "TOYOTA",

        "clase": "VAGONETA",

        "declaratory": "ACHOCALLA",

        "plate": "1852PHD",

        "service": "PARTICULAR",

        "type": "LAND CRUISER PRADO"

    },

    "signature": {

        "dateTime": "April 9, 2026 12:22 AM",

        "message": "Certified by Verifik.co"

    },

    "id": "JO37I"

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

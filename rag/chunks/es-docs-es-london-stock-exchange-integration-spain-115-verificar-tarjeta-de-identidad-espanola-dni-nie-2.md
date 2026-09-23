---
id: "es-docs-es-london-stock-exchange-integration-spain-115-verificar-tarjeta-de-identidad-espanola-dni-nie-2"
title: "España — API pública Verifik — 115. Verificar tarjeta de identidad española (DNI/NIE)"
sourcePath: "docs-es/london-stock-exchange-integration/spain.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "es"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/es/cedula"
  - "/v2/es/company"
  - "/v2/es/vehicle"
sourceAnchor: "115. Verificar tarjeta de identidad española (DNI/NIE)"
slug: "/london-stock-exchange-integration/spain"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/spain"
---

# España — API pública Verifik
**API path(s):** /v2/es/cedula, /v2/es/company, /v2/es/vehicle

## 115. Verificar tarjeta de identidad española (DNI/NIE)

**Ubicación en la colección:** v2 › es › vehiculo › Verificar tarjeta de identidad española (DNI/NIE)

**Qué hace (resumen):**

Con la API de Verifik para España, puedes verificar fácilmente la validez de las tarjetas de identidad españolas (DNI/NIE) al proporcionar el número de documento y la fecha de vencimiento. La API devuelve una respuesta JSON que contiene el tipo de documento, número de documento, nombre completo, primer nombre, apellido y un array de nombres.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/es/vehicle?plate=5684CCD
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| plate | 5684CCD | (Required) Número de documento de la persona a consultar, sin espacios ni puntos. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/es/vehicle?plate=5684CCD" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "5684CCD",

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

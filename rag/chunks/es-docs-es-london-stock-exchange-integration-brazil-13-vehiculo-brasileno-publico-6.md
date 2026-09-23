---
id: "es-docs-es-london-stock-exchange-integration-brazil-13-vehiculo-brasileno-publico-6"
title: "Brasil: API pública Verifik — 13. Vehículo Brasileño Publico"
sourcePath: "docs-es/london-stock-exchange-integration/brazil.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "br"
  - "vehicle"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/br/background-check"
  - "/v2/br/cedula"
  - "/v2/br/company"
  - "/v2/br/public/cedula"
  - "/v2/br/public/vehicle"
  - "/v2/br/vehicle"
  - "/v2/br/vehicle/data-sheet-by-plate"
  - "/v2/vehicle/data-sheet"
sourceAnchor: "13. Vehículo Brasileño Publico"
slug: "/london-stock-exchange-integration/brazil"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/brazil"
---

# Brasil: API pública Verifik
**API path(s):** /v2/br/background-check, /v2/br/cedula, /v2/br/company, /v2/br/public/cedula, /v2/br/public/vehicle, /v2/br/vehicle, /v2/br/vehicle/data-sheet-by-plate, /v2/vehicle/data-sheet

## 13. Vehículo Brasileño Publico

**Ubicación en la colección:** v2 › br › vehiculo publico › Vehículo Brasileño Publico

**Qué hace (resumen):**

La API de Verificación de Vehículo Brasileño permite verificar la autenticidad de la información de un vehículo brasileño al proporcionar el número de placa del vehículo. La API devuelve información detallada sobre el vehículo, incluyendo la marca, modelo, año de fabricación, motor, transmisión, tipo de combustible y más.

Esta API es útil para concesionarios de automóviles, compañías de seguros y cualquier empresa o individuo que desee verificar la información de un vehículo brasileño.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/br/public/vehicle?plate=CDV2172
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| plate | CDV2172 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/br/public/vehicle?plate=CDV2172" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "CDV2172",

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

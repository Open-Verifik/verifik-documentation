---
id: "es-docs-es-london-stock-exchange-integration-misc-118-vin-estados-unidos-2"
title: "Otros — API pública Verifik — 118. vin Estados Unidos"
sourcePath: "docs-es/london-stock-exchange-integration/misc.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "usa"
  - "london-stock-exchange-integration"
endpoint: "/v2/usa/vehicle"
sourceAnchor: "118. vin Estados Unidos"
slug: "/london-stock-exchange-integration/misc"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/misc"
---

# Otros — API pública Verifik
**API path(s):** /v2/usa/vehicle

## 118. vin Estados Unidos

**Ubicación en la colección:** v2 › usa › vehicle › vin Estados Unidos

**Qué hace (resumen):**

La API de Información de Vehículo proporciona una forma de obtener información detallada sobre un vehículo en Estados Unidos, dado su número de matrícula y estado. La API devuelve una respuesta en formato JSON que incluye varios puntos de datos sobre el vehículo, como marca, modelo, año del modelo, configuración del motor, clase del cuerpo, estilo de transmisión y más.

Esta API puede ser útil para una variedad de aplicaciones, como informes de historial de vehículos, investigación automotriz y suscripción de seguros.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/usa/vehicle-by-vin?vin=1G3AK47A7CM535209
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| vin | 1G3AK47A7CM535209 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/usa/vehicle-by-vin?vin=1G3AK47A7CM535209" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "ABC123",

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

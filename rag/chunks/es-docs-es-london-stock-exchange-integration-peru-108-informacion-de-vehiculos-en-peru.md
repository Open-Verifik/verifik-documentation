---
id: "es-docs-es-london-stock-exchange-integration-peru-108-informacion-de-vehiculos-en-peru"
title: "Perú — API pública Verifik — 108. Información de Vehículos en Perú"
sourcePath: "docs-es/london-stock-exchange-integration/peru.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "pe"
  - "london-stock-exchange-integration"
endpoint: "/v2/pe/vehiculo/placa"
sourceAnchor: "108. Información de Vehículos en Perú"
slug: "/london-stock-exchange-integration/peru"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/peru"
---

# Perú — API pública Verifik
**API path(s):** /v2/pe/vehiculo/placa

## 108. Información de Vehículos en Perú

[English version](/london-stock-exchange-integration/peru/) · **Español** (esta página)

# Perú

## 108. Información de Vehículos en Perú

**Ubicación en la colección:** v2 › pe › vehículo › placa › Información de Vehículos en Perú

**Qué hace (resumen):**

La API de Información de Vehículos en Perú proporciona información detallada sobre los vehículos registrados en Perú basándose en su número de placa. La API devuelve información como la marca, modelo, año, números de serie del motor y chasis, capacidad de asientos y tipo de uso del vehículo.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/pe/vehiculo/placa?plate=AFJ286
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| plate | AFJ286 | (Required) Número de placa a consultar, sin espacios ni puntos. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/pe/vehiculo/placa?plate=AFJ286" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "brand": "KIA",

        "chasisSerial": "KNADM411AF6513136",

        "engineSerial": "G4LAEP154276",

        "model": "RIO",

        "plate": "AFJ286",

        "seats": "5",

        "serial": "KNADM411AF6513136",

        "type": "AUTOMOVIL",

        "use": "PARTICULAR",

        "validFormat": "true",

        "year": "2014"

    },

    "signature": {

        "dateTime": "April 10, 2026 3:54 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "P9QR6"

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

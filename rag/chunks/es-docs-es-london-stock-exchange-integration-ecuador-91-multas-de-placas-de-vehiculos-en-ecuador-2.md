---
id: "es-docs-es-london-stock-exchange-integration-ecuador-91-multas-de-placas-de-vehiculos-en-ecuador-2"
title: "Ecuador — API pública Verifik — 91. Multas de Placas de Vehículos en Ecuador"
sourcePath: "docs-es/london-stock-exchange-integration/ecuador.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "ec"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/ec/cedula?documenttype=ccec&documentnumber=0102260098"
  - "/v2/ec/company?documenttype=rucec&documentnumber=1790008959001"
  - "/v2/ec/vehiculo/placa/multas?plate=abb4568"
  - "/v2/ec/vehiculo/placa?plate=pbb3239"
sourceAnchor: "91. Multas de Placas de Vehículos en Ecuador"
slug: "/london-stock-exchange-integration/ecuador"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/ecuador"
---

# Ecuador — API pública Verifik
**API path(s):** /v2/ec/cedula?documenttype=ccec&documentnumber=0102260098, /v2/ec/company?documenttype=rucec&documentnumber=1790008959001, /v2/ec/vehiculo/placa/multas?plate=abb4568, /v2/ec/vehiculo/placa?plate=pbb3239

## 91. Multas de Placas de Vehículos en Ecuador

**Ubicación en la colección:** v2 › ec › vehículo › placa › multas › Multas de Placas de Vehículos en Ecuador

**Qué hace (resumen):**

La API de Multas de Placas de Vehículos en Ecuador te permite obtener información sobre las multas asociadas con la placa de un vehículo en Ecuador. Esta API proporciona detalles como la información de registro del vehículo, incluyendo el número de placa, clase y modelo. También muestra el estado actual, tipo de servicio y fecha de vencimiento del registro. Además, la API muestra cualquier multa pendiente asociada con la placa de la licencia.

Esta información es útil para personas y empresas que deseen estar al día con las multas asociadas a sus vehículos y mantener el cumplimiento de las leyes de tránsito ecuatorianas.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/ec/vehiculo/placa?plate=PBB3239
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| plate | PBB3239 | (Required) Número de placa a consultar, sin espacios ni puntos. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/ec/vehiculo/placa?plate=PBB3239" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "PBB3239",

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

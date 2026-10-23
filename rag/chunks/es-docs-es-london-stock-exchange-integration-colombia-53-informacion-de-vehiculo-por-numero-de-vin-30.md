---
id: "es-docs-es-london-stock-exchange-integration-colombia-53-informacion-de-vehiculo-por-numero-de-vin-30"
title: "Colombia — API pública Verifik — 53. Información de Vehículo por Número de VIN"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "53. Información de Vehículo por Número de VIN"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 53. Información de Vehículo por Número de VIN

**Ubicación en la colección:** v2 › co › runt › vehicle-by-vin › Información de Vehículo por Número de VIN

**Qué hace (resumen):**

La API de Información de Vehículo de Verifik te permite obtener detalles sobre un vehículo registrado en Colombia mediante su VIN (Número de Identificación del Vehículo). Esta API proporciona información como el estado del vehículo, tipo de servicio, clase del vehículo, marca, modelo, color y especificaciones técnicas como peso y número de asientos. Además, esta API proporciona información sobre pólizas de seguros y registros de inspección del vehículo.

Para utilizar esta API, simplemente proporciona el VIN del vehículo como parámetro y la API devolverá una respuesta JSON con los detalles del vehículo.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/runt/vehicle-by-vin?vin=VR3KBDGH5TS001559
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| vin | VR3KBDGH5TS001559 | (Required) VIN unico del vehículo a consultar. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/runt/vehicle-by-vin?vin=VR3KBDGH5TS001559" \
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

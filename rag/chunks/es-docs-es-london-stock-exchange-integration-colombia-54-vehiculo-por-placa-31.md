---
id: "es-docs-es-london-stock-exchange-integration-colombia-54-vehiculo-por-placa-31"
title: "Colombia — API pública Verifik — 54. Vehículo por Placa"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "54. Vehículo por Placa"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 54. Vehículo por Placa

**Ubicación en la colección:** v2 › co › runt › full vehicle by plate › Vehículo por Placa

**Qué hace (resumen):**

La API de Información de Vehículo te permite obtener información detallada sobre un vehículo en Colombia al proporcionar su número de placa y el número de documento de su propietario. Con esta API, puedes acceder a información como la marca, modelo, color y datos técnicos del vehículo. Además, puedes obtener datos sobre el historial de seguros del vehículo, incluyendo el SOAT y pólizas de responsabilidad civil, así como inspecciones técnicas y garantías.

Esta API proporciona un recurso valioso para empresas e individuos que buscan acceder a información precisa y actualizada sobre vehículos en Colombia.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/runt/vehiculo-completo?plate=NQW621
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| plate | NQW621 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/runt/vehiculo-completo?plate=NQW621" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "NQW621",

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

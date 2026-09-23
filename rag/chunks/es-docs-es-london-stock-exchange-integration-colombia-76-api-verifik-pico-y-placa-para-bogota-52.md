---
id: "es-docs-es-london-stock-exchange-integration-colombia-76-api-verifik-pico-y-placa-para-bogota-52"
title: "Colombia — API pública Verifik — 76. API Verifik Pico y Placa para Bogotá"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "76. API Verifik Pico y Placa para Bogotá"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 76. API Verifik Pico y Placa para Bogotá

**Ubicación en la colección:** v2 › co › bogota › API Verifik Pico y Placa para Bogotá

**Qué hace (resumen):**

La API Verifik Pico y Placa para Bogotá proporciona información en tiempo real sobre el horario de Pico y Placa para vehículos registrados en Bogotá, Colombia. Pico y Placa es una política de restricción de tráfico que limita la circulación de vehículos según el último dígito de la placa. Esta API permite a los desarrolladores consultar el horario de Pico y Placa para una determinada placa de vehículo y obtener información sobre excepciones o condiciones especiales que puedan aplicarse.

Ten en cuenta que este servicio solo funciona para vehículos registrados en Bogotá y está destinado únicamente con fines informativos.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/vehiculo/pico-y-placa?plate=BJO582
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| plate | BJO582 | (Required) Número de placa a consultar, sin espacios ni puntos. |
| city | BOGOTA |  |
| serviceType | PARTICULARES |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/vehiculo/pico-y-placa?plate=BJO582" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "BJO582",

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

---
id: "es-docs-es-london-stock-exchange-integration-colombia-78-api-verifik-conductores-arjeta-54"
title: "Colombia — API pública Verifik — 78. API Verifik Conductores arjeta"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "78. API Verifik Conductores arjeta"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 78. API Verifik Conductores arjeta

**Ubicación en la colección:** v2 › co › bogota › API Verifik Conductores arjeta

**Qué hace (resumen):**

La API Verifik Pico y Placa para Bogotá proporciona información en tiempo real sobre el horario de Pico y Placa para vehículos registrados en Bogotá, Colombia. Pico y Placa es una política de restricción de tráfico que limita la circulación de vehículos según el último dígito de la placa. Esta API permite a los desarrolladores consultar el horario de Pico y Placa para una determinada placa de vehículo y obtener información sobre excepciones o condiciones especiales que puedan aplicarse.

Ten en cuenta que este servicio solo funciona para vehículos registrados en Bogotá y está destinado únicamente con fines informativos.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/bogota/taxi-drivers/card/300283
```

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/bogota/taxi-drivers/card/300283" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "status": "ok",

        "resource": "taxi-drivers/card/300283"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "GNRC1"

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

    "code": "Conflict",

    "message": "Endpoint out of service."

}
```

---

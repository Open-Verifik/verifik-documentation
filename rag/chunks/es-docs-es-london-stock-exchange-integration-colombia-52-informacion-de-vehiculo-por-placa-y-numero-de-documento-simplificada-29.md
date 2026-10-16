---
id: "es-docs-es-london-stock-exchange-integration-colombia-52-informacion-de-vehiculo-por-placa-y-numero-de-documento-simplificada-29"
title: "Colombia — API pública Verifik — 52. Información de Vehículo por Placa y Número de Documento Simplificada"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "52. Información de Vehículo por Placa y Número de Documento Simplificada"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 52. Información de Vehículo por Placa y Número de Documento Simplificada

**Ubicación en la colección:** v2 › co › runt › vehicle-by-plate-simplified › Información de Vehículo por Placa y Número de Documento Simplificada

**Qué hace (resumen):**

La API de Información de Vehículo te permite obtener información detallada sobre un vehículo en Colombia al proporcionar su número de placa y el número de documento de su propietario. Con esta API, puedes acceder a información como la marca, modelo, color y datos técnicos del vehículo. Además, puedes obtener datos sobre el historial de seguros del vehículo, incluyendo el SOAT y pólizas de responsabilidad civil, así como inspecciones técnicas y garantías.

Esta API proporciona un recurso valioso para empresas e individuos que buscan acceder a información precisa y actualizada sobre vehículos en Colombia.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/runt/vehicle-by-plate-simplified?documentType=NIT&documentNumber=890903938&plate=NFQ486
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | NIT | (Required) Tipo de Documento. Valores permitidos son: CC, CE, PA, RC, NIT. |
| documentNumber | 890903938 | (Required) Número de documento del propietario del vehículo, sin espacios ni puntos |
| plate | NFQ486 | (Required) Placa del vehículo a consultar. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/runt/vehicle-by-plate-simplified?documentType=NIT&documentNumber=890903938&plate=NFQ486" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "NFQ486",

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

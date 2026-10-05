---
id: "es-docs-es-london-stock-exchange-integration-colombia-50-servicio-de-informacion-de-vehiculos-en-colombia-27"
title: "Colombia — API pública Verifik — 50. Servicio de Información de Vehículos en Colombia"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "50. Servicio de Información de Vehículos en Colombia"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 50. Servicio de Información de Vehículos en Colombia

**Ubicación en la colección:** v2 › co › runt › vehículo › Servicio de Información de Vehículos en Colombia

**Qué hace (resumen):**

La API del Servicio de Información de Vehículos en Colombia proporciona acceso a información en tiempo real sobre un vehículo registrado en Colombia. Ofrece detalles como el nombre e identificación del propietario, color del vehículo, marca y modelo, estado de registro y fechas de vencimiento del SOAT (seguro obligatorio de accidentes de tránsito) y la revisión técnico-mecánica.

Esta API es ideal para empresas del sector automotriz, compañías de seguros y agencias gubernamentales que deseen verificar información de vehículos y el cumplimiento de regulaciones.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/runt/vehiculo?documentType=CC&documentNumber=1102378802&plate=OSG43H
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CC | (Required) Tipo de Documento. Valores permitidos son: CC, , CE, PA, RC, NIT. |
| documentNumber | 1102378802 |  |
| plate | OSG43H |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/runt/vehiculo?documentType=CC&documentNumber=1102378802&plate=OSG43H" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "OSG43H",

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

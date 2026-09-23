---
id: "es-docs-es-london-stock-exchange-integration-panama-103-informacion-de-vehiculos-en-panama-2"
title: "Panamá — API pública Verifik — 103. Información de Vehículos en Panamá"
sourcePath: "docs-es/london-stock-exchange-integration/panama.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "pa"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/pa/cedula?documenttype=ccpa&documentnumber=9-718-196&dateofbirth=25/06/1983"
  - "/v2/pa/company?documenttype=ru&documentnumber=155703400-2-2021&dv=39"
  - "/v2/pa/vehiculo/placa?plate=am5240"
sourceAnchor: "103. Información de Vehículos en Panamá"
slug: "/london-stock-exchange-integration/panama"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/panama"
---

# Panamá — API pública Verifik
**API path(s):** /v2/pa/cedula?documenttype=ccpa&documentnumber=9-718-196&dateofbirth=25/06/1983, /v2/pa/company?documenttype=ru&documentnumber=155703400-2-2021&dv=39, /v2/pa/vehiculo/placa?plate=am5240

## 103. Información de Vehículos en Panamá

**Ubicación en la colección:** v2 › pa › vehículo › placa › Información de Vehículos en Panamá

**Qué hace (resumen):**

Este API permite a los usuarios obtener información sobre un vehículo registrado en Panamá mediante su número de placa. La respuesta incluye detalles como la marca y modelo del vehículo, año de fabricación, números de serie del motor y carrocería, estado de registro y más. La API también proporciona información sobre el estado de la póliza del vehículo, el número de certificado de seguro y las fechas de inicio y fin de vigencia de la póliza de seguro.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/pa/vehiculo/placa?plate=AM5240
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| plate | AM5240 | (Required) Placa a consultar sin espacios ni puntos. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/pa/vehiculo/placa?plate=AM5240" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "AM5240",

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

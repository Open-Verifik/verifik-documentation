---
id: "es-docs-es-london-stock-exchange-integration-mexico-100-vehiculo-3"
title: "México — API pública Verifik — 100. VEHÍCULO"
sourcePath: "docs-es/london-stock-exchange-integration/mexico.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "mx"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/mx/company"
  - "/v2/mx/curp"
  - "/v2/mx/vehiculo/placa"
sourceAnchor: "100. VEHÍCULO"
slug: "/london-stock-exchange-integration/mexico"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/mexico"
---

# México — API pública Verifik
**API path(s):** /v2/mx/company, /v2/mx/curp, /v2/mx/vehiculo/placa

## 100. VEHÍCULO

**Ubicación en la colección:** v2 › mx › vehículo › placa › VEHÍCULO

**Qué hace (resumen):**

Método para obtener información complementaria y diversa de un vehículo, como tipo de carrocería, número de serial del chasis, el único parámetro que necesitas es la placa del vehículo a consultar.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/mx/vehiculo/placa?plate=MSE9670
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| plate | MSE9670 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/mx/vehiculo/placa?plate=MSE9670" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "MSE9670",

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

## 101. VEHÍCULO Copy

**Ubicación en la colección:** v2 › mx › vehículo › placa › VEHÍCULO Copy

**Qué hace (resumen):**

Método para obtener información complementaria y diversa de un vehículo, como tipo de carrocería, número de serial del chasis, el único parámetro que necesitas es la placa del vehículo a consultar.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/mx/vehiculo/placa?plate=338ER
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| plate | 338ER | (Required) Placa del vehículo a consultar. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/mx/vehiculo/placa?plate=338ER" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "338ER",

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

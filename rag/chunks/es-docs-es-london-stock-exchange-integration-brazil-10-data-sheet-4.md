---
id: "es-docs-es-london-stock-exchange-integration-brazil-10-data-sheet-4"
title: "Brasil: API pública Verifik — 10. data sheet"
sourcePath: "docs-es/london-stock-exchange-integration/brazil.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "br"
  - "london-stock-exchange-integration"
endpoint: "/v2/br/cedula"
sourceAnchor: "10. data sheet"
slug: "/london-stock-exchange-integration/brazil"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/brazil"
---

# Brasil: API pública Verifik
**API path(s):** /v2/br/cedula

## 10. data sheet

**Ubicación en la colección:** v2 › br › data sheet › data sheet

**Qué hace (resumen):**

Devuelve una **ficha técnica / hoja de datos** del vehículo a partir de **marca**, **modelo**, **año**, **versión** y **vehicleType** (`cars` o `motorcycles`). Es el endpoint global `v2/vehicle/data-sheet` (no es exclusivo de Brasil); úsalo cuando conoces datos de catálogo y no la placa.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/vehicle/data-sheet?brand=CHEVROLET&model=cruze&year=2011&version=LT&vehicleType=cars
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| brand | CHEVROLET | (Requerido) Marca. |
| model | cruze | (Requerido) Modelo. |
| year | 2011 | (Requerido) Año. |
| version | LT | Versión / acabado. |
| vehicleType | cars | `cars` o `motorcycles`. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/vehicle/data-sheet?brand=CHEVROLET&model=cruze&year=2011&version=LT&vehicleType=cars" \
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

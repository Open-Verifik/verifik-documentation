---
id: "es-docs-es-london-stock-exchange-integration-brazil-8-vehiculo-brasileno-2"
title: "Brasil: API pública Verifik — 8. Vehículo Brasileño"
sourcePath: "docs-es/london-stock-exchange-integration/brazil.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "br"
  - "london-stock-exchange-integration"
endpoint: "/v2/br/cedula"
sourceAnchor: "8. Vehículo Brasileño"
slug: "/london-stock-exchange-integration/brazil"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/brazil"
---

# Brasil: API pública Verifik
**API path(s):** /v2/br/cedula

## 8. Vehículo Brasileño

**Ubicación en la colección:** v2 › br › vehicle › Vehículo Brasileño

**Qué hace (resumen):**

La API de Verificación de Vehículo Brasileño permite verificar la autenticidad de la información de un vehículo brasileño al proporcionar el número de placa del vehículo. La API devuelve información detallada sobre el vehículo, incluyendo la marca, modelo, año de fabricación, motor, transmisión, tipo de combustible y más.

Esta API es útil para concesionarios de automóviles, compañías de seguros y cualquier empresa o individuo que desee verificar la información de un vehículo brasileño.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/br/vehicle?plate=PZY7H82
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| plate | PZY7H82 | (Requerido) Placa del vehículo, sin espacios. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/br/vehicle?plate=PZY7H82" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{
  "data": {
    "bodyType": "AU - HATCH PEQUENO",
    "brand": "HYUNDAI",
    "chassis": "9BHBG51CAJP791679",
    "color": "BRANCA",
    "country": "Brasil",
    "denatranWarning": "",
    "doors": "0",
    "engine": "998",
    "factory": "NACIONAL",
    "fipeCodes": [],
    "fuelType": "ALCOOL / GASOLINA",
    "irregularitiesCount": 0,
    "irregularityCode": "",
    "manufacturer": "HYUNDAI",
    "model": "HYUNDAI/HB20 1.0M COMFOR",
    "modelYear": "2018",
    "plate": "PZY7H82",
    "transmission": "",
    "vehicle": "AUTOMOVEL",
    "version": "HB20",
    "yearOfManufacture": "2017"
  },
  "signature": {
    "dateTime": "June 30, 2026 3:10 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "0ZNLG"
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

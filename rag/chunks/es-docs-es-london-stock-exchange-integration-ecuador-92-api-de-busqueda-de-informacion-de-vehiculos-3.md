---
id: "es-docs-es-london-stock-exchange-integration-ecuador-92-api-de-busqueda-de-informacion-de-vehiculos-3"
title: "Ecuador — API pública Verifik — 92. API de Búsqueda de Información de Vehículos"
sourcePath: "docs-es/london-stock-exchange-integration/ecuador.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "ec"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/ec/cedula?documenttype=ccec&documentnumber=0102260098"
  - "/v2/ec/company?documenttype=rucec&documentnumber=1790008959001"
  - "/v2/ec/vehiculo/placa/multas?plate=abb4568"
  - "/v2/ec/vehiculo/placa?plate=pbb3239"
sourceAnchor: "92. API de Búsqueda de Información de Vehículos"
slug: "/london-stock-exchange-integration/ecuador"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/ecuador"
---

# Ecuador — API pública Verifik
**API path(s):** /v2/ec/cedula?documenttype=ccec&documentnumber=0102260098, /v2/ec/company?documenttype=rucec&documentnumber=1790008959001, /v2/ec/vehiculo/placa/multas?plate=abb4568, /v2/ec/vehiculo/placa?plate=pbb3239

## 92. API de Búsqueda de Información de Vehículos

**Ubicación en la colección:** v2 › ec › vehículo › placa › API de Búsqueda de Información de Vehículos

**Qué hace (resumen):**

Con la API de Búsqueda de Información de Vehículos para Placas de Ecuador, puedes obtener fácilmente información valiosa sobre un vehículo simplemente ingresando su número de placa. Obtén detalles como la marca y modelo del vehículo, su año de fabricación y la fecha de su última matriculación. También podrás conocer cuándo vence la matriculación del vehículo, su estado de servicio y si tiene alguna restricción en su venta. Además, la API puede proporcionar información adicional sobre el cilindraje, color y marca del vehículo.

Esta API es ideal para cualquier persona que esté buscando comprar o vender un automóvil usado en Ecuador, o para empresas que necesiten verificar información de vehículos para sus operaciones.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/ec/vehiculo/placa/multas?plate=ABB4568
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| plate | ABB4568 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/ec/vehiculo/placa/multas?plate=ABB4568" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "ABB4568",

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

---
id: "es-docs-es-validacion-vehiculos-brazil-respuesta-2"
title: "Información de vehículos — Respuesta"
sourcePath: "docs-es/validacion-vehiculos/brazil.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "br"
  - "validacion-vehiculos"
endpoints:
  - "/v2/br/vehicle"
  - "/v2/br/vehicle?plate=pzy7h82"
sourceAnchor: "Respuesta"
slug: "/validacion-vehiculos/brazil"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/brazil"
---

# Información de vehículos
**API path(s):** /v2/br/vehicle, /v2/br/vehicle?plate=pzy7h82

## Respuesta

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
  }
}
```

  
  

```json
{
  "code": "NotFound",
  "message": "Record not found."
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing plate\n"
}
```

  
  

```json
{
  "code": "InternalServerError",
  "message": "Server error."
}
```

### Campos de respuesta

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `bodyType` | string | Tipo de vehículo devuelto por el registro. |
| `brand` | string | Marca del vehículo. |
| `chassis` | string | Chasis o VIN devuelto por el registro. |
| `color` | string | Color registrado del vehículo. |
| `country` | string | País del registro vehicular. |
| `denatranWarning` | string | Estado o aviso Denatran cuando está disponible; a menudo una cadena vacía. |
| `doors` | string | Capacidad de pasajeros del registro; puede ser `"0"` cuando la fuente no la provee. |
| `engine` | string | Cilindraje o referencia de motor del registro. |
| `factory` | string | Origen o región de fabricación. |
| `fipeCodes` | string[] | Códigos FIPE relacionados con el vehículo cuando están disponibles. |
| `fuelType` | string | Tipo de combustible registrado. |
| `irregularitiesCount` | number | Número de restricciones o irregularidades activas encontradas. |
| `irregularityCode` | string | Restricciones activas unidas en un texto; vacío cuando no existen restricciones. |
| `manufacturer` | string | Fabricante devuelto por el registro. |
| `model` | string | Descripción del modelo registrado. |
| `modelYear` | string | Año modelo. |
| `plate` | string | Placa normalizada devuelta por la consulta. |
| `transmission` | string | Transmisión cuando está disponible; los registros obtenidos desde la fuente registral pueden devolver una cadena vacía. |
| `vehicle` | string | Categoría vehicular del registro. |
| `version` | string | Mejor coincidencia de modelo/versión FIPE cuando está disponible. |
| `yearOfManufacture` | string | Año de fabricación. |

---
id: "es-docs-es-vehicle-validation-ecuador-vehicle-by-plate"
title: "🇪🇨 Ecuador - Verificación de Vehículo — Endpoint"
sourcePath: "docs-es/vehicle-validation/ecuador/vehicle-by-plate.mdx"
locale: "es"
category: "vehicle-validation"
tags:
  - "ec"
  - "vehicle-validation"
endpoint: "/v2/ec/vehiculo/placa"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/ecuador/vehicle-by-plate"
url: "https://docs.verifik.co/verifik-es/vehicle-validation/ecuador/vehicle-by-plate"
---

# 🇪🇨 Ecuador - Verificación de Vehículo
**API path(s):** /v2/ec/vehiculo/placa

## Endpoint

Este servicio devuelve información de un vehículo registrado en Ecuador a partir de la placa (**`plate`**): marca, modelo, año, tipo y campos de registro (según disponibilidad de la fuente).

### Endpoint

```
GET https://api.verifik.co/v2/ec/vehiculo/placa
```

Consulta un vehículo ecuatoriano por **`plate`** (sin espacios ni puntos). Útil para **verificación**, **seguros**, **flotas** y **cumplimiento**.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `plate` | string | **Sí** | Placa a consultar, sin espacios ni puntos. | `PBB3239` |

### Solicitud

  

```javascript

const { data } = await axios.get('https://api.verifik.co/v2/ec/vehiculo/placa', {
  params: { plate: 'PBB3239' },
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer ',
  },
});
console.log(data);
```

### Respuesta

  

```json
{
  "data": {
    "plate": "PBB3239",
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

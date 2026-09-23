---
id: "es-docs-es-validacion-vehiculos-argentina-vehicle-v3-endpoint"
title: "🇦🇷 Argentina - Vehículo v3 — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/argentina/vehicle-v3.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "ar"
  - "validacion-vehiculos"
sourceAnchor: "Endpoint"
slug: "/validacion-vehiculos/argentina/vehicle-v3"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/argentina/vehicle-v3"
---

# 🇦🇷 Argentina - Vehículo v3

## Endpoint

### Endpoint

```
GET https://api.verifik.co/v3/ar/vehicle
```

Utiliza este endpoint para obtener los detalles de un vehículo argentino a partir de la placa. La respuesta incluye identificadores normalizados como número de motor, chasis, marca, modelo, año, color, tipo de unidad, estado de póliza activa y campos de ficha técnica cuando estén disponibles.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| ---- | ---- | -------- | ----------- |
| `plate` | string | **Yes** | Formato Mercosur `AA-123-BB` (envíe `AA123BB`, sin espacios ni signos de puntuación). |

### Solicitud

  

```javascript

const { data } = await axios.get('https://api.verifik.co/v3/ar/vehicle', {
  params: { plate: 'AA123BB' },
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
});

console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v3/ar/vehicle"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "AA123BB"}
response = requests.get(url, headers=headers, params=params)
print(response.json())
```

### Respuesta

  

```json
{
  "data": {
    "brand": "TOYOTA",
    "chassis": "AR10000001CH",
    "color": "BLANCO",
    "engineNumber": "AR10000001M",
    "isActivePolicyFound": false,
    "model": "COROLLA 2020",
    "modelGroup": "COROLLA",
    "plate": "AA123BB",
    "technicalSheet": {
      "engine": {
        "engineDescription": "1.6L",
        "fuel": "NAFTA",
        "powerHp": "110"
      },
      "performance": {
        "cityConsumption": "10 km/L",
        "highwayConsumption": "14 km/L"
      },
      "dimensions": {
        "doors": "4",
        "occupants": "5"
      }
    },
    "type": "AUTOMOVIL",
    "year": "2020"
  },
  "signature": {
    "dateTime": "July 1, 2026 10:00 AM",
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

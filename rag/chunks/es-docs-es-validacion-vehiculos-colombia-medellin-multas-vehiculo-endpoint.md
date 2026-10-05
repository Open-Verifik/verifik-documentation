---
id: "es-docs-es-validacion-vehiculos-colombia-medellin-multas-vehiculo-endpoint"
title: "Medellín - Multas de tránsito — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/colombia/medellin-multas-vehiculo.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/medellin/vehicle/fines"
sourceAnchor: "Endpoint"
slug: "/validacion-vehiculos/colombia/medellin-multas-vehiculo"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/medellin-multas-vehiculo"
---

# Medellín - Multas de tránsito
**API path(s):** /v2/co/medellin/vehicle/fines

## Endpoint

```
https://api.verifik.co/v2/co/medellin/vehicle/fines
```

El servicio de **Multas de tránsito en Medellín** devuelve **multas y comparendos locales** para una placa en **Medellín, Colombia**, incluyendo filas de infracciones, montos e infractores cuando estén disponibles. Úselo para **cumplimiento municipal**, **gestión de flotas** y **debida diligencia** vehicular en Medellín.

Campos habituales: **`plate`**, **`informacionComparendo`**, **`valorTotalAdeudado`** y arrays relacionados.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `plate` | string | Yes | Placa (5–8 caracteres), sin espacios ni puntos. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/medellin/vehicle/fines", {
  params: { plate: "ABC10001" },
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/medellin/vehicle/fines"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "ABC10001"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
  "data": {
    "plate": "ABC10001",
    "informacionComparendo": [
      {
        "numeroComparendo": "MDL202400000001",
        "placa": "ABC10001",
        "fecha": "15/01/2024",
        "valor": 180000,
        "estado": "Pendiente",
        "codigoInfraccion": "C29",
        "descripcionInfraccion": "Transitar en sitios prohibidos."
      }
    ],
    "valorTotalAdeudado": 180000,
    "valorTotalPago": 0
  },
  "signature": {
    "dateTime": "January 16, 2024 3:44 PM",
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
  "message": "\"plate\" is required"
}
```

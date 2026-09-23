---
id: "es-docs-es-validacion-vehiculos-estados-unidos-vin"
title: "🇺🇸 Estados Unidos - Vehículo por VIN — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/estados-unidos-vin.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "usa"
  - "validacion-vehiculos"
endpoint: "/v2/usa/vehicle-by-vin"
sourceAnchor: "Endpoint"
slug: "/validacion-vehiculos/estados-unidos-vin"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/estados-unidos-vin"
---

# 🇺🇸 Estados Unidos - Vehículo por VIN
**API path(s):** /v2/usa/vehicle-by-vin

## Endpoint

Este servicio decodifica un **VIN de 17 caracteres** para vehículos del mercado estadounidense y devuelve atributos estructurados (marca, modelo, año, motor, clase de carrocería y campos relacionados) a partir de datos tipo NHTSA VPIC.

### Endpoint

```
GET https://api.verifik.co/v2/usa/vehicle-by-vin
```

Decodifica por **VIN** con el parámetro `vin` (exactamente 17 caracteres).

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `vin` | string | **Sí** | VIN de 17 caracteres (letras y números, sin espacios). | `1G3AK47A7CM535209` |

### Solicitud

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/usa/vehicle-by-vin',
  params: {
    vin: '1G3AK47A7CM535209'
  },
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Bearer '
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

  
  

```python

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ''
headers = {}
conn.request("GET", "/v2/usa/vehicle-by-vin?vin=1G3AK47A7CM535209", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

### Respuesta

  

```json
{
  "data": {
    "make": "OLDSMOBILE",
    "model": "Cutlass",
    "modelYear": "1982",
    "vehicleType": "PASSENGER CAR",
    "vin": "1G3AK47A7CM535209"
  },
  "signature": {
    "dateTime": "October 10, 2025 7:10 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "KFOFL"
}
```

  
  

```json
{
    "code": "NotFound",
    "message": "Record not found."
}
```
